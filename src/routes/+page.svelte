<script lang="ts">
	export let data;
</script>

<div class="h-auto w-full">
	<h1>Login Page</h1>
	<p>Total videos: {data.length}</p>
	{#each data.videos as v}
		<h1>Title: {v.title}</h1>
		<p>Posted At: {v.postedAt}</p>
		<p>URL: {v.videoUrl}</p>
		<p>Views: {v.views}</p>
	{/each}
</div>
