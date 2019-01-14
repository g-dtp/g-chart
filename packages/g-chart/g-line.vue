<script>
	import GSerie from './base/g-serie'
	import {mapWatches} from './base/utils'

	export default {
		extends: GSerie,
		name: "g-line",
		props: ['data', 'name', 'smooth', 'showSymbol', 'itemStyle', 'lineStyle', 'label'],
		data() {
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
				'label'
			])
		}
	}
</script>
