<script>
	import GSerie from './base/g-serie'
	import {mapWatchs} from './base/utils'
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
			...mapWatchs('updateOptions', this.$props)
		}
	}
</script>
