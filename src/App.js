import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css';
import Entry from "./pages/Entery";
import Exit from "./pages/Exit";

function App() {
  return (
    <>
        <Router>
          <Switch>
            <Route exact path="/" component={Entry} />
            <Route exact path="/exit" component={Exit} />
          </Switch>
        </Router>
        <ToastContainer />
    </>
  )
}

export default App
