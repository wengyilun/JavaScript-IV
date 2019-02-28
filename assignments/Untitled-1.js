// let Dog = function(){
//     return {legs: 4, bark: 'woowo'}
// }
// let fido = Dog()

// console.log(fido instanceof Dog)


let Car = function(loc){
    let obj = Object.create(Car.prototype)
    obj.loc  = loc
    return obj
}
Car.prototype.move = function(){
    return this.loc++
}

let amy = Car(1)
//console.log(amy.move())

let ben = Car(9)
//console.log(ben.move())

// a instance of b 
// when b’s prototype can be found in a's prototype chain 
// console.log(Car.prototype.constructor)
// console.log(amy.constructor)
// console.log(amy instanceof Car)


// const building = {
//     floors: 5,
//     addFloor: function () {
//       this.floors += 1;
//     }
//   };
  
//   building.addFloor();



//   function invokeTwice(cb) {
//     cb();
//     cb();
//  }
 
//  const dog = {
//    age: 5,
//    growOneYear: function () {
//      this.age += 1;
//      console.log(this.age)
//    }
//  };

// dog.growOneYear()
// //invokeTwice(dog.growOneYear)  // dog.growOneYear is invoked as a function rather than a method

// //SOLUTION #1 - Saving this with an Anonymous Closure
// invokeTwice(function(){
//     dog.growOneYear()
// }) 

//SOLUTION #2 - Saving this with bind()
// function invokeTwice2(cb) {
//     cb();
//     cb();
//  }
// const myGrow = dog.growOneYear.bind(dog)
// invokeTwice2(myGrow) 


// var obj = {
//     foo: 1,
//     get bar() {
//       return 2;
//     }
//   };


function Circle(radius) {
    this.radius = radius;
    Circle.circlesMade++;
}

Circle.draw = function draw(circle, canvas) { /* Canvas drawing code */ }

Object.defineProperty(Circle, "circlesMade", {
    get: function() {
        return !this._count ? 0 : this._count;
    },

    set: function(val) {
        this._count = val;
    }
});

Circle.prototype = {
    area: function area() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
};

Object.defineProperty(Circle.prototype, "radius", {
    get: function() {
        return this._radius;
    },

    set: function(radius) {
        if (!Number.isInteger(radius))
            throw new Error("Circle radius must be an integer.");
        this._radius = radius;
    }
});