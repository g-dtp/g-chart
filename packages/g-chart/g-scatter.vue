<script>
	import GSerie from './base/g-serie'

	export default {
		extends: GSerie,
		name: 'g-scatter',
		props: {
			coordinateSystem: {
				default: 'singleAxis'
			},
			data: {
				default: function () {
					return []
				}
			}
		},
		data () {
			return {
				serie: {
					...this.$props,
					type: 'scatter'
				}
			}
		}
	}
</script>
