
class Person{
    constructor(data){
        this.name = data.name
        this.age = data.age
        this.location = data.location
        this.gender = data.gender
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}


class Instructor extends Person{
    constructor(data){
       super(data)
       this.specialty = data.specialty
       this.favLanguage = data.favLanguage
       this.catchPhrase = data.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`
    }

    calculate(student){

        let subtract = Math.random()<.5
        let num = Math.round(Math.random()*20)
        num//?
        Math.random()*10
        return `${student.name}'s grade is ${student.grade }`
    }
}

// var randomBoolean = [
//     function(){
                 
//         Math.random() //? 
//         return Math.random()<.5;//? // Readable, succint
//     },                    
    
//     function(){
   
//         !(Math.random()/*?*/+.5/*?*/|0)/*?*///?
//         return !(Math.random()+.5|0); // (shortcut for Math.round)
//     },
    
//     function(){
//         return !(+new Date()%2); // faux-randomness
//     }
// ];

// for(var i = 0, l = randomBoolean.length; i < l; i++){
//     console.log('picking using', i, ' -', randomBoolean[i]() );
// }



let josh = new Instructor(
    {
        name: 'Josh',
        age:'0',
        location:'USA',
        gender:'Male',
        specialty: 'React',
        favLanguage: 'Javascript',
        catchPhrase: 'You know it!'
    }
)
// console.log(josh.demo('Javascritp III'))

class Student extends Person{
    constructor(data){
       super(data)
       this.previousBackground = data.previousBackground
       this.className = data.className
       this.favSubjects = data.favSubjects
       this.grade = data.grade
    }
    listsSubjects(){
        for(let subject of this.favSubjects){
            return subject
        }
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

let ellen = new Student(
    {
        name: 'Ellen',
        age:'46',
        location:'SF',
        gender:'Female',
        specialty: 'Graphic',
        favLanguage: 'Python',
        catchPhrase: 'Let\' code!',
        previousBackground: 'Flash/Acitionscript',
        className: 'Web18',
        favSubjects: ['Javascript, Database, CSS'],
        grade: 0
    }
)
console.log(josh.calculate(ellen))
// console.log(josh.grade(ellen, 'Javascritp III'))
// console.log(ellen.listsSubjects())
// console.log(ellen.PRAssignment('Javascript III'))
// console.log(ellen.sprintChallenge('Javascript III'))


class ProjectManager extends Instructor{
    constructor(data){
       super(data)
       this.gradClassName = data.gradClassName
       this.favInstructor = data.favInstructor
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element)
        });
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}

let ben = new ProjectManager(
    {
        name: 'Ben',
        age:'20',
        location:'Tx',
        gender:'Male',
        specialty: 'Algorithm',
        favLanguage: 'Java',
        catchPhrase: 'Pairprogamming',
    }
)


// console.log(ben.standUp('web18_ben'))
// console.log(ben.debugsCode(ellen, 'Javascritp III'))

Object.defineProperty(ellen, 'grade', 
{
    value: 0,
    writable: true
})
console.log(ellen.grade)
