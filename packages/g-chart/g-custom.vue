<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-custom",
		props: ['data', 'name', 'itemStyle', 'renderItem'],
		data(){
			return {
				options:{
					type: 'custom',
					...this.$props,
				}
			}
		},
		created(){
			if(!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		},
	}
</script>
