<script>
	export default {
		name: "base-wrapper",
		props:{
			uid: String,
			position:String,
		},
		data(){
			show: false
		},
		destroyed() {
			this.$emit('destroyed')
		}
	}
</script>
