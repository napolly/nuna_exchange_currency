//코드의 질이 달라질 수 있는 배열함수

// 누가 아직도 for loop 을 쓰느냐?

// for loop 을 쓰지않고
// array 함수를 이용


let fruits = [
    "apple",
    "banana",
    "cherry",
    "strawberry",
    "applemango",
    "mango",
]
let ceoList = [
    {name:"Larry Page",age:23,ceo:true},
    {name:"Tim Cook",age:40,ceo:true},
    {name:"Elon Musk",age:55,ceo:false},
    
]

// 1) forEach
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(element);
    
}

console.log("===============forEach=====================");

// 익명함수
fruits.forEach(element => {
    console.log(element);
    
});

console.log("===============map()=====================");

//2) map함수 --> array를 리턴한다. forEach 같은 경우에는 리턴값이 없음.
// map 은 반드시 리턴을 해줘야한다. map의 리턴값은 array이다.
let data = fruits.map(element =>{
    return element;
    
});

console.log(data);
// 이 map은 어디에써요?
// 객체 안에 여러 데이터가 있을 때, 특정 속성값만 원할 경우
// 아래 예제는 ceoList 객체에서 name 만 원할경우
// ceoList.map(item =>{
// return item.name;
//}

console.log("===============filter()=====================");

// 3) filter - 조건을 넣는데 true인 값만 빼내는것
// ceoList로 예
let data2 = fruits.filter(item =>{
    return item.startsWith("b");
});

console.log("age : ",data2);

// for loop, if문 사용하지 않아도 돼. 얼마나 간편해?
// 그냥 좀 공부해서 배워서 써

console.log("===============some()=====================");
//filter 와 some() 은 비슷
// some() 은 리턴값이 true / false

let data3 = fruits.some(item =>{
    return item.startsWith("a");
});
console.log(data3);

console.log("===============every()=====================");
// 야 모든 이름이 "A"로 시작하냐?
// every() 는 모든 데이터에 대한 조건의 true / false 반환
let data4 = fruits.every(item=>{
    return item.startsWith("a");
});
console.log(data4);


console.log("===============find()=====================");
// 찾아!
// find() - 결과에 대한 string 리턴
// filter() 와의 차이는 filter - 배열, find() - String 
// filter() - 조건에 해당 하는 값 모두 반환, find() - 한개 반환.
let data5 = fruits.find(item=>{
    return item.startsWith("a");
});

console.log(data5);

// 이 경우를 보면 fruits객체 안에 "a"로 시작하는 값이 2개이상인데, find() startsWith("a") 에 대한 결과는 apple 한개만 리턴됨
// 무조건 첫번째 찾은 결과값 리턴

console.log("===============findIndex()=====================");
// index로 검색
let data6 = fruits.findIndex(item=>{
    return item=="banana";
});
console.log(data6);

let data7 = fruits.findIndex(item=>{
    return item=="apple";
});
console.log(data7);

// index값은 0부터임

