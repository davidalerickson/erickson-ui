<script>
	import { toggle } from './CompLib.js';
	export let isToggled = false;
	export let label = '';
	export let style = '';
</script>

<label {style}>
	<input type="checkbox" bind:checked={isToggled} use:toggle={isToggled} />
	<div class="toggle" />
	{label}
</label>

<style>
	label {
		display: flex;
		margin-top: 4px;
		margin-bottom: 4px;
		--width: 40px;
		--height: calc(var(--width) / 2);
		--radius: calc(var(--height) / 2);
	}
	input {
		display: none;
	}
	.toggle {
		position: relative;
		width: var(--width);
		height: var(--height);
		margin-right: 5px;
		border-radius: var(--radius);
		border: solid 1px #333;
		background-color: var(--toggleBackgroundColor, white);
		transition: background-color 0.3s ease;
	}
	.toggle::after {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		width: var(--height);
		height: var(--height);
		border-radius: var(--radius);
		background-color: var(--toggleBtnColor, aliceblue);
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease;
	}
	input:checked + .toggle {
		background-color: var(--toggleCheckedBackgroundColor, green);
	}
	input:checked + .toggle::after {
		transform: translate3d(100%, 0, 0);
	}
</style>
