import './App.css';
import LoginForm from './components/login/loginForm';
import RegisterForm from './components/register/registerForm';
import TeacherHome from './components/teacher_home/teacher_home';
import Calendar from './components/teacher_home/tch_side_right/calendar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path='/' exact component={TeacherHome}/>
    //       <Route path='/login' component={LoginForm}/>
    //       <Route path='/register' component={RegisterForm}/>
    //     </Switch>
    //   </div>
    // </Router>
    <TeacherHome />
    // <Calendar />
  
  );
}

export default App;
