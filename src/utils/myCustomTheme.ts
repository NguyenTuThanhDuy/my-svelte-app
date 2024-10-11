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
		'--theme-border-base': '2px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '255 255 255',
		'--on-secondary': '0 0 0',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '0 0 0',
		// =~= Theme Colors  =~=
		// primary | #832afd
		'--color-primary-50': '236 223 255', // #ecdfff
		'--color-primary-100': '230 212 255', // #e6d4ff
		'--color-primary-200': '224 202 255', // #e0caff
		'--color-primary-300': '205 170 254', // #cdaafe
		'--color-primary-400': '168 106 254', // #a86afe
		'--color-primary-500': '131 42 253', // #832afd
		'--color-primary-600': '118 38 228', // #7626e4
		'--color-primary-700': '98 32 190', // #6220be
		'--color-primary-800': '79 25 152', // #4f1998
		'--color-primary-900': '64 21 124', // #40157c
		// secondary | #58f8ea
		'--color-secondary-50': '230 254 252', // #e6fefc
		'--color-secondary-100': '222 254 251', // #defefb
		'--color-secondary-200': '213 253 250', // #d5fdfa
		'--color-secondary-300': '188 252 247', // #bcfcf7
		'--color-secondary-400': '138 250 240', // #8afaf0
		'--color-secondary-500': '88 248 234', // #58f8ea
		'--color-secondary-600': '79 223 211', // #4fdfd3
		'--color-secondary-700': '66 186 176', // #42bab0
		'--color-secondary-800': '53 149 140', // #35958c
		'--color-secondary-900': '43 122 115', // #2b7a73
		// tertiary | #715708
		'--color-tertiary-50': '234 230 218', // #eae6da
		'--color-tertiary-100': '227 221 206', // #e3ddce
		'--color-tertiary-200': '220 213 193', // #dcd5c1
		'--color-tertiary-300': '198 188 156', // #c6bc9c
		'--color-tertiary-400': '156 137 82', // #9c8952
		'--color-tertiary-500': '113 87 8', // #715708
		'--color-tertiary-600': '102 78 7', // #664e07
		'--color-tertiary-700': '85 65 6', // #554106
		'--color-tertiary-800': '68 52 5', // #443405
		'--color-tertiary-900': '55 43 4', // #372b04
		// success | #dd8b6f
		'--color-success-50': '250 238 233', // #faeee9
		'--color-success-100': '248 232 226', // #f8e8e2
		'--color-success-200': '247 226 219', // #f7e2db
		'--color-success-300': '241 209 197', // #f1d1c5
		'--color-success-400': '231 174 154', // #e7ae9a
		'--color-success-500': '221 139 111', // #dd8b6f
		'--color-success-600': '199 125 100', // #c77d64
		'--color-success-700': '166 104 83', // #a66853
		'--color-success-800': '133 83 67', // #855343
		'--color-success-900': '108 68 54', // #6c4436
		// warning | #33d64f
		'--color-warning-50': '224 249 229', // #e0f9e5
		'--color-warning-100': '214 247 220', // #d6f7dc
		'--color-warning-200': '204 245 211', // #ccf5d3
		'--color-warning-300': '173 239 185', // #adefb9
		'--color-warning-400': '112 226 132', // #70e284
		'--color-warning-500': '51 214 79', // #33d64f
		'--color-warning-600': '46 193 71', // #2ec147
		'--color-warning-700': '38 161 59', // #26a13b
		'--color-warning-800': '31 128 47', // #1f802f
		'--color-warning-900': '25 105 39', // #196927
		// error | #36f745
		'--color-error-50': '225 254 227', // #e1fee3
		'--color-error-100': '215 253 218', // #d7fdda
		'--color-error-200': '205 253 209', // #cdfdd1
		'--color-error-300': '175 252 181', // #affcb5
		'--color-error-400': '114 249 125', // #72f97d
		'--color-error-500': '54 247 69', // #36f745
		'--color-error-600': '49 222 62', // #31de3e
		'--color-error-700': '41 185 52', // #29b934
		'--color-error-800': '32 148 41', // #209429
		'--color-error-900': '26 121 34', // #1a7922
		// surface | #d79588
		'--color-surface-50': '249 239 237', // #f9efed
		'--color-surface-100': '247 234 231', // #f7eae7
		'--color-surface-200': '245 229 225', // #f5e5e1
		'--color-surface-300': '239 213 207', // #efd5cf
		'--color-surface-400': '227 181 172', // #e3b5ac
		'--color-surface-500': '215 149 136', // #d79588
		'--color-surface-600': '194 134 122', // #c2867a
		'--color-surface-700': '161 112 102', // #a17066
		'--color-surface-800': '129 89 82', // #815952
		'--color-surface-900': '105 73 67' // #694943
	}
};
