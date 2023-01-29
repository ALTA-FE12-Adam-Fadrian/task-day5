
let compare = "";
function compareString(a, b) {
   
   let aSplit =  a.split("");
   let bSplit = b.split("");

   for(let i = 0; i < aSplit.length; i++){
      for(j = 0; j < bSplit.length; j++){
          if(aSplit[i] == bSplit[j]){
            i.push(compare);
            j.push(compare)
          }  
            compare.map(() => {
                
            })
      }
      
  } return compare
 }

 function compareString(a, b) {
     let compare = "";
 
         for(let str1 of a) {
             compare += str1.split("");
         }
 
         for(let str2 of b){
             compare += str2.split("");
         }
 
         if(str1 == str2){
           for(str1 = str2; i < compare.length; i ++){
             return compare
           } 
              }
 
         console.log(compareString(compare))
  }
 
 
 // console.log(compareString())
 console.log(compareString('AKA', 'AKANG'))

console.log(compareString('adam', 'adim'))

 function CommonStringCount(str1, str2) { 
   let count = [""]; 
   const obj = str2.split(""); 
   for(const str of str1){ 
     let idx = obj.findIndex(s => s === str); 
     if(idx >= 0){ 
        count++
       obj.splice(idx, 1); 
     } 
   } 
   return count; 
 } 
  
 //Test: 
 console.log(CommonStringCount("abcd", "aaccc")); 

 