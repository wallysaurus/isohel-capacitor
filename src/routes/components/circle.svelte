<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    export let innerWidth : number;
    export let innerHeight : number;
    export let data : any;
    let circle : any;

    onMount(() => {
        console.log(data.radius.y)
        //if (circle) { move(); }
    });
    
    // function move() {
    //     const newPos = {
    //         x: (Math.random() * (innerWidth + 50)) - 25,
    //         y: (Math.random() * (innerHeight + 50)) - 25
    //     }
    //     const color = getRandColor();
    //     gsap.to(circle, {
    //         cx: newPos.x,
    //         duration: "random(5, 10)",
    //         onComplete: () => {
    //             gsap.set(circle, {cx: newPos.x})
    //         },
    //         ease: "power1.inOut"
    //     });
    //     gsap.to(circle, {
    //         cy: newPos.y,
    //         duration: "random(5, 10)",
    //         onComplete: () => {
    //             gsap.set(circle, {cy: newPos.y})
    //         },
    //         ease: "power4.inOut"
    //     });
    //     gsap.to(circle, {
    //         fill: color,
    //         duration: "random(5, 10)",
    //         onComplete: () => {
    //             gsap.set(circle, {fill: color})
    //             move()
    //         },
    //         ease: "power1.inOut"
    //     });
    // }
</script>

<circle bind:this={circle} cx={innerWidth * (data.position.x + data.radius.x)} cy={innerHeight * (data.position.y + data.radius.y)} r={innerWidth * data.radius.x}
    style={`
        fill: ${data.color};
        stroke: 'none';
    `}
/>