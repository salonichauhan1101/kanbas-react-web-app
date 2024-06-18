import { Link } from "react-router-dom";
import * as db from "../Database";

export default function Dashboard() {
  const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
      <div className="row row-cols-1 row-cols-md-5 g-4">

      {courses.map((course) => (
                  <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                      <div className="card rounded-3 overflow-hidden">
                        <img src={course.image} height = {145}  />
                        <div className="card-body" style={{width:"100%", height:"180px"}}>
                          <span className="wd-dashboard-course-link"
                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                            {course.name}
                          </span>
                          <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 50, overflow: "hidden" }}>
                            {course.description}
                          </p>
                          <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>




        /*<div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card">
          <img src="/images/reactjs.webp" height = "145"/>
          <div className="card-body">
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title card-text">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
          </div>
         </div>
        </div>

        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
        <div className="card">
         <img src="/images/html.png" height = "145" />
                   <div className="card-body">
                     <a className="wd-dashboard-course-link"
                       href="#/Kanbas/Courses/1001/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
                       CS1001 HTML
                     </a>
                     <p className="wd-dashboard-course-title card-text">
                       HTML Crash Course
                     </p>
                     <a href="#/Kanbas/Courses/1001/Home" className="btn btn-primary"> Go </a>
                   </div>
                   </div>
         </div>

         <div className="wd-dashboard-course col" style={{ width: "270px" }} >
          <div className="card">
                  <img src="/images/css.png" height = "145"  />
                            <div className="card-body">
                              <a className="wd-dashboard-course-link"
                                href="#/Kanbas/Courses/1002/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
                                CS1002 CSS
                              </a>
                              <p className="wd-dashboard-course-title card-text">
                                CSS Summer 1
                              </p>
                              <a href="#/Kanbas/Courses/1002/Home" className="btn btn-primary"> Go </a>
                            </div>
                            </div>
                  </div>

         <div className="wd-dashboard-course col" style={{ width: "270px" }}>
         <div className="card">
                           <img src="/images/php.png" height = "145" />
                                     <div className="card-body">
                                       <a className="wd-dashboard-course-link"
                                         href="#/Kanbas/Courses/1003/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
                                         CS1003 PHP
                                       </a>
                                       <p className="wd-dashboard-course-title card-text">
                                         PHP
                                       </p>
                                       <a href="#/Kanbas/Courses/1003/Home" className="btn btn-primary"> Go </a>
                                     </div>
                                     </div>
                           </div>

         <div className="wd-dashboard-course col" style={{ width: "270px" }}>
         <div className="card">
                                    <img src="/images/nodejs.png" height = "150" />
                                              <div className="card-body">
                                                <a className="wd-dashboard-course-link"
                                                  href="#/Kanbas/Courses/1004/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
                                                  CS1004 Node JS
                                                </a>
                                                <p className="wd-dashboard-course-title card-text">
                                                  Node JS
                                                </p>
                                                <a href="#/Kanbas/Courses/1004/Home" className="btn btn-primary"> Go </a>
                                              </div>
                                              </div>
                                    </div>

         <div className="wd-dashboard-course col" style={{ width: "270px" }}>
         <div className="card">
                                             <img src="/images/mongo.png"  height = "150" />
                                                       <div className="card-body">
                                                         <a className="wd-dashboard-course-link"
                                                           href="#/Kanbas/Courses/1005/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
                                                           CS1005 MongoDB
                                                         </a>
                                                         <p className="wd-dashboard-course-title card-text">
                                                           MongoDB
                                                         </p>
                                                         <a href="#/Kanbas/Courses/1005/Home" className="btn btn-primary"> Go </a>
                                                       </div>
                                                       </div>
                                             </div>

         <div className="wd-dashboard-course col" style={{ width: "270px" }}>
         <div className="card">
                                                      <img src="/images/javascript.jpeg" height = "150" />
                                                                <div className="card-body">
                                                                  <a className="wd-dashboard-course-link"
                                                                    href="#/Kanbas/Courses/1006/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold"} }>
                                                                    CS1006 Javascript
                                                                  </a>
                                                                  <p className="wd-dashboard-course-title card-text">
                                                                    Javascript
                                                                  </p>
                                                                  <a href="#/Kanbas/Courses/1006/Home" className="btn btn-primary"> Go </a>
                                                                </div>
                                                                </div>
                                                      </div>

      </div>
     </div>
    </div>*/
);}


