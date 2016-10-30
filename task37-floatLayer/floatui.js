var floatui = function(item, sure, cancel, login) {
	this.item = document.getElementById(item);
	this.sure = document.getElementById(sure);
	this.cancel = document.getElementById(cancel);
	this.login = document.getElementById(login);
	this.init();
}
floatui.prototype.init = function() {
	var self = this;
	self.hide();
	this.cancel.onclick = function() {
		self.hide();
		return false;
	}
	this.sure.onclick = function() {
		self.hide();
		return false;
	}
	this.login.onclick = function() {
		self.show();
		return false;
	}
	this.drag();
};
floatui.prototype.hide = function() {
	this.item.style.display = "none";
};
floatui.prototype.show = function() {
	this.item.style.display = "block";
};
floatui.prototype.drag = function() {
	var self = this;
	this.item.onmousedown = function(e) {
		var e = e || window.event;
		var disX = e.clientX - self.item.offsetLeft;
		var disY = e.clientY - self.item.offsetTop;
		document.onmousemove = function(e) {
			var e = e || window.event;
			self.item.style.left = (e.clientX - disX) + 'px';
			self.item.style.top = (e.clientY - disY) + 'px';
		}
		document.onmouseup = function() {
			document.onmousedown = null;
			document.onmousemove = null;
		}
	}
};