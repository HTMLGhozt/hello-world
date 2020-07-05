import router from 'page';

import App from './App.svelte';
import About from './pages/About.svelte';
import './main.css';

let page;
router('/about', () => page = About);

router.start()

new App({
	target: document.body,
	props: { page }
});
