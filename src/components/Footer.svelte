<script>
	import MdiFacebook from 'svelte-material-icons/Facebook.svelte';
	import MdiTwitter from 'svelte-material-icons/Twitter.svelte';
	import MdiGithub from 'svelte-material-icons/Github.svelte';
	import MdiDiscord from 'svelte-material-icons/Discord.svelte';

	const icons = [
		{
			description: 'Facebook page',
			icon: MdiFacebook
		},
		{
			description: 'Discord community',
			icon: MdiDiscord
		},
		{
			description: 'Twitter page',
			icon: MdiTwitter
		},
		{
			description: 'GitHub account',
			icon: MdiGithub
		}
	];

	const companyItems = [
		{
			id: 1,
			name: 'About',
			link: '/about'
		},
		{
			id: 2,
			name: 'Careers',
			link: '/careers'
		},
		{
			id: 3,
			name: 'Brand Center',
			link: '/brand'
		},
		{
			id: 4,
			name: 'Blog',
			link: '/blog'
		}
	];
	const helpCenterItems = [
		{
			id: 5,
			name: 'Discord Server',
			link: '/discord-server'
		},
		{
			id: 6,
			name: 'Twitter',
			link: '/twitter'
		},
		{
			id: 7,
			name: 'Facebook',
			link: '/facebook'
		},
		{
			id: 8,
			name: 'Contact Us',
			link: '/contact'
		}
	];
	const legalItems = [
		{
			id: 9,
			name: 'Privacy Policy',
			link: '/privacy'
		},
		{
			id: 10,
			name: 'Licensing',
			link: '/license'
		},
		{
			id: 11,
			name: 'Terms & Conditions',
			link: '/terms-conditions'
		}
	];
</script>

<footer class="mt-2 w-full border-t">
	<div class="mx-auto w-full">
		<div class="grid grid-cols-3 gap-4 px-4 py-6 md:grid-cols-3 lg:py-8">
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Company</h2>
				<ul class="font-medium text-gray-500 dark:text-gray-400">
					{#each companyItems as cI}
						<li class="mb-4">
							<a href={cI.link} class=" hover:underline">{cI.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
					Help center
				</h2>
				<ul class="font-medium text-gray-500 dark:text-gray-400">
					{#each helpCenterItems as hCI}
						<li class="mb-4">
							<a href={hCI.link} class="hover:underline">{hCI.name}</a>
						</li>
					{/each}
				</ul>
			</div>
			<div>
				<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
				<ul class="font-medium text-gray-500 dark:text-gray-400">
					{#each legalItems as lI}
						<li class="mb-4">
							<a href={lI.link} class="hover:underline">{lI.name}</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="bg-gray-100 px-4 py-6 dark:bg-gray-700 md:flex md:items-center md:justify-between">
			<span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center"
				>© 2024. All Rights Reserved.
			</span>
			<div class="mt-4 flex space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
				{#each icons as { icon: IconComponent, description }}
					<button class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
						<IconComponent />
						<span class="sr-only">{description}</span>
					</button>
				{/each}
			</div>
		</div>
	</div>
</footer>
