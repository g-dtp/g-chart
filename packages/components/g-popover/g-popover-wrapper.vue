<template lang='pug'>
	transition(name="fade-in")
		.g-popover-wrapper(:class="[_uid, position]" :style="styleObj")
			slot
				span span {{content}}
</template>

<script>
	import BaseWrapper from '../utils/popup/base-wrapper'

	export default {
		name: "g-popover-wrapper",
		extends: BaseWrapper,
		props: {
			content: {
				type: String,
				default: 'My Popover'
			}
		},
		data(){
			return {
			}
		},

		methods: {
			top(rect) {

			}
		}
	}
</script>
