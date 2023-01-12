import React ,{useEffect,useState}from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Signup from "./pages/SignUp/Signup";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import LogOut from "./pages/Logout/Logout";
import Todo from "./pages/ToDo/ToDo";
import Docs from "./pages/Docs/Docs";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Update from "./pages/Update/Update";

const App = () => {
    const userData = JSON.parse(localStorage.getItem('user'))
    const [isLogin, setIsLogin] = useState()
    useEffect(() => {
        // console.log("This is user Data",userData)
        if (userData == null) {
            setIsLogin(false)
          } else {
            setIsLogin(true)
          }
    }, [])
    
    return (
        <Router>
            <div className="App">
                <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
                <div className="todos-body">
                <Switch >
                    <Route path="/" exact component={Home} />
                    <Route path="/categories" component={Category} />
                    <Route path="/todo" component={Todo} />
                    <Route path="/update" component={Update} />
                    <Route path="/docs" component={Docs} />
                    <Route path="/signUp" component={Signup} />
                    <Route path="/logout" exact component={LogOut} />
                    <Route path="/login" component={(props) => <Login setIsLogin={setIsLogin} {...props} />}  />
                </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
