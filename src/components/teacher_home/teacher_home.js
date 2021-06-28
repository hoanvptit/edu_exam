import './teacher_home.css';
import TCH_Header from './tch_header/tch_header';
import TCH_Upcoming from './tch_main/upcoming/upcoming';
import TCH_RightSide from './tch_side_right/tch_side_right';
import TCH_LeftSide from './tch_side_left/tch_side_left';
import Create_Room from './tch_main/create_room/create_room';
import Accomplished from './tch_main/accomplished';
import My_Room from './tch_main/my_room';
import UpcomingDetail from './tch_main/upcoming/upcoming_detail';
import EditRoom from './tch_main/edit_room/edit_room';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Testing from '../room_students/testing';
function TeacherHome({ match }) {
    let userId = match.params.userId;
    const [listRoom, setListRoom] = useState([]);
    return (
        <Router>
            <Switch >
            <Route exact path='/testing' component={Testing} />
            <div className="teacher_home">
                <TCH_Header userId={userId} />
                <div class="tch_body">
                    <TCH_LeftSide userId={userId} />
                    <Switch >

                        <Route path='/home/:userId' exact component={TCH_Upcoming} />
                        <Route path='/upcoming/:userId' component={TCH_Upcoming} />
                        <Route path='/edit_room/:userId' component={EditRoom} />
                        <Route path='/create_room/:userId' component={Create_Room} />
                        <Route path='/accomplished/:userId' component={Accomplished} />
                        <Route path='/my_room/:userId' component={My_Room} />
                        <Route path='/upcoming_view/:id' component={UpcomingDetail} />
                    </Switch>

                    <TCH_RightSide userId={userId} />

                </div>

            </div>
            </Switch>
        </Router>

    )
}
export default TeacherHome;