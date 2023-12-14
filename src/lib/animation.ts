import { elasticOut } from "svelte/easing";

//@ts-ignore
export function dropDown(node, { duration }) {
    return {
        duration,
        //@ts-ignore
        css: t => {
            const eased = elasticOut(t);
            return `transform: translateY(${eased*50}px)`
        }
    };
}