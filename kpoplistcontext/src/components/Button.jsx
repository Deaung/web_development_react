import { useContext } from "react";
import { KPopContext } from "../context/context";

function Button({children}){
  const {data, setPlayList}= useContext(KPopContext);

  let result = [...data];

  if( children === '레드벨벳 노래찾기'){
    result = data.filter((song)=> song.artist ==='Red Velvet');
  }
  if( children === '남자아티스트 노래찾기'){
    result = data.filter((song)=> song.gender ==='male');
  }
  if( children === '여자아티스트 노래찾기'){
    result = data.filter((song)=> song.gender ==='female');
  }
  const handleClick = () =>{
    setPlayList(result);  // useContex로 가져왔기 때문에 사용 가능
  }
  return<button onClick={handleClick}>{children}</button>
}
export default Button;