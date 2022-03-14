<script>
	import { onMount } from 'svelte';
	import { toast } from '$lib/toast/toast';

	import { tweened } from 'svelte/motion';
	export let message;

	let progress = tweened(100, { duration: message.duration });

	onMount(async () => {
		await progress.set(0);
		toast.remove(message.id);
	});
</script>

<div class="progress" style={`width: ${$progress}%;`} />
<p>{message.message}</p>

<style>
	.progress {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 7px;
		background: white;
		opacity: 0.3;
	}
	p {
		margin: 0;
	}
</style>
