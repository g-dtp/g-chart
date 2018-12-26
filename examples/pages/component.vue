<template lang='pug'>
	.component
		div.chart-item
			g-popover(content="我是来自DEMO的Popover2" :autoClose="false")
				div(slot='reference') some2
		.g-select-row
			g-select(@change="onChange" v-model="city" :data="list" :key="1")
		.g-select-tree-row
			g-select-tree(@change="onChange" v-model="value" :data="list")

</template>

<script>
	import {GPopup, GPopover, GSelect, GDialog, GTable, GSelectTree} from 'packages/index'

	export default {
		name: "ui-component",
		components: {GPopup, GPopover, GSelect, GDialog, GTable, GSelectTree},
		data() {
			return {
				city: '',
				value: '',
				list: [
					{label: '杭州', value: '111101'},
					{label: '上海', value: '111102'},
					{label: '武汉', value: '111103'},
					{label: '南京', value: '111104'},
				],
				list: [
					{
						label: '大区1', value: 1, children: [
							{
								label: '省份1', value: 11, children: [
									{label: '城市1', value: 111},
									{label: '城市2', value: 112}
								]
							}
						]
					},
					{label: '大区2', value: 2, children: []},
					{label: '大区3', value: 3, children: []}
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
</style>
