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
let toCurrency = "USD";

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
    
  })
);
//querySelectorAll 왜 All? 그 안에 모든 a 태그를 선택해서 이벤트를 줄것이다.

document.querySelectorAll("#to-currency-list a")
  .forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    //3. 선택된 currency값을 변수에 저장해준다.
    toCurrency = this.textContent;
    console.log(toCurrency);
  }));
