<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'

	export default {
		extends: GBase,
		name: 'g-xAxis',
		props: {
			data: {
				default: function () {
					return []
				}
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
			axisPointer: {},
			showMarkLine: {
				default: -1
			}
		},
		data () {
			return {
				options: {
					...this.$props
				}
			}
		},
		beforeCreate () {
			this._type = 'xAxis'
		},
		created () {
			if (this.showMarkLine) this.markLine()
		},
		watch: {
			...mapWatches('updateOptions', [
				'data',
				'axisLabel',
				'axisTick',
				'axisLine',
				'type',
				'boundaryGap',
				'showMarkLine',
				'axisPointer'
			])
		},
		methods: {
			markLine () {
			}
		}
	}
</script>

<style lang='stylus' scoped>

</style>
