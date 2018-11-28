<script>
	import GBase from './base/g-base'

	export default {
		extends: GBase,
		name: "g-line",
		props: ['data', 'name', 'smooth'],
		data() {
			return {
				options: {
					type: 'line',
					...this.$props
				}
			}
		},
		computed:{
			updateOptions (){
				Object.keys(this.$props).forEach(key => {
					this.options[key] = this.$props[key]
				})
				return {
					...this.$props
				}
			}
		},
		watch:{
			'updateOptions' (){
				this.$parent.render()
			}
		},
		created() {
			if (!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		}
	}
</script>
