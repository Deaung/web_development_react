import Header2 from "./components/header/Header2";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";



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
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
          동적인 버튼 클릭 결과물
        </section>
      </main>
    </div>
  );
}

export default App;
