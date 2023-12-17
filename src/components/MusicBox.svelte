<script lang="ts">
	import { fly } from "svelte/transition";
    import {Howl, Howler} from 'howler';
	interface music {
		name: string;
		url: string;
	}
	const MusicList: music[] = [
		{name: "The Blue Danube Waltz", url: "/music/Waltz.m4a"},
		{ name: "Blue Boi", url: "/music/Blue Boi.mp3" },
		{ name: "Better Days", url: "/music/Better Days.mp3" },
		{ name: "Chill Day", url: "/music/Chill Day.mp3" },
	];
	const musics = [
        "/music/Waltz.m4a",
		"/music/Blue Boi.mp3",
		"/music/Better Days.mp3",
		"/music/Chill Day.mp3",
	];
    let musicOn:number = 0
    let sounds = new Howl({src: musics[musicOn]})
    
    function autoplay(i:number, list:string[]) {
        sounds = new Howl({
            src: [list[i]],
            preload: true,
            onend: function () {
                if ((i + 1) == list.length) {
                    musicOn = 0
                    autoplay(0, list)
                } else {
                    musicOn += 1
                    autoplay(i + 1, list)
                }
            },
        })
        sounds.play();
    }
    let playPauseTemp = "pause_circle"
    const playbtn = () => {
        if (sounds.playing() == true){
            playPauseTemp = "play_circle"
            sounds.pause()
        }else{
            playPauseTemp = "pause_circle"
            sounds.play()
        }
    }
    autoplay(0 ,musics)
</script>

<div class="floatingMusicbox">
	<button class="playbutton" on:click={playbtn}>
		{#key playPauseTemp}
			<span class="material-symbols-outlined" in:fly>
				{playPauseTemp}
			</span>
		{/key}
	</button>
	playing: {MusicList[musicOn].name}
</div>

<style lang="scss">
	.floatingMusicbox {
		background: rgba(1, 201, 204, 0.5);
		border-radius: 15px 15px 15px 15px;
		color: #fdf6e3;
		border-color: blue;
		border-width: 2px;
		border-style: solid;
		padding: 10px;
		left: auto;
		right: auto;
		z-index: 999;
		width: 40vw;
		display: flex;
		align-items: center;
	}

	.playbutton {
		background-color: transparent;
		width: auto;
		height: auto;
		padding: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
