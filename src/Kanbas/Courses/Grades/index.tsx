import { FaFileImport, FaFileExport, FaFilter, FaSearch, FaCaretDown,FaCog } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grades() {
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
}
