<script lang="ts">
	import { onMount } from 'svelte';
    import {getRandom_image_url, image_url} from '../../lib/image';
	import { sleep } from '$lib/sleep';
	import { blur } from 'svelte/transition';
    enum imageStyle {
        imagefall,
        looping,
        heartbeating
    }
    let opened = imageStyle.heartbeating
    onMount(async ()=> {
        while(true){
            opened = imageStyle.imagefall
            await sleep(10000)
            opened = imageStyle.heartbeating
            await sleep(2000)
            opened = imageStyle.looping
            await sleep(2000)
        }
    })
</script>

<main>
{#if opened == imageStyle.imagefall}
    <div id="images" out:blur>
    {#each image_url as img}
            <img src={img} alt="ewan_goofy.jpg" class="image" />
    {/each}
    </div>
{/if}
{#if opened == imageStyle.looping}
    <div class="center">
        <img src={getRandom_image_url()} alt="" class="imagePopUp circle">
    </div>
{/if}
{#if opened == imageStyle.heartbeating}
    <div class="center">
        <img src={getRandom_image_url()} alt="" class="imagePopUp heartBeat">
    </div>
{/if}
</main>
<style lang="scss">
#images .image:nth-of-type(n){-webkit-animation-delay:1s;}
#images .image:nth-of-type(2n){-webkit-animation-delay:2s;}
#images .image:nth-of-type(3n){-webkit-animation-delay:4s;}
#images .image:nth-of-type(4n){-webkit-animation-delay:2s;}
#images .image:nth-of-type(5n){-webkit-animation-delay:2.5s;}
#images .image:nth-of-type(6n){-webkit-animation-delay:3s;}
#images .image:nth-of-type(7n){-webkit-animation-delay:0.2s;}
#images .image:nth-of-type(8n){-webkit-animation-delay:1s;}
#images .image:nth-of-type(9n){-webkit-animation-delay:2s;}
#images .image:nth-of-type(10n){-webkit-animation-delay:4s;}
#images .image:nth-of-type(11n){-webkit-animation-delay:2s;}
#images .image:nth-of-type(12n){-webkit-animation-delay:2.5s;}
#images .image:nth-of-type(13n){-webkit-animation-delay:3s;}
#images .image:nth-of-type(15n){-webkit-animation-delay:0.2s;}
#images .image:nth-of-type(16n){-webkit-animation-delay:4s;}
#images .image:nth-of-type(17n){-webkit-animation-delay:2s;}
#images .image:nth-of-type(18n){-webkit-animation-delay:2.5s;}
#images .image:nth-of-type(19n){-webkit-animation-delay:3s;}
#images .image:nth-of-type(20n){-webkit-animation-delay:3.2s;}
#images .image:nth-of-type(21n){-webkit-animation-delay:2.2s;}
#images .image:nth-of-type(22n){-webkit-animation-delay:6.2s;}
#images .image:nth-of-type(23n){-webkit-animation-delay:7.2s;}
#images .image:nth-of-type(24n){-webkit-animation-delay:5.2s;}
#images .image:nth-of-type(25n){-webkit-animation-delay:4.2s;}
#images .image:nth-of-type(26n){-webkit-animation-delay:3.2s;}
#images .image:nth-of-type(27n){-webkit-animation-delay:4.2s;}
#images .image:nth-of-type(27n){-webkit-animation-delay:2.2s;}
#images .image:nth-of-type(28n){-webkit-animation-delay:6.2s;}
#images .image:nth-of-type(29n){-webkit-animation-delay:7.2s;}
#images .image:nth-of-type(30n){-webkit-animation-delay:5s;}
#images .image:nth-of-type(31n){-webkit-animation-delay:1s;}
#images .image:nth-of-type(32n){-webkit-animation-delay:3s;}
#images .image:nth-of-type(33n){-webkit-animation-delay:2s;}
#images .image:nth-of-type(34n){-webkit-animation-delay:4s;}
#images .image:nth-of-type(35n){-webkit-animation-delay:7s;}
#images .image:nth-of-type(36n){-webkit-animation-delay:5s;}
#images .image:nth-of-type(37n){-webkit-animation-delay:4s;}
#images .image:nth-of-type(38n){-webkit-animation-delay:2s;}
.image{
    display: inline-block;
    box-shadow: 2px 3px 1px #222;
    border: 1px solid #333;
    z-index: 1;
    -webkit-animation: falling 5s 0s infinite;
    opacity: 0;
    -webkit-animation-timing-function:ease-in-out;

    width: 100px;
    @media (max-width: 600px){
        width: 45px;
    }
    margin: 10px
}

@-webkit-keyframes falling {
     0% {
        -webkit-transform:
            translate3d(0,0,0);
        opacity: 0.1;
    }
    
    50% {
        -webkit-transform:
            translate3d(0,-200px,0);
        opacity: 1;
    }
    100% {
        -webkit-transform:
            translate3d(0px,-500px,0);
        opacity: 0;
    }
}
.imagePopUp {
    height: 70vh;
}
.center {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.circle {
    animation: circling forwards infinite 0.5s;
}
@keyframes circling {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
.heartBeat {
    animation: heart forwards infinite 0.5s;
    border-style: solid;
    border-color: red;
    border-radius: 5px;
    border-width: 10px;
}
@keyframes heart {
    0%{
        transform:scale(100%);
    }
    30%{
        transform:scale(120%);
    }
    60%{
        transform:scale(100%);
    }
    90%{
        transform:scale(120%);
    }
    100%{
        transform:scale(100%);
    }
}
</style>
