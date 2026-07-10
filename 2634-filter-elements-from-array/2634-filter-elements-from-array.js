/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
      let newarr=[]
      arr.forEach((value,index)=>{
        if(fn(value,index)){
            newarr.push(value)
        }
      })
       return newarr
};