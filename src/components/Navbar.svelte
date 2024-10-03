<script>
	import { page } from '$app/stores';
	import { AppBar, Avatar, LightSwitch } from '@skeletonlabs/skeleton';

	$: routeId = $page.route.id;

	const items = [
		{
			icon: 'mdi-home',
			title: 'Home',
			value: 'home',
			route: '/'
		},
		{
			icon: 'mdi-account',
			title: 'Login',
			value: 'login',
			route: '/login'
		},
		{
			icon: 'mdi-contacts',
			title: 'Sign Up',
			value: 'signup',
			route: '/signup'
		}
	];
</script>

<AppBar
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
	class="mb-2"
>
	<svelte:fragment slot="lead">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br from-red-500 to-yellow-500 box-decoration-clone bg-clip-text text-transparent"
				>Build.</span
			>
		</h1>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<LightSwitch />
		<ul class="flex list-none items-center space-x-6">
			{#each items as i}
				<li>
					<button type="button" class="variant-filled btn">
						<a href={i.route} class:active={routeId == i.route} data-sveltekit-preload-data="hover">
							{i.title}
						</a>
					</button>
				</li>
			{/each}
		</ul>
		<Avatar
			border="border-4 border-surface-300-600-token hover:!border-primary-500"
			cursor="cursor-pointer"
		/>
	</svelte:fragment>
</AppBar>

<style>
	.active {
		color: red;
	}
</style>
