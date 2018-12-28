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
						interval: 0,
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
			type: {
				default: 'category'
			},
			boundaryGap: {
				default: function () {
					return [10, 10]
				}
			},
			showMarkLine:{
				default: -1
			}
		},
		data() {
			return {
				options: {
					...this.$props,
				}
			}
		},
		beforeCreate() {
			this._type = 'xAxis'
		},
		created() {
			if(this.showMarkLine) this.markLine()
		},
		methods: {
			markLine() {}
		}
	}
</script>

<style lang="stylus" scoped>

</style>
