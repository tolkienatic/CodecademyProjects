// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (number, strand) => {
  return {
    specimenNum: number,
    dna: strand,
    mutate () {
      let randomIndex = Math.floor(Math.random()*15)
      let randomBase = this.dna[randomIndex]
      let newBase = returnRandBase()
      while (newBase === randomBase){
        newBase = returnRandBase()
      }
      this.dna[randomIndex] = newBase
      return this.dna
    },
    compareDNA (other) {
      let total = this.dna.length
      let shared = 0
      for (let i = 0; i < this.dna.length; i++){
        if (this['dna'][i] === other['dna'][i]){
          shared++
        }
      }
      let percentage = Math.round(100*shared/total)
      console.log(`These two animals share ${percentage}% of their DNA`)
    },
    willLikelySurvive () {
      let total = this.dna.length
      let goods = 0
      for (let i = 0; i < this.dna.length; i++){
        if (this['dna'][i] === 'C' || this['dna'][i] === 'G'){
          goods++
        }
      }
      let survivalRate = 100*goods/total
      if (survivalRate >= 60){
        return true
      }else{
        return false
      }

    }
  }
}
const animal = pAequorFactory(1,mockUpStrand())
const animal2 = pAequorFactory(2,mockUpStrand())

const pAequorPen = []
let numberInPen = 1;

while (pAequorPen.length < 30) {
  let newguy = pAequorFactory(numberInPen, mockUpStrand());
  if (newguy.willLikelySurvive()) {
    pAequorPen.push(newguy);
  }
  numberInPen++;
}

console.log(pAequorPen)
