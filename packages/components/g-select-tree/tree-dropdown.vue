<template lang='pug'>
	transition(name="fade-in" @after-leave="doClose")
		.g-select-tree__tree-dropdown(:style="styleObj" :class="[_uid, classname]" @click.stop="stop" @mousedown.stop="stop")
			.g-tree-dropdown__warp
				slot
</template>

<script>
	import BaseWrapper from '../utils/popup/base-wrapper'
	export default {
		name: "tree-dropdown",
		extends: BaseWrapper,
		methods:{
			doClose(){
				this.$emit('dropdown-leave')
			},
			stop(){}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
