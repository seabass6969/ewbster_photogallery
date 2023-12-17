<script>
	import { image_url } from "$lib/image";
	import { fly } from "svelte/transition";

</script>
<div class="list">
    {#each image_url as image}
        <img src={image} alt="ewan goofy" class="image" in:fly>
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
  width: 100%;
    /* display: grid;
    align-items: center;
    justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(100px, 1fr)); */
}
.image{
    box-shadow: 5px 5px 1px #222;
    border: 1px solid #333;
    width: 100px;
    @media (max-width: 600px){
        width: 45px;
    }
    margin: 10px
}
</style>