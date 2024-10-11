<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
	import { derived } from 'svelte/store';
	import { page } from '$app/stores'; // Import the page store to get the current URL

	const capitalizeString = (value: string) => value[0].toUpperCase() + value.slice(1);

	// Derive the breadcrumb path based on the current path from the $page store
	const breadcrumbs = derived(page, ($page) => {
		const { pathname } = $page.url;
		const segments = pathname.split('/').filter(Boolean); // Split path and remove empty segments
		const breadcrumbList = segments.map((segment, index) => {
			const href = '/' + segments.slice(0, index + 1).join('/');
			segment = capitalizeString(segment);
			return { name: segment, href };
		});

		return [{ name: 'Home', href: '/' }, ...breadcrumbList]; // Start with 'Home' as the first crumb
	});
</script>

<AppBar class="mb-2 text-secondary-200">
	<ol class="breadcrumb mt-1">
		<!-- Render the breadcrumbs dynamically -->
		{#each $breadcrumbs as crumb, index}
			<li class="crumb">
				<a class="variant-soft-primary btn btn-sm" href={crumb.href}>{crumb.name}</a>
			</li>
			{#if index < $breadcrumbs.length - 1}
				<li class="crumb-separator" aria-hidden="true">&rsaquo;</li>
			{/if}
		{/each}
	</ol>
</AppBar>

<style>
	a::first-letter {
		text-transform: capitalize;
	}
</style>
