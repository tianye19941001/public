function createXMLHTTPRequest() {
	var xmlHttpRequest;
	if(window.XMLHttpRequest){
		xmlHttpRequest = new XMLHttpRequest();
		if (xmlHttpRequest.overrideMimeType) {
			xmlHttpRequest.overrideMimeType("text/xml")
		}
	} else if (window.ActiveXObject) {
		var activexName = [ "MSXML2.XMLHTTP", "Microsoft.XMLHTTP" ];     
		for ( var i = 0; i < activexName.length; i++) {     
			try {     
				//取出一个控件名进行创建，如果创建成功就终止循环     
				//如果创建失败，回抛出异常，然后可以继续循环，继续尝试创建     
				xmlHttpRequest = new ActiveXObject(activexName[i]);   
				if(xmlHttpRequest){  
					break;  
				}  
			} catch (e) {   

			}     
		}
	}
}
function get(){  
    var req = createXMLHTTPRequest();  
    if(req){  
        req.open("GET", "http://test.com/?keywords=手机", true);  
        req.onreadystatechange = function(){  
            if(req.readyState == 4){  
                if(req.status == 200){  
                    alert("success");  
                }else{  
                    alert("error");  
                }  
            }  
        }  
        req.send(null);  
    }  
}  
function post(){  
	var req = createXMLHTTPRequest();  
	if(req){  
	    req.open("POST", "http://test.com/", true);  
	    req.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=gbk;");     
	    req.send("keywords=手机");  
	    req.onreadystatechange = function(){  
	        if(req.readyState == 4){  
	            if(req.status == 200){  
	                alert("success");  
	            }else{  
	                alert("error");  
	            }  
	        }  
	    }  
	}  
}  

Array.prototype.push.apply(arr1,arr2);
var c = a.concat(b);