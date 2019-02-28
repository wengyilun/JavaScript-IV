let Car = function(loc){
    // This points to an instance of Car, not van
    this.loc = loc
}

Car.prototype.move = function(){
    this.loc++
    console.log(`New loc is ${this.loc}`)
}

let Van = function(loc){
    new Car(loc)
}

let zed = new Car(3)
zed.move()
zed.move()
zed.move()

let amy = new Van(9)
amy.move() // Undefined
amy.grab() 

console.log(amy instanceof Car)
