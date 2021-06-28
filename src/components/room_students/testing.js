import './testing.css';
import { FaUserEdit, FaClock, FaUsers, FaCalendarAlt, FaBell } from 'react-icons/fa';
import {MdAccountCircle} from 'react-icons/md';
import { Container, Row, Col, Button } from 'react-bootstrap';
export default function Testing() {
    console.log("testing");
    const SubQuestion = (index) => {
        return (
            <li >
                <span >Câu {index} </span>
                <input type="radio" id="A1" name={`answer${index}`} value="1" />
                <label for="A1">A</label>
                <input type="radio" id="B1" name={`answer${index}`} value="2" />
                <label for="B1">B</label>
                <input type="radio" id="C1" name={`answer${index}`} value="3" />
                <label for="C1">C</label>
                <input type="radio" id="D1" name={`answer${index}`} value="4" />
                <label class="last_radio" for="D1">D</label>
            </li>
        )
    }
    var question_rows = [];
    for (let i = 1; i <= 50; i++) {
        question_rows.push(SubQuestion(i));
    }
    return (
        <>
            {/* <div className='container-fluid info_user'> */}
            <Container fluid className='info_user'>
                <div style={{ display: "flex" }}>
                    <FaBell className="icon"/>
                    <h5>Nguyễn Văn Hoà</h5>
                    <MdAccountCircle className="icon_big"/>
                </div>
            </Container>

            <Container fluid className="info_test border">

                <div>
                    <h5>
                        Subjects: Math for machine learning
                    </h5>

                    <h6>
                        Remain: 00:12:05 lefts
                    </h6>
                </div>

                <ul>
                    <li>
                        <FaUserEdit className="icon"/>
                        <div >N.T.Han</div>
                    </li>
                    <li>
                        <FaClock className="icon"/>
                        <div>10:30-11:30 Am</div>
                    </li>
                    <li>
                        <FaUsers className="icon"/>
                        <div>35 Students</div>
                    </li>
                    <li>
                        <FaCalendarAlt className="icon"/>
                        <div>28-06-2021</div>
                    </li>

                </ul>

                <Button variant="success" className="submit">Submit</Button>
            </Container>
            <Row className="test-content">
                <Col className='question'>

                    <embed
                        src="http://infolab.stanford.edu/pub/papers/google.pdf#toolbar=0&navpanes=0&scrollbar=0"
                        type="application/pdf"
                        frameBorder="0"
                        scrolling="auto"
                        height="100%"
                        width="100%">
                    </embed>

                </Col>

                <Col className='answer_sheet'>
                    <ul className='li_sheet'>
                        {question_rows.map(row => {
                            return row;
                        })}
                    </ul>
                </Col>

            </Row>
        </>
    )
}