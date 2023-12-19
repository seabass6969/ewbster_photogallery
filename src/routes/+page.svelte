<script lang="ts">
	import { fade, fly } from 'svelte/transition';
    import {image_url} from '../lib/image';
	import { OpenDialog } from '$lib/DialogUtils';
	import { alertType } from '$lib/T';
    const ewan = () => {location.href = "/pictures"}
    const tinder = () =>{location.href = "/tinder"} 
    const gallery= () =>{location.href = "/gallery"} 
    let countdown = false
    let videos:HTMLVideoElement
    let started = false
    function catchme() {
        OpenDialog("You will never catch me!", alertType.simple)
    }
</script>
{#if countdown == false}
<div class="floating" out:fade={{duration: 1000}}>
    <video src="/countdown.webm" autoplay muted class="countdown" on:ended={() => countdown = true} bind:this={videos}></video>
</div>
{:else}
    {#each image_url as image}
    <button class="moving" on:click={catchme}>
        <img src={image} alt="" class="movingimage">
    </button>
    {/each}
<div class="warning" in:fade={{delay: 1000, duration: 500}}>
    <h1>Warning: This might use up a lot of data!</h1>
    <h2>You have been warned</h2>
    <button on:click={ewan}>I want to look at ewan Picture!</button>
    <button on:click={tinder}>I want to look at ewan's Tinder!</button>
    <button on:click={gallery}>I want to look at ewan's Gallery!</button>
    <h5>Ewb photo Gallery</h5>
    <div class="vertical">
        <img src="./ewan_goofy/Snapchat-1713029345.jpg" alt="ewan pic intro" class="ewb"/>
        <img src="./ewan_goofy/20231127-174931-Snapchat.jpg" alt="" class="ewb">
    </div>
<br>
<a href="https://github.com/seabass6969/ewbster_photogallery">github page</a>
<a href="/credit">credit</a>
</div>
{/if}
<style>
.ewb {
    width: 90px;
    -webkit-animation: opacity 1s 0s infinite;
}
@-webkit-keyframes opacity {
    0%{
        filter:blur(0px);
    }
    100%{
        filter:blur(10px);
    }
}
.countdown {
    width: 100%;
}
.vertical {
    display: grid;
    grid-template-rows: auto;
}
.floating {
    position: absolute;
    width: calc(100vw + 10px);
    height: calc(100vh + 10px);
    display: flex;
    align-items: center;
    justify-content: center;
    left: -10px;
    top: -10px;
    background-color: grey;
}
.moving {
    position: absolute;
    width: 2vw;
    height: 2vw;
    animation: forwards moving infinite 5000ms ;
    left: -10px;
    top: -10px;
    background-color: transparent;
    padding: 0;
}
.movingimage{
    width: 2vw;
    height: 2vw;
}
@keyframes moving {
    0%{
        transform: translate(0vw, 0vh);
    }
    10%{
        transform: translate(10vw, 10vh);
    }
    20%{
        transform: translate(60vw, 10vh);
    }
    30%{
        transform: translate(30vw, 70vh);
    }
    40%{
        transform: translate(90vw, 30vh);
    }
    50%{
        transform: translate(10vw, 90vh);
    }
    60%{
        transform: translate(50vw, 10vh);
    }
    70%{
        transform: translate(70vw, 30vh);
    }
    80%{
        transform: translate(90vw, 70vh);
    }
    90%{
        transform: translate(10vw, 10vh);
    }
    100%{
        transform: translate(0vw, 0vh);
    }
}
.moving:nth-child(2n){
    animation-delay: 1100ms;
}
.moving:nth-child(3n){
    animation-delay: 2100ms;
}
.moving:nth-child(4n){
    animation-delay: 2000ms;
}
.moving:nth-child(5n){
    animation-delay: 3100ms;
}
.moving:nth-child(6n){
    animation-delay: 4000ms;
}
.moving:nth-child(7n){
    animation-delay: 1000ms;
}
</style>