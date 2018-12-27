export const mapWatches = (fName,props) => {
	if(!props) return
	let map = {}
	let list
	if(typeof props.constructor === Object){
		list = Object.keys(props)
	}else{
		list = [...props]
	}
	list.forEach(item => {
		map[item] = fName
	})
	return map
}
