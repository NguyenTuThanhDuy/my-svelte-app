<script lang="ts">
	import VideoGridItem from '../components/VideoGridItem.svelte';

	import { QueryClientProvider, hydrate } from '@tanstack/svelte-query';
	import { queryClient } from '../services/queryClient';

	export let data;

	if (data?.dehydratedState) {
		hydrate(queryClient, data.dehydratedState);
	}
	let videosData: any = data.dehydratedState.queries[0].state?.data;
</script>

<QueryClientProvider client={queryClient}>
	<div class="ml-4 mr-4 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
		{#each videosData?.videos as v}
			<VideoGridItem
				id={v.id}
				title={v.title}
				channel={v.channel}
				views={v.views}
				postedAt={v.postedAt}
				duration={v.duration}
				thumbnailUrl={v.thumbnailUrl}
				videoUrl={v.videoUrl}
			/>
		{/each}
	</div>
</QueryClientProvider>
