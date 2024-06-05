import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';


export default function Modules() {
  return (
    <div id="wd-modules">
      {/* Collapse All button, View Progress button, etc. */}
      {/*<div style={{ marginBottom: '20px' }}>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
           <option value="VAL1" selected>Publish All</option>
           <option value="VAL2">Release All</option>
           <option value="VAL3">Remove All</option>
        </select>
        <button>+ Module</button>
      </div>*/}
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
           <BsGripVertical className="me-2 fs-3" />
          <b>Week 1</b>
           <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
               <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">READING</span>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
                         <BsGripVertical className="me-2 fs-3" />
                          <span className="wd-title">Learn what is Web Development</span>
                          <LessonControlButtons />

                        </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
                                     <BsGripVertical className="me-2 fs-3" />
                                      <span className="wd-title">Lesson 1</span>
                                      <LessonControlButtons />

                                    </li>
             <li className="wd-lesson list-group-item p-3 ps-1">
                     <BsGripVertical className="me-2 fs-3" />
                          <span className="wd-title">Lesson 2</span>
                               <LessonControlButtons />
                         </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <b>Week 2</b>
          <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">SLIDES</span>
              <LessonControlButtons />

              {/*<ul className="wd-content">
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings and</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
              </ul>*/}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}