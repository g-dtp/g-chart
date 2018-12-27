<script>
	import GSerie from './base/g-serie'
	export default {
		mixins:[GSerie],
		name: "g-bar",
		props: ['data', 'name', 'barMaxWidth', 'barWidth', 'itemStyle'],
		data(){
			return {
				serie:{
					type: 'bar',
					...this.$props,
				}
			}
		},
		watch:{
			'data'(value){
				this.serie.data = value
				this.$chart.resizeChart()
			},
			'name'(value){
				this.serie.name = value
				this.$chart.resizeChart()
			},
			'barMaxWidth'(value){
				this.serie.barMaxWidth = value
				this.$chart.resizeChart()
			},
			'barWidth'(value){
				this.serie.barWidth = value
				this.$chart.resizeChart()
			},
			'itemStyle'(value){
				this.serie.itemStyle = value
				this.$chart.resizeChart()
			},
		}
	}
</script>
