export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div style={{ display: 'block', marginBottom: '10px' }}>
        <button>Unpublish</button>
        <button>Publish</button>
      </div>

      <div>
        <button style={{ display: 'block'}}>Import Existing Content</button>
      </div>
      <div>
        <button style={{ display: 'block'}}>Import From Commons</button>
      </div>
      <div>
        <button style={{ display: 'block'}}>Choose Home Page</button>
      </div>
      <div>
        <button style={{ display: 'block'}}>View Course Stream</button>
      </div>
      <div>
        <button style={{ display: 'block'}}>New Announcement</button>
      </div>
      <div>
        <button style={{ display: 'block'}}>New Analytics</button>
      </div>
      <div>
        <button style={{ display: 'block'}}>View Course Notifications</button>
      </div>
    </div>
  );
}

