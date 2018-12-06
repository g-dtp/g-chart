let originalWidth = parseInt(document.documentElement.getAttribute('data-original-width'), 10) || 3840;
const resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
let timer
class Resize {
	constructor() {
		this.scale = 1
		this.callback = null
	}

	addEvent(callback) {
		if (callback) this.callback = callback
		window.addEventListener(resizeEvent, this.resize.bind(this), false);
		document.addEventListener('DOMContentLoaded', this.resize.bind(this), false);
	}

	resize() {
		if(timer) window.clearTimeout(timer)
		timer = setTimeout(() => {
			let clientWidth = document.documentElement.clientWidth;
			if (!clientWidth) return;
			this.scale = clientWidth / originalWidth;
			document.documentElement.style.fontSize = 100 * (clientWidth / originalWidth) + 'px';
			if (this.callback) this.callback()
		},10)
	}
}

const s = new Resize()

export default s
