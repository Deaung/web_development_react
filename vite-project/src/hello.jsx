// function Hello1(){
//   return <h1>Hello, everyone</h1>
// }

// export default Hello
// function Hello2(props){
//   return <h1>Hello {props.user}</h1>
// }
// export default Hello
// 이상의 코드는 현재 상황에서 문제 생기는데 , 주의해야 할 점들 중 하나는 개발자도구에서
// 잘못된 부분을 확인 했을 때 main.js의 다섯번째 줄이 문제라 되어있는데 사실은 Hello함수가 
// argument를 가지지만 현재 기준 12번 라인에서 <Heelo /> 부분에서 props와 관계도니 부분이 적용되지않았기 때문

// 자바 배울 때 객체 지향 하며 파일 넘나들며 오류 수정했던 부분들은 javascript에서 놓아뒀지만
// 리액트 에서 여러 파일 검증해서 오류 밝힐 필요 있음

// main.jsx가 상위 컴포넌트로서 키-값 쌍을 정의 하고 하위 컴포넌트인 Hello.jsx로 전달함
// 그때의 props = {user = 'Ahn'}으로 대입, 이후 <h1>Hello {props.user}</h1> 은 Hello Ahn으로 출력되게 함

// function Hello3(props){
//   return  <h1>Hi {props.firstName} {props.lastName}</h1>
// }
// export default Hello3
//main.jsx를 수정하여 로버트 패틴슨으로 출력 되도록 작성

// 이상의 코드가 의미하는 바는 :props 내의 복수의 키 - 값 쌍(properties) 이 있을 수 있음을 보여줌
function Hello4({firstName, lastName}) {
  return <h1>Hello {firstName} {lastName}</h1>
}
export default Hello4