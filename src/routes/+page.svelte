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

<svg viewBox={`0 0 ${innerWidth} ${innerHeight}`} xmlns="http://www.w3.org/2000/svg">
    {#each data as entry}
        <Circle data={entry} innerWidth={innerWidth} innerHeight={innerHeight} />
    {/each}
</svg>

<!-- Blur Filter -->
<div />

<style>
    div {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(120px);
    }
</style>