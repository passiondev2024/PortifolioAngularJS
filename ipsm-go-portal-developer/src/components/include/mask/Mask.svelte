<script>
    import MaskInput from 'svelte-input-mask/MaskInput.svelte';

  export let mask = '000.000.000-00';


  export const handleChange = ({ detail }) => {
    console.log(detail.inputState.maskedValue); // stores the value of input

    if (detail.inputState.maskedValue.indexOf('34') === 0 || detail.inputState.maskedValue.indexOf('37') === 0) {
      mask = '000.000.000-00';
      return;
    }

    mask = '000.000.000-00';
  };
 
 
</script>