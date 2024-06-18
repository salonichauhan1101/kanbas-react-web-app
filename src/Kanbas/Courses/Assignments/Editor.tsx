import {useLocation, useParams} from "react-router";
import {assignments} from "../../Database";
import {Link} from "react-router-dom";

export default function AssignmentEditor() {
const {cid} = useParams();
const {pathname} = useLocation();
const aid = pathname.split("/").pop();
const assignment = assignments.find(a => a._id === aid);

  return (

<div id="wd-assignments-editor" className="container w-100">

<div className="form-group row">
        <div className="col-md-21">
          <div className="form-group col-md-21">
            <label htmlFor="wd-name">
              <h5 className="text-right">Assignment Name</h5>
            </label>
            <input
              id="wd-name"
              className="form-control col-md-21"
              value={assignment?.title}
            /><br></br>
          </div>
          <div className="form-group col-md-21">
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}>
              {assignment?.description}
            </textarea>
          </div>
          <br />
          </div>
          </div>
      <div className="row">
          <div className="col-md-6 text-end">
            <label className="mx-3">Points</label>
          </div>
          <div className="col-md-6">
          <input id="wd-points"
                  className="form-control"
                  value={assignment?.points} />
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-6 text-end">
            <label className="mx-3">Assignment Group</label>
          </div>
          <div className="col-md-6">
            <select className="form-control form-select">
              <option>ASSIGNMENTS</option>
              <option>PROJECT</option>
              <option>Labs</option>
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
              <option>Grade</option>
              <option>Points</option>
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
              <option>Offline</option>
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
        <br />
         </div>
        <br/>
        <div className="row">
          <div className="col-md-6 text-end">
            <label>Assign</label>
          </div>
          <div className="col-md-6">
            <div className="border p-2">
              <label><b>Assign to</b></label>
              <br />
              <input className="form-control" value="Everyone" />
              <br />

              <label><b>Due</b></label>
              <input
                className="form-control"
                type="date"
                value={assignment?.ddate}/>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <label><b>Available from</b></label>
                  <input className="form-control w-30" type="date" value={assignment?.adate}/>
                </div>

                <div className="col-md-6">
                  <label><b>Until</b></label>
                  <input className="form-control w-30" type="date" />
                </div>
              </div>
              </div>
              </div>
              </div>
            <hr/>
            <div className="d-flex">
          <div className="ms-auto">
            <Link key={'save'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                  <input type="button" className="btn btn-danger float-end ms-2" value="Save"/>
            </Link>
            <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                   <input type="button" className="btn btn-secondary float-end" value="Cancel"/>
            </Link>
          </div>
        </div><br/>
</div>
  );
}