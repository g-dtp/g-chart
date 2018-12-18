<script>
	import PopupManager from './popup/popup-manager.js'
	import {uid} from './utils'
	export default {
		name: "vue-popup",
		props: {
			transformOrigin: {
				type: [Boolean, String],
				default: true
			},
			placement: {
				type: String,
				default: 'bottom'
			},
			boundariesPadding: {
				type: Number,
				default: 5
			},
			reference: {},
			popper: {},
			offset: {
				default: 0
			},
			value: Boolean,
			visibleArrow: Boolean,
			arrowOffset: {
				type: Number,
				default: 35
			},
			appendToBody: {
				type: Boolean,
				default: true
			},
			popperOptions: {
				type: Object,
				default() {
					return {
						gpuAcceleration: false
					};
				}
			}
		},
		data() {
			return {
				showPopper: false,
				currentPlacement: ''
			}
		},
		beforeCreate() {
			this._uid = uid()
		},
		mounted(){
			this.createPopper()
		},
		methods: {
			createPopper(){
				this.currentPlacement = this.currentPlacement || this.placement;
				if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.currentPlacement)) {
					return;
				}
				const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
				let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;
				if(this.appendToBody) {
					document.body.appendChild(this.$el)
				}
			}
		}
	}
</script>
