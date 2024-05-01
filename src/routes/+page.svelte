<script lang="ts">
    import Circle from './components/circle.svelte';
    import { onMount } from 'svelte';
    import Color from 'colorjs.io';

    let circles : any[] = [];
    let innerWidth : number;
    let innerHeight : number;

    onMount(() => {
        innerWidth = window.innerWidth;
        innerHeight = window.innerHeight;
        for (let i = 0; i < 20; i++) {
            instantiateCircle();
        }
    });

    function getRandPos(circleSize : number) {
        const randX = Math.random() * (window.innerWidth - circleSize);
        const randY = Math.random() * (window.innerHeight - circleSize);
        return { x: randX, y: randY }
    }

    function getRandColor() {
        let colors = ['#fc0303', '#fc6b03', '#fcd303', '#a1fc03', '#03fc3d', '#03fcce', '#03adfc', '#0320fc', '#6203fc', '#8c03fc', '#e303fc', '#fc03b1'];
        let color = new Color(colors[Math.floor(Math.random()*colors.length)]).to("hsl");
        color.s = color.s * 0.8;
        return color.toString();
    }

    function instantiateCircle() {
        const randPos = getRandPos(25);
        const newCircle = {
            x: randPos.x,
            y: randPos.y,
            r: 200 - (Math.random() * 50),
            color: getRandColor()
        }
        circles.push(newCircle);
        circles = circles
    }
</script>

<svg viewBox={`0 0 ${innerWidth} ${innerHeight}`} xmlns="http://www.w3.org/2000/svg">
    {#each circles as attr}
        <Circle {attr} innerWidth={innerWidth} innerHeight={innerHeight} />
    {/each}
</svg>

<!-- Blur Filter -->
<div />
<button on:click={instantiateCircle} style="position:fixed; top:50vh; left: calc(50vw - 50px);" >Create Circle</button>

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(40px);
    }
</style>