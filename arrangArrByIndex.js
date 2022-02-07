
const arrangeArray =(arr, l)=>{
  
  for(let i=0; i< l; i++){
    
    for(let j = 0; j<l; j++  ){
      if(arr[j] == i){
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i]=temp;
        break;
      }
    }
  }
  for(let i = 0; i < l; i++){
        if (arr[i] != i){
            arr[i] = -1;
        }
    }
}


var arr  = [19, 7, 0, 3, 18, 15, 12, 6,1, 8,11, 10, 9, 5, 13, 16, 2, 14, 17, 4];
const l = arr.length;

arrangeArray(arr, l);
console.log(arr)
