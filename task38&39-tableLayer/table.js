var createTable = function(id, schema, datas) {
	this.tableElement = document.getElementById(id);
	this.schema = schema;
	this.datas = datas;

	this.init();
}
createTable.prototype.init = function() {
	var self = this;
	this.tableElement.innerHTML = '';
	var thead = document.createElement('thead');
	this.schema.forEach(function(field) {
		var tableHeader = document.createElement('th');
		thead.appendChild(tableHeader);
		tableHeader.textContent = field.label;
		if (field.sortable) {
			var up = document.createElement('i');
			var down = document.createElement('i');
			up.setAttribute('class', 'arrow-up');
			down.setAttribute('class', 'arrow-down');
			up.onclick = function() {
				self.sort(field.name, 'asc');
			}
			down.onclick = function() {
				self.sort(field.name, 'desc');
			}
			tableHeader.appendChild(up);
			tableHeader.appendChild(down);
		}
	})
	this.tableElement.appendChild(thead);
	var tbody = document.createElement('tbody');
	this.datas.forEach(function(data) {
		var tableRow = document.createElement('tr');
		self.schema.forEach(function(field) {
			var tableData = document.createElement('td');
			tableData.textContent = data[field.name];
			tableRow.appendChild(tableData);
			tbody.appendChild(tableRow);
		})
	})
	this.tableElement.appendChild(tbody);
	thead.style.position = "fixed";
	thead.style.width = this.tableElement.offsetWidth;
	tbody.style.display = "block";
	tbody.style.marginTop = thead.offsetHeight+"px";
	tbody.style.height = this.tableElement.offsetHeight/2+"px";
	tbody.style.overflow = "scroll";

};
createTable.prototype.sort = function(sortKey, direction) {
	this.datas.sort(function(a, b) {
		if (direction === 'desc') {
			return a[sortKey] > b[sortKey] ? -1 : 1;
		} else if (direction === 'asc') {
			return a[sortKey] < b[sortKey] ? -1 : 1;
		}
	});
	this.init();
};