let student1 = {
    firstName : 'Barani',
    lastName : 'Dharan'
};

let student2 = {
    firstName : 'raj',
    lastName : 'kiran'
};

let fullName  = function(city,state){
    console.log(this.firstName + ' ' + this.lastName+ " from "+city+" "+state)
};

fullName.call(student1,"dindigul","Tamilnadu");
fullName.apply(student1,["Dindigul","tamilNadu"])
fullName.apply(student2,["Dindigul","tamilNadu"])

let student = {age:20};
let printAge = function(){
    console.log(this.age);
}
let printAgeThePrintAge = printAge.bind(student);
printAgeThePrintAge()

let mutiplyBind = function(a,b){
    console.log(a*b)
}
//let mutiplyBy2 = mutiplyBind.bind(this,2);
//mutiplyBy2(3);
let mutiplyBy2 = mutiplyBind.bind(this)
mutiplyBy2(2,3);

let multiplyByClosure = function(x){
    return function(y){
        console.log(x*y);
    }
}

let mutiplyBy3 = multiplyByClosure(3);
mutiplyBy3(3);