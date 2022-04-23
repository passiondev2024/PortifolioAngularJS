<script>
export let icon;
export let url;
export let name;
export let current;
export let segment;

</script>


<li
class={segment === current
  ? "current"
  : "hover:bg-gray-200  transition duration-500 group"}
>
<a
  class="font-bold text-base text-gray-600 block {segment === current
    ? ''
    : 'dark:text-gray-300'} group-hover:text-gray-500 max-x-full py-2"
  href="./{url}"
>
  <i class="fa fa-{icon} ml-3 p-2" /> {name} 
</a>
</li>


 