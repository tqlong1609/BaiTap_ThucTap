// cau 1:
var arr = ["java","c#","c++","python"];
for(var i =0;i < arr.length; i++)
{
	arr[i] = "learning".concat(" ",arr[i]);
}
console.log(arr.toString());

// cau 2:
var arr = ["java","c#","c++","python"];
var str_true = "java";
var str_false = "js";
var isInside = arr.indexOf(str_true);
if(isInside != -1){
	console.log(true);
}
else{
	console.log(false);
}
