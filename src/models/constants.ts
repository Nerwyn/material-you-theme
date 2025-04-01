import { MaterialDynamicColors } from '@material/material-color-utilities';

export const colors: (keyof typeof MaterialDynamicColors)[] = [
	'primary',
	'onPrimary',
	'primaryContainer',
	'onPrimaryContainer',
	'primaryPaletteKeyColor',
	'inversePrimary',
	'primaryFixed',
	'primaryFixedDim',
	'onPrimaryFixed',
	'onPrimaryFixedVariant',
	'secondary',
	'onSecondary',
	'secondaryContainer',
	'onSecondaryContainer',
	'secondaryPaletteKeyColor',
	'secondaryFixed',
	'secondaryFixedDim',
	'onSecondaryFixed',
	'onSecondaryFixedVariant',
	'tertiary',
	'onTertiary',
	'tertiaryContainer',
	'onTertiaryContainer',
	'tertiaryPaletteKeyColor',
	'tertiaryFixed',
	'tertiaryFixedDim',
	'onTertiaryFixed',
	'onTertiaryFixedVariant',
	'neutralPaletteKeyColor',
	'neutralVariantPaletteKeyColor',
	'error',
	'onError',
	'errorContainer',
	'onErrorContainer',
	'surface',
	'onSurface',
	'surfaceVariant',
	'onSurfaceVariant',
	'surfaceDim',
	'surfaceBright',
	'surfaceContainerLowest',
	'surfaceContainerLow',
	'surfaceContainer',
	'surfaceContainerHigh',
	'surfaceContainerHighest',
	'inverseSurface',
	'inverseOnSurface',
	'surfaceTint',
	'outline',
	'outlineVariant',
	'shadow',
	'scrim',
];

export const logStyles = (
	color: string = '#ffffff',
	background: string = '#4c5c92',
) =>
	`color: ${color}; background: ${background}; font-weight: bold; border-radius: 32px; padding: 0 2px;`;
