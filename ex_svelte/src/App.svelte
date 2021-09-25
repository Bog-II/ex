<script lang="ts">
  import logo from './assets/svelte.png';
  import Table from './lib/Table.svelte';
  import Button from './lib/Button.svelte';

  let displayTable = false;

  const handleButtonClick = () => {
    displayTable = true;
  };
</script>

<main>
  <Button handleClick={handleButtonClick} />

  {#if displayTable}
    <Table />
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }
</style>
