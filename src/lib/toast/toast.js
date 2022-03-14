import { writable } from 'svelte/store';

const newToast = () => {
	const { subscribe, update } = writable([]);

	function send(message, { duration = 2000, type = 'INFO' } = {}) {
		const id = Math.floor(Math.random() * 1000);
		const newMessage = {
			id,
			duration,
			type,
			message
		};
		update((state) => {
			return [...state, newMessage]; // add new message to the array
		});
	}

	function remove(id) {
		update((state) => {
			let newState = state.filter((message) => {
				return message.id !== id;
			});
			return [...newState];
		});
	}

	return { subscribe, send, remove };
};

export const toast = newToast();
