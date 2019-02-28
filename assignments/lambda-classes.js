
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
}

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

console.log(josh.demo('Javascritp III'))



class Student extends Person{
    constructor(data){
       super(data)
       this.previousBackground = data.previousBackground
       this.className = data.className
       this.favSubjects = data.favSubjects
    }
    listsSubjects(){
        this.favSubjects.forEach(element => {
            return console.log(element)
        });
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
        favSubjects: ['Javascript, Database, CSS']

    }
)

console.log(josh.grade(ellen, 'Javascritp III'))
console.log(ellen.listsSubjects())
console.log(ellen.PRAssignment('Javascript III'))
console.log(ellen.sprintChallenge('Javascript III'))


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


console.log(ben.standUp('web18_ben'))
console.log(ben.debugsCode(ellen, 'Javascritp III'))
