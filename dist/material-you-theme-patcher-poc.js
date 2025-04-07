(()=>{var t={278:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var o=e(601),i=e.n(o),r=e(314),a=e.n(r)()(i());a.push([t.id,"/* Fix add card button position  */\n:host {\n\tbottom: calc(var(--footer-height) + 16px) !important;\n\tz-index: 3 !important;\n}\n\n/* Decrease border radius and increase height */\n.mdc-fab {\n\theight: 56px !important;\n\tborder-radius: 12px !important;\n}\n.ripple {\n\tborder-radius: 12px !important;\n}\n\n/* Remove all caps */\n.mdc-fab__label {\n\ttext-transform: none !important;\n\tfont-size: 11pt;\n}\n",""]);const c=a},249:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var o=e(601),i=e.n(o),r=e(314),a=e.n(r)()(i());a.push([t.id,"/* Make sidebar width an even number */\nha-sidebar {\n\twidth: 56px;\n}\n\n/* Animate background when expanding/retracting sidebar */\npaper-icon-item {\n\ttransition: width 0.2s cubic-bezier(0.2, 0, 0, 1);\n\theight: 48px;\n\tmargin: 0 4px !important;\n\tpadding: 0 12px !important;\n}\n\n/* Display current destination text above background and prevent jumpiness on opening*/\n.item-text {\n\tz-index: 2;\n\toverflow: hidden;\n\twhite-space: nowrap;\n\tmargin: 0 !important;\n}\nha-icon,\nha-svg-icon {\n\tz-index: 2;\n}\n\n/* Change background of current destination icon with transition */\npaper-icon-item::before {\n\tcontent: '';\n\theight: 48px;\n\twidth: 100% !important;\n\tposition: absolute !important;\n\ttransition: transform 0.2s cubic-bezier(0.2, 0, 0, 1) !important;\n\tleft: 0 !important;\n\tright: 0 !important;\n\tborder-radius: 128px !important;\n\tbackground: var(--sidebar-selected-background) !important;\n\topacity: 1 !important;\n\ttransform: scaleX(0);\n}\n.iron-selected paper-icon-item::before {\n\ttransform: scaleX(1);\n}\n\n/* Destination state layers */\npaper-icon-item::after {\n\tcontent: '';\n\tposition: absolute;\n\theight: 48px;\n\twidth: 100%;\n\tborder-radius: 128px;\n\tleft: 0;\n\tright: 0;\n\tz-index: 0;\n\topacity: 0;\n\tbackground: var(--md-current-tab-text-color);\n\ttransition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1) 0s;\n}\n@media (hover: hover) {\n\tpaper-icon-item:hover::after {\n\t\topacity: 0.08;\n\t}\n}\npaper-icon-item:focus-visible::after,\npaper-icon-item:active::after {\n\topacity: 0.1;\n}\n:host([expanded]) paper-icon-item:active::after {\n\tbackground: var(--sidebar-state-pressed-background);\n}\n\n/* Current destination font weight */\n.iron-selected .item-text {\n\tfont-weight: 700;\n}\n\n/* Use error colors on rail badges */\n.configuration-badge,\n.notification-badge {\n\tcolor: var(--on-error-color) !important;\n\tbackground-color: var(--error-color) !important;\n\tfont-weight: 500 !important;\n}\n\n/* Use sidebar text color with no background on drawer badges */\n:host([expanded]) .configuration-badge,\n:host([expanded]) .notification-badge {\n\tcolor: var(--sidebar-text-color) !important;\n\tbackground-color: rgb(0, 0, 0, 0) !important;\n}\n:host([expanded]) .iron-selected .configuration-badge,\n:host([expanded]) .iron-selected .notification-badge {\n\tcolor: var(--sidebar-selected-text-color) !important;\n}\n\n/* Fix rail sidebar badge position */\n:host(:not([expanded])) .configuration-badge,\n:host(:not([expanded])) .notification-badge {\n\tbottom: 24px !important;\n\tz-index: 2;\n}\n",""]);const c=a},150:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var o=e(601),i=e.n(o),r=e(314),a=e.n(r)()(i());a.push([t.id,"/** Set Material Design 3 slider variables that should only apply to redesigned sliders */\n:host {\n\t--md-slider-handle-height: 44px !important;\n\t--md-slider-handle-width: 16px !important;\n\t--md-slider-handle-shape: 4px;\n}\n\n/** Add border to each side of slider */\n.handleNub::after {\n\tcontent: '';\n\tposition: absolute;\n\tinset: 0;\n\twidth: 4px;\n\theight: 100%;\n\tmargin: auto;\n\tbackground: var(--md-sys-color-primary);\n\tborder-radius: 2px;\n\tscale: 1 1;\n}\n\n/** Reduce handle width on active or focus */\n.handleNub {\n\ttransition: scale 0.2s cubic-bezier(0.2, 0, 0, 1);\n}\ninput:focus-visible ~ .handleContainerPadded .handleNub,\ninput:active ~ .handleContainerPadded .handleNub {\n\tscale: 0.5 1;\n}\n\n/** Hide focus ring */\nmd-focus-ring {\n\tdisplay: none;\n}\n\n/** Set label width and position */\n.label {\n\twidth: var(--md-slider-label-container-width);\n\tbottom: 38px !important;\n}\n\n/** Remove teardrop from label */\n.label::before {\n\tdisplay: none !important;\n}\n\n/** Change label to appear on active instead of on hover or focus */\n.hover .label,\n:host(:focus-within) .label {\n\ttransform: scale(0) !important;\n}\ninput:focus-visible ~ .handleContainerPadded .label,\ninput:active ~ .handleContainerPadded .label {\n\ttransform: scale(1) !important;\n}\n",""]);const c=a},709:(t,n,e)=>{"use strict";e.r(n),e.d(n,{default:()=>c});var o=e(601),i=e.n(o),r=e(314),a=e.n(r)()(i());a.push([t.id,"/* Material 3 colors and adjust padding to match footprint of old switch  */\n:host {\n\tpadding: 0 !important;\n\tposition: relative;\n\ttop: 3px;\n\t--switch-checked-button-color: var(--md-switch-checked-button-color);\n\t--switch-unchecked-button-color: var(--md-switch-unchecked-button-color);\n\t--switch-checked-track-color: var(--md-switch-checked-track-color);\n\t--switch-unchecked-track-color: var(--md-switch-unchecked-track-color);\n}\n\n/* Increase track size, make always opaque, and border. */\n.mdc-switch__track {\n\theight: 32px !important;\n\twidth: 52px !important;\n\tborder-radius: 32px !important;\n\topacity: 1 !important;\n\tborder: 2px solid var(--switch-unchecked-button-color) !important;\n}\n/* Remove border when on */\n.mdc-switch--checked .mdc-switch__track {\n\tborder: none !important;\n}\n\n/* Fix thumb position */\n.mdc-switch__thumb-underlay {\n\ttop: -8px !important;\n\tleft: -8px !important;\n}\n/* Thumb position when on */\n.mdc-switch--checked .mdc-switch__thumb-underlay {\n\ttransform: translateX(20px) !important;\n}\n\n/* Switch thumb color and size */\n.mdc-switch__thumb {\n\theight: 16px !important;\n\twidth: 16px !important;\n\tbackground: var(--switch-unchecked-button-color) !important;\n\tborder: none !important;\n\tbox-shadow: unset !important;\n\ttransition: scale 0.2s cubic-bezier(0.2, 0, 0, 1) !important;\n}\n/* Switch on thumb color and size */\n.mdc-switch--checked .mdc-switch__thumb {\n\tbackground: var(--switch-checked-button-color) !important;\n\tscale: 1.5;\n}\n\n/* Thumb active size */\n@media (hover: hover) {\n\t.mdc-switch__thumb:hover {\n\t\tscale: 1.75;\n\t}\n}\n.mdc-switch__thumb:has(input:focus-visible),\n.mdc-switch__thumb:active {\n\tscale: 1.75;\n}\n\n/* Remove ripple */\nmwc-ripple {\n\tdisplay: none !important;\n}\n\n/* Track state layers */\n.mdc-switch__track::after {\n\tcontent: '';\n\tposition: absolute;\n\theight: 32px;\n\twidth: 52px;\n\tborder-radius: 32px;\n\tpointer-events: none;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\tbackground: var(--switch-unchecked-track-state-layer);\n\topacity: 0;\n\ttransition: opacity 0.1s cubic-bezier(0.4, 0, 1, 1) 0s;\n}\n.mdc-switch--checked .mdc-switch__track::after {\n\tbackground: var(--switch-checked-track-color);\n}\n@media (hover: hover) {\n\t.mdc-switch:hover .mdc-switch__track::after {\n\t\topacity: 0.08;\n\t}\n}\n.mdc-switch:has(input:focus-visible) .mdc-switch__track::after,\n.mdc-switch:active .mdc-switch__track::after {\n\topacity: 0.1;\n}\n\n/* Thumb state layers */\n@media (hover: hover) {\n\t.mdc-switch:hover .mdc-switch__thumb {\n\t\tbackground: var(--switch-unchecked-button-state-layer) !important;\n\t}\n\t.mdc-switch--checked:hover .mdc-switch__thumb {\n\t\tbackground: var(--switch-checked-button-state-layer) !important;\n\t}\n}\n.mdc-switch:has(input:focus-visible) .mdc-switch__thumb,\n.mdc-switch:active .mdc-switch__thumb {\n\tbackground: var(--switch-unchecked-button-state-layer) !important;\n}\n.mdc-switch--checked:has(input:focus-visible) .mdc-switch__thumb,\n.mdc-switch--checked:active .mdc-switch__thumb {\n\tbackground: var(--switch-checked-button-state-layer) !important;\n}\n\n/* Input element position corrections */\n.mdc-switch__native-control {\n\tposition: relative !important;\n\ttop: -16px !important;\n\tleft: -14px !important;\n\tright: unset !important;\n\tbottom: unset !important;\n\tscale: 1 !important;\n\ttransition: scale 0.2s cubic-bezier(0.2, 0, 0, 1) !important;\n}\n.mdc-switch--checked .mdc-switch__native-control {\n\ttransform: translateX(-20px) !important;\n\tscale: 0.7 !important;\n\ttranslate: -3px !important;\n}\n@media (hover: hover) {\n\t.mdc-switch__thumb:hover .mdc-switch__native-control {\n\t\tscale: 0.56 !important;\n\t\ttranslate: -5px !important;\n\t}\n}\n.mdc-switch__thumb:has(input:focus-visible) .mdc-switch__native-control,\n.mdc-switch__thumb:active .mdc-switch__native-control {\n\tscale: 0.6 !important;\n}\n\n",""]);const c=a},314:t=>{"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,o,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var h=[].concat(t[d]);o&&a[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),e&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=e):h[2]=e),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),n.push(h))}},n}},601:t=>{"use strict";t.exports=function(t){return t[1]}},154:(t,n,e)=>{var o=e(278);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},333:(t,n,e)=>{var o=e(249);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},778:(t,n,e)=>{var o=e(150);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},393:(t,n,e)=>{var o=e(709);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return t[o](r,r.exports,e),r.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";var t=e(154),n=e.n(t),o=e(333),i=e.n(o),r=e(778),a=e.n(r),c=e(393);const s={"ha-switch":e.n(c)().toString(),"ha-sidebar":i().toString(),"ha-slider":a().toString(),"ha-fab":n().toString()};for(const[t,n]of Object.entries(s))customElements.whenDefined(t).then((t=>{const e=t.prototype.firstUpdated;t.prototype.firstUpdated=function(){e?.call(this);const t=document.createElement("style");t.textContent=n,this.shadowRoot.appendChild(t)}}))})()})();