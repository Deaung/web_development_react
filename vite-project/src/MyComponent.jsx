import { useContext } from "react";
import AuthContext from "./AuthContext";

function MyComponent(){
  const authContext = useContext(AuthContext);

  return (
    <h1>
      Welcome {authContext} 
    </h1>
  );
}
export default MyComponent;