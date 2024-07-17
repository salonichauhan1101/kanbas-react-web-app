import {useLocation, useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateAssignment} from "./reducer";
import * as client from "./client";

export default function Editor() {
    const {cid} = useParams();
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const router = useNavigate();

    const aid = pathname.split("/").pop();

    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const curAssignment = assignments.find((item: any) => item._id === aid);
    console.log(curAssignment)

    const [assignment, setAssignment] = useState({
        ...curAssignment
    });


    const handleChange = (e: any) => {
        const value = e.target.value;
        setAssignment({...assignment, [e.target.name]: value});
    };

    const saveModule = async (assignment: any) => {
        const status = await client.updateAssignment(assignment);
        dispatch(updateAssignment(assignment));
        router(`/Kanbas/Courses/${cid}/Assignments`);
    };

    const handleUpdateAssignment = () => {
        saveModule(assignment)
    }

    return (
        <div id="wd-assignments-editor">
            <div className="container">
                <div className="row input-group mb-2">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" name="title" value={assignment?.title}
                           onChange={handleChange}/>
                </div>

                <div className="row input-group mb-2">
                      <textarea id="wd-description" className="form-control" rows={10} cols={60} name="description"
                                onChange={handleChange}>
                            {assignment?.description}
                        </textarea>
                </div>

                <div className="row">
                    <div className="col-md-6 text-end">
                        <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col-md-6 text-end">
                        <input id="wd-points" type="number" className="form-control" name="points"
                               onChange={handleChange} value={assignment?.points}/>
                    </div>
                </div>
<br/>
                <div className="row">
                   <div className="col-md-6 text-end">
                       <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
                   </div>
                   <div className="col-md-6 text-end">
                       <select id="wd-group" className="form-control">
                           <option value="">ASSIGNMENTS</option>
                           <option>QUIZZES</option>
               <option>EXAMS</option>
               <option>PROJECT</option>
                       </select>
                   </div>
            </div>

            <br />

         <div className="row">
           <div className="col-md-6 text-end">
            <label>Display Grade as</label>
          </div>
          <div className="col-md-6">
             <select className="form-control form-select">
               <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
             </select>
           </div>
         </div>
       <br/>

             <div className="row">
           <div className="col-md-6 text-end">
            <label>Submission Type</label>
          </div>
           <div className="col-md-6">
           <div className="border p-2">
             <select className="form-control from-select">
               <option>Online</option>
               <option>On Paper</option>
               <option>No Submission</option>
             </select><br/>

             <div className="row">
             <label><b>Online Entry Options</b></label>
          <div className="col-md-6">
             <input type="checkbox" id="online_entry_options1" />
             <label htmlFor="online_entry_options1" className="mx-1">Text Entry</label>
             <br />
             <input type="checkbox" id="online_entry_options2" />
            <label htmlFor="online_entry_options2" className="mx-1">Website URL</label>
             <br />
            <input type="checkbox" id="online_entry_options3" />
             <label htmlFor="online_entry_options3" className="mx-1">Media Recordings</label>
             <br />
             <input type="checkbox" id="online_entry_options4" />
             <label htmlFor="online_entry_options4" className="mx-1">Student Annotation</label>
             <br />
             <input type="checkbox" id="online_entry_options5" />
             <label htmlFor="online_entry_options5" className="mx-1">File Uploads</label>

           </div>
         </div>
          </div>

         </div>
</div>
         <br />



                <div className="row">
                    <div className="col-md-6 text-end">
                        <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                <label><b>Assign to</b></label>
               <br />
               <input className="form-control" value="Everyone" />
               <br />

                                </div>
                                <div className="row">
                                    <label htmlFor="wd-due-date"><b>Due</b></label>
                                    <input id="wd-due-date" type="date" className="form-control"
                                           value={assignment?.due} onChange={handleChange} name="due"/>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <label htmlFor="wd-available-from"><b>Available from</b></label>
                                        <input id="wd-available-from" type="date" className="form-control"
                                               value={assignment?.available} onChange={handleChange} name="available"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="wd-available-until"><b>Until</b></label>
                                        <input id="wd-available-until" type="date" className="form-control"
                                               onChange={handleChange} name="until" value={assignment?.until}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <hr/>
                </div>

                <div className="mb-2">
                    <input type="button" className="btn btn-danger float-end ms-2" value="Save"
                           onClick={handleUpdateAssignment}/>
                    <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input type="button" className="btn btn-secondary float-end" value="Cancel"/>
                    </Link>
                </div>

                <div className="row" style={{height: '30px', width: '100%'}}></div>
            </div>
        </div>
    )
}


/*import {useLocation, useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateAssignment} from "./reducer";

export default function Editor() {
    const {cid} = useParams();
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const router = useNavigate();

    const aid = pathname.split("/").pop();

    const {assignments} = useSelector((state: any) => state.assignmentsReducer);
    const isCurrentAssignment = assignments.find((item: any) => item._id === aid);
    console.log(isCurrentAssignment)

    const [assignment, setAssignment] = useState({
        ...isCurrentAssignment
    });

    const handleChange = (e: any) => {
        const value = e.target.value;
        setAssignment({...assignment, [e.target.name]: value});
    };

    const handleUpdateAssignment = () => {
        dispatch(updateAssignment(assignment));
        router(`/Kanbas/Courses/${cid}/Assignments`);
    }

    return (
        <div id="wd-assignments-editor">
            <div className="container">
                <div className="row input-group mb-2">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" name="title" value={assignment?.title}
                           onChange={handleChange}/>
                </div>

                <div className="row input-group mb-2">
                      <textarea id="wd-description" className="form-control" rows={10} cols={60} name="description"
                                onChange={handleChange}>
                            {assignment?.description}
                      </textarea>
                </div>

                <div className="row">
                    <div className="col-md-6 text-end">
                        <label htmlFor="wd-points" className="col-form-label float-end">Points</label>
                    </div>
                    <div className="col-md-6 text-end">
                        <input id="wd-points" type="number" className="form-control" name="points"
                               onChange={handleChange} value={assignment?.points}/>
                    </div>
                </div>
<br/>
                <div className="row">
                   <div className="col-md-6 text-end">
                       <label htmlFor="wd-group" className="col-form-label float-end">Assignment Group</label>
                   </div>
                   <div className="col-md-6 text-end">
                       <select id="wd-group" className="form-control">
                           <option value="">ASSIGNMENTS</option>
                           <option>QUIZZES</option>
               <option>EXAMS</option>
               <option>PROJECT</option>
                       </select>
                   </div>
            </div>

            <br />

         <div className="row">
           <div className="col-md-6 text-end">
            <label>Display Grade as</label>
          </div>
          <div className="col-md-6">
             <select className="form-control form-select">
               <option>Percentage</option>
              <option>Points</option>
              <option>Complete/Incomplete</option>
              <option>Letter Grade</option>
             </select>
           </div>
         </div>
       <br/>

             <div className="row">
           <div className="col-md-6 text-end">
            <label>Submission Type</label>
          </div>
           <div className="col-md-6">
           <div className="border p-2">
             <select className="form-control from-select">
               <option>Online</option>
               <option>On Paper</option>
               <option>No Submission</option>
             </select><br/>

             <div className="row">
             <label><b>Online Entry Options</b></label>
          <div className="col-md-6">
             <input type="checkbox" id="online_entry_options1" />
             <label htmlFor="online_entry_options1" className="mx-1">Text Entry</label>
             <br />
             <input type="checkbox" id="online_entry_options2" />
            <label htmlFor="online_entry_options2" className="mx-1">Website URL</label>
             <br />
            <input type="checkbox" id="online_entry_options3" />
             <label htmlFor="online_entry_options3" className="mx-1">Media Recordings</label>
             <br />
             <input type="checkbox" id="online_entry_options4" />
             <label htmlFor="online_entry_options4" className="mx-1">Student Annotation</label>
             <br />
             <input type="checkbox" id="online_entry_options5" />
             <label htmlFor="online_entry_options5" className="mx-1">File Uploads</label>

           </div>
         </div>
          </div>

         </div>
</div>
         <br />

                <div className="row">
                    <div className="col-md-6 text-end">
                        <label htmlFor="wd-assign" className="col-form-label float-end">Assign</label>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                <label><b>Assign to</b></label>
               <br />
               <input className="form-control" value="Everyone" />
               <br />

                                </div>
                                <div className="row">
                                    <label htmlFor="wd-due-date"><b>Due</b></label>
                                    <input id="wd-due-date" type="date" className="form-control"
                                           value={assignment?.due} onChange={handleChange} name="due"/>
                                </div>
                                <div className="row mt-4">
                                    <div className="col">
                                        <label htmlFor="wd-available-from"><b>Available from</b></label>
                                        <input id="wd-available-from" type="date" className="form-control"
                                               value={assignment?.available} onChange={handleChange} name="available"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="wd-available-until"><b>Until</b></label>
                                        <input id="wd-available-until" type="date" className="form-control"
                                               onChange={handleChange} name="until" value={assignment?.until}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <hr/>
                </div>

                <div className="mb-2">
                    <input type="button" className="btn btn-danger float-end ms-2" value="Save"
                           onClick={handleUpdateAssignment}/>
                    <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                        <input type="button" className="btn btn-secondary float-end" value="Cancel"/>
                    </Link>
                </div>

                <div className="row" style={{height: '30px', width: '100%'}}></div>
            </div>
        </div>
    )
}*/

