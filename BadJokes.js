const jokeParts = {
    _intros: ['What do you call','What\'s the best things about','Why do people love'],
    _setUps: ['a cat with no fur...','a fish that breathes air...','a brand new tree...'],
    _punchlines: ['Gabbagool','My mother am i right?','3 kids in a trenchcoat'],
    get intros(){
        this._intros},
    get setUps(){
        this._setUps},
    get punchlines(){
        this._punchlines},
    set intros(x){
        this._intros.push(x)
    },
    set setUps(x){
        this._setUps.push(x)
    },
    set punchlines(x){
        this._punchlines.push(x)
    }
};

const tellAJoke = () => {
    let joke = []
    let introChoice = jokeParts['_intros'][(Math.floor(Math.random()*3))]
    joke.push(introChoice)
    let setUpChoice = jokeParts['_setUps'][(Math.floor(Math.random()*3))]
    joke.push(setUpChoice)
    let punchLineChoice = jokeParts['_punchlines'][(Math.floor(Math.random()*3))]
    joke.push(punchLineChoice)
    joke = joke.join(' ')
    return joke
};

console.log(tellAJoke())