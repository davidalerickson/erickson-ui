<script>
	import { fly, fade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import Portal from '$lib/Portal.svelte';
	import { toast } from '$lib/toast/toast.js';
	import ToastMessage from './ToastMessage.svelte';
</script>

<Portal>
	<div class="toast-wrapper">
		{#each $toast as message (message.id)}
			<div
				on:click={toast.remove(message.id)}
				animate:flip
				in:fly={{ opacity: 0, x: 100 }}
				out:fade
				class={`toast ${message.type.toLowerCase()}`}
			>
				<ToastMessage {message} />
			</div>
		{/each}
	</div>
</Portal>

<style>
	.toast-wrapper {
		position: fixed;
		bottom: 0;
		right: 20px;
	}
	.toast {
		overflow: hidden;
		position: relative;
		color: white;
		background: var(--toast-background, #625df5);
		margin-bottom: 1rem;
		padding: 20px;
		border-radius: 15px;
		box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
	}
	.toast.error {
		color: black;
		background: var(--toast-error-background, #ff5252);
	}
</style>
