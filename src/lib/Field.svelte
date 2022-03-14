<script>
	export let label = '';
	export let instructions = '';
	export let style = '';
	export let value;
	export let placeholder;
	export let type = 'text';

	function handleInput(e) {
		//this function exists because you cannot bind the value of an input when the type is variable
		//if it is a number, add one to it otherwise set it to the value
		value = type.match(/^(number|range)$/) ? +e.value.value : e.target.value;
	}
</script>

<div {style}>
	<label>
		{#if label}
			<span>
				{label}
			</span>
		{/if}
		<br />
		{#if instructions}
			<span class="instructions">
				{instructions}
			</span>
		{/if}
		<br />
		<input on:input={handleInput} {type} {value} {placeholder} />
	</label>
</div>

<style>
	div {
		margin-bottom: 1rem;
	}
	.instructions {
		opacity: 0.7;
		font-size: var(--font-size-small, 14px);
	}
</style>
