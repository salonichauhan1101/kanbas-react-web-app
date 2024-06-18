import { FaFileImport, FaFileExport, FaFilter, FaSearch, FaCaretDown,FaCog } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { assignments, enrollments, grades, users } from "../../Database"
import { useParams } from "react-router";

export default function Grades() {
    const { cid } = useParams();
    const courseEnrollments = enrollments.filter((enrollment) => enrollment.course === cid);
    const student = courseEnrollments.map((student_id) => users.find((user) => user._id === student_id.user));
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    const courseGrades = student.map((student) => {
        const studentGrades = courseAssignments.map((assignment) => {
            const grade = grades.find((grade) => grade.assignment === assignment._id && grade.student === student?._id);
            return grade ? grade.grade : "N/A "
        });
        return {
            ...student,
            grades: studentGrades
        }
    });

    return (
        <div className="container ">
        <div className="col-md-9 offset-md-1">

            <button className="btn btn-secondary float-end">
                <FaCog className="mr-1 ml-2" />
            </button>
            <button className="btn btn-secondary float-end mx-2 dropdown-toggle" data-toggle="dropdown" >
                <FaFileExport className="me-1 mr-1 ml-2" />
                Export
            </button>

            <button className="btn btn-secondary float-end">
                <FaFileImport className="me-2 mr-1 ml-2" />
                Import
            </button>
            <br />
            <div className="row mt-4">
                <div className="col-md-6">
                    <label htmlFor="wd-student-names" className="form-label"><b>Student Names</b></label>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <select id="wd-student-names" className="form-select">
                        <option selected>Search Students</option>
                        <option selected>Search Students</option>
                    </select>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-assignment-names" className="form-label"><b>Assignment Names</b></label>
                    <div className="input-group">
                    <span className="input-group-text"><FaSearch /> </span>
                    <select id="wd-assignment-names" className="form-select">
                        <option selected>Search Assignments</option>
                        {courseAssignments.map((assignment) => (
                            <option key={assignment._id} value={assignment._id}>
                                {assignment.title}
                            </option>
                        ))}
                    </select>
                    </div>
                </div>
            </div>
            <div className="row my-3 row-cols-auto">
                <button className="btn btn-secondary ms-2">
                    <FaFilter className="mr-1" />
                    Apply Filters
                </button>
            </div>
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered ">
                        <thead>
                            <tr>
                                <th scope="col-md-6" className="w-20" style={{ width: "20%" }}>Student Name</th>
                                {
                                    courseAssignments && courseAssignments.map((assignment) => (
                                        <th scope="col" className="w-20 text-center" style={{ width: "20%" }}>
                                            {assignment.title}<br />
                                            Out of {assignment.points}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                courseGrades && courseGrades.map((student) => (
                                    <tr key={student._id}>
                                        <th scope="row" className="text-danger">{student.firstName + " " + student.lastName}</th>
                                        {
                                            student.grades && student.grades.map((grade, index) => (
                                                <td key={index} className="text-center">{grade}</td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
}

/*export default function Grades() {
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-9 offset-md-1">
    <div className="btn-group ml-2 d-inline me-1 float-end">
          <button type="button" className="btn btn-secondary mr-2">
          <FaCog />
          </button>
          </div>
    <div className="btn-group ml-2 dropdown d-inline me-1 float-end">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" >
            <FaFileExport /> Export
            </button>
        </div>

        <div className="btn-group ml-2 d-inline me-1 float-end">
          <button type="button" className="btn btn-secondary mr-2">
          <FaFileImport /> Import
          </button>
          </div>

          <br/><br/>

            <div className="row">
                <div className="col-md-6">
                    <h6><b>Student Name</b></h6>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Students" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>

                </div>
                <div className="col-md-6">
                    <h6><b>Assignment Name</b></h6>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Assignments" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>

                </div>
            </div>

        <div>
        <br/>
                <button type="button" className="btn btn-secondary ml-2 " >
                <FaFilter /> Apply Filters
                </button>
              </div>
              <br/>

      <div className="table-responsive col-lg mb-3">
        <table className="table table-striped table-bordered ">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th className="text-center ">A1 SETUP<br />Out of 100</th>
                      <th className="text-center ">A2 HTML<br />Out of 100</th>
                      <th className=" text-center" >A3 CSS<br />Out of 100</th>
                      <th className="text-center">A4 BOOTSTRAP<br />Out of 100</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-danger w-20 col">Jane Adams</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">66.22%</td>
                    </tr>
                    <tr>
                      <td className="text-danger w-20 col">Christina Allen</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">96.67%</td>
                      <td className="text-center w-20 col">92.18%</td>
                      <td className="text-center w-20 col">100%</td>
                    </tr>
                    <tr>
                      <td className="text-danger w-20 col">Samreen Ansari</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                    </tr>
                    <tr>
                      <td className="text-danger ">Han Bao</td>
                      <td className="text-center ">100%</td>
                      <td className="text-center l">100%</td>
                      <td className="text-center">
                        <input type="text" className="form-control text-center" defaultValue="88.03%"  />
                      </td>
                      <td className="text-center ">98.99%</td>
                    </tr>
                    <tr>
                      <td className="text-danger ">Mahi Sai Srinivas Bobbili</td>
                      <td className="text-center ">100%</td>
                      <td className="text-center">
                      <input type="text" className="form-control text-center" defaultValue="88.37%" />
                      </td>
                      <td className="text-center ">88.37%</td>
                      <td className="text-center ">100%</td>
                    </tr>
                    <tr>
                      <td className="text-danger w-20 col">Siran Cao</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                      <td className="text-center w-20 col">100%</td>
                    </tr>
                  </tbody>
                </table>
      </div>
    </div>
  </div>
</div>


  );
}*/
