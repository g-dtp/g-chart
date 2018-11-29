<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-bar",
		props: ['data', 'name'],
		data(){
			return {
				options:{
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

<style lang="stylus" scoped>

</style>
