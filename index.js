function theBeatlesPlay (arrOne, arrTwo) { 
  let emptyArray = []
for (let i = 0, j=0; i<= arrOne.length && j <=arrTwo.length-1; i++,j++){
  emptyArray.push(arrOne[i]+ " " + 'plays' + " " + arrTwo[j])
}
return emptyArray
}

function iLoveTheBeatles(num){
  let emptyArray = []  
do {
  emptyArray.push(`I love the Beatles!` )
  num++;
}
while (num < 15);
 return emptyArray
}

