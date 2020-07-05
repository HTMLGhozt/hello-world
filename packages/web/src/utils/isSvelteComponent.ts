import { SvelteComponent } from 'svelte/internal';

// Reference: https://stackoverflow.com/questions/59541371/how-to-verify-if-prop-passed-is-a-component-type-in-svelte
export const isSvelteComponent = (component: SvelteComponent | object) => {
	return Reflect.apply(Object.prototype.isPrototypeOf, SvelteComponent, [component]);
};
