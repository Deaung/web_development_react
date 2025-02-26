// // javascript 복습 및 react 활용 문법#2

// // 템플릿 리터럴
// let person  = {firstName: "John", lastName:"Johnson"};
// let greeting  = "Hello " + person.firstName+""+person.lastName
// console.log(greeting);
// // greeting2를 템플릿 리터럴 적용하여 작성 console창에 띄우기
// let greeting2 = `Hello ${person.firstName} ${person.lastName}`
// console.log(greeting2);

// // 객체 구조 분해
// // 해당기능을 사용하면 객체에서 값을 추출하여 변수에 할당 할 수 있음.
// // 단일 구문을 이용하여 객체의 여러 속성을 개별 변수에 할당하는것도 가능

// const person2 = {
//   firstName: 'Jane',
//   lastName: 'Cooper',
//   email: 'j.cooper@mail.com',
// }
// const firstName1 = person.firstName;
// const lastName1 = person.lastName
// const email1 = person.email

// // 이상의 번거로운 코드 구조 분해하는 방법은 다음과 같음

// const { firstName, lastName, email}= person2;

// console.log(firstName);
// console.log(lastName);
// console.log(email);