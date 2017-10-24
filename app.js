var comparar = function (arr1, arr2){
  if(arr1.length !== arr2.length){
    return false;
  }else{
    for(var i =0; i <arr1.length; i++){
      if(arr1[i] !== arr2[i]){
     return false;
      }
    }
    return true;
  }
}
array1 = [1,2,3,4,5];
array2 = [1,2,3,4,5];

comparar(array1, array2);
