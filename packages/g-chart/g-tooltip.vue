<script>
	import GBase from './base/g-base'
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
		}
	}
</script>
