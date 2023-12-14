<script lang="ts">
	import { sleep } from "$lib/sleep";
	import { getRandom_image_url } from "$lib/image";
	import { fly } from "svelte/transition";
	import { OpenDialog } from "$lib/DialogUtils";
	import { alertType } from "$lib/T";
	let random_image_url = getRandom_image_url();
    let visblity = true
    const yes = async () => {
        visblity = false
        await sleep(500)
        random_image_url = getRandom_image_url()
        visblity = true
    }
    const no = () => { 
        OpenDialog("No", alertType.simple)
    }
</script>

<div class="content">
    <button on:click={() => {location.href = "/"}}>Home</button>
{#key random_image_url}
    {#if visblity == true}
	<div class="cards" out:fly={{x: 200, y: 100, duration:700}} in:fly={{x: -200, y: -100, duration:1000}}>
		<img class="image" src={random_image_url} alt="" />
        <div class="buttoncontainer">
            <button class="yes" on:click={yes}><span class="material-symbols-outlined">check_circle</span></button>
            <button class="no" on:click={no} ><span class="material-symbols-outlined">cancel</span></button>

        </div>
	</div>
    {/if}
{/key}
</div>

<style lang="scss">
	.cards {
		background-color: white;
		border-radius: 40px;
		width: 25vw;
		height: 65vh;
		display: grid;
		justify-items: center;
        align-items: center;
		padding: 50px;
        grid-template-rows: 80% 20%;
        animation: changingDropShadowColor infinite 6s ease-in-out;
        @media (max-width: 600px){
		width: 60vw;
		height: 50vh;
        }
	}
    @keyframes changingDropShadowColor {
        0%{
            filter: drop-shadow(10px 10px 4px #3fcf12);
        }
        40%{
            filter: drop-shadow(10px 10px 4px #d31b0e);
        }
        80%{
            filter: drop-shadow(10px 10px 4px #4444dd);
        }
        100%{
            filter: drop-shadow(10px 10px 4px #3fcf12);
        }
    }
	.content {
		width: 100vw;
		height: 100vh;
		display: grid;
		align-items: center;
		justify-content: center;
        grid-template-rows: 3% 90%;
	}
	.image {
		width: 80%;
		height: 100%;
        @media (max-width: 600px){
		width: 100%;
		height: 100%;
        }
	}
    .yes {
        color: green;
border-radius: 0px;
  border: transparent;
  padding: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 0.25s;
    }
    .no {
        color: red;
border-radius: 0px;
  border: transparent;
  padding: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: transparent;
  cursor: pointer;
  transition: border-color 0.25s;
    }
    .buttoncontainer{
        font-size: 6rem;
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 80px;
    }
</style>
