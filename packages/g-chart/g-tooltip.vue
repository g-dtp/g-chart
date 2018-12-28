<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
	export default {
		extends: GBase,
		name: "g-tooltip",
		props: {
			trigger: {
				default: 'axis'
			},
			axisPointer: {
				default: function () {
					return {
						type: 'shadow'
					}
				}
			},
		},
		data() {
			return {
				options: {}
			}
		},
		created(){
			this.chartsOptions.tooltip = {...this.options}
		},
		watch:{
			...mapWatches('updateOptions', [
				'trigger',
				'axisPointer'
			])
		}
	}
</script>
