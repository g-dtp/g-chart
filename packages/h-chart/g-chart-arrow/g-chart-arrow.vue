<template lang='pug'>
	g-chart()
		g-graphic(:elements="group" :key="1")
</template>

<script>
	import GChart from '../../g-chart/g-chart'
	import echarts from 'echarts'
	import GGraphic from '../../g-chart/g-graphic'
	import resize from '../../utils/resize'

	const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAQCAYAAABpyU3qAAAAAXNSR0IArs4c6QAAAltJREFUSA3tls1rE1EQwGdms3HVpia5SAXxpJ7tWkTpxUvFgwgtDcV/wYNXT6J/g2dvJhZ7KYoH8WCRUrKNWRpKLWUrTUlLU0LSKIWUkL5xdktLEgNZk5bk4MLyvubjt/Nm3j6ANg8zYxuRniz/BbWfuHO5CrVnQvMIgK8Dg86IBWk3ENgBpDUkXNWU+hEaCq3j/blaL8gbwItxc1Ig3ghwyA8MIlRFblXeZQBaZlaZc7qWGYil8n70u5E5AS8lzFExNCepoXVj0NNF3EVmGxBs+bg0BA07MrGw2bXdOgMe+K/3d6OHteqSQF+tWzvVLgIWpVpscfhdUs3SlZYceGLtdurEAy8mzFfA/KJTI53qifNN0U0ikaWYktHAtTTGZtz0a/t44JImtkT7VlvpMxfAAzkAFhnwm4b89dLQ4IIU/0Ert0cRj5u//RZkKyNnN4cCzfOE8EnS62N4Kv3z2NdRxOPDewwQPp7s4zZFRK/DU6m35EIKtNPHsPVoI0qp55WZe1cC7iwRflCKR+ol+qbvHq3AlvDMY0D7Eomlllw2L1XK8dGIwsq6FGi0d8BSmMhrwLgiObAChBkjGMhcmLC2WjF54O5Cafr2Q1BqlhmCrQRPY87908rVR64O4LBcH+RsdwjIYUN3wuNjOcSXyq+fE3BXoTxtDh8qeCdn+g2/BhrkECsyzol+TjYzSwRZZsqCxhsG6tnzkw92/gWuwXbToAHcXePPYxf3iqWnAOqxbNtNiYwBiPtSwWWJWEEKuSBtHhnyCnkHFW2jRttaELYGxxeLTfb/D5sj8AfeTtqqFz+MzQAAAABJRU5ErkJggg=="
	export default {
		name: "g-chart-arrow",
		props: {
			backgroundColor: {
				default: function () {
					return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(156,202,240,0.30)'
					}, {offset: 1, color: '#9CCAF0'}])
				}
			},
			percent: {
				default: .3
			},
			maxR: {
				default: 75
			},
			minR: {
				default: 55
			}
		},
		components: {GChart, GGraphic},
		data() {
			return {
				group:[
					{
						type: 'group',
						silent: true,
						left: 'center',
						top: 'middle',
						width:1,
						height:1,
						children: [
							{
								type: 'sector',
								silent: true,
								shape: {
									cx: 0,
									cy: 0,
									r: this.maxR  * resize.scale,
									r0: this.minR * resize.scale,
									startAngle: 0,
									endAngle: 2 * Math.PI
								},
								style: {
									fill: "rgba(15, 33, 83, 1)",
								}
							},
							{
								type: 'sector',
								silent: true,
								rotation: Math.PI * .5,
								shape: {
									r: this.maxR  * resize.scale,
									r0: this.minR  * resize.scale,
									startAngle: 0,
									endAngle: 2 * Math.PI * this.percent
								},
								style: {
									fill: this.backgroundColor
								}
							},{
								type: 'image',
								origin: [8 * resize.scale , 8 * resize.scale],
								position: [-8 * resize.scale, -8 * resize.scale],
								rotation: Math.PI * .5 - 2 * Math.PI * this.percent,
								style: {
									image: arrow,
									width: 46 * resize.scale,
									height: 16 * resize.scale
								}
							}
						],
					},
				]
			}
		}

	}
</script>

<style lang="stylus" scoped>

</style>
