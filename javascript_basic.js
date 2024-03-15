function makeObject(name, age) {
    return {
        name: name,
        age: age,
        hobby: "football"
    };
}

/*
    name : name,
    age : age
    이건 단축형으로 이렇게도 사용 가능
    name,
    age,
*/

let Mike = makeObject("Mike",30);
console.log(Mike);

console.log("age" in Mike);
// "age" 속성이 Mike 객체에 있나?

console.log("=============================================================================================");

function isAdult(user){
    if(user.age<20){
        return false;
    }
    return true;
}

let Mike2 = {
    name: "Mike",
    age: 30
}

let Jane = {
    name: "Jane"
}

console.log(isAdult(Jane));
// Jane 객체에는 age 속성이 없는데 리턴값이 true
// 따라서 아래와 같이 수정
function isAdultnew(user){
    if(!('age' in user) || user.age<20){
        return false;
    }
    return true;
}
console.log(isAdultnew(Jane));


console.log("===============================for in==============================================================");
const Mike3 = {
    name: "Mike",
    age: 30
};

for(x in Mike3){
    console.log(Mike[x]);
}

console.log("===============================method==============================================================");
// 객체 프로퍼티에 할당된 함수 : 메서드
const superman = {
    name:'clark',
    age:33,
    fly:function(){ //이부분은 function 생략 가능 --> fly:function() --> fly(){} 라고 사용가능
        console.log("날아갑니다.");
        
    }
}
superman.fly();


console.log("===============================this==============================================================");
//객체와 메서드의 관계

const user={
    name:'Mike',
    sayHello:function(){
        console.log(`Hello, I'm ${user.name}`);
        
    }
}
user.sayHello();  // 지금은 결과가 나오나, 문제가 발생할 수 있다. --> user.name 대신 this.name 사용해야함.
// 이렇게 user.sayHello() 를 호출하면 . 앞 user 가 this 가 됨
// this 는 실행하는 시점 즉, runtime 에 결정됨.
// 화살표 함수로 선언했다면 전혀 달라짐
// 화살표함수 즉, 익명함수는 일반함수와는 달리 자신만의 this를 가지지 않음.
// 화살표함수 내부에서 this를 사용하면, 그 this 는 외부에서 값을 가져옴
// ex)
let boy={
    name:'mama',
    sayHello:()=>{
        console.log(this);
        
    }
}
boy.sayHello();  // 여기에서 this != boy 라는 의미, 여기서의 this는 전역객체를 가리킴
// 브라우저환경에서 전역객체 : window
// Node js : global

// javaScript에서의 this 는 상당히 복잡함.

let newboy={
    name:'Mike',
    showName:function(){
        console.log(newboy.name);
    }
}
newboy.showName();  // Mike

let man = newboy;
man.name = "Tom"; 

console.log(newboy.name);  // Tom

let man2 = newboy;
man2.showName();

// boy객체를 선언하고, 이 객체를 AA 에 담고, 이후에 boy객체를 null로 초기화해버리면, 기존 객체 AA도 null로 초기화되버림.
// 따라서, 이를 방지하려면, 객체의 메서드에서 this를 사용