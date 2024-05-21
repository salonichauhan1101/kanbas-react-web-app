export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" readOnly /><br /><br />

      <textarea id="wd-description" rows={4} cols={50} defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, links to each of the lab assignments, link to the Kanbas application, links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page."></textarea>
      <br /><br />

      <label htmlFor="wd-points">Points </label>
            <input
              id="wd-points"
              type="number"
              defaultValue={100}
            />
            <br /><br />

      <label htmlFor="wd-group">Assignment Group </label>
      <select id="wd-group" defaultValue="assignments">
        <option value="assignments">ASSIGNMENTS</option>
        <option value="individual">INDIVIDUAL</option>
      </select>
      <br /><br />

      <label htmlFor="wd-display-grade-as">Display Grade as </label>
      <select id="wd-display-grade-as" defaultValue="percentage">
        <option value="percentage">Percentage</option>
        <option value="marks">Marks</option>
      </select>
      <br /><br />

      <label htmlFor="wd-submission-type">Submission Type </label>
      <select id="wd-submission-type" defaultValue="online">
        <option value="online">Online</option>
        <option value="offline">Offline</option>
      </select>
      <br /><br />


        <legend>Online Entry Options</legend>
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label><br />
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label><br />
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
        <input type="checkbox" id="wd-student-annotation" />
        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Uploads</label>

      <br /><br />

      <label htmlFor="wd-assign-to">Assign to </label>
      <input id="wd-assign-to" defaultValue="Everyone" readOnly />
      <br /><br />

      <label htmlFor="wd-due-date">Due </label>
      <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
      <br /><br />

      <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '20px' }}>
                <label htmlFor="wd-available-from">Available from</label><br />
                <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
              </div>
              <div>
                <label htmlFor="wd-available-until">Until</label><br />
                <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
              </div>
            </div>

      <br /><br />

      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}