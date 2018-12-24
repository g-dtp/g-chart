<template lang='pug'>
	.g-select(@click.stop="onToggle" @mousedown.stop="stop")
		.g-select__label
			span.g-select__text {{value[labelKey]?value[labelKey]:placeholder}}
			i.g-select__icon-triangle
		g-select-dropdown(v-if='open' :class="[selectClass]" @dropdown-leave="onLeave")
			.g-option(v-if='showBack' @click="goBack")
				span 返回
			g-option(v-for="item in data" :key="item[valueKey]" @click.stop.native="onItem(item)" :option="item" :label="labelKey" :class="{current:item == value}")
</template>

<script>
	import GOption from './g-option'
	import GSelectDropdown from './g-select-dropdown'

	export default {
		components: {GSelectDropdown, GOption},
		name: "g-select",
		model: {
			prop: 'value',
			event: 'change'
		},
		props: {
			selectClass: {
				default:''
			},
			showBack: {
				default:false
			},
			labelKey: {
				default:'label'
			},
			valueKey: {
				default:'value'
			},
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
			onLeave(){

			},
			onItem(item) {
				this.$emit('change', item)
				this.handleClose()
			},
			goBack(){
				this.handleClose()
				this.$emit('go-back')
			},
			closeByEvent() {
				this.handleClose()
			},
			onToggle() {
				this.open = !this.open
			},
			handleClose() {
				this.open = false
			},
			stop(){
			}
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
