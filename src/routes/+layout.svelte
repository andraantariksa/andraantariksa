<script lang="ts">
    import Header from "$lib/Header.svelte";
    import "normalize.css";
    const { children } = $props();
</script>

<div class="container">
    <Header />
    <main class="main">
        {@render children()}
    </main>
</div>

<style>
    :global(*) {
        padding: 0;
        margin: 0;
        font-family: "Plus Jakarta Sans", sans-serif;
    }

    .container {
        margin: 16px;
        border: 0.8px solid black;
    }

    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
