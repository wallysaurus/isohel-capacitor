<script lang="ts">
    import Circle from './components/circle.svelte';
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';

    let circles : any[] = [];
    let innerWidth : number;
    let innerHeight : number;
    let circle : any;

    onMount(() => {
        innerWidth = window.innerWidth;
        innerHeight = window.innerHeight;
        if (circle) {
            circle.move();
        }
    });

    function getRandPos(circleSize : number) {
        const randX = Math.random() * (window.innerWidth - circleSize);
        const randY = Math.random() * (window.innerHeight - circleSize);

        return { x: randX, y: randY }
    }

    function onClick() { 
        const randPos = getRandPos(25)
        const newCircle = { 
            x: randPos.x,
            y: randPos.y,
            color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        }
        circles.push(newCircle);
        circles = circles
    }
</script>

<svg viewBox={`0 0 ${innerWidth} ${innerHeight}`} xmlns="http://www.w3.org/2000/svg">
    {#each circles as circle}
        <Circle on:componentLoaded={circle} x={circle.x} y={circle.y} color={circle.color} radius={200 - (Math.random() * 100)} />
    {/each}
</svg>
<div id="blur-overlay" />
<button on:click={onClick} style="position:fixed; top:50vh; left: calc(50vw - 50px);" >Create Circle</button>

<style>
    #blur-overlay {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        backdrop-filter: blur(50px);
	}
</style>