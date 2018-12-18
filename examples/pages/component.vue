<template lang='pug'>
	.component
		div.chart-item
			g-popover(content="我是来自DEMO的Popover")
				button(slot='reference') some
			.g-select-row
				g-select(@change="onChange" v-model="city" :data="list")
			span(@click="oneClick") click
			g-dialog()
				span xxxx
</template>

<script>
	import {GPopup, GPopover, GSelect, GDialog} from '../../packages/index'

	export default {
		name: "ui-component",
		components: {GPopup, GPopover, GSelect, GDialog},
		data(){
			return {
				city: '',
				list:[
					{label:'杭州', value:'111101'},
					{label:'上海', value:'111102'},
					{label:'武汉', value:'111103'},
					{label:'南京', value:'111104'},
				]
			}
		},
		methods: {
			oneClick() {
			},
			onChange() {
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.chart-item
		height 100px
		overflow hidden
</style>
