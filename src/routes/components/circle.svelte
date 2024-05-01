<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
    import Color from 'colorjs.io';

    export let innerWidth : number;
    export let innerHeight : number;
    export let attr : any;
    let circle : any;

    onMount(() => { if (circle) { move(); } });

    function getRandColor() {
        let colors = ['#fc0303', '#fc6b03', '#fcd303', '#a1fc03', '#03fc3d', '#03fcce', '#03adfc', '#0320fc', '#6203fc', '#8c03fc', '#e303fc', '#fc03b1'];
        let color = new Color(colors[Math.floor(Math.random()*colors.length)]).to("hsl");
        color.s = color.s * 0.5;
        return color.toString();
    }
    
    function move() {
        const newPos = {
            x: (Math.random() * (innerWidth + 50)) - 25,
            y: (Math.random() * (innerHeight + 50)) - 25
        }
        const color = getRandColor();
        gsap.to(circle, {
            cx: newPos.x,
            duration: "random(5, 10)",
            onComplete: () => {
                gsap.set(circle, {cx: newPos.x})
            },
            ease: "power1.inOut"
        });
        gsap.to(circle, {
            cy: newPos.y,
            duration: "random(5, 10)",
            onComplete: () => {
                gsap.set(circle, {cy: newPos.y})
            },
            ease: "power4.inOut"
        });
        gsap.to(circle, {
            fill: color,
            duration: "random(5, 10)",
            onComplete: () => {
                gsap.set(circle, {fill: color})
                move()
            },
            ease: "power1.inOut"
        });
    }
</script>

<circle bind:this={circle} cx={attr.x} cy={attr.y} r={attr.r}
    style={`
        fill: ${attr.color};
        stroke: 'none';
    `}
/>