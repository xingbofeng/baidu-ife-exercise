var telephone = /^1[34578](\d){9}$/;
console.log(telephone.test("18812011232"));
console.log(telephone.test("18812312"));
console.log(telephone.test("12345678909"));
var repeatword = /\b(\w+)\b\s+\1\b/;
console.log(repeatword.test("foo foo bar"));
console.log(repeatword.test("foo bar foo"));
console.log(repeatword.test("foo  barbar bar"));