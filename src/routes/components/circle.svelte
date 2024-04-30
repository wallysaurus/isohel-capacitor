<script>
    import { gsap } from 'gsap';

	export let x = 0;
	export let y = 0;
	export let radius = 20;
	export let color = 'red';

    export function move() {
        console.log("poo")
        gsap.to(".circle", {color: "#8c0", duration: 1});
    }
</script>

<style>
    .circle {
        fill: var(--color);
        stroke: none;
        width: calc( var(--radius) * 1px );
        height: calc( var(--radius) * 1px );
        border-radius: 50%;
        position: absolute;
        top: calc( var(--y) * 1px );
        left: calc( var(--x) * 1px );
    }
</style>
  
<circle class="circle" cx="{x}" cy="{y}" r="{radius}" style:--color={color} style:--x={x} style:--y={y} style:--radius={radius} />