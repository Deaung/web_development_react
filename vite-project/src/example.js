// // javaScript 복습 및 React 적용 문법 #1

// let a = 1;
// console.log(a);

// // 지역 변수 / 전역변수 개념
// let count = 10;
// if (count > 5){
//   const total = count*2;
//   console.log(total);
// }
// // console.log(total); // {} 범위를 벗어났기 때문에 오류 발생

// // const가 객체 / 배열

// const myObj = {foo:3};
// console.log(myObj.foo);
// myObj.foo = 5;
// console.log(myObj.foo);
// /**
//  * const가 상수이기는 하나, 객체 또는 배열인 경우 내부의 속성이나 요소를 ㅇ
//  * 업데이트 가능
//  * 
//  */

// // 화살표 함수

// // JS 상에서 함수를 정의하는 방법

// function multiply(x){
//   return x*2;
// }
// console.log(multiply(2));

// // 이상의 코드 화살표 함수 사용

// x => x*2;

// const calc  = x => x*2;
// console.log(calc(3)); //6 출력

// // 매개변수가 두개이상인 경우 ()로 묶어야함

// const calcSum = (x, y) => x+y;
// console.log(calcSum(2,3));

// // 화살표 함수 본문이 return 값인 경우 명시할 필요 없음,
// // 그런데 함수 본문{}이 여러줄에 걸칠 경우 중괄호 명시해야함

// const calcMulti = (x,y)=>{
//   console.log('곱셈 결과 다음과 같음')
//   return x*y;
// }
// console.log(calcMulti(5,6));

// // 함수에 파라미터가 없다면 빈 괄호로 작성
// const sayHello = () => console.log("안녕하세요");
// sayHello();