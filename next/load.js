// CVG Loading Script \Written By Ligueston@Kamikey
var runat="client";
var site="http://www.kamikey.com/CVG_test/";

function gotopage(page,name){
	getObjectRef("jsfile").value=page;
	getObjectRef("jssize").value=sizeSet;
	if(name)getObjectRef("jslink").value=name;
	else getObjectRef("jslink").value="";
	getObjectRef("jsform").submit();
}
function gotolink(name){
	document.location.href=document.location.href.substr(0,document.location.href.lastIndexOf("#"))+"#"+name;
}
function loadScript(url){
	var f=document.createElement("script");
	f.type="text/javascript";
	f.defer = true;
	f.src=url;
	document.getElementsByTagName("head")[0].appendChild(f);
}

var jss = new Array();
var datafolder="Data/";
var fileprefix="page";
var defaultPage="Data/page0.js";

curJs=GetRequest()["page"];
if(curJs==null||curJs=="")curJs=defaultPage;
else if(isNaN(parseInt(curJs)))curJs=curJs+".js";
else curJs=datafolder+fileprefix+parseInt(curJs)+".js";

if(runat=="client")loadScript(curJs);
