<script>
    
    import { onMount } from 'svelte';
    import Toastify from 'toastify-js'
    import "toastify-js/src/toastify.css"
    
    let colors = [ danger => "#DC2626", info => "#2563EB", success => "#059669", ];


    onMount(() => {

      Toastify({
        text: "This is a toast",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();

    })

 
</script>