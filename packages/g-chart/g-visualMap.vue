<script>
	import GBase from './base/g-base'
	export default {
		name: "g-visualMap",
		extends: GBase,
		props:{
			min: {
				default:0
			},
			max: {
				default: 10
			},
			orient: {
				default: 'horizontal'
			},
			show: {
				default: false
			}
		},
		data(){
			return {
				options:{
					...this.$props,
					calculable: true,
				}
			}
		},
		beforeCreate() {
			this._type = 'visualMap'
		}
	}
</script>
