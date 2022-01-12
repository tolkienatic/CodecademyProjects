//sentence to translate
let input = 'hi hey there hello dear'

//translater code
const vowels = ['a','e','i','o','u']
let resultArray = []
for (i=0; i<input.length; i++){
  for (j=0; j<vowels.length; j++){
    if (input[i]===vowels[j]){
      if (input[i] === 'e' || vowels[j] === 'u'){
        resultArray.push(input[i]+input[i])
      }else{
        resultArray.push(input[i])
      }
    }
  }
}
console.log(resultArray)
console.log(resultArray.join('').toUpperCase())
