import TCH_Header from './tch_header/tch_header';
import TCH_Main from './tch_main/tch_main';
import TCH_RightSide from './tch_side_right/tch_side_right';
import TCH_LeftSide from './tch_side_left/tch_side_left';
import Create_Room from './tch_main/create_room';
import Accomplished from './tch_main/accomplished';
import My_Room from './tch_main/my_room';

import './teacher_home.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function TeacherHome() {
    return (
        <Router>
            <div className="teacher_home">
                <TCH_Header />
                <div class="tch_body">
                    <TCH_LeftSide />
                    <Switch >
                        <Route path='/' exact component={TCH_Main} />
                        <Route path='/upcoming' component={TCH_Main} />
                        <Route path='/create_room' component={Create_Room} />
                        <Route path='/accomplished' component={Accomplished} />
                        <Route path='/my_room' component={My_Room} />
                    </Switch>
                    <TCH_RightSide />
                </div>

            </div>
        </Router>

    )
}
export default TeacherHome;