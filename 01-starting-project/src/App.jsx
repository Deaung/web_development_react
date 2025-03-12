import Header2 from "./components/header/Header2";
// import { CORE_CONCEPTS } from "./data";
// import jsxImg from './assets/jsx-ui.png'
// import 이미지 변수명 from"경로"
import { CORE_CONCEPTS } from "./data";

function CoreConcepts(props){
  return(
    <li>
      <img src={props.image} alt={props.title} />
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
        <section id="core-concepts">
          <h2>핵심 개념 of React</h2>
          <ul>
            <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
