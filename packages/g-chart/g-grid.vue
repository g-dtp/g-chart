<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-grid",
		props: {
			containLabel: {
				default: true
			},
			left: {
				default: '5%'
			},
			right: {
				default: '5%'
			},
			bottom: {
				default: '5%'
			},
			top: {
				default: '5%'
			}
		},
		data() {
			return {
				options: {
					...this.$props,
				}
			}
		},
		created() {
			this.chartsOptions.grid = {...this.options}
		}
	}
</script>
