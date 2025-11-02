<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import Katori from './components/Katori/Katori.svelte';

  let path = typeof window !== 'undefined' ? window.location.pathname : '/';

  function onPopState() {
    path = window.location.pathname;
  }

  function navigate(to: string) {
    if (to !== path) {
      history.pushState({}, '', to);
      path = to;
    }
  }

  onMount(() => {
    window.addEventListener('popstate', onPopState);
  });

  onDestroy(() => {
    window.removeEventListener('popstate', onPopState);
  });
</script>

<main>
  {#if path === '/katori'}
    <Katori />
  {:else}
    <div>
      <p>ページが見つかりません。</p>
      <p><a href="/katori" on:click|preventDefault={() => navigate('/katori')}>香取プランへ</a></p>
    </div>
  {/if}
</main>
