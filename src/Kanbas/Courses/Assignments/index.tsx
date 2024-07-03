import {useParams} from "react-router";
import {deleteAssignment} from "./reducer";
import {useSelector, useDispatch} from "react-redux";
import {BsGripVertical,BsPlus} from "react-icons/bs";
import { BiSolidDownArrow} from "react-icons/bi";
import { FaPlus} from "react-icons/fa";
import { PiNotePencilFill } from "react-icons/pi";
import { IoEllipsisVertical } from "react-icons/io5";

import AssignmentsControlButtons from "./AssignmentsControlButtons";
import AssignmentsControls from "./AssignmentsControls";

export default function Assignments() {
    const {cid} = useParams();
    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    console.log(assignments)
    const cidAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    const dispatch = useDispatch();

    return (
        <div id="wd-assignments">
            <AssignmentsControls cid={cid!}/>

<ul id="wd-assignment-list" className="list-group rounded-0 my-4">
<div className="wd-title p-3 ps-2 bg-secondary">
                      <div className="wd-title p-3 ps-1 bg-secondary bg-light w-100 d-flex align-items-center"
                                                style={{justifyContent:"space-between"}}>
                                                  <div >
                                                <h4 id="wd-assignments-title">
                                                <BsGripVertical className="me-2 fs-3" />
                                                <BiSolidDownArrow className="me-2 fs-6" />
                                                  <b>ASSIGNMENTS</b>
                                                </h4> </div>
                                                <div className = " d-flex align-items-center">
                                          <div style={{
                                            border: "1px solid #c7cdd158",
                                            borderRadius: "25px",
                                            padding: "5px 10px",
                                            marginRight: "10px"
                                          }}>
                                         <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
                                         <b>40% of Total</b>
                                         </button>
                                          </div>
                                          <BsPlus className="fs-4 me-2" />
                                          <IoEllipsisVertical className="fs-4" />
                                         </div>
                                         </div>
                                        </div>
                {
                    cidAssignments && cidAssignments.map((item: any) => (
                        <li className="wd-assignment-list-item list-group-item p-3" style={{borderLeft: "4px solid green"}}>
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <BsGripVertical className="fs-4"/>
                                </div>
                                <div className="col-auto">
                                    <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                       href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                        <PiNotePencilFill className="text-success fs-4"/>
                                    </a>

                                </div>
                                <div className="col">
                                    <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                       href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                    <h5><b>{item.title}</b></h5>
                                    </a>

                                    <p>
                                     <span className="text-danger"> Multiple Modules </span>
                                      | <b>Not available until</b> {item.available} |<br /> <b>Due</b> {item.due} | {item.points} pts
                                                                                  </p>
                                </div>
                                <div className="col float-end">
                                    <AssignmentsControlButtons assignmentId={item._id}
                                                          deleteAssignment={(assignmentId) => {
                                                              dispatch(deleteAssignment(assignmentId));
                                                          }}/>
                                </div>
                            </div>
                        </li>
                    ))

                }
            </ul>
        </div>

    );
}

