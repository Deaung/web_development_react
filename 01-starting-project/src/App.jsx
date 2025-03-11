// import Header from "./components/Header";

const reactDescriptionsKor = ['근본적인', '결정적인', '핵심적인']
const reactDescriptionsEng = ['Fundamental', 'Crucial' , 'Core']

function getRandomInt(max){
  return Math.floor(Math.random()*(max + 1)); // return 값은 0~2 의 int 값
}
console.log(getRandomInt(2))



function Header(){
  const randomInt = getRandomInt(2)
  return( 
    <header>
    <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
    <h1>React 필수 요소 복습</h1>
    <p>
      {reactDescriptionsEng[randomInt]} React concepts you will need for almost any app you are
      going to build!
      <br />
      대부분의 앱을 위해 당신이 필요로 할 {reactDescriptionsKor[randomInt]} React 개념😶
    </p>
    </header>
    );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <br />
        <h2>시작</h2>
      </main>
    </div>
  );
}

export default App;
