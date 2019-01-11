<script>
	import GSerie from './base/g-serie'
	import {mapWatches} from './base/utils'
	export default {
		mixins:[GSerie],
		name: "g-bar",
		props: ['data', 'name', 'barMaxWidth', 'barWidth', 'itemStyle', 'label'],
		data(){
			return {
				serie:{
					type: 'bar',
					...this.$props,
				}
			}
		},
		watch:{
			...mapWatches('updateOptions',[
				'data', 'name', 'barMaxWidth', 'barWidth', 'itemStyle', 'label'
			])
		}
	}
</script>
