import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '0 0 0',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #8f72f8
		'--color-primary-50': '238 234 254', // #eeeafe
		'--color-primary-100': '233 227 254', // #e9e3fe
		'--color-primary-200': '227 220 253', // #e3dcfd
		'--color-primary-300': '210 199 252', // #d2c7fc
		'--color-primary-400': '177 156 250', // #b19cfa
		'--color-primary-500': '143 114 248', // #8f72f8
		'--color-primary-600': '129 103 223', // #8167df
		'--color-primary-700': '107 86 186', // #6b56ba
		'--color-primary-800': '86 68 149', // #564495
		'--color-primary-900': '70 56 122', // #46387a
		// secondary | #b3fbbd
		'--color-secondary-50': '244 254 245', // #f4fef5
		'--color-secondary-100': '240 254 242', // #f0fef2
		'--color-secondary-200': '236 254 239', // #ecfeef
		'--color-secondary-300': '225 253 229', // #e1fde5
		'--color-secondary-400': '202 252 209', // #cafcd1
		'--color-secondary-500': '179 251 189', // #b3fbbd
		'--color-secondary-600': '161 226 170', // #a1e2aa
		'--color-secondary-700': '134 188 142', // #86bc8e
		'--color-secondary-800': '107 151 113', // #6b9771
		'--color-secondary-900': '88 123 93', // #587b5d
		// tertiary | #0ab05a
		'--color-tertiary-50': '218 243 230', // #daf3e6
		'--color-tertiary-100': '206 239 222', // #ceefde
		'--color-tertiary-200': '194 235 214', // #c2ebd6
		'--color-tertiary-300': '157 223 189', // #9ddfbd
		'--color-tertiary-400': '84 200 140', // #54c88c
		'--color-tertiary-500': '10 176 90', // #0ab05a
		'--color-tertiary-600': '9 158 81', // #099e51
		'--color-tertiary-700': '8 132 68', // #088444
		'--color-tertiary-800': '6 106 54', // #066a36
		'--color-tertiary-900': '5 86 44', // #05562c
		// success | #f5531f
		'--color-success-50': '254 229 221', // #fee5dd
		'--color-success-100': '253 221 210', // #fdddd2
		'--color-success-200': '253 212 199', // #fdd4c7
		'--color-success-300': '251 186 165', // #fbbaa5
		'--color-success-400': '248 135 98', // #f88762
		'--color-success-500': '245 83 31', // #f5531f
		'--color-success-600': '221 75 28', // #dd4b1c
		'--color-success-700': '184 62 23', // #b83e17
		'--color-success-800': '147 50 19', // #933213
		'--color-success-900': '120 41 15', // #78290f
		// warning | #e95eb3
		'--color-warning-50': '252 231 244', // #fce7f4
		'--color-warning-100': '251 223 240', // #fbdff0
		'--color-warning-200': '250 215 236', // #fad7ec
		'--color-warning-300': '246 191 225', // #f6bfe1
		'--color-warning-400': '240 142 202', // #f08eca
		'--color-warning-500': '233 94 179', // #e95eb3
		'--color-warning-600': '210 85 161', // #d255a1
		'--color-warning-700': '175 71 134', // #af4786
		'--color-warning-800': '140 56 107', // #8c386b
		'--color-warning-900': '114 46 88', // #722e58
		// error | #912046
		'--color-error-50': '239 222 227', // #efdee3
		'--color-error-100': '233 210 218', // #e9d2da
		'--color-error-200': '228 199 209', // #e4c7d1
		'--color-error-300': '211 166 181', // #d3a6b5
		'--color-error-400': '178 99 126', // #b2637e
		'--color-error-500': '145 32 70', // #912046
		'--color-error-600': '131 29 63', // #831d3f
		'--color-error-700': '109 24 53', // #6d1835
		'--color-error-800': '87 19 42', // #57132a
		'--color-error-900': '71 16 34', // #471022
		// surface | #5d059f
		'--color-surface-50': '231 218 241', // #e7daf1
		'--color-surface-100': '223 205 236', // #dfcdec
		'--color-surface-200': '215 193 231', // #d7c1e7
		'--color-surface-300': '190 155 217', // #be9bd9
		'--color-surface-400': '142 80 188', // #8e50bc
		'--color-surface-500': '93 5 159', // #5d059f
		'--color-surface-600': '84 5 143', // #54058f
		'--color-surface-700': '70 4 119', // #460477
		'--color-surface-800': '56 3 95', // #38035f
		'--color-surface-900': '46 2 78' // #2e024e
	}
};
