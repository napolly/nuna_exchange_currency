// javaScript let과 var의 차이
// 호이스팅이 뭔가?

// javaScript의 변수 선언 방법, const, var, let
// const - 변하지 않는 상수 ( id / pw 등)
// let vs var?
// let 보다 var가 먼저나옴
// var 에 문제가 있기에 let 이 나왔을 거 아냐
// 호이스팅 - 함수가 실행되기 전에 안에 있는 변수들을 범위의 최 상단으로 올리는것
// ex)

var a = 1;
console.log(a);
// 전혀 문제가 없지

console.log(a);
var a = 1;
console.log(a);
// 이건 상식적으로 에러가 나야 정상이지
// 선언하기 전에 썼잖아.
// 근데 에러가 안남
// undefined 라고만 나오지
// 자바스크립트에서는 호이스팅시 변수의 선언과 초기화(undefined) 같이 이루어짐
// 그리고 할당은 나중에 함
// 선언을 안했는데도 가능해 이건 뭔 개같은 소리냐?
// ex)
console.log("=====================");

console.log(b);
b = 1
var b
console.log(b);
// 포용력 뭐야?
// var의 경우
// 전역변수, 지역변수 개념이 확실치 않음

// var의 경우 함수만 지역변수로 호이스팅이 되고, 나머지는 다 전역변수로 올려버림
// for문, if문 내 변수 전부
console.log("=====================");
console.log("예를들면");
for(var i=1; i<5; i++){
    console.log(i);
}
console.log(i);
// 1,2,3,4,5가 출력됨....이 뭔 개같은 소리야?

//또한,
console.log("=====================");
console.log("이것도 가능해");
var a = 1
console.log(a);
var a = 1
console.log(a);
//이 니미 뭔 개같은 경우야. 같은 변수를 또 선언해도 에러가 안나다니

// 그래서 var를 없애고자 let을 도입

// 결론은? var 쓰지마