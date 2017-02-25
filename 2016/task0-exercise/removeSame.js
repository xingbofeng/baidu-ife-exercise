Array.prototype.removeSame = function() {
	let theNewArray = [];
	// 构建新数组存放结果
	this.map((value, index, array) => {
		if (array.indexOf(value) === index) {
			theNewArray.push(value);
		}
	});
	return theNewArray;
};