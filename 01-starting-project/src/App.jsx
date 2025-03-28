import Header2 from "./components/header/Header2";
import { CORE_CONCEPTS } from "./data";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data_updated";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedTopic){
    console.log(selectedTopic)
    setSelectedTopic(selectedTopic);
  }

  // 리액트에서는 변수의 데이터에 HTML코드 삽입 가능
  let tabContent = <>
    <p>
      Please Select a Topic
    </p>
    </>   

  // 버튼을 클릭 했을 때 해당 내용을 참조하여 내용이 출력되어야함

  if(selectedTopic) { // selectedTopic에 값이 무엇이라도 있다면 이하 코드 생성
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </>
    )
  }


  return (
    <div>
      <Header2 />
      <main>
        <h2>핵심 개념</h2>
        <section id="core-concepts">
          <h2>핵심 개념 of React</h2>
          <ul>
            <CoreConcepts 
            image={CORE_CONCEPTS[0].image} 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}/>
            <CoreConcepts {...CORE_CONCEPTS[1]}/>
            <CoreConcepts {...CORE_CONCEPTS[2]}/>
            <CoreConcepts {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>예시들</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} >Components</TabButton> 
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            {tabContent}
          </div>
        </section>
      </main>
    </div>  
  );
}

export default App;