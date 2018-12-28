<script>
	import GBase from './base/g-base'
	export default {
		extends: GBase,
		name: "g-graphic",
		props: {
			elements: {
				default:function () {
					return []
				}
			}
		},
		data(){
			return {
				options: {
					...this.$props
				}
			}
		},
		beforeCreate() {
			this._type = 'graphic'
		}
	}
</script>
