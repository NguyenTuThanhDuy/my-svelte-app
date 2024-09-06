<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
</script>

<Navbar />
<div>
	<slot></slot>
</div>
<Footer />
