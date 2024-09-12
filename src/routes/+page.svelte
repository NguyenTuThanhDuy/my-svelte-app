<script lang="ts">
	import { onMount } from 'svelte';
	import axiosInstance from '../services/axios';

	let videos: any = [];

	onMount(async () => {
		const response = await axiosInstance.get('/videos');
		console.log(response.data.videos);
		videos = response.data.videos;
	});
</script>

<div class="h-auto w-full">
	<h1>Login Page</h1>
	<p>Total videos: {videos.length}</p>
	{#each videos as v}
		<h1>Title: {v.title}</h1>
		<p>Posted At: {v.postedAt}</p>
		<p>URL: {v.videoUrl}</p>
		<p>Views: {v.views}</p>
	{/each}
</div>
