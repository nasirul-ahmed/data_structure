const reverseArray =(arr, s, e)=>{
  while(s < e){
    let temp = arr[s];
    arr[s] = arr[e];
    arr[e] = temp;
    s++;
    e--;
  }
}

const leftRotate = (arr, l, d)=>{
  if(d ===0) return;
  
  d = d % l;
  console.log(d)
  reverseArray(arr, 0, d-1);
  reverseArray(arr, d, l-1);
  reverseArray(arr, 0, l-1);
}

var arr  = [1,2,3,4,5,6,7];
const l = arr.length;
const d =  3;

leftRotate(arr, l, d);
console.log(arr);

