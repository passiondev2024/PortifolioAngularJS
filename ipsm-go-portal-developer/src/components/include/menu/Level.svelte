<script>
 
  let icon;
  let url;
  let name;
  export let LevelName;
  let current;
  export let segment;
  export let menu = true;
  </script>
 <style>
   .menu {
     display: none;
   }
 </style>
  
  <li
  on:click={() => (menu = !menu)}
  class={segment === "" ? "current" : "hover:bg-gray-200 group "}
>
  <a
    class="font-bold text-base  text-gray-600 {menu === 'true'
      ? ''
      : 'dark:text-gray-300'}  group-hover:text-gray-500 block max-x-full py-2"
    href="javascript:void(0)"
  >
    <i
      class="fa {menu ? 'fa-chevron-circle-right' : 'fa-chevron-circle-down'} ml-3 p-2"
    /> {LevelName}
  </a>
</li>

<ul class:menu class="pl-3">
  
  <slot></slot>
  
</ul>