function analyzed (arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let leng = arr.length;
	let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
	let aver = sum / arr.length
	
	let result = {
		average: aver,
		min: min,
		max: max,
		length: leng
	}
	return result;
}
console.log(analyzed([1,8,3,4,2,6]));
export {analyzed}