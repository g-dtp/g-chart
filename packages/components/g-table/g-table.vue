<template lang='pug'>
	.g-table
		.g-table__header-wrapper
			slot(name="header")
				g-table-header(:columns="columns")
		.g-table__body-wrapper
			g-table-body(:columns="columns" :data="data")
</template>

<script>
	import GTableHeader from './g-table-header'
	import GTableBody from './g-table-body'
	export default {
		name: "g-table",
		components: {GTableHeader, GTableBody},
		props:{
				data:{
					type:Array,
					default:function () {
						return []
					}
				},
				columns: {
					type:Array,
					default: function () {
						return []
					}
				}

		}
	}
</script>

<style lang="stylus" scoped>
	.g-table
		color #333333
		font-size 14px
</style>
