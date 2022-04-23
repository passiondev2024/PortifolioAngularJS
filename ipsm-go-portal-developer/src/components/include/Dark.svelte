<script>
 
  import { onDestroy } from 'svelte'
	import { writable } from 'svelte/store'
  // import {dark} from './Store'
	import { afterUpdate } from "svelte";
	 
	import { onMount } from 'svelte';
  let dark =  true;
  let MyDarkTheme;
 
	// onMount(async () => {
    
  //   MyDarkTheme = await document.getElementsByTagName("html")[0];
  //   return MyDarkTheme.classList.add("light");
   
  // });
 
  // dark.subscribe(value => {
  //   toDark = value;
  // })
 
 
</script>
 
 
<botton on:click={()=> (dark = !dark) } class="cursor-pointer">
  <div class="text-gray-700 font-medium">{dark ? "☀️" : "🌚"}</div>
</botton>  

 