import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		showReset: false,
		card: undefined
	}
});

export default app;