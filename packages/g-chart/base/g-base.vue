<script>
	import Emitter from '../../mixins/emitter'

	export default {
		name: "g-base",
		mixins: [Emitter],
		data() {
			return {
				options: {}
			}
		},
		inject: ['chartsOptions'],
		computed: {
			updateOptions() {
				return {...this.$props}
			}
		},
		watch: {
			'updateOptions'() {
				Object.keys(this.$props).forEach(key => {
					this.options[key] = this.$props[key]
				})
				this.dispatch('g-chart', 'update-options')
				this.$parent.render()
			}
		},
		render() {
		}
	}
</script>

