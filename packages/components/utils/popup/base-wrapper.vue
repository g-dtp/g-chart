<script>
	export default {
		name: "base-wrapper",
		props:{
			uid: String,
			position:String,
			Gap:Number,
			data:[String, Array, Object, Number]
		},
		data(){
			show: false
		},
		beforeDestroy(){
			console.log('beforeDestroy')
		},
		destroyed() {
			console.log('destroyed')
		}
	}
</script>
