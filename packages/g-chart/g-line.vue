<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
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
		}
	}
</script>
