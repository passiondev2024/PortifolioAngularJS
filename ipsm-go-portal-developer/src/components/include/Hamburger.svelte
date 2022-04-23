<script>
  export let open = false;
</script>
<style>
	svg {
    min-height: 24px;
    transition: transform 0.3s ease-in-out;
  }

  svg line {
    stroke: currentColor;
    stroke-width: 3;
    transition: transform 0.3s ease-in-out;
  }

  button {
    z-index: 20;
  }

  .open svg {
    transform: scale(0.7);
  }

  .open #top {
    transform: translate(6px, 0px) rotate(45deg);
  }

  .open #middle {
    opacity: 0;
  }

  .open #bottom {
    transform: translate(-12px, 9px) rotate(-45deg);
  }
</style>
<button
  
  on:click={() => (open = !open)}
  class="ml-2 md:hidden visible justify-items-end p-2 transition duration-500 hover:bg-gray-200 rounded-full"
>
  <svg
  class:open
    class="w-6 w-6 text-gray-400 bolder"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
</button>

 
