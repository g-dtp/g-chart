<template lang='pug'>
	.d-dialog(:class="[_uid]")
		slot
</template>

<script>
	import VuePopup from '../utils/vue-popup'
	export default {
		name: "d-dialog",
		extends:VuePopup
	}
</script>

<style lang="stylus" scoped>

</style>
