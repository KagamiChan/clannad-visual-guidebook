//FileOpr General Operation \Written By Ligueston@Kamikey
	var fso= new ActiveXObject("Scripting.FileSystemObject"); 
	var rootPath,fenum;
	var fileObj;
	var files;
	
	rootPath=fso.GetParentFolderName(location.href.substr(8).replace(/%20/g," ")).replace(/\\/g,"/").concat("/");
	
	function getfiles(folder,subfix){
		//folder=fso.GetParentFolderName(f);
		var matched=true;var skip=false;
		if(typeof(subfix)=="undefined"||subfix==null)skip=true;
		else subfix=subfix.split("|");
		folder=fso.GetFolder(folder);
		fenum = new Enumerator(folder.Files); 
		files=new Array();
		for (var i = 0 ; !fenum.atEnd(); fenum.moveNext()){
			if(!skip){
				matched=false;
				for(j=0;j<subfix.length;j++){
					if(fso.GetExtensionName(fenum.item()).toLowerCase()==subfix[j]){
						matched=true;break;
					}
				}
			}
			if(matched){
				files[i]=fenum.item();i++;
			}
		}
	}
	function newFile(filename){
		fso.createTextFile(filename);
	}
	function openFile(filename,type){//true for write,false for read
		file = fso.OpenTextFile(filename, type?2:1);
		fileObj = file;
		return file;
	}
	function readFile(){
		var tempString;
		tempString = fileObj.readAll();
		return tempString;
	}
	function writeFile(Str){
		try{
			fileObj.write(Str);
		}
		catch(e){alert(e);}
		return;
	}
	function closeFile(){
		fileObj.close();
	}