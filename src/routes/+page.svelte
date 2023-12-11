<script lang="ts">
    import {image_url} from '../lib/image';
    const ewan = () => {location.href = "/pictures"}
    const tinder = () =>{location.href = "/tinder"} 
</script>
<div class="warning">
    <h1>Warning: This might use up a lot of data!</h1>
    <h2>You have been warned</h2>
    <button on:click={ewan}>I want to look at ewan Picture!</button>
    <button on:click={tinder}>I want to look at ewan's Tinder!</button>
    <h5>Ewb photo Gallery</h5>
    <img src="./ewan_goofy/Snapchat-1713029345.jpg" alt="ewan pic intro" class="ewb"/>
</div>
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
</style>