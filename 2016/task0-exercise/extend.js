// 用cloneObj实现深复制
function cloneObj(obj) {
	// 首先判断是否是对象，不是我们就抛出异常
	if (typeof obj !== 'object') {
		throw 'your argument is not object!';
		return;
	} else if (typeof obj === 'object') {
		if (Array.isArray(obj)) {
			let newArr = [];
			for (let i = 0; i < obj.length; i++) {
				newArr.push(obj[i]);
			}
			return newArr;
		} else if (obj instanceof Date) {
			// 对Date的特殊处理
			return new Date(obj.valueOf());
		} else if (obj instanceof RegExp) {
			// 对RegExp的特殊处理，借鉴了上海交大邹润阳的博客
			var pattern = obj.valueOf();
			var flags = '';
			flags += pattern.global ? 'g' : '';
			flags += pattern.ignoreCase ? 'i' : '';
			flags += pattern.multiline ? 'm' : '';
			return new RegExp(pattern.source, flags);
		} else {
			// 对于常规对象的处理
			const keys = Object.keys(obj);
			let newObj = {};
			for (let i = 0; i < keys.length; i++) {
				if (obj[keys[i]] === null || obj[keys[i]] === undefined || typeof obj[keys[i]] !== 'object') {
					// 对键值为非对象值的处理
					newObj[keys[i]] = obj[keys[i]];
				} else {
					// 否则做递归处理
					newObj[keys[i]] = cloneObj(obj[keys[i]]);
				}
			}
			return newObj;
		}
	}
}
// 实现extend
function extend() {
	let newArguments = [];
	for(let i in arguments) {
		// 遍历对象，对每个对象进行深复制然后push给newArguments
		newArguments.push(cloneObj(arguments[i]));
	}
	// 使用Object.assign拼接
	const obj = Object.assign(...newArguments);
	return obj;
}