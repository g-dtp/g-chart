<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
	export default {
		extends: GBase,
		name: "g-yAxis",
		props: {
			data: {
				default: function () {
					return []
				},
			},
			axisLabel: {
				default: function () {
					return {
						interval:0
					}
				}
			},
			min:{
				default: 0
			},
			axisTick: {
				default: function () {
					return {}
				}
			},
			axisLine: {
				default: function () {
					return {}
				}
			},
			splitLine: {
				default: function () {
					return {
						interval: function (index, value) {
							return index !== 0
						}
					}
				}
			},
			type:{
				default: 'value'
			}
		},
		data(){
			return {
				options: {
					...this.$props
				}
			}
		},
		beforeCreate() {
			this._type = 'yAxis'
		},
		watch: {
			...mapWatches('updateOptions', [
				'data',
				'axisLabel',
				'axisTick',
				'axisLine',
				'min',
				'type',
				'splitLine'
			])
		},
	}
</script>

