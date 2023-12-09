<script lang="ts">
    import {image_url} from '../lib/image';
    let continues= false;
    const ewan = () => {continues = true}
</script>

<main>
{#if continues == false}
<div class="warning">
    <h1>Warning: This might use up a lot of data!</h1>
    <h2>You have been warned</h2>
    <button on:click={ewan}>I want to look at ewan Picture!</button>
    <h5>Ewb photo Gallery</h5>
</div>
{/if}
{#if continues == true}
<div id="images">
{#each image_url as img}
        <img src={img} alt="ewan_goofy.jpg" class="image"/>
{/each}
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
.image{
    display: inline-block;
    width: 100px;
    box-shadow: 2px 3px 1px #222;
    border: 1px solid #333;
    z-index: 1;
    -webkit-animation: falling 5s 0s infinite;
    opacity: 0;
    @media (max-width: 600px){
        width: 45px;
    }
}

@-webkit-keyframes falling {
     0% {
        -webkit-transform:
            translate3d(0,0,0);
        opacity: 0.1;
    }
    
     50% {
        -webkit-transform:
            translate3d(0,-100px,0);
        opacity: 1;
    }
    100% {
        -webkit-transform:
            translate3d(0px,-200px,0);
        opacity: 0;
    }
}
</style>
