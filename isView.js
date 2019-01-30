function isView(htmlSelect){
	//get用于计算的一些value
	var viewOverTop = $(window).scrollTop();
	var viewOverLeft = $(window).scrollLeft();
	var viewHeight = $(window).height();
	var viewWidth = $(window).width();
	var eOverTopDoc = $(htmlSelect).offset().top;
	var eOverLeftDoc = $(htmlSelect).offset().left;
	var eHeight = $(htmlSelect).outerHeight();
	var eWidth = $(htmlSelect).outerWidth();
	if(arguments.length>1){
		viewOverLeft+=arguments[1];
		viewOverTop+=arguments[2];
		viewHeight-=arguments[2]+arguments[4];
		viewWidth-=arguments[1]+arguments[3];
	}

	var offset = new Object;
	//计算Y轴的偏移
	var flag1 = 2;
	if(viewOverTop>eOverTopDoc)flag1=1;
	else if(viewOverTop+viewHeight<eOverTopDoc+eHeight)flag1=3;
	if(flag1 == 1){offset.y=-(viewOverTop-eOverTopDoc);}
	if(flag1 == 3){offset.y=eOverTopDoc+eHeight-(viewOverTop+viewHeight);}
	if(flag1 == 2){offset.y=0;}
	//计算X轴的偏移
	var flag2 = 2;
	if(viewOverLeft>eOverLeftDoc)flag2=1;
	else if(viewOverLeft+viewWidth<eOverLeftDoc+eWidth)flag2=3;
	if(flag2 == 1){offset.x=-(viewOverLeft-eOverLeftDoc);}
	if(flag2 == 3){offset.x=eOverLeftDoc+eWidth-(viewOverLeft+viewWidth);}
	if(flag2 == 2){offset.x=0;}

	if(flag1 == 2 && flag2 == 2)return 1;
	else return offset;
}
function regression(offset){
		if (offset === 1) {return;}
		var viewOverTop = $(window).scrollTop();
		var viewOverLeft = $(window).scrollLeft();
		$(window).scrollTop(viewOverTop+offset.y);
		$(window).scrollLeft(viewOverLeft+offset.x);
}
