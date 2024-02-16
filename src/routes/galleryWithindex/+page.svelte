<script>
	import { image_url } from "$lib/image";
	import Image from "../../components/Image.svelte";

</script>
<div class="list">
    {#each image_url as image, index}
        <Image src={image} displayed="" index={index}/>
    {/each}
</div>
<style>
    :global(body){
        overflow: auto;
    }
.list {
display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-flow: dense;
  row-gap: 1vh;
  column-gap: 1vw;
  width: 100%;
    /* display: grid;
    align-items: center;
    justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); */
}
</style>