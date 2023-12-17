<script lang="ts">
	import { fade, fly } from 'svelte/transition';
    import {image_url} from '../lib/image';
    const ewan = () => {location.href = "/pictures"}
    const tinder = () =>{location.href = "/tinder"} 
    const gallery= () =>{location.href = "/gallery"} 
    let countdown = false
</script>
{#if countdown == false}
<div class="floating" out:fade={{duration: 1000}}>
    <video src="/countdown.webm" autoplay class="countdown" on:ended={() => countdown = true} ></video>
</div>
{:else}
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
</style>