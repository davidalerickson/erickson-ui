<script>
	import { fade } from 'svelte/transition';
	export let items;
	export let search = '';
	let isFocused = false;

	$: filteredSearch = items.filter((item) => {
		//if the search is empty, return all items
		//if the search is not empty, return items that match the search
		// return search === '' || item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
		return search === '' || search.toLowerCase() === item.slice(0, search.length).toLowerCase();
	});
</script>

<div class="wrapper">
	<label>
		Search Names:
		<input
			type="search"
			placeholder="Search"
			bind:value={search}
			on:focus={() => (isFocused = true)}
		/>
	</label>

	{#if isFocused}
		<ul transition:fade>
			<ui>
				{#each filteredSearch as item}
					<li
						on:click={() => {
							search = item;
							isFocused = false;
						}}
						transition:fade={{ duration: 200 }}
					>
						{item}
					</li>
				{/each}
			</ui>
		</ul>
	{/if}
</div>

<style>
	.wrapper {
		display: inline-block;
		position: relative;
	}
	input {
		display: block;
		position: relative;
	}
	ul,
	li {
		margin: 0;
		padding: 0;
	}

	ui {
		position: absolute;
		width: 100%;
		border: solid 1px black;
	}
	li {
		padding: 10px;
		cursor: pointer;
		background-color: white;
		transition: background-color 0.3s ease;
		list-style: none;
	}
	li:hover {
		background-color: var(--listItemBackground, #eee);
	}
</style>
