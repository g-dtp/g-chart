<template lang='pug'>
	table.g-table-header(cellspacing="0" cellpadding="0" border="0")
		colgroup
			col(v-for='item in columns' :width='(100/columns.length)+"%"')
		thead
			tr
				th(v-for='item in columns')
					.cell {{item.name}}

</template>

<script>
	export default {
		name: "g-table-header",
		props:{
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
	.g-table-header
		width 100%
		th
			color #52B8DF
			text-align center
			font-weight 500
</style>
