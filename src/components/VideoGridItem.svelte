<script lang="ts">
	import { formatDuration } from '../utils/formatDuration';
	import { formatTimeAgo } from '../utils/formatTimeAgo';

	export let id;
	export let title;
	export let channel = {
		id: '',
		name: '',
		profileUrl: ''
	};
	export let views;
	export let postedAt;
	export let duration;
	export let thumbnailUrl;
	export let videoUrl;

	let isVideoPlaying = false;
	let videoRef: HTMLVideoElement;

	const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
		notation: 'compact'
	});

	$: if (videoRef) {
		if (isVideoPlaying) {
			videoRef.currentTime = 0;
			videoRef.play();
		} else {
			videoRef.pause();
		}
	}
</script>

<div class="flex flex-col gap-2 rounded-lg border-4 border-solid border-purple-300">
	<a
		href={`/watch?v=${id}`}
		class="relative aspect-video"
		on:mouseenter={() => (isVideoPlaying = true)}
		on:mouseleave={() => (isVideoPlaying = false)}
	>
		<img
			src={thumbnailUrl}
			class="block h-full w-full object-cover transition-[border-radius] duration-200 {isVideoPlaying
				? 'rounded-none'
				: 'rounded-xl'}"
			alt="videoImg"
		/>
		<div class="bg-secondary-dark text-secondary absolute bottom-1 right-1 rounded px-0.5 text-sm">
			{formatDuration(duration)}
		</div>
		<video
			class="absolute inset-0 block h-full object-cover transition-opacity duration-200 {isVideoPlaying
				? 'opacity-100 delay-200'
				: 'opacity-0'}"
			bind:this={videoRef}
			muted
			playsinline
			src={videoUrl}
		/>
	</a>
	<div class="flex gap-2">
		<a href={`/@${channel.id}`} class="flex-shrink-0">
			<img class="h-12 w-12 rounded-full" src={channel.profileUrl} alt="videoImg" />
		</a>
		<div class="flex flex-col">
			<a href={`/watch?v=${id}`} class="font-bold">
				{title}
			</a>
			<a href={`/@${channel.id}`} class="text-secondary-text text-sm">
				{channel.name}
			</a>
			<div class="text-secondary-text text-sm">
				{VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
			</div>
		</div>
	</div>
</div>
