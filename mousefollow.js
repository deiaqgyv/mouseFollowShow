;(function($,win){
	var MOUSEFOLLOW = function(option){
		this.obj = option.obj;
		this.moveover = option.moveover;
		this.moveout = option.moveout;
	}
	MOUSEFOLLOW.prototype.move = function(){
		if(this.obj === "" || this.obj === null || this.obj === "undefinded") {
			alert("缺少对象!");
			return false;
		}
		var _self = this;
		function mo(t,x,y){
			$.isFunction(_self.moveover) ? _self.moveover(t,x,y) : ""
		}
		$(_self.obj).on("mouseover",function(e){
			mo($(this),e.pageX,e.pageY);
		}).on("mousemove",function(e){
			mo($(this),e.pageX,e.pageY);
		}).on("mouseout",function(){
			$.isFunction(_self.moveout) ? _self.moveout() : ""
		})
	}
	return win.MOUSEFOLLOW = MOUSEFOLLOW;
})(jQuery,window);