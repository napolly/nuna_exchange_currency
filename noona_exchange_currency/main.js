let currencyRatio = {
  USD: {
    KRW: 1184.36,
    USD: 1,
    VND: 22972.5,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00084,
    VND: 19.4,
    unit: "원",
  },
  VND: {
    KRW: 0.052,
    USD: 0.000044,
    VND: 1,
    unit: "동",
  },
}; //변수 - 객체타입
// 어떤 값에 대해서 여러가지 정보가 필요할 때 객체타입의 변수를 사용
// 객체에서 값을 읽어오는건?

let fromCurrency = "USD";
let toCurrency = "KRW";

// 1) currencyRatio 변수 안에 다 있는것이라
console.log(currencyRatio.USD.unit);
console.log();

// 2) currencyRatio["VND"]["unit"]
console.log(currencyRatio["VND"]["unit"]);

// 4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 1) 요소들에 클릭이벤트 - 이전에 각 버튼 등에 id 부여하여 from to 구분
// id가 from-currency-list인 document 의 a 태그에 이벤트를 줄것이다.
document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. 버튼을 가져와서
    // document.getElementById("from-button")

    //2. 버튼에 값을 바꾼다.
    document.getElementById("from-button").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장해준다.
    fromCurrency = this.textContent;
    console.log(fromCurrency);
    convert();
  })
);
//querySelectorAll 왜 All? 그 안에 모든 a 태그를 선택해서 이벤트를 줄것이다.

document.querySelectorAll("#to-currency-list a")
  .forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장해준다.
    toCurrency = this.textContent;
    convert();
  }));


// 1. 키를 입력하는순간 onkeyup
// 2. 환전이 되서
// 3. 환전된 값이 보인다.

function convert() {
    // 환전
    // 필요한 것 - 원금 - 원금의종류 - 환전금의 종류 - 환전금
    // 원금 * 환율 = 환전금
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    console.log("환전결과:",convertedAmount);
    
    document.getElementById("to-input").value=convertedAmount;
    document.getElementById("from-unit").innerText=currencyRatio[fromCurrency].unit;
    document.getElementById("to-unit").innerText=currencyRatio[toCurrency].unit;
}

// 1. 드랍다운 리스트에 값이 바뀔때마다 click 이벤트
// 2. 환전을 다시 한다.
// 3. toCurrency 의 단위가 바뀌면 unit 도 바껴야 한다.

//숙제
// 7. 반대로 밑에 박스에서 숫자를 바꿔도 위 박스에 환율이 적용된다.
// 요구사항
// toCurrency 의 input box 의 값이 변하면 onkeyup 으로 캐치하여
// fromCurrency 의 input box 의 값을 변하게 하는 function 을 만든다.
// 적용한다.

document.querySelectorAll("#to-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //1. 버튼을 가져와서
    // document.getElementById("from-button")

    //2. 버튼에 값을 바꾼다.
    document.getElementById("to-button").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장해준다.
    toCurrency = this.textContent;
    console.log(toCurrency);
    convertreverse();
  })
);





function convertreverse() {
    // 환전
    // 필요한 것 - 원금 - 원금의종류 - 환전금의 종류 - 환전금
    // 원금 * 환율 = 환전금
    let amount = document.getElementById("to-input").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    console.log("환전결과:",convertedAmount);
    
    document.getElementById("from-input").value=convertedAmount;
    document.getElementById("from-unit").innerText=currencyRatio[fromCurrency].unit;
    document.getElementById("to-unit").innerText=currencyRatio[toCurrency].unit;
}







// 8. 숫자를 한국어로 읽는 법


