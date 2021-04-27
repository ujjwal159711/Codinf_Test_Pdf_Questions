var x = "hello";
console.log(sort_alpha(x));
//console.log(x.split(''));

function sort_alpha(y){
    var strArr = y.split('');
    for(var i=0; i<strArr.length; i++){
      for(var j=i+1; j<strArr.length; j++){
        if(str[i] > strArr[j]){
          var temp = strArr[i];
          strArr[i] = strArr[j];
          strArr[j] = temp;
        }
      }
    }
    //return strArr;
    return strArr.join('');
}