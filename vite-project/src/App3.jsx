// firstName과 lastName이라는 상태를 만들기 위한 코드 작성
//firstName : Junho
//lastName : Bong

// import { useState } from "react";

// 상태 업데이트 : Captain America
// import React, {useState} from "react";

// const [ firstName, setFirstName ] = useState('Junho');
// const [ lastName, setLastName ] = useState('Bong');

// setFirstName('Captain');
// setLastName('America');
/**
 * 혹은 여러개의 const 를 작성해서 속성마다 정의하는것이 아닌 
 * 객체의 형태로 정의 가능
 */

// const [name, setName] = useState({
//   firstName : 'Junho',
//   lastName : 'Bong',
// });

// // setName을 사용하게 될 경우 차이점이 있음.
// setName({firstName: 'Captain', lastName:'America'});

// 즉 name, setName을 통해 useState의 매개변수가 객체 형태로 고정되어있으므로
// setName의 argument또한 객체 형태로 들어가야함
// 이상의 이유로 lastName만 교체하고싶더라도 초기값을 동일하게 전체 대입하는 귀찮은일이 있음

// 객체의 부분업데이트 방법

// spread : ES2018 객체 스프레드 구문을 이용하여 name상태 객체를 복제하고, 
// firstName의 값을 '이등병'으로 업데이트 한다면

// setName({... name, firstName: '이등병'});

// import React,{useState} from "react";

// function App3(){
//   const [name, setName] = useState({
//     firstName: '크리스',
//     lastName:'에반스'
//   })

//   return <div>안녕 {name.firstName} {name.lastName}</div>;
// }
// export default App3