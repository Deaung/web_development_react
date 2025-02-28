import { useState } from "react";
import './App.css'

// function App(){


//   let drink = 0;

//   const drinkWater = () => {
//     drink+=1;
//     console.log('버튼 클릭 횟수: ${drink}번');
//   };
//   return(
//     <>
//       <h1>
//         오늘은 물을 <strong> {drink} </strong>잔을 충전했음
//       </h1>
//       <br /><br /><br />
//       <button onClick = {drinkWater}></button>
//     </>
//   )
// }
// export default App

// import { useState } from "react";

function App(){
  const [drink, setDrink] =useState(0);

  const drinkWater = () =>{
    setDrink(drink+1);
  }
   return(
    <>
      <p>
        오늘은 물을 <strong>{drink}</strong>잔을 충전했음
      </p>
      <br /><br /><br />
      <button onClick = {drinkWater}></button>
      
    </>
  );
}
export default App