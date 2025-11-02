import { mount } from 'svelte';
import '../app.css';
import Katori from '../components/Katori/Katori.svelte';

mount(Katori, {
  target: document.getElementById('app') as HTMLElement,
});


