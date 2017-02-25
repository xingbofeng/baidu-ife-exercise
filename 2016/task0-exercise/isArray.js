// 借鉴了相关库源码的isArray
isArray = function(obj) {
	return toString.call(obj) === '[object Array]';
};
// 我所想的isArray，上网查得知：在不同 iframe 中创建的 Array 并不共享 prototype
myIsArray = function (obj) {
	return obj instanceof Array;
}