<script>
	import GBase from './base/g-base'
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
		created(){
			this.chartsOptions.yAxis = {...this.options}
		}
	}
</script>

