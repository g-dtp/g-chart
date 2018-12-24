<template lang='pug'>
	.g-option
		slot
			span {{option[label]}}
</template>

<script>
	export default {
		name: "g-option",
		props: {
			label:{
				type: String,
				default: 'label'
			},
			option: {
				type: Object,
				default: function () {
					return {}
				}
			}
		}
	}
</script>

