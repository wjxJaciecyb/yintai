$(function(){
	// banner轮播
	function nodelb(a){
		var ban=a;
		var imgs=$(".doc",ban)
		var circle=$(".circle",ban)
		var left=$(".tu-left",ban)[0]
		var right=$(".tu-right",ban)[0]
		var n=0;
		var flag=true;	
		var t=setInterval(move,4000)	
			function move(){
				// next=n+1;
				if(n>=imgs.length){
					n=0;
				}
				for(var i=0;i<imgs.length;i++){
					for(var j=0;j<imgs.length;j++){
						circle[j].style.background="#3E3E3E"
						animate(imgs[j],{opacity:0},600);
					}
					circle[n].style.background="#B61B1F"
					animate(imgs[n],{opacity:1},600,function(){

					});
				}
				n++;
			}
			ban.onmouseover=function(){
		        clearInterval(t);
		        left.style.display="block"
		        right.style.display="block"
			}
			ban.onmouseout=function(){
				t=setInterval(move,4000)
				left.style.display="none"
		        right.style.display="none"
			}
			for(var i=0;i<circle.length;i++){
				circle[i].index=i;
				circle[i].onmouseover=function(){
					for(var i=0;i<circle.length;i++){
						circle[i].style.background="#3E3E3E"
						animate(imgs[i],{opacity:0},600)
					}
					this.style.background="#B61B1F"
					animate(imgs[this.index],{opacity:1},600)
					n=this.index
				}
			}
			right.onclick=function(){
				move();
			}
			left.onclick=function(){
				// next=n-1;s
				if(n<0){
					n=imgs.length-1;
				}
				for(var i=0;i<imgs.length;i++){
					for(var j=0;j<imgs.length;j++){
						circle[j].style.background="#3E3E3E"
						animate(imgs[j],{opacity:0},600)
					}
						circle[n].style.background="#B61B1F"
						animate(imgs[n],{opacity:1},600)
				}
				n--;
			}

		}
	
	nodelb($(".banner")[0])

	


// 楼层跳转

	var floor_nav=$('.floor-nav')[0];
    var floor_lis=$('.floor-lis')
    var floor=$('.goods');
    var now;
    var cHeight=document.documentElement.clientHeight; 
    for(var i=0;i<floor.length;i++){
    	floor[i].h=floor[i].offsetTop;
        // console.log(floor[i].h)楼层的高度存起来
    }
    window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
    	var top=obj.scrollTop;
    	if(top>=floor[0].h-500){
    		floor_nav.style.display='block';

            var nHeight=floor_nav.offsetHeight;
            // 获取本身的高度
            floor_nav.style.top=(cHeight-nHeight)/2+"px";
            // 垂直居中

    		// console.log(top)滚动出值
            // 出效果：左框出来
    	}
        if(top<floor[0].h-500){
            floor_nav.style.display='none'
        }
    	for(var i=0;i<floor.length;i++){
    		if(top>=floor[i].h-600){
    			for(var j=0;j<floor_lis.length;j++){
    				floor_lis[j].style.background='#ECECEC';
    			}
    			floor_lis[i].style.background=' #C81623';
                now=i;
    		}    
    	}
    }          //整个楼层出效果
    	for(var i=0;i<floor.length;i++){
    		floor_lis[i].index=i;
    		floor_lis[i].onclick=function(){
    			animate(document.body,{scrollTop:floor[this.index].h})
                now=this.index;
    			animate(document.documentElement,{scrollTop:floor[this.index].h})
    		
    	}
    floor_lis[i].onmouseover=function(){
        this.style.background=' #C81623';

    }
    floor_lis[i].onmouseout=function(){
        if(this.index==now){
            return;
        }
        this.style.background='#ECECEC';
    }



       }



//顶部
	var nz=$(".nz")[0]

	nz.onmouseover=function(){
		var bd=$(".bd")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){
		var bd=$(".bd")[0]

		bd.style.display="none"
	}



	var nz=$(".hw")[0]
	
	nz.onmouseover=function(){
		var bd=$(".hf")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){
		var bd=$(".hf")[0]

		bd.style.display="none"
	}



	var ting=$(".DD")[0]
	
	ting.onmouseover=function(){
		ting.style.background="#fff"
		var ewm=$(".MY")[0]
		ewm.style.display="block"
	}
	ting.onmouseout=function(){
		ting.style.background="#EEEEEE"
		var ewm=$(".MY")[0]

		ewm.style.display="none"
	}


// 超值特卖
  var data=$(".data")
  for(var i=0;i<data.length;i++){
  		data[i].onmouseover=function(){
			this.style.background="#E5004F"
			var data_bg=$(".data-bg",this)[0]
			data_bg.style.display="block"
		}
		data[i].onmouseout=function(){
			this.style.background="#333333"
			var data_bg=$(".data-bg",this)[0]

			data_bg.style.display="none"
		}
  }
	
 var sale_value1=$(".sale-value")[0];
     var sale_value2=$(".sale-value")[1];
     var sale_value3=$(".sale-value")[2];
     var list_first=$(".list-first")[0];
     var list_second=$(".list-second")[0];
     var list_third=$(".list-third")[0];
     var angle=$(".angle");
     sale_value1.onmouseover=function(){
     	for(var i=0;i<angle.length;i++){
     		angle[i].style.display="none"

     	}
     	angle[0].style.display="block"
     	sale_value2.className="sale-value";
     	sale_value3.className="sale-value";
     	sale_value1.className="sale-value-first";
     	list_first.style.display="block";
     	list_second.style.display="none";
     	list_third.style.display="none";
     }
     sale_value2.onmouseover=function(){
     	for(var i=0;i<angle.length;i++){
     		angle[i].style.display="none"

     	}
     	angle[1].style.display="block"
     	sale_value2.className="sale-value-first";
     	sale_value3.className="sale-value";
     	sale_value1.className="sale-value";
     	list_first.style.display="none";
     	list_second.style.display="block";
     	list_third.style.display="none";
     }
     sale_value3.onmouseover=function(){
     	for(var i=0;i<angle.length;i++){
     		angle[i].style.display="none"

     	}
     	angle[2].style.display="block"
     	sale_value1.className="sale-value";
     	sale_value2.className="sale-value";
     	sale_value3.className="sale-value-first";
     	list_first.style.display="none";
     	list_second.style.display="none";
     	list_third.style.display="block";
     }
     






// 中间的轮播
function com(obj){
	var box=obj;
	var img_box=$('.pic',box);
	var lit=$('.circle-lis',box);
	var goods_left=$('.goods-left',box)[0];
	var goods_right=$('.goods-right',box)[0];
	var gWidth=parseInt(getStyle(box,'width'));
	var next=0;
	var n=0;
	var flag=true;
	var times=setInterval(shift,2000);
	function shift(){
		if(!flag){
			return
		}
		flag=false;
		next=n+1;
		if(next>=img_box.length){
			next=0;
		}
		img_box[next].style.left=gWidth+'px';
		animate(img_box[n],{left:-600},600);
		animate(img_box[next],{left:0},600,function(){
			flag=true
		});
		lit[n].style.background='#686D69'
		lit[next].style.background='#D7004B'
		n=next;
	}
	box.onmouseover=function(){
		clearInterval(times)
		goods_left.style.display="block"
		goods_right.style.display="block"
	}
	box.onmouseout=function(){
		times=setInterval(shift,2000)
		goods_left.style.display="none"
		goods_right.style.display="none"
	}
	goods_right.onclick=function(){
		shift();
	}
	goods_left.onclick=function(){
		if(flag==false){
			return;
		}
		flag=false;
		next=n-1;
		if(next<0){
			next=img_box.length-1;
		}
		img_box[next].style.left=-gWidth+'px';
		animate(img_box[n],{left:600},600);
		animate(img_box[next],{left:0},600,function(){
			flag=true;
		});
		lit[n].style.background='#686D69'
		lit[next].style.background='#D7004B'
		n=next;
	}

	for(var i=0;i<lit.length;i++){
		lit[i].index=i;
		lit[i].onclick=function(){
			if(this.index>n){
				if(!flag){
					return
				}
				flag=false;
				img_box[this.index].style.left=gWidth+'px';
				animate(img_box[n],{left:-600},600);
				animate(img_box[this.index],{left:0},600,function(){
					flag=true;
				});
				lit[n].style.background='#686D69'
				lit[this.index].style.background='#D7004B'
				n=this.index;
			}else if(this.index<n){
				if(!flag){
					return
				}
				flag=false;
				img_box[this.index].style.left=-gWidth+'px';
				animate(img_box[n],{left:600},600);
				animate(img_box[this.index],{left:0},600,function(){
					flag=true;
				});
				lit[n].style.background='#686D69'
				lit[this.index].style.background='#D7004B'
				n=this.index;
			}
		}
	}
}
	com($('.boss')[0])
	com($('.boss')[1])
	com($('.boss')[2])
	com($('.boss')[3])
	com($('.boss')[4])
	com($('.boss')[5])
	com($('.boss')[6])
	com($('.boss')[7])
	com($('.boss')[8])



// 最左边的小轮播
function con(n){
	var n=n;
	var english=$(".english")[n]
	var ver=$('.ver',english);
	var nav_left=$('.nav-left')[n];
	var nav_right=$('.nav-right')[n];
	var next1=0;
	var n1=0;
	nav_right.onclick=function(){
		next1=n1+1;
		if(next1>=ver.length){
			next1=0
		}
		ver[next1].style.left=200+'px';
		animate(ver[n1],{left:-200},600);
		animate(ver[next1],{left:15},600)
		n1=next1;
	}
	nav_left.onclick=function(){
		next1=n1-1;
		if(next<0){
			next1=ver.length-1
		}
		ver[next1].style.left=-200+'px';
		animate(ver[n1],{left:200},600);
		animate(ver[next1],{left:15},600)
		n1=next1;
	}
}
	var small=getClass("english")
	for(var k=0;k<small.length;k++){
		con(k);
	}


// 热门品牌
	var rot=$(".rot")
	var bot_clothes=$(".bot-clothes");
	var week=$(".week")
	for(var z=0;z<rot.length;z++){
		rot[z].index=z;
		rot[z].style.cssText="border-bottom:3px solid #E5004F"
		rot[z].onmouseover=function(){
			for(var t=0;t<rot.length;t++){
				for(var k=0;k<week.length;k++)
				// week[k].style.display="none"
				bot_clothes[k].style.display="none"
			}
			week[this.index].style.display="block"
			bot_clothes[this.index].style.display="block"
			rot[this.index].style.cssText="border-bottom:3px solid #333333"
		}
         
	}


// 右边变化的线条
function xian(a,b){
	var bag=$('.bag')[b];
	var bag_top=$('.bag-top')[a];
	var bag_bottom=$('.bag-bottom')[a];
	var bag_left=$('.bag-left')[a];
	var bag_right=$('.bag-right')[a];
	var widthA=bag.offsetWidth;
	var heightA=bag.offsetHeight;



			bag.onmouseover=function(){
			animate(bag_top,{width:widthA})
			animate(bag_bottom,{width:widthA})
			animate(bag_left,{height:heightA})
			animate(bag_right,{height:heightA})
		}	
			bag.onmouseout=function(){
			animate(bag_top,{width:0})
			animate(bag_bottom,{width:0})
			animate(bag_left,{height:0})
			animate(bag_right,{height:0})
		}
}

xian(0,0);   xian(1,1);     xian(2,2);    xian(3,3);     xian(4,4);   xian(5,5)
xian(6,6);   xian(7,7);     xian(8,8);    xian(9,9);     xian(10,10);   xian(11,11)
xian(12,12);   xian(13,13);     xian(14,14);    xian(15,15);xian(16,16);   xian(17,17)
xian(18,18);   xian(19,19);     xian(20,20);    xian(21,21);xian(22,22);   xian(23,23)
xian(24,24);   xian(25,25);     xian(14,14);    xian(15,15);xian(26,26);   xian(27,27)
xian(28,28);   xian(29,29);     xian(30,30);    xian(31,31);xian(32,32);   xian(33,33);    xian(34,34);   xian(35,35);








})
