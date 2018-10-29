<script>
	export default {
		name: "g-bar",
		props: ['data', 'name'],
		data(){
			return {
				options:{
					...this.$props,
					type:'bar',
					itemStyle: {
						normal: {color: 'rgba(0,0,0,0.05)'}
					},
				}
			}
		},
		inject:['chartsOptions'],
		created(){
			if(!this.chartsOptions.series) this.chartsOptions.series = []
			this.chartsOptions.series.push(this.options)
		},
		render() {}
	}
</script>

<style lang="stylus" scoped>

</style>
