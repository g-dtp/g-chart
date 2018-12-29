<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
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
		},
		watch:{
			...mapWatches('updateOptions',[
				'elements'
			])
		},
	}
</script>
