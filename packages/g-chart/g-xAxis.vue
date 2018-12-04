<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-xAxis",
		props: {
			data: {
				default: function () {
					return []
				},
			},
			axisLabel: {
				default: function () {
					return {
						interval:0,
						fontSize: 12
					}
				}
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
			type:{
				default: 'category'
			},
			boundaryGap:{
				default: function () {
					return [10,10]
				}
			}
		},
		data() {
			return {
				options: {
					...this.$props,
				}
			}
		},
		created() {
			this.chartsOptions.xAxis = {...this.options}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
