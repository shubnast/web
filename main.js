//Лаба №2 Задание №1
//#1.1
var str="Хало";
function Foo (str){
    str=str+", Мир!";
    return str;
}
var msg=Foo(str);
console.log(msg);
//#1.2
function Foo2 (msg, str) {
    return msg+str;
}
str="♥";
console.log(msg=Foo2(msg,str));
//#1.3
var arr=[1.25,"55c",5,"ew",54,"v"];
for (var i= 0; i < arr.length; i++) {
    if(isNaN(arr[i])){
        arr[i]="0";
    }   
    else{
        arr[i]=arr[i]*arr[i];
    } 
    console.log(arr[i]);
}
//Задание №2

