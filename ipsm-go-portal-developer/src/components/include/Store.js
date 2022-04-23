import {
    writable
} from "svelte/store";
import {
    afterUpdate
} from "svelte";

let toDark;
export const dark = writable(toDark = "dark");