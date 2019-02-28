/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
 class GameObject{
    constructor(data){
        this.createdAt = data.createdAt
        this.name = data.name
        this.dimensions = data.dimensions
    }
    destroy(){
        return  `${this.name} was removed from the game.`
    }
  }
  
  /*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */
  
   class CharacterStats extends GameObject{
       constructor(data){
           super(data)
           this.healthPoints = data.healthPoints
       }
       takeDamage(){
        return  `${this.name} took damage.`
       }
  }
  /*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
  
  class Humanoid extends CharacterStats{
      constructor (data){
        super(data)
        this.team = data.team
        this.weapons = data.weapons
        this.language = data.language
      }
      greet(){
        return  `${this.name} offers a greeting in ${this.language}.`
      }
  }
  
  /*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    class Villain extends Humanoid{
        constructor(data){
            super(data)
            this.slogan = data.slogan
        }
        fire(){
            this.healthPoints-= 3
            if(this.healthPoints <= 0){
                return `No more blood! ${this.destroy()}`
            }
            return `Fire!! (${this.healthPoints} points remaining)`
        }
    }

    class Hero extends Humanoid{
        constructor(data){
            super(data)
            this.slogan = data.slogan
        }
        ice(){
            this.healthPoints-= 3
            if(this.healthPoints <= 0){
                return `No more blood! ${this.destroy()}`
            }
            return `Ice!! (${this.healthPoints} points remaining)`
        }
    }
    
    const badman = new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'PaulT',
      team: 'Evil',
      weapons: [
        'fire'
      ],
      language: 'Elvish',
      slogan: 'I will destroy you!',
      language: 'Hahahahahhahaah'
  
    });
  
  
    const superwomen = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Jane',
      team: 'Hero',
      weapons: [
        'ice'
      ],
      language: 'good',
      slogan: 'I will kill you with kindness',
      language: 'That will show you'
    });
  
  
    console.log(badman.slogan)
    console.log(superwomen.slogan)
  
    // for(let i=0; i< Math.round((Math.random() * 10)); i++){
    //     if(i%2 === 0){
    //       console.log(superwomen.ice())
    //     }else{
    //       console.log(badman.fire())
    //     }
    // } 
    console.log(superwomen.ice())
    console.log(badman.fire())
    console.log(superwomen.ice())
    console.log(badman.fire())
    console.log(superwomen.ice())
    console.log(badman.fire())
  
    if(superwomen.healthPoints > badman.healthPoints){
      console.log(superwomen.language)
    }else{
      console.log(badman.language)
    }