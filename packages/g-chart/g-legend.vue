<script>
	import GBase from './base/g-base'
	import {mapWatches} from './base/utils'
	export default {
		extends: GBase,
		name: "g-legend",
		props:{
			data:{
				default:function () {
					return []
				}
			},
			left: {
				default: 'auto'
			},
			right: {
				default: 'auto'
			},
			bottom: {
				default: 'auto'
			},
			top: {
				default: 'auto'
			},
			orient: {
				default: 'horizontal'
			},
			width: {
				default: 'auto'
			},
			height: {
				default: 'auto'
			}
		},
		watch:{
			...mapWatches('updateOptions',[
				'data',
				'left',
				'top',
				'right',
				'bottom',
				'orient',
				'width',
				'height'
			])
		},
		data(){
			return {
				options:{
					...this.$props,
				}
			}
		},
		beforeCreate() {
			this._type = 'legend'
		}
	}
</script>
