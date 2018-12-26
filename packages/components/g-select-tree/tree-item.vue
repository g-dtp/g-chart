<template lang='pug'>
	.g-select-tree__tree-item(@click.stop="onItem(option)")
		.g-select-tree__tree-item__label(:class="{'g-select-tree__tree-item__current': current}")
			slot(name="label")
				span {{option[label]}}
		transition(name="g-list")
			.g-select-tree__tree-item__sub-warp(v-if='option[children] && open')
				tree-item(v-for='item in option[children]' :key="item[value]" :option="item" :label="label" :class="{current:item == value}")

</template>

<script>
	import TreeItem from './tree-item'

	export default {
		name: "tree-item",
		components: {TreeItem},
		inject: ['reference'],
		props: {
			children: {
				type: String,
				default: 'children'
			},
			label: {
				type: String,
				default: 'label'
			},
			value: {
				type: String,
				default: 'value'
			},
			option: {
				type: Object,
				default: function () {
					return {}
				}
			}
		},
		data() {
			return {
				open:false
			}
		},
		computed:{
			current(){
				return this.reference.value === this.option
			}
		},
		methods:{
			onItem(){
				this.open = !this.open
				if(!this.option[this.children]){
					this.reference.onClickOption(this.option)
				}
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
