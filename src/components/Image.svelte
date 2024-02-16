<script lang="ts">
	import { fly } from "svelte/transition";
export let displayed = "normal"
export let index = 0
const download = async (url:string, filename:string) => {
    const data = await fetch(url)
    const blob = await data.blob()
    const objectUrl = URL.createObjectURL(blob)

    const link = document.createElement('a')

    link.setAttribute('href', objectUrl)
    link.setAttribute('download', filename)
    link.style.display = 'none'

    document.body.appendChild(link)
  
    link.click()
  
    document.body.removeChild(link)
}
    const open = () => {
        location.href = src
    }
	export let src: string;
</script>

{#if displayed == "normal"}
	<div class="grid">
		<img {src} alt="ewan goofy" class="image" in:fly />
		<div class="vertical">
			<button class="download" on:click={() => download(src, src.replace("./ewan_goofy/", ""))}>
				<span class="material-symbols-outlined"> download </span>
			</button>
			<button class="open" on:click={open}>
				<span class="material-symbols-outlined"> open_in_new</span>
			</button>
		</div>
	</div>
{:else}
	<div class="grid">
		<img {src} alt="ewan goofy" class="image" in:fly />
		<div class="vertical">
			<span class="">{index}<span>
		</div>
	</div>
{/if}

<style>
	.image {
		box-shadow: 5px 5px 1px #222;
		border: 1px solid #333;
		width: 100px;
		@media (max-width: 600px) {
			width: 45px;
		}
		margin: 10px;
	}
	.download {
		background-color: aquamarine;
		padding: 3px;
	}
	.open{
		background-color:chocolate;
		padding: 3px;
	}
    .grid {
        display: grid;
        grid-template-rows: auto ;
        align-items: center;
        justify-content: center;
    }
    .vertical {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 6px;
        align-items: center;
        justify-content: center;
    }
</style>
