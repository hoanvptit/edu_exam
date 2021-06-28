import './App.css';
import LoginForm from './components/login/loginForm';
import RegisterForm from './components/register/registerForm';
import TeacherHome from './components/teacher_home/teacher_home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {ProtectedRoute} from './components/utility/protected.route';
import Create_Room from './components/teacher_home/tch_main/create_room/create_room';
import Testing from './components/room_students/testing';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LoginForm}/>
          <ProtectedRoute path='/home/:userId' exact component={TeacherHome}/>
          <Route path='/register' component={RegisterForm}/>
          <Route exact path='/testing' component={Testing}/>
          <Route path="*" component={() => "404 NOT FOUND"}/>
        </Switch>
      </div>
    </Router>
    // <TeacherHome />
    // <Testing />
  );
}

export default App;
