import Header2 from "./components/header/Header2";
// import 이미지 변수명 from"경로"

function CoreConcepts(props){
  return(
    <li>
      {/* <img src="..." alt="" /> */}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
    
  )
}

function App() {
  return (
    <div>
      <Header2 />
      <main>
        <h2>핵심 개념</h2>
        <ul>
          {/* <li>Components : 재사용이 가능하여 개발자가 조합하여 최적의 UI를 꾸밀 수 있다</li>
          <li>JSX : HTML적인 방식으로 JS 내에 HTML 태그를 작성하여 시인성있게 작성가능</li> */}
          <CoreConcepts title="Components" description='재사용이 가능하여 개발자가 조합하여 최적의 UI를 꾸밀 수 있다'/>
          <CoreConcepts title="JSX" description='리액트 내부에서 자바스크립트와 HTML을 섞어서 사용하여 시인성 올릴수 있음'/>
          <CoreConcepts title="Props" description='객체 속성 및 속성값을 상위에서 하위로 전달 가능'/>
          <CoreConcepts title="State" description='상태이상 발생시 부분적으로 리렌더링 가능'/>
        </ul>
      </main>
    </div>
  );
}

export default App;
