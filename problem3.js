function removeDuplicates(array) {
    for(let i = 0; i < array.length; i++){
        for(j = array.length; j >= i+1; j--){
            if(array[i] == array[j]){
                array.splice(i,1)
            }  
        }
    }
    return array.length
  }
  
  console.log(removeDuplicates([2, 3, 3, 3, 6, 9, 9]))