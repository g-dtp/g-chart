<template lang='pug'>
	.g-select(@click.stop="onToggle")
		.g-select__label
			span.g-select__text {{value.label?value.label:placeholder}}
			i.g-select__icon-triangle
		g-select-dropdown(v-if='open')
			g-option(v-for="item in data" :key="item.value" @click.stop.native="onItem(item)" :option="item")
</template>

<script>
	import Clickoutside from '../utils/clickoutside.js'
	import GOption from './g-option'
	import GSelectDropdown from './g-select-dropdown'

	export default {
		directives: {Clickoutside},
		components: {GSelectDropdown, GOption},
		name: "g-select",
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			data: {
				default: function () {
					return []
				}
			},
			value: {
				default: function () {
					return {}
				}
			},
			placeholder: {
				default: '请选择'
			},
			show: {
				default: false
			}
		},
		provide() {
			return {
				'select': this
			};
		},
		data() {
			return {
				open: this.show
			}
		},
		mounted() {
			window.addEventListener("mousedown", this.closeByEvent);
		},
		beforeDestroy() {
			window.removeEventListener("mousedown", this.closeByEvent);
		},
		methods: {
			onItem(item) {
				this.$emit('change', item)
				this.handleClose()
			},
			closeByEvent() {
				//this.handleClose()
			},
			onToggle() {
				this.open = !this.open
			},
			handleClose() {
				this.open = false
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
		&__label
			font-size 0
			height 35px
			line-height 35px
		&__text
			display inline-block
			color #52B8DF
			font-size 14px
			margin-right 10px
			min-width 70px

		&__icon-triangle
			display inline-block
			width: 0;
			height: 0;
			border-bottom: 6px solid #52B8DF;
			border-left: 4px solid transparent;
			border-right: 4px solid transparent;
			border-top: none
</style>
