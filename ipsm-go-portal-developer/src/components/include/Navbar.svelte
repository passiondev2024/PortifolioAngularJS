<script>
  
  import dayjs from "dayjs"
  import {onMount} from "svelte"
 
  
  import Logo from "../../assets/images/logo-dash.svg";
  import Hamburger from './Hamburger.svelte';
  import Dark from "./Dark.svelte"
  let now;
  onMount(() => {
   
     now = dayjs().locale('pt-br').format('D [de] MMMM [de] YYYY [às] HH:mm');
    
  });

 
  
  export let sidebar = false
</script>

<nav 
  class="shadow min-w-full h-16 flex items-center justify-between dark:bg-gray-600  bg-white  z-40 fixed"
>
 
  <Hamburger bind:open={sidebar}/>
 
  <img src={Logo} alt="Logo" class="px-5 flex justify-items-start" />
 
  <ul
    class="flex flex-row items-center justify-items-end px-10 divide-x-2  dark:text-gray-50 font-semibold text-gray-700"
  >
   
  
    <li />
    <li class="px-3">
      {now}
    </li>
    <li class="px-3">
     <Dark />
    </li>
    <li class="px-3 hover:underline"><a href=".">Sair</a></li>
  </ul>
</nav>

<nav>
</nav>
