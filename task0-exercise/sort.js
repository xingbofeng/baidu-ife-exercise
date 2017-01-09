// js冒泡排序算法，传参为up或者down，默认为down
Array.prototype.bubbleSort = function(flag = 'down') {
	for (let i = 0; i < this.length - 1; i++) {
		for (let j = 0; j < this.length - i - 1; j++) {
			switch (flag.trim().toLowerCase()) {
				case 'up':
					{
						if (this[j] > this[j + 1]) {
							// 交换两个变量的值
							[this[j], this[j + 1]] = [this[j + 1], this[j]];
						}
						break;
					}
				case 'down':
					{
						if (this[j] < this[j + 1]) {
							// 交换两个变量的值
							[this[j], this[j + 1]] = [this[j + 1], this[j]];
						}
						break;
					}
			}
		}
	}
	return this;
}
// js快速排序算法，传参为up或者down，默认为down
Array.prototype.quickSort = function(flag = 'down') {
	// 结束递归
	if (this.length <= 1) {
		return this;
	}
	// 中间值
	const centerIndex = Math.ceil(this.length / 2);
	let left = [],
		right = [];
	// 找到中间值，并且把这个值从原数组中删掉
	const center = this.splice(centerIndex, 1)[0];
	if (flag.trim().toLowerCase() === 'up') {
		for (let i = 0; i < this.length; i++) {
			if (this[i] <= center) {
				// 小于放左边
				left.push(this[i]);
			} else {
				// 大于放右边
				right.push(this[i]);
			}
		}
	} else if (flag.trim().toLowerCase() === 'down') {
		for (let i = 0; i < this.length; i++) {
			if (this[i] >= center) {
				// 大于放左边
				left.push(this[i]);
			} else {
				// 小于放右边
				right.push(this[i]);
			}
		}
	}
	return left.quickSort(flag).concat([center], right.quickSort(flag));
}
// js选择排序算法，传参为up或者down，默认为down
Array.prototype.selectSort = function(flag = 'down') {
	switch (flag.trim().toLowerCase()) {
		case 'up':
			{
				for (let i = 0; i < this.length - 1; i++) {
					let min = i;
					for (let j = i + 1; j < this.length; j++) {
						if (this[min] > this[j]) {
							min = j;
						}
					}
					[this[i], this[min]] = [this[min], this[i]];
				}
				break;
			}
		case 'down':
			{
				for (let i = 0; i < this.length - 1; i++) {
					let max = i;
					for (let j = i + 1; j < this.length; j++) {
						if (this[max] < this[j]) {
							max = j;
						}
					}
					[this[i], this[max]] = [this[max], this[i]];
				}
				break;
			}
	}
	return this;
}