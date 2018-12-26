<template lang='pug'>
	transition(name="fade-in" @after-leave="doClose")
		.g-select-dropdown(:style="styleObj" :class="[_uid, classname]" @click.stop="stop" @mousedown.stop="stop")
			.g-select-dropdown__warp.g-select-dropdown__list
				slot
</template>

<script>
	import BaseWrapper from '../utils/popup/base-wrapper'
	import GOption from './g-option'

	export default {
		name: "select-dropdown",
		components: {GOption},
		extends: BaseWrapper,
		data() {
			return {
			}
		},
		methods: {
			stop(e) {
				e.stopPropagation()
				e.preventDefault()
			},
			doClose() {
				this.$emit('dropdown-leave')
			}
		}
	}
</script>
