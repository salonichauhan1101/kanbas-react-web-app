//import "./styles.css"
export default function AssignmentEditor() {
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
              value="A1"
            /><br></br>
          </div>
          <div className="form-group col-md-21">
            <textarea
              id="wd-description"
              className="form-control"
              rows={5}>
              The assignment is available online
              Submit a link to the landing page of your web application
              running on Netlify.The landing page should include the following:
              Your full name and section links to each of the lab assignments
              Link to the Kanbas application Links to all relevant source code repositories
              The Kanbas application should include a link to navigate back to the landing page
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
                  value={100} />
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
                type="date"/>
              <br />

              <div className="row">
                <div className="col-md-6">
                  <label><b>Available from</b></label>
                  <input className="form-control w-30" type="date" />
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
            <button className="btn btn-danger ms-2 float-end">
              Save
            </button>
            <button
              className="btn btn-secondary float-end">
              Cancel
            </button>
          </div>
        </div><br/>






</div>


  );
}