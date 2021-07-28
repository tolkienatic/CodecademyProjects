Meal Maker (javascript)

const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts:[]
  },
  get appetizers(){
    return this._courses._appetizers
  },
  set appetizers(newApp){
    this._courses._appetizers.push(newApp)
  },
  get mains(){
    return this._courses._mains
  },
  set mains(newMain){
    this._courses._mains.push(newMain)
  },
  get desserts(){
    return this._courses._desserts
  },
  set desserts(newDesserts){
    this._courses._desserts.push(newDesserts)
  },
  get courses(){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    this[courseName].push(dish)
  },
  getRandomDishFromCourse(courseName){
    const dishes = this[courseName]
    return dishes[Math.floor(Math.random()*dishes.length)]
  },
  generateRandomMeal(){
    let appetizer = this.getRandomDishFromCourse('appetizers');
    let main = this.getRandomDishFromCourse('mains');
    let dessert = this.getRandomDishFromCourse('desserts');
    let total = appetizer['price']+main['price']+dessert['price'];
    return `Your meal will be ${appetizer['name']}, ${main['name']}, and ${dessert['name']}, and will cost ${total}.`
  }
}
menu.addDishToCourse('appetizers','Fried Cheese',4)
menu.addDishToCourse('appetizers','Nachos',5)
menu.addDishToCourse('appetizers','Chips and Queso',6)
menu.addDishToCourse('mains','Cheeseburger',7)
menu.addDishToCourse('mains','Tacos',8)
menu.addDishToCourse('mains','Grilled Cheese',9)
menu.addDishToCourse('desserts','Chocolate Ice Cream',10)
menu.addDishToCourse('desserts','Vanilla Ice Cream',11)
menu.addDishToCourse('desserts','Cheese Cakes',12)

let meal = menu.generateRandomMeal()
console.log(meal)
