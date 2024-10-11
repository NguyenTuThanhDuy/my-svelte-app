<script lang="ts">
	import { onDestroy } from 'svelte';

	import { QueryClientProvider, hydrate } from '@tanstack/svelte-query';

	import { queryClient } from '../services/queryClient';
	import type Video from '../types/video.type';
	import { searchQuery } from '$stores/videoSearchQuery';
	import VideoGridItem from '$components/VideoGridItem.svelte';

	export let data;

	if (data?.dehydratedState) {
		hydrate(queryClient, data.dehydratedState);
	}

	let inputQuery: string = '';
	let videosData: any = data.dehydratedState.queries[0].state?.data;
	let filteredVideos: Video[] = []; // Filtered list based on search

	// Automatically update filteredVideos when inputQuery changes
	$: filteredVideos =
		inputQuery.length === 0
			? videosData.videos
			: videosData.videos.filter((video: Video) => video.title.toLowerCase().includes(inputQuery));

	const unsubscribe = searchQuery.subscribe((query) => {
		filterVideos(query);
	});

	onDestroy(() => {
		unsubscribe();
	});

	function filterVideos(query: string) {
		inputQuery = query.toLowerCase();
	}
</script>

<QueryClientProvider client={queryClient}>
	<div class="ml-4 mr-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
		{#each filteredVideos as v}
			<VideoGridItem {...v} />
		{/each}
	</div>
</QueryClientProvider>
