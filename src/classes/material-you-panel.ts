import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';
import packageInfo from '../../package.json';
import {
	DEFAULT_BASE_COLOR,
	DEFAULT_BASE_COLOR_SENSOR,
	DEFAULT_CONTRAST_LEVEL,
	DEFAULT_CONTRAST_LEVEL_SENSOR,
	DEFAULT_SCHEME_NAME,
	DEFAULT_SCHEME_NAME_SENSOR,
	schemes,
} from '../models/constants/colors';
import { HomeAssistant } from '../models/interfaces';
import { IUserPanelSettings } from '../models/interfaces/Panel';

import {
	argbFromHex,
	argbFromRgb,
	blueFromArgb,
	greenFromArgb,
	hexFromArgb,
	redFromArgb,
} from '@material/material-color-utilities';

export class MaterialYouPanel extends LitElement {
	@property() hass!: HomeAssistant;
	@property() narrow!: boolean;
	@property() route!: object;
	@property() panel!: object;

	currentUserSettings!: IUserPanelSettings;
	globalSettings!: IUserPanelSettings;
	otherUserSettings: Record<string, IUserPanelSettings> = {};

	getConfig(userId: string) {
		let config: IUserPanelSettings;
		if (userId) {
			if (userId == this.hass.user?.id) {
				config = this.currentUserSettings;
			} else {
				config = this.otherUserSettings[userId];
			}
		} else {
			config = this.globalSettings;
		}
		return config;
	}

	handleSelectorChange(e: CustomEvent) {
		const [userId, key] = (e.target as HTMLElement).id.split('|');
		const config = this.getConfig(userId);
		let value = e.detail.value;

		switch (key) {
			case 'base_color':
				value = hexFromArgb(argbFromRgb(value[0], value[1], value[2]));
				break;
			case 'scheme':
			case 'contrast':
			default:
				break;
		}

		this.hass.callApi(
			'POST',
			`states/sensor.material_you_${key}${userId ? `_${userId}` : ''}`,
			{ state: value },
		);
	}

	buildSelector(
		label: string,
		key: 'base_color' | 'scheme' | 'contrast',
		userId: string,
		selector: object,
		placeholder?: string | number | boolean | object,
	) {
		const config = this.getConfig(userId);
		let value: string | number | number[];
		switch (key) {
			case 'base_color':
				const argb = argbFromHex(config.settings[key] as string);
				value = [
					redFromArgb(argb),
					greenFromArgb(argb),
					blueFromArgb(argb),
				];
				break;
			case 'scheme':
			case 'contrast':
			default:
				value = config.settings[key];
				break;
		}

		return html`<ha-selector
			.hass=${this.hass}
			.name="${label}"
			.selector=${selector}
			.value=${value ?? placeholder}
			.label="${label}"
			.placeholder=${placeholder}
			.required=${false}
			id="${`${userId}|${key}`}"
			@value-changed=${this.handleSelectorChange}
		></ha-selector>`;
	}

	buildSettingsDatum(userId?: string) {
		return {
			base_color:
				this.hass.states[
					`${DEFAULT_BASE_COLOR_SENSOR}${userId ? `_${userId}` : ''}`
				]?.state || DEFAULT_BASE_COLOR,
			scheme:
				this.hass.states[
					`${DEFAULT_SCHEME_NAME_SENSOR}${userId ? `_${userId}` : ''}`
				]?.state || DEFAULT_SCHEME_NAME,
			contrast: isNaN(
				parseFloat(
					this.hass.states[
						`${DEFAULT_CONTRAST_LEVEL_SENSOR}${userId ? `_${userId}` : ''}`
					]?.state,
				),
			)
				? DEFAULT_CONTRAST_LEVEL
				: parseFloat(
						this.hass.states[
							`${DEFAULT_CONTRAST_LEVEL_SENSOR}${userId ? `_${userId}` : ''}`
						]?.state,
					),
		};
	}

	buildSettingsData() {
		// People information
		const people = Object.keys(this.hass.states).filter((entity) =>
			entity.startsWith('person.'),
		);

		// Current user
		const currentUserId = this.hass.user?.id ?? '';
		this.currentUserSettings = {
			stateObj:
				this.hass.states[
					people.filter(
						(person) =>
							this.hass.states[person].attributes.user_id ==
							currentUserId,
					)[0]
				],
			settings: this.buildSettingsDatum(currentUserId),
		};

		// If admin, add global and all user settings
		if (this.hass.user?.is_admin) {
			this.globalSettings = { settings: this.buildSettingsDatum() };

			for (const person of people) {
				const userId = this.hass.states[person].attributes.user_id;
				if (userId != currentUserId) {
					this.otherUserSettings[userId] = {
						stateObj: this.hass.states[person],
						settings: this.buildSettingsDatum(userId),
					};
				}
			}
		}
	}

	buildHeader() {
		return html`<div class="header">
			<ha-menu-button
				slot="navigationIcon"
				.hass=${this.hass}
				.narrow=${this.narrow}
			></ha-menu-button>
			<div class="title">Material You Theme</div>
			<div class="secondary">v${packageInfo.version}</div>
		</div>`;
	}

	buildSettingsCard(settings: IUserPanelSettings) {
		const userId = settings.stateObj?.attributes.user_id;
		let title = 'Global';
		if (settings.stateObj) {
			title = settings.stateObj.attributes.friendly_name ?? '';
		}

		return html`
			<ha-card .hass=${this.hass} .header=${title}>
				${settings.stateObj
					? html`<div class="secondary subtitle">ID: ${userId}</div>`
					: ''}
				<div class="card-content">
					<div class="base-color">
						${this.buildSelector(
							'Base Color',
							'base_color',
							userId,
							{
								color_rgb: {},
							},
							settings.settings.base_color || DEFAULT_BASE_COLOR,
						)}
					</div>
					<div class="scheme-name">
						${this.buildSelector(
							'Scheme Name',
							'scheme',
							userId,
							{
								select: {
									mode: 'dropdown',
									options: schemes,
								},
							},
							settings.settings.scheme || DEFAULT_SCHEME_NAME,
						)}
					</div>
					<div class="contrast-level">
						${this.buildSelector(
							'Contrast Level',
							'contrast',
							userId,
							{
								number: {
									min: -1,
									max: 1,
									step: 0.1,
									mode: 'slider',
									slider_ticks: true,
								},
							},
							isNaN(
								parseFloat(String(settings.settings.contrast)),
							)
								? DEFAULT_CONTRAST_LEVEL
								: settings.settings.contrast,
						)}
					</div>
				</div>
			</ha-card>
		`;
	}

	render() {
		this.buildSettingsData();
		return html`
			${this.buildHeader()}
			<div class="content">
				${this.buildSettingsCard(this.currentUserSettings)}
				${this.hass.user?.is_admin
					? html`
							${this.buildSettingsCard(this.globalSettings)}
							${Object.keys(this.otherUserSettings).map(
								(userId) =>
									this.buildSettingsCard(
										this.otherUserSettings[userId],
									),
							)}
						`
					: ''}
			</div>
		`;
	}

	static get styles() {
		return css`
			:host {
				font-family: var(--font-family);
			}

			.header {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				padding: 0 12px;
				height: 64px;
			}
			.title {
				font-size: 20px;
				lint-height: var(--mdc-typography-headline6-line-height, 2rem);
				font-weight: var(--mdc-typography-headline6-font-weight, 500);
				letter-spacing: var(
					--mdc-typography-headline6-letter-spacing,
					0.0125em
				);
				text-transform: var(
					--mdc-typography-headline6-text-transform,
					inherit
				);
				white-space: nowrap;
			}
			.secondary {
				color: var(--secondary-text-color);
				font-size: 14px;
				font-weight: 400;
			}

			.content {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 24px;
			}
			ha-card {
				width: min(600px, 100%);
			}
			.card-content {
				display: flex;
				flex-direction: column;
				gap: 24px;
				padding: 0 16px 16px;
			}
			.subtitle {
				margin-top: -24px;
				padding: 0 16px 16px;
			}
			.base-color {
			}
			.scheme-name {
				margin: 0 4px;
			}
			.contrast-level {
				margin: 0 4px;
			}
		`;
	}
}
