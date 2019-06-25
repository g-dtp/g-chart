<script>
	import GSerie from './base/g-serie'
	import {mapWatches} from './base/utils'

	export default {
		extends: GSerie,
		name: 'g-area',
		props: {
			data: {
				default: function () {
					return []
				}
			},
			name: {},
			smooth: {},
			showSymbol: {},
			areaStyle: {
				default: function () {
					return {}
				}
			},
			lineStyle: {
				default: function () {
					return {}
				}
			},
			label: {},
			yAxisIndex: {
				default: 0
			}
		},
		data () {
			return {
				serie: {
					type: 'line',
					...this.$props
				}
			}
		},
		watch: {
			...mapWatches('updateOptions', [
				'data',
				'name',
				'smooth',
				'showSymbol',
				'areaStyle',
				'lineStyle',
				'label',
				'yAxisIndex'
			])
		}
	}
</script>
