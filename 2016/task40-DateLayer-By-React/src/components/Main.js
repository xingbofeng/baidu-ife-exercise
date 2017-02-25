require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
// import ReactDOM from 'react-dom';
// 引入React以及ReactDOM

class DatePickerByReact extends React.Component {
	constructor(props) {
		super(props);
		this.date = new Date();
		this.state = {
			date : [
				{
					year : this.date.getFullYear(),
					month : this.date.getMonth()+1,
					day : this.date.getDate()
				}
			]
		};

		this.days = ['日', '一', '二', '三', '四', '五', '六'];
		this.getPreMonth = this.getPreMonth.bind(this);
		this.getAfterMonth = this.getAfterMonth.bind(this);
		this.RenderTable = this.RenderTable.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	// 获取向前一个月
	getPreMonth (event) {
		event.stopPropagation();
		event.preventDefault();
		this.date.setMonth(this.date.getMonth()-1);
		this.setState({
			date : [
				{
					year : this.date.getFullYear(),
					month : this.date.getMonth()+1,
					day : this.date.getDate()
				}
			]
		});
	}

	// 获取向后一个月

	getAfterMonth (event) {
		event.stopPropagation();
		event.preventDefault();
		this.date.setMonth(this.date.getMonth()+1);
		this.setState({
			date : [
				{
					year : this.date.getFullYear(),
					month : this.date.getMonth()+1,
					day : this.date.getDate()
				}
			]
		});
	}


	componentDidMount () {

		// this.refs.{num : 10 ,flag : 'thismonth'}.click();
	}


	handleClick (event) {
		event.stopPropagation();
		event.preventDefault();

		var DOMObj = event.target;
		// DOMObj.style.backgroundColor = 'rgb(200, 27, 1)';
		// DOMObj.style.color = 'white';
		if (DOMObj.className === 'lastmonth') {
			this.getPreMonth(event);
		}
		else if (DOMObj.className === 'nextmonth') {
			this.getAfterMonth(event);
		}
		this.date.setDate(DOMObj.innerText);
		this.setState({
			date : [
				{
					year : this.date.getFullYear(),
					month : this.date.getMonth()+1,
					day : this.date.getDate()
				}
			]
		});

	}
	// 获取一个月到底有多少天，并返回1~n的数组

	RenderTable (date) {
		var num = new Date(date.getFullYear(), (date.getMonth()+1), 0).getDate();
		var arr = [];
		// 获取本月第一天是周几

		var firstday = this.getDayOfTheFirstDay (date);

		// 获取上个月有多少天

		var lastnum = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
		// 获取下个月有多少天

		// var nextnum = new Date(date.getFullYear(), (date.getMonth()+2), 0).getDate();
		for (let i = 1; i <= firstday; i++) {
			arr.push({
				num : lastnum-firstday+i,
				flag : 'lastmonth'
			});
		}
		for (let i = 1; i <= num; i++) {
			arr.push({
				num : i,
				flag : 'thismonth'
			});
		}
		var l = arr.length;
		for (let i = 1; i <= (42-l); i++) {
			arr.push({
				num : i,
				flag : 'nextmonth'
			});
		}
		return arr;
	}

	// 获取本月一号是星期几

	getDayOfTheFirstDay (date) {
		var num = new Date(date.getFullYear(),(date.getMonth()),1).getDay();
		return num;
	}
	render() {
		return (
				<div className='DatePicker'>
					<header>
						<strong>{this.state.date[0].year}年{this.state.date[0].month}月</strong>
						<strong className='leftPoint' onClick={this.getPreMonth}>{'<-'}</strong>
						<strong className='rightPoint' onClick={this.getAfterMonth}>{'->'}</strong>
					</header>
						{this.days.map((value,index) => {
							return (value === '六')||(value === '日') ? (<span className='weekend' key={index}>{value}</span>) : (<span className='days' key={index}>{value}</span>);
						})}
					<section>
						{this.RenderTable(this.date).map((value,index) => {
							return (<span className={value.flag} key={index} onClick={this.handleClick} ref= {value}>{value.num}</span>);
						})}
					</section>
				</div>
			);
		}
	}
DatePickerByReact.defaultProps = {
};

export default DatePickerByReact;
