var tableSchema = [
	{
		name: 'name',
		label: '姓名',
		sortable: false,
	}, {
		name: 'chinese',
		label: '语文',
		sortable: true,
	}, {
		name: 'math',
		label: '数学',
		sortable: true,
	}, {
		name: 'english',
		label: '英语',
		sortable: true,
	}, {
		name: 'total',
		label: '总分',
		sortable: true,
	}
];
var datas = [{
	name: '习习',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
}, {
	name: '涛涛',
	chinese: 60,
	math: 60,
	english: 60,
	total: 180
}, {
	name: '蛤蛤',
	chinese: 101,
	math: 101,
	english: 101,
	total: 303
},{
	name: '长者',
	chinese: 101,
	math: 101,
	english: 101,
	total: 303
},{
	name: '毛毛',
	chinese: 101,
	math: 81,
	english: 85,
	total: 266
},{
	name: '小平',
	chinese: 55,
	math: 101,
	english: 61,
	total: 227
},{
	name: '耀邦',
	chinese: 100,
	math: 101,
	english: 61,
	total: 262
},{
	name: '坦克',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '螳臂',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '当车',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '镇压',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '续命',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '肉饼',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '六四',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
},{
	name: '港记',
	chinese: 100,
	math: 100,
	english: 100,
	total: 300
}];
var t = new createTable('ui-table', tableSchema, datas);