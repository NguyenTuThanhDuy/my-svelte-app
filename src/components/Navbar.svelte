<script lang="ts">
	import { page } from '$app/stores';
	import { AppBar, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import Icon from '@iconify/svelte';

	import axiosInstance from '$services/axios';
	import useRoutes from '$hooks/routes';
	import { searchQuery } from '$stores/videoSearchQuery';

	$: isLogin = true;

	let inputDemo = '';

	$: routeId = $page.route.id;

	const items = [
		{
			icon: 'mdi-home',
			title: 'Home',
			value: 'home',
			route: '/'
		}
	];

	const authenticationItems = [
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

	const handleSubmit = async () => {
		searchQuery.update(() => inputDemo);
		if (inputDemo.length === 0) {
			return;
		}

		const routes = useRoutes();
		const url = routes.URLs.searchVideosUrl({ title: inputDemo });
		const response = await axiosInstance.get(url);

		if (response.status === 200) {
			return searchQuery;
		} else {
			throw new Error(`Error: ${response.statusText}`);
		}
	};
</script>

<div class="">
	<AppBar gridColumns="grid-cols-3" slotDefault="" slotTrail="place-content-end" class="mb-2">
		<svelte:fragment slot="lead">
			<h1 class="h1">
				<span
					class="bg-gradient-to-br from-red-500 to-yellow-500 box-decoration-clone bg-clip-text text-transparent"
					>Build.</span
				>
			</h1>
		</svelte:fragment>

		<div class="flex">
			<input
				class="input"
				type="search"
				name="demo"
				bind:value={inputDemo}
				placeholder="Search..."
				on:input={(value) => {
					inputDemo = value.currentTarget.value;
					searchQuery.update(() => inputDemo);
				}}
			/>
			<button
				class="variant-filled btn"
				type="button"
				disabled={inputDemo.length === 0}
				on:click|preventDefault={handleSubmit}><Icon icon="mdi-search"></Icon></button
			>
		</div>

		<svelte:fragment slot="trail">
			<LightSwitch />
			<ul class="flex list-none items-center space-x-6">
				{#each items as i}
					<li>
						<button type="button" class="variant-filled btn">
							<a
								href={i.route}
								class:active={routeId == i.route}
								data-sveltekit-preload-data="hover"
							>
								{i.title}
							</a>
						</button>
					</li>
				{/each}
				{#if isLogin}
					<li>
						<button type="button" class="variant-filled btn" on:click={() => (isLogin = false)}>
							Logout</button
						>
					</li>
					<Avatar
						border="border-4 border-surface-300-600-token hover:!border-secondary-800"
						cursor="cursor-pointer"
					/>
				{:else}
					{#each authenticationItems as aI}
						<li>
							<button type="button" class="variant-filled btn">
								<a
									href={aI.route}
									class:active={routeId == aI.route}
									data-sveltekit-preload-data="hover"
								>
									{aI.title}
								</a>
							</button>
						</li>
					{/each}
				{/if}
			</ul>
		</svelte:fragment>
	</AppBar>
</div>

<style>
	.active {
		color: red;
	}
</style>
