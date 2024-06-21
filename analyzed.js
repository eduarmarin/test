var arr = [1,8,3,4,2,6]

analyzed (arr)

function analyzed (arr) {
		let leng = Object.keys(arr).lenght;
		console.log(leng)
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
    var aver = sum / arr.lenght
		console.log(sum); 
}