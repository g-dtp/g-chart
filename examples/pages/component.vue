<template lang='pug'>
	.component
		div.chart-item
			g-popover(content="我是来自DEMO的Popover")
				button(slot='reference') some
			g-popover(content="我是来自DEMO的Popover2")
				div(slot='reference') some2
			.g-select-row
				g-select(@change="onChange" v-model="city" :data="list")
			span(@click="oneClick") click
			g-dialog()
				span xxxx
			g-table(:data="list" :columns="columns")
</template>

<script>
	import {GPopup, GPopover, GSelect, GDialog, GTable} from '../../packages/index'

	export default {
		name: "ui-component",
		components: {GPopup, GPopover, GSelect, GDialog, GTable},
		data() {
			return {
				city: '',
				list: [
					{label: '杭州', value: '111101'},
					{label: '上海', value: '111102'},
					{label: '武汉', value: '111103'},
					{label: '南京', value: '111104'},
				],
				columns: [
					{name: '名字', key: 'name'},
					{name: '年龄', key: 'age'}
				],
				list: [
					{name: 'Able', age: 23},
					{name: 'Baker', age: 23},
					{name: 'Charlie', age: 23},
					{name: 'Dog', age: 23},
					{name: 'Easy', age: 23},
					{name: 'Fox', age: 23}
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
