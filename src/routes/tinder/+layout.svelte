<script>
	import { DialogOpen, DialogText } from "$lib/stores";
	import Dialog from "../../components/Dialog.svelte"
  import "../../app.scss";
</script>

  <Dialog bind:open={$DialogOpen}>
    <h1>{$DialogText}</h1>
  </Dialog>
<slot />

