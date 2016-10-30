function Drag(tagname){
    this.obj = document.getElementsByTagName(tagname)[0];
    this.disX = 0;
    this.disY = 0;
	Drag.prototype.init = function() {
    // this指针
    var me = this;
    this.obj.onmousedown = function (e){
        var e = e || event;
        me.mouseDown(e);
        return false;
    };
};
Drag.prototype.mouseDown = function (e){
    var me = this;
    this.disX = e.clientX - this.obj.offsetLeft;
    this.disY = e.clientY - this.obj.offsetTop;
    document.onmousemove = function (e){
        var e = e || window.event;
        me.mouseMove(e);
    };  
    document.onmouseup = function (){
        me.mouseUp();
    }
};
Drag.prototype.mouseMove = function (e){
    this.obj.style.left = (e.clientX - this.disX) + 'px';
    this.obj.style.top = (e.clientY - this.disY) + 'px';
};
Drag.prototype.mouseUp = function (){
    document.onmousemove = null;
    document.onmouseup = null;
};
    this.init();
}
