<script>
	import '../app.css';
	import Footer from '$components/Footer.svelte';
	import Navbar from '$components/Navbar.svelte';
	import Breadcrumbs from '$components/Breadcrumbs.svelte';
</script>

<Navbar />
<Breadcrumbs />
<div>
	<slot></slot>
</div>
<Footer />
