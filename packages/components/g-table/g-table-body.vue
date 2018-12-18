<template lang='pug'>
	table.g-table-body(cellspacing="0" cellpadding="0" border="0")
		colgroup
			col(v-for='item in columns' :width='(100/columns.length)+"%"')
		tbody
			tr.el-table__row(v-for="(row, index) in data" :key="index")
				td(v-for="column in columns" :key="index+column.key" :class="[column.key]")
					.cell {{row[column.key]}}
</template>

<script>
	export default {
		name: "g-table-body",
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
	.g-table-body
		width 100%
		.cell
			color #52B8DF
			text-align center
			font-weight 500
</style>
