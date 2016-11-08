//获取某个标签类名的兼容性
function getClass(classname,obj){
    //输入类名与所在的相应的文档
    var obj=obj||document;
    //将输入的文档初始化；
    if(obj.getElementsByClassName){
        //如果文档obj里含有该类名
    	return obj.getElementsByClassName(classname);
        // 将文档的类名返回出去
    }else{
        // 如果不能识别该类名
    	var arr=[];
    	var objs=obj.getElementsByTagName("*");
        // 选择document里的所有的标签
    	for(var i=0;i<objs.length;i++){
            //将该标签一一遍历一下
            var dom=checkClass(classname,objs[i]);
            //定义变量dom
    		if(dom==true){
                //选出与所需标签类名相同的标签
                arr.push(objs[i])
                // 将所需的标签放入一数组里
    		}
    	}
    	 return arr;
         // 将数组arr返回出去
    }
}
// console.log(obj.length)
 function checkClass(val,obj){
    //接受传入的实参
    var str=obj.className;
    //将obj里的所有类名赋值给str
    var brr=str.split(" ");
    //将字符串转化为数组
    for(var j=0;j<brr.length;j++){
        //遍历该数组
           if(brr[j]==val){
            //判断该数组里的某个值是不是所需的类名
            return true;
           }
    }
     return false;
 }


 function $(val,obj){


    if (typeof val=="string") {
       
            obj=obj||document;
            val=val.replace(/^\s*|\s*$/g,"");
            if(val.charAt(0)=="#"){
                return document.getElementById(val.slice(1));
            }else if(val.charAt(0)=="."){
                return getClass(val.slice(1),obj);
            }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
                return obj.getElementsByTagName(val)
            }else if(/^<[a-zA-Z][a-zA-Z0-9]{0,10}>$/.test(val)){
              return document.creatElement(slice(1,-1))
            }
      
    }else if(typeof val=="function"){
        window.onload=function(){
            val();
        }
    }
        
}

// 样式
function getStyle(obj,style){
    if(obj.currentStyle){
        return obj.currentStyle[style];
    }else{
        return getComputedStyle(obj,null)[style];
    }
}
// 先定义
function getChilds(obj,type){
   var type=type||"no"
   var kids=obj.childNodes;
   var arr=[];
   for(var i=0;i<kids.length;i++){
        if(type=="no"){
          if(kids[i].nodeType=="1"){
            arr.push(kids[i])
          }
       }else if(type=="yes"){
        if(kids[i].nodeType=="1"||kids[i].nodeType==3&&kids[i].nodeValue.replace(/^\s*|\s*$/g,"")){
           arr.push(kids[i])
        }
       }
   }
   return arr;
}

function getFirst(obj,type){
  var type=type||"no"
  
  return getChilds(obj,type)[0];
}  


function getLast(obj,type){
  var type=type||"no"
  var childs=getChilds(obj,type)
  return childs[childs.length-1]
} 

// 取第n个节点
function getN(obj,n,type){
  var type=type||"no"
  var childs=getChilds(obj,type)
  if(n>childs.length||n<1){
    return false
  }
  return childs[n-1];
}

// 取下一个兄弟节点
function getNext(obj,type){
   var type=type||"no";
  var next=obj.nextSibling;
  if(next=="null"){
    return false;

  }if(type=="no"){
    while(next.nodeType=="3"||next.nodeType=="8"){
      next=next.nextSibling
      if(next==null){
        return false
      }
    }
    return next;
  }else if(type=="yes"){
    while(next.nodeType=="3"&&next.nodeValue.replace(/^\s*|\s*$/g,"")||next.nodeType=="8"){
      next=next.nextSibling
      if(next==null){
        return false
      }
    }
    return next;
  }

}


// 取上一个兄弟节点
function getPrevious(obj,type){
   var type=type||"no";
  var Previous=obj.previousSibling;
  if(Previous=="null"){
    return false;

  }if(type=="no"){
    while(Previous.nodeType=="3"||Previous.nodeType=="8"){
      Previous=Previous.previousSibling
      if(Previous==null){
        return false
      }
    }
    return Previous;
  }else if(type=="yes"){
    while(Previous.nodeType=="3"&&Previous.nodeValue.replace(/^\s*|\s*$/g,"")||Previous.nodeType=="8"){
      Previous=Previous.previousSibling
      if(Previous==null){
        return false
      }
    }
    return Previous;
  }

}



function insertBefore(obj,beforeObj){
  var before=beforeObj.parentNode;
  before.insertBefore(obj,beforeObj)
  
}



function insertAfter(obj,afterObj){
  var after=afterObj.parentNode;
  var next=getNext(afterObj,"yes")
  if(!next){
    after.appendChild(obj);
  }else{
    after.insertBefore(obj,next)
  }
}



function attEvent(obj,event,fun){
  if(obj.attachEvent){
    obj.attachEvent("on"+event,fun)
  }else if(obj.addEventListener){
    obj.addEventListener(event,fun,false)
  }
}

function removeEvent(obj,event,fun){
  if(obj.detachEvent){
    obj.detachEvent("on"+event,fun)
  }else if(obj.removeEventListener){
    obj.removeEventListener(event,fun,false)
  }
}



function mouseWheel(obj,down,up){
  if(obj.attachEvent){
    obj.attachEvent("onmousewheel",scrollFun)
  }else{
    obj.addEventListener("mousewheel",scrollFun,false)
    obj.addEventListener("DOMMouseScroll",scrollFun,false)
  }
  function scrollFun(e){
    var e=e||window.event
    if(e.preventDefault){
      e.preventDefault();
    }else{
      e.preventDefault=false
    }
    var nub=e.wheelDelta||e.detail
    if(nub==120||nub==-3){
      // 改变this指针，让this指向obj
      up.call(obj)
    }else if(nub==-120||nub==3){
      down.call(obj);
    }
  }

}

// mouseWheel(document,function(){
//   console.log("下")
// },function(){
//    console.log("上")
// })



//15.hover
//判断某个元素是否包含有另外一个元素
function contains (parent,child) {
  if(parent.contains){
    return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
}

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
function checkHover (e,target) {
  if(getEvent(e).type=="mouseover"){
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
  }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
      !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
  }
}
//鼠标移入移出事件
/*
 obj   要操作的对象
 overfun   鼠标移入需要处理的函数
 outfun     鼠标移除需要处理的函数
 */
function hover (obj,overfun,outfun) {
  if(overfun){
    obj.onmouseover=function  (e) {
      if(checkHover(e,obj)){
        overfun.call(obj,[e]);
      }
    }
  }
  if(outfun){
    obj.onmouseout=function  (e) {
      if(checkHover(e,obj)){
        outfun.call(obj,[e]);
      }
    }
  }
}
function getEvent (e) {
  return e||window.event;
}