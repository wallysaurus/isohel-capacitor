import { writable } from "svelte/store";
import Color from 'colorjs.io';

// positions will be percentages to scale with the figma design.
// figma frame: 400, 835
// figure1: -13.78, -41.73 [#AD00FF]
// figure2: 203.22, 505.27 [#00D1FF]
// figure3: -212.78, 272.27 [#FFE600]
// figure4: 264.22, 94.27 [#00FF66]
// figure5: -107.78, 658.27 [#FF004C]
const radius = {
    x: (351 / 2) / 400,
    y: (351 / 2) / 835
}
export const circleData = writable([
    {
        position: {x: ((-13.78 + 0) / 400), y: ((-41.73 + 0) / 835)},
        radius: radius,
        color: '#AD00FF',
    },
    {
        position: {x: ((203.22 + 0) / 400), y: ((505.27 + 0) / 835)},
        radius: radius,
        color: '#00D1FF',
    },
    {
        position: {x: ((-212.78 + 0) / 400), y: ((272.27 + 0) / 835)},
        radius: radius,
        color: '#FFE600',
    },
    {
        position: {x: ((264.22 + 0) / 400), y: ((94.27 + 0) / 835)},
        radius: radius,
        color: '#00FF66',
    },
    {
        position: {x: ((-107.78 + 0) / 400), y: ((658.27 + 0) / 835)},
        radius: radius,
        color: '#FF004C',
    }
]);

