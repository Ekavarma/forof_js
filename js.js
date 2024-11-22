var a=[1,2,3,4,5]
for(var ele of a){
    console.log(ele)
}
var a=[1,2,3,4,5]
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
var a=["app","mobile","android"]
for(var i=0;i<a.length;i++){
    console.log(a[i])
}
var str="string"
for(i of str){
    console.log(i)
}
switch("monday"){
    case "monday":
    console.log("today is monday")
    break;
    case "tuesday":
    console.log("today is tuesday")
    break;
    case "wednesday":
    console.log("today is wednesday")
    break;
    case"thursday" :
    console.log("today is thursday")
    break;
    case "friday":
    console.log("today is friday")
    break;
    case "saturday":
    console.log("today is saturday")
    break;
    case "sunday":
    console.log("today is sunday")
    break;
}
switch("beans"){
    case"carrot":
        console.log("eat daily")
        break;
    case"mirchi":
        console.log("it is very spicy")
        break;
    case"beans":
         console.log("it has high protein")
         break;


    default:
        console.log("select any one")


}
var userinput=prompt("pls choose item")
switch(userinput){
    case"carrot":
        console.log("eat daily")
        break;
    case"mirchi":
        console.log("it is very spicy")
        break;
    case"beans":
         console.log("it has high protein")
         break;


    default:
        console.log("select any one")
}
var a = [1, 2, 3, 4, 5, ["kiran", "satish"]];
for (var element of a) {
    if (typeof element === "object") {
        for (i = 0; i < element === "object") {
            if (element[i] === "vamsi") {
                console.log(element[i])
            }
        }
    }
}