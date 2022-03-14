<script>
	import { slide } from '$lib/CompLib.js';
	export let buttonText = '';
	export let isOpen = false;
</script>

<button on:click={() => (isOpen = !isOpen)}>
	<span class:isOpen> &#9650; </span>
	{buttonText}
</button>
<div
	class="accordion-content"
	use:slide={isOpen}
	on:animationEnd={() => console.log('Animation Ended')}
>
	<div class="wrapper">
		<slot />
	</div>
</div>

<style>
	button {
		display: block;
		border: 0;
		width: 100%;
		text-align: left;
		border: solid 1px #333;
		margin: 0;
		margin-top: 1rem;
	}
	span {
		margin-right: 5px;
		display: inline-block;
		transform: rotate(0.25turn);
		transition: transform 0.3s ease;
	}
	.isOpen {
		transform: rotate(0.5turn);
	}
	.wrapper {
		padding-bottom: 20px;
	}
	.accordion-content {
		padding-left: 1rem;
		border: solid 1px #333;
		border-top: 0;
	}
</style>
