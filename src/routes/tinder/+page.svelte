<script lang="ts">
	import { sleep } from "$lib/sleep";
	import { getRandom_image_url } from "$lib/image";
	import { fly } from "svelte/transition";
	import { OpenDialog } from "$lib/DialogUtils";
	import { alertType } from "$lib/T";
	let random_image_url = getRandom_image_url();
	let visblity = true;
    let cards:HTMLDivElement
	const yes = async () => {
		visblity = false;
		await sleep(500);
		random_image_url = getRandom_image_url();
		visblity = true;
	};
	const no = () => {
		OpenDialog("No", alertType.simple);
	};
	let mousedraging = false;
	let clientX = 0;
	let startingX = 0;
	let previousX = 0;
	let degree_changing = 0
	const mousedowns = (ev: MouseEvent) => {
		if(clientWidth >= 600){
			if(previousX == 0)previousX= ev.clientX
			if (previousX!= ev.clientX){
				mousedraging = true;
				console.log(clientWidth / 5)
				startingX = ev.clientX - (clientWidth / 5)
				console.log("Mouse down");
			}
		}
	};
	const mousemoves = (ev: MouseEvent) => {
		if (mousedraging == true) {
			clientX = (cards.offsetTop - (startingX - ev.clientX));
			degree_changing = - ((startingX - ev.clientX) / 50)
			console.log(degree_changing);
			if(degree_changing < -9){
				yes()
				mousedraging = false
				degree_changing = 0
			}else if(degree_changing > 25){
				no()
				mousedraging = false
				degree_changing = 0
			}
		}
	};
	const mouseups = (ev: MouseEvent) => {
		mousedraging = false;
		console.log("Mouse ups");
		degree_changing = 0
		previousX = ev.clientX
	};
	let clientWidth:number = 0
</script>

	<svelte:body
		on:mousedown={mousedowns}
		on:mousemove={mousemoves}
		on:mouseup={mouseups}
	/>
<svelte:window bind:innerWidth={clientWidth}/>
<div class="content">
	<button
		on:click={() => {
			location.href = "/";
		}}>Home</button
	>
	{#key random_image_url}
		{#if visblity == true}
			<div
				class="cards"
				class:dragging={mousedraging}
				style="left: {clientX}px; transform: rotate({degree_changing}deg);"
				out:fly={{ x: -200, y: 100, duration: 700 }}
				in:fly={{ x: 0, y: -100, duration: 1000 }}
                bind:this={cards}
			>
				<img
					class="image"
					src={random_image_url}
					alt=""
					draggable="false"
				/>
				<div class="buttoncontainer">
					<button class="yes" on:click={yes}
						>✔️</button
					>
					<button class="no" on:click={no}
						>✖️</button
					>
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
		user-select: none;
		@media (max-width: 600px) {
			width: 60vw;
			height: 50vh;
		}
	}
	@keyframes changingDropShadowColor {
		0% {
			filter: drop-shadow(10px 10px 4px #3fcf12);
		}
		40% {
			filter: drop-shadow(10px 10px 4px #d31b0e);
		}
		80% {
			filter: drop-shadow(10px 10px 4px #4444dd);
		}
		100% {
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
		@media (max-width: 600px) {
			width: 100%;
			height: 100%;
		}
	}
	.yes {
		color: green;
		border-radius: 6px;
		border: transparent;
		padding: 0;
		font-size: 0.5em;
		font-weight: 500;
		font-family: inherit;
		background-color: green;
		cursor: pointer;
		transition: border-color 0.25s;
	}
	.no {
		color: red;
		border-radius: 6px;
		border: transparent;
		padding: 0;
		font-size: 0.5em;
		font-weight: 500;
		font-family: inherit;
		background-color: red;
		cursor: pointer;
		transition: border-color 0.25s;
	}
	.buttoncontainer {
		font-size: 6rem;
		display: grid;
		grid-template-columns: auto auto;
		column-gap: 80px;
	}
	.dragging {
		position: absolute;
	}
</style>
