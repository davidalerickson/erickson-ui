<script>
	import { fly, fade } from 'svelte/transition';
	import Portal from './Portal.svelte';
	export let isModalOpen = false;

	function closeModal() {
		isModalOpen = false;
	}
</script>

{#if isModalOpen}
	<Portal>
		<div class="modal-wrapper" transition:fly={{ opacity: 0, y: 100 }}>
			<button on:click={closeModal} aria-label="Close Modal Box">Close</button>
			<slot />
		</div>
		<div on:click={closeModal} class="background" transition:fade />
	</Portal>
{/if}

<style>
	.modal-wrapper {
		margin: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 320px;
		max-width: 530px;
		width: 100%;
		z-index: 101;
	}
	.background {
		background-color: black;
		opacity: 0.8;
		cursor: pointer;
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		z-index: 100;
	}
</style>
