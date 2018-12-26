<template lang='pug'>
	.g-select(@click.stop="onToggle" @mousedown.stop="stop")
		.g-select__label
			span.g-select__text {{value[labelKey]?value[labelKey]:placeholder}}
			svg.gs-icon.gs-icon-md-arrow-dropdown(aria-hidden="true")
				use(xlink:href="#gs-icon-md-arrow-dropdown")
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
				'reference': this
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
			onLeave(){},
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

