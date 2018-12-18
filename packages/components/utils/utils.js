const now = +(new Date());
let index = 0;

export const uid = () => {
	return `gs-${now}-${++index}`;
};
