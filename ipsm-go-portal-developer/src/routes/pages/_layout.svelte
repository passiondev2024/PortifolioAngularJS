<script>
 
	import Nav from '../../components/include/Navbar.svelte';
	import Sidebar from '../../components/include/Sidebar.svelte';
 
	let open = false
	export let segment;
</script>

 
<Nav bind:sidebar={open}/>
<Sidebar {segment} bind:open />
 
 
<main class="container mx-auto dark:bg-gray-700 w-full max-w-full p-10  h-screen overflow-y-auto  bg-gray-100" >
	<div   class="flex flex-wrap   md:ml-60 max-full m-0 md:space-x-1 mx-auto  ">
		<slot></slot>
	</div>
</main>
 