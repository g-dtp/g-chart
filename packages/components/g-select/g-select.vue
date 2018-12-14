<template lang='pug'>
	.g-select( @click.stop="onToggle" v-clickoutside="handleClose")
		.g-select__label
			span.g-select__text {{label}}
			i.g-select__icon-triangle
		g-select-dropdown(v-if="visible")
			g-option(v-for="(item,index) in data" :key="index" :option="item")
</template>

<script>
	import Clickoutside from '../utils/clickoutside.js'
	import GSelectDropdown from './g-select-dropdown'
	import GOption from './g-option'

	export default {
		directives: {Clickoutside},
		components: {GSelectDropdown, GOption},
		name: "g-select",

		props: {
			data: {
				default: function () {
					return []
				}
			},
			label: {
				default: '请选择'
			}
		},
		provide() {
			return {
				'select': this
			};
		},
		data() {
			return {
				visible: false
			}
		},
		methods: {
			onToggle() {
				this.visible = !this.visible;
			},
			handleClose() {
				this.visible = false;
			},
		}
	}
</script>

<style lang="stylus" scoped>
	.g-select
		display inline-block
		position relative
		overflow hidden
		background-color #003173
		cursor pointer
		padding 0 10px
		font-size 0
		&__label
			height 35px
			line-height 35px
		&__text
			color #52B8DF
			font-size 14px
			margin-right 10px
		&__icon-triangle
			display inline-block
			width: 0;
			height: 0;
			border-bottom: 6px solid #52B8DF;
			border-left: 4px solid transparent;
			border-right: 4px solid transparent;
			border-top: none
</style>
