import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Repositories(){

  const getRepositories = async () =>{
    const response = await axios.get(`https://api.github.com/search/repositories?q=$react`);
    return response.data.item;
  }

  const {isLoading, isError, data}= useQuery({
    queryKey: ['repositories'],
    queryFn: getRepositories,
    staleTime: 60 * 1000, // 밀리초 단위이기에 1분을 의미
  });

  // 조건부 렌더링 부분 구현 : 데이터를 이용할 수 있을 때 렌더링
  // REST API 호출이 오류로 끝나는 경우 메시지 전달해야 함

  if(isLoading){
    return <p>로딩중</p>
  }
  if(isError){
    return <p>오류 발생</p>
  }
  else{
    return(
      <table>
        <tbody>
          {
            data.map(repo =>
              <tr key={repo.id}>
                <td>{repo.full_name}</td>
                <td>
                  <a href={repo.html_url}>{repo.html_url}</a>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}
export default Repositories