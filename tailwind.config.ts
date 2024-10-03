import { join } from 'path';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

// 1. Import the Skeleton plugin
import { skeleton } from '@skeletonlabs/tw-plugin';

import { myCustomTheme } from './src/utils/myCustomTheme';
const config = {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				primary: '#fea928',
				secondary: {
					DEFAULT: colors.neutral[200],
					hover: colors.neutral[300],
					border: colors.neutral[400],
					text: colors.neutral[500],
					dark: colors.neutral[800],
					['dark-hover']: colors.neutral[900]
				}
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '3rem'
				}
			}
		}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		skeleton({
			themes: {
				preset: ['skeleton', 'modern', 'crimson'],
				custom: [myCustomTheme]
			}
		})
	],
	variants: {
		extend: {
			backgroundColor: ['hover', 'active', 'dark', 'disabled'],
			borderColor: ['hover', 'active', 'dark', 'disabled'],
			textColor: ['disabled'],
			ringColor: ['focus', 'dark'],
			opacity: ['disabled'],
			cursor: ['disabled']
		}
	}
} satisfies Config;

export default config;
