import './App.css';
import LoginForm from './components/login/loginForm';
import RegisterForm from './components/register/registerForm';
import TeacherHome from './components/teacher_home/teacher_home';
import Calendar from './components/teacher_home/tch_side_right/calendar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Notification from './components/notify/notification';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/home' exact component={TeacherHome}/>
          <Route exact path='/' component={LoginForm}/>
          <Route path='/register' component={RegisterForm}/>
        </Switch>
      </div>
    </Router>
    // <TeacherHome />
  );
}

export default App;
