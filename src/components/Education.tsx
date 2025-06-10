import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "react-vertical-timeline-component/style.min.css";
import '../assets/styles/Education.scss';

function Education() {
  return (
    <div id="education" className="education-timeline">
      <h1>Education</h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fff', color: 'rgb(39, 40, 34)' }}
          contentArrowStyle={{ borderRight: '7px solid  white' }}
          date="Expected May 2026"
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Worcester Polytechnic Institute (WPI)</h3>
          <p><strong>B.S. in Electrical & Computer Engineering</strong></p>
          <p>Minor: Computer Science</p>
          <p>GPA: 3.93</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: '#fff', color: 'rgb(39, 40, 34)' }}
          date="Graduated June 2024"
          iconStyle={{ background: '#007bff', color: '#fff' }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">Edmonds College</h3>
          <p><strong>Associate Degree in Electrical Engineering</strong></p>
          <p>GPA: 3.9</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Education;
