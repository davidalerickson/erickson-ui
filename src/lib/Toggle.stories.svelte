<script>
	import { Meta, Story, Template, Canvas } from '@storybook/addon-svelte-csf';
	import Toggle from './Toggle.svelte';
</script>

<Meta title="Toggle" component={Toggle} />

<Template let:args>
	<Toggle {...args} />
</Template>

<Story name="default" />
<Story name="with args" args={{ label: 'Hello' }} />

---------------------
