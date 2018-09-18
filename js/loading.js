function loading(json){
	var index=0;
	var imgs=[];			

	for (var i = 0; i < json.arr.length; i++) {
	  	var imgobj=new Image();
		imgobj.src=json.arr[i];			
		imgobj.onload=function(){
			index++;
			var per=parseInt((index/json.arr.length)*100);
			if(json.span){
				json.span.innerHTML=per+'%';
			}
			if(json.CloadW){			
				json.CloadW.style.width=per+'%';
			}
			
			imgs.push(this);
			if(index==json.arr.length){
				json.succFn();
			}
						
		}
	}
}

;(function($){
  $.extend($.fn, {
     fnLoad: function (arr,callback) {
        var imgs=[];

        var index=0;

        for (var i=0; i<arr.length; i++){

            var imgObj=new Image();

            imgObj.src=arr[i];

            imgObj.onload=function (){

                index++;
                $("#load_time").css("left",parseInt((index/arr.length-1)*100)+"%");
                $("#load_percent").html(parseInt(index/arr.length*100)+"%");
                imgs.push(this);
                if (index==arr.length){
                    //全部加载完毕
                    $("#loading").remove();
                    callback&&callback();
                }
            }
        }
    }
  })
})(Zepto)
