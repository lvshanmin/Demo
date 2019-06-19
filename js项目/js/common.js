//根据id获取页面元素
function $id(id){
	return document.getElementById(id);
}
//获取任意区间的整数值
function rand(min,max){ //[min,max]
	return Math.round( Math.random()*(max-min) + min );
}

function rand2(min,max){ //[min,max]
	return Math.floor( Math.random()*(max-min+1) + min );
}

//获取随机的颜色值
function getColor2(){
	var color = "#";
	for( var i = 1 ; i <= 6 ; i++ ){
		color += rand(0,15).toString(16);
	}
	return color;
}
function getColor(){
	return "rgb("+rand(0,255)+","+rand(0,255)+","+rand(0,255)+")";
}

//获取时间格式 年月日 时分秒
function dateToString1(now){
	//定义一个时间对象 
	var now = new Date();
	//获取年月日
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	var d = now.getDate();
	//获取时分秒
	var h = now.getHours();
	var m = toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() );
	 
	return year+"-"+month+"-"+d + " "+ h + ":" + m + ":" +s;
}

//定义一个函数 将日期时间格式转成 字符串
function dateToString(now){
	var y = now.getFullYear();
	var m =toTwo( now.getMonth()+1 );
	var d =toTwo( now.getDate() );		
	var h = toTwo( now.getHours() );
	var mi =toTwo( now.getMinutes() );
	var s = toTwo( now.getSeconds() ) ;
	return y+"-"+m+"-"+d + "  " + h + ":" + mi + ":" + s;
}
//年月日
function ymd(now){
	//定义一个时间对象 
	var now = new Date();
	//获取年月日
	var year = now.getFullYear();
	var month = now.getMonth()+1;
	if(month<10){
		month = ""+0+month;
	}
	var d = now.getDate(); 
	if(d<10){
		d = ""+0+d;
	}
	return year+"-"+month+"-"+d;
}


//判断参数是否小于10  小于10 前面拼接0
function toTwo( val ){
	return val < 10 ? "0"+val : val;
}
//随机获取六位数验证码
function code(){
	var str = "";
	for( var i = 1 ; i <= 6 ; i++ ){
		var a = rand(48,122);
		if(a > 57 && a < 65 || a > 90 && a < 97 ){
			i--;
		}else{
			var b = String.fromCharCode(a);
			str += b;
		}
	}
	return str;
}

//动态添加元素
function append(one , two){
	one.appendChild(two);
}
function before(one,two,zero){
	one.insertBefore(two,zero);
}
//动态创建元素
function crea(val){
	return document.createElement(val);
}
//定义一个函数 将一个字符串转成日期时间对象
function stringToDate(str){
	return new Date(str);
}

//定义一个时间差函数 
function diff(start,end){
    return end.getTime() - start.getTime();
}


//碰撞检测
function pz(d1,d2){
	var t1 = d1.offsetTop;
	var l1 = d1.offsetLeft;
	var r1 = d1.offsetWidth + d1.offsetLeft;
	var b1 = d1.offsetHeight + d1.offsetTop;
	var t2 = d2.offsetTop;
	var l2 = d2.offsetLeft;;
	var r2 = d2.offsetWidth + d2.offsetLeft;
	var b2 = d2.offsetHeight + d2.offsetTop;
	if( r1<l2 || l1>r2 || t2>b1 || t1>b2 ){
		return false;
	}else{
		return true;
	}
}

//匀速移动
function getMove(obj,tag){
	clearInterval(timer);
	timer = setInterval( () => {
		var speed = tag > obj.offsetLeft ? 10 : -10;
		if( obj.offsetLeft == tag ){
			clearInterval( timer );
		}else{
			obj.style.left = obj.offsetLeft + speed + "px";
		}
	},30);
}