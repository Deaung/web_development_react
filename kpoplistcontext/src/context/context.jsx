// contextAPI 이용 하기위한 import 문
// import { Children } from "react";
import { createContext, useState } from "react";

const data = [
  {
    title: "Psycho",
    artist: "Red Velvet",
    releaseDate: "2019.12.23",
    gender: "female",
  },
  {
    title: "Feel My Rhythm",
    artist: "Red Velvet",
    releaseDate: "2022.03.21",
    gender: "female",
  },
  {
    title: "Beatbox",
    artist: "NCT DREAM",
    releaseDate: "2022.05.30",
    gender: "male",
  },
  {
    title: "Attention",
    artist: "NewJeans",
    releaseDate: "2022.08.01",
    gender: "female",
  },
  {
    title: "Rush Hour",
    artist: "Crush (feat. j-hope of BTS)",
    releaseDate: "2022.09.22",
    gender: "male",
  },
];

// createContext() 활용 context객체 생성

const KPopContext = createContext();

//provider 컴포넌트 리턴하는 KPopContextProvider생성
const KPopContextProvider = ({children})=>{
  const [playList, setPlayList] = useState(data);

  return(
    <KPopContextProvider value={{data, playList, setPlayList}}>
      {children}
    </KPopContextProvider>
  );
}
export {KPopContext, KPopContextProvider};