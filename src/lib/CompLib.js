export function slide(node, isOpen) {
	console.log('node, isOpen', node, isOpen);
	//initialize
	let initialHeight = node.offsetHeight;

	let animation = node.animate([{ height: 0 }, { height: `${initialHeight}px` }], {
		duration: 200,
		fill: 'both',
		direction: isOpen ? 'reverse' : 'normal'
	});
	animation.pause();
	animation.onfinish = ({ currentTime }) => {
		if (!currentTime) {
			animation.reverse();
			animation.pause();
		}
		node.dispatchEvent(new CustomEvent('animationEnd'));
	};

	node.style.height = isOpen ? 'auto' : 0;
	node.style.overflow = 'hidden';
	return {
		update: (isOpen) => {
			animation.currentTime ? animation.reverse() : animation.play();
		}
	};
}

export function toggle(node, isToggled) {
	console.log('node, isToggled', node, isToggled);
	return {
		update: (isToggled) => {
			console.log(isToggled);
			console.log('checkbox: ', node.checked);
		}
	};
}
