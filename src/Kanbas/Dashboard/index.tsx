export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <img src="/images/reactjs.webp" width={200} />
          <div>
            <a className="wd-dashboard-course-link"
              href="#/Kanbas/Courses/1234/Home">
              CS1234 React JS
            </a>
            <p className="wd-dashboard-course-title">
              Full Stack software developer
            </p>
            <a href="#/Kanbas/Courses/1234/Home"> Go </a>
          </div>
        </div>

        <div className="wd-dashboard-course">
         <img src="/images/html.png" width={200} />
                   <div>
                     <a className="wd-dashboard-course-link"
                       href="#/Kanbas/Courses/1001/Home">
                       CS1001 HTML
                     </a>
                     <p className="wd-dashboard-course-title">
                       HTML Crash Course
                     </p>
                     <a href="#/Kanbas/Courses/1001/Home"> Go </a>
                   </div>
         </div>

         <div className="wd-dashboard-course">
                  <img src="/images/css.png" width={200} />
                            <div>
                              <a className="wd-dashboard-course-link"
                                href="#/Kanbas/Courses/1002/Home">
                                CS1002 CSS
                              </a>
                              <p className="wd-dashboard-course-title">
                                CSS Summer 1
                              </p>
                              <a href="#/Kanbas/Courses/1002/Home"> Go </a>
                            </div>
                  </div>

         <div className="wd-dashboard-course">
                           <img src="/images/php.png" width={200} />
                                     <div>
                                       <a className="wd-dashboard-course-link"
                                         href="#/Kanbas/Courses/1003/Home">
                                         CS1003 PHP
                                       </a>
                                       <p className="wd-dashboard-course-title">
                                         PHP
                                       </p>
                                       <a href="#/Kanbas/Courses/1003/Home"> Go </a>
                                     </div>
                           </div>

         <div className="wd-dashboard-course">
                                    <img src="/images/nodejs.png" width={200} />
                                              <div>
                                                <a className="wd-dashboard-course-link"
                                                  href="#/Kanbas/Courses/1004/Home">
                                                  CS1004 Node JS
                                                </a>
                                                <p className="wd-dashboard-course-title">
                                                  Node JS
                                                </p>
                                                <a href="#/Kanbas/Courses/1004/Home"> Go </a>
                                              </div>
                                    </div>

         <div className="wd-dashboard-course">
                                             <img src="/images/mongo.png" width={200} />
                                                       <div>
                                                         <a className="wd-dashboard-course-link"
                                                           href="#/Kanbas/Courses/1005/Home">
                                                           CS1005 MongoDB
                                                         </a>
                                                         <p className="wd-dashboard-course-title">
                                                           MongoDB
                                                         </p>
                                                         <a href="#/Kanbas/Courses/1005/Home"> Go </a>
                                                       </div>
                                             </div>

         <div className="wd-dashboard-course">
                                                      <img src="/images/javascript.jpeg" width={200} />
                                                                <div>
                                                                  <a className="wd-dashboard-course-link"
                                                                    href="#/Kanbas/Courses/1006/Home">
                                                                    CS1006 Javascript
                                                                  </a>
                                                                  <p className="wd-dashboard-course-title">
                                                                    Javascript
                                                                  </p>
                                                                  <a href="#/Kanbas/Courses/1006/Home"> Go </a>
                                                                </div>
                                                      </div>

      </div>
    </div>
);}


