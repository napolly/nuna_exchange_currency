let currencyRatio = {
    USD:{
        KRW:1184.36,
        USD:1,
        VND:22972.50,
        unit:"달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.40,
        unit:"원"
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1,
        unit:"동"
    }
} //변수 - 객체타입
// 어떤 값에 대해서 여러가지 정보가 필요할 때 객체타입의 변수를 사용
// 객체에서 값을 읽어오는건?

// 1) currencyRatio 변수 안에 다 있는것이라
console.log(currencyRatio.USD.unit);
console.log();

// 2) currencyRatio["VND"]["unit"]
console.log(currencyRatio["VND"]["unit"]);
