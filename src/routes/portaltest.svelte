<script>
	import Modal from '$lib/Modal.svelte';
	let isModalOpen = false;
</script>

<h1>Modal Test</h1>
<button on:click={() => (isModalOpen = true)}>Open Modal</button>

<Modal bind:isModalOpen>
	<div style="background:white">
		<h1>Modal</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, autem, commodi, cumque
			doloremque dolorum ea eaque eius enim error esse et eum ex explicabo facilis fugiat fugit
			harum hic illo impedit in inventore ipsa ipsum iste itaque iure laboriosam libero magni maxime
			molestiae nam natus necessitatibus nemo neque nihil nisi nostrum nulla obcaecati odit officia
			omnis optio pariatur perferendis perspiciatis porro quae quam quas quia quibusdam quis quod
		</p>
	</div>
</Modal>
