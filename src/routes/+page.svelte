<script lang="ts">
    import Circle from './components/circle.svelte';
    import { onMount } from 'svelte';
    import { circleData } from '$lib';

    //let circles : any[] = [];
    let innerWidth : number;
    let innerHeight : number;
    let data : ArrayLike<any>;

    circleData.subscribe((value) => {
        data = value;
    });

    onMount(() => {
        innerWidth = window.innerWidth;
        innerHeight = window.innerHeight;
    });
</script>

<!-- Circles -->
<svg viewBox={`0 0 ${innerWidth} ${innerHeight}`} xmlns="http://www.w3.org/2000/svg">
    {#each data as entry}
        <Circle data={entry} innerWidth={innerWidth} innerHeight={innerHeight} />
    {/each}
</svg>

<!-- Blur Filter -->
<div />

<svg class="noise" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
    <!-- Define the filter inside the SVG that is guaranteed to span the whole viewport -->
    <defs>
        <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" stitchTiles="stitch" seed="0" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"/>
            <feComponentTransfer>
                <feFuncA type="table" tableValues="1 0" />
            </feComponentTransfer>
        </filter>
        <mask id="circleMask">
            <radialGradient id="grad" cx="50%" cy="50%" r="15%" fx="50%" fy="50%">
                <stop offset="10%" stop-color="white" />
                <stop offset="100%" stop-color="black" />
            </radialGradient>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
        </mask>
    </defs>
    <!-- Example circle to demonstrate mask and filter -->
    <circle cx="50%" cy="50%" r="50" fill="red" mask="url(#circleMask)" filter="url(#noiseFilter)" />
</svg>


<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(120px);
    }
    .noise {
        position: fixed;
        top: 0;
        left: 0;
        filter: url(#noiseFilter);
        mask: url(#circleMask);
        opacity: 0.25;
        z-index: 10;
    }
</style>