import GetData from "./component/getData";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import StudentList from "./component/studentList";

function App() {
  return (
    
      <Switch>
        <Route path="/" exact>
          <GetData />
        </Route>
        <Route path="/student" ><StudentList/></Route>
      </Switch>
  
  );
}

export default App;
