<script>
	import GSerie from './base/g-serie'
	import {mapWatchs} from './base/utils'
	export default {
		extends: GSerie,
		name: "g-line",
		props: ['data', 'name', 'smooth', 'showSymbol'],
		data() {
			return {
				options: {
					type: 'line',
					...this.$props
				}
			}
		},
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		},
		watch:mapWatchs('updateOptions', this.$props)
	}
</script>
