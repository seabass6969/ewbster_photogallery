<script>
	import { DialogOpen, DialogText } from "$lib/stores";
    import "../app.scss";
	import Dialog from "../components/Dialog.svelte";
  </script>

  <slot />
  
  
  <Dialog bind:open={$DialogOpen}>
    <h1>{$DialogText}</h1>
  </Dialog>
<style>

</style>