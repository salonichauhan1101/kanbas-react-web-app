import { useParams } from "react-router";
import { assignments } from "../../Database";
import { FaPlus, FaSearch, FaCheck,FaRegAddressBook } from 'react-icons/fa';
import { BiSolidDownArrow } from "react-icons/bi";
import { BsGripVertical,BsPlus } from 'react-icons/bs';
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotePencilFill } from "react-icons/pi";
import LessonControlButtons from '../Modules/LessonControlButtons';
export default function Assignments() {
const { cid } = useParams();
const assignmentList = assignments.filter((assignment) => assignment.course === cid);
  return (

      <div id="wd-assignments" className="container">
            <div className="d-flex justify-content-between align-items-center my-3">
              <div className="input-group search-bar">
                <span className="input-group-text"><FaSearch /></span>
                <input type="text" className="form-control" placeholder="Search for Assignments" />
              </div>
              <div className="d-flex">
                <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
                  <FaPlus className="me-2" /> Group
                </button>
                <button className="btn btn-danger d-flex align-items-center">
                  <FaPlus className="me-2" /> Assignment
                </button>
              </div>
            </div>

            <li className="wd-module list-group p-0 mb-5 fs-5 border-gray">

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
                            assignmentList && assignmentList.map((item) => (
                                <ul className="wd-lessons list-group rounded-0">
                                <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "4px solid green" }}>
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                            <BsGripVertical className="fs-3" />
                                        </div>
                                        <div className="col-auto">
                                            <PiNotePencilFill className="text-success fs-3" />
                                        </div>
                                        <div className="col">
                                            <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                                                href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                                                <h5><b>{item.title}</b></h5>
                                            </a>
                                            <p>
                                                <span className="text-danger"> Multiple Modules </span>
                                                | <b>Not available until</b> {item.available} | <b>Due</b> {item.due} | {item.points} pts
                                            </p>
                                        </div>

                                        <div className="col float-end">
                                            <LessonControlButtons />
                                        </div>
                                      </div>
                                    </li>
                                </ul>
                            ))
                            }

                        {/* <ul className="wd-lessons list-group rounded-0">
                          <li className="wd-lesson list-group-item p-2 ps-0">
                          <div className= " d-flex w-100 align-items-center"style={{justifyContent:"space-between"}}>
                          <div className = " d-flex align-items-center">
                          <BsGripVertical className="me-1 fs-3"/>
                          <PiNotePencilFill style={{marginRight:"20px"}} />
                          <div>
                          <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123" >
                                <b>A1</b>
                              </a>
                              <p> <span className="text-danger">
                                Multiple Modules </span>| <b>Not available until</b> May 6 at 11:59 pm&nbsp;|<br/><b>Due&nbsp;</b>May 13 at 11:59pm&nbsp;|&nbsp;100 pts</p>
                              </div></div> <LessonControlButtons /></div>

                          </li>

                          </ul>

                          <ul className="wd-assignments-a2 list-group rounded-0">
                          <li className="wd-assignments-list list-group-item p-2 ps-0">
                          <div className= " d-flex w-100 align-items-center"style={{justifyContent:"space-between"}}>
                          <div style={{display:"flex",alignItems:"center"}}>
                          <BsGripVertical className="me-1 fs-3"/>
                          <PiNotePencilFill style={{marginRight:"20px"}} />
                          <div>
                          <a className="wd-assignment-link"
                                href="#/Kanbas/Courses/1234/Assignments/123" >
                                <b>A2</b>
                              </a>
                              <p> <span className="text-danger">
                                Multiple Modules </span>| <b>Not available until</b> May 13 at 11:59 am&nbsp;|<br/><b>Due&nbsp;</b>May 20 at 11:59pm&nbsp;|&nbsp;100 pts</p>
                              </div></div> <LessonControlButtons /></div>

                          </li>
                          </ul>

                       <ul className="wd-assignments-a3 list-group rounded-0">
                               <li className="wd-assignments-list list-group-item p-2 ps-0">
                                 <div className= " d-flex w-100 align-items-center"style={{justifyContent:"space-between"}}>
                               <div className = " d-flex align-items-center">
                               <BsGripVertical className="me-1 fs-3"/>
                               <PiNotePencilFill style={{marginRight:"20px"}} />
                               <div>
                               <a className="wd-assignment-link"
                                     href="#/Kanbas/Courses/1234/Assignments/123" >
                                     <b>A3</b>
                                   </a>
                                   <p> <span className="text-danger">
                                     Multiple Modules </span>| <b>Not available until</b> May 20 at 11:59 am&nbsp;|<br/><b>Due&nbsp;</b>May 27 at 11:59pm&nbsp;|&nbsp;100 pts</p>
                                   </div></div> <LessonControlButtons /></div>

                               </li>
                               </ul>*/}
                </li>
    </div>
  );
}
