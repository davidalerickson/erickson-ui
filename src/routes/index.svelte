<script>
	import Toggle from '$lib/Toggle.svelte';
	import BetterAccordion from '$lib/BetterAccordion.svelte';
	import SearchFilter from '$lib/SearchFilter.svelte';
	import Field from '$lib/Field.svelte';
	import Wave from '$lib/Wave.svelte';
	import Modal from '$lib/Modal.svelte';
	import Toast from '$lib/toast/Toast.svelte';
	import { toast } from '$lib/toast/toast.js';

	let isToggledStarted = false;
	let isToggledEnded = false;
	let items = ['David', 'Annie', 'Lisa', 'Patty', 'Christy', 'Don'];
	let search = '';
	let isModalOpen = false;
	function openModal() {
		isModalOpen = !isModalOpen;
		console.log('button clicked');
	}
	$: console.log(isModalOpen);
</script>

<h1>Welcome to Dave's UI -{search}</h1>

<Modal {isModalOpen}>
	<h1>This is at the top under Dave's UI heading but is relocated via a Portal</h1>
</Modal>
<button on:click={openModal}>Open Modal Form</button>

<button on:click={() => toast.send('New Message')}>Open Toast</button>
<button on:click={() => toast.send('New Message', { duration: 5000 })}>Duration 3000</button>
<button on:click={() => toast.send('Error Message', { duration: 5000, type: 'ERROR' })}
	>Error Message</button
>

<Toast duration={3000} />

<Toggle bind:isToggled={isToggledStarted} label="Started?" />
<Toggle bind:isToggled={isToggledEnded} label="Ended?" style="--toggleBtnColor:black" />

{#if isToggledStarted}
	<p>The isToggledStarted is toggled</p>
{/if}
{#if isToggledEnded}
	<p>The isToggledEnded is toggled</p>
{/if}

<BetterAccordion buttonText="What is the best way to get to the hotel?">
	<h1>Hotel Directions</h1>
	<p>
		After clearing the tunnel in Medellin, I you must drive to El Poblado. Once there, just look for
		the Santa Fe mall and it is almost nest to it. The hotel is just a few blocks away. Parking is
		free. Just give the keys the parking attendant and check in.
	</p>
</BetterAccordion>

<BetterAccordion buttonText="Is Breakfast Included?">
	<h1>Breakfast</h1>
	<p>A breakfast is included in the price of the room.</p>
</BetterAccordion>

<p>---------------</p>

<SearchFilter {items} bind:search />

<h1>Some text after the Search Filter</h1>

<Field bind:value={search} label="Search" instructions="Type to search" placeholder="Joe" />

<Wave />
