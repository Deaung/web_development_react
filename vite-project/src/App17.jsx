import AuthContext from "./AuthContext";
import MyComponent from "./MyComponent";
import './App.css'

function App(){
  const userName = 'jhon';

  return(
    <AuthContext.Provider value={userName}>
      <MyComponent />
    </AuthContext.Provider>
  );
}
export default App