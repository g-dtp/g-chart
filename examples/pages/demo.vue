<template lang='pug'>
	.demo
		button(@click="onChange") change
		g-chart
			g-xAxis(:data="xAxisData")
			g-line(:data="list" :smooth="smooth")
</template>

<script>
	export default {
		name: "demo",
		data(){
			return {
				xAxisData: [],
				list: [],
				smooth: true
			}
		},
		created(){
			for(let i =0; i < 12;i++){
				this.xAxisData.push(i)
				this.list.push(Math.random(80)+5)
			}
		},
		methods: {
			onChange(){
				this.smooth = !this.smooth
			}
		}
	}
</script>

<style lang='stylus' scoped>

</style>
