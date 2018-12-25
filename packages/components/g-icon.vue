<template lang='pug'>
	svg.icon(aria-hidden="true")
		use(xlink:href="`#${icon-class}`")
</template>

<script>
	export default {
		name: "g-icon",
		props:['icon-class']
	}
</script>

<style lang="stylus" scoped>

</style>
