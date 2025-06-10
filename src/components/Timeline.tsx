import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline lineColor="#e4e4e4">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 – Aug 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Team Lead, “Girls Talk Math”</h3>
            <h4 className="vertical-timeline-element-subtitle">WPI, Worcester, MA</h4>
            <p>
              Guided students through advanced math topics and STEM research, including podcast creation and exploration of marginalized scientists’ contributions.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2025 – Aug 2025"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Undergraduate Research Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Washington State University</h4>
            <p>
              Contributed to crop classification AI research using PyTorch and ResNet-50. Created interactive demos and visualizations with Grad-CAM and Gradio.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 – Dec 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Peer Learning Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">WPI, Worcester, MA</h4>
            <p>
              Mentored 30+ students in engineering labs, supporting soldering and coding with Arduino and Raspberry Pi.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2023 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Physics Lab Assistant</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonds College, Lynnwood, WA</h4>
            <p>
              Managed lab equipment and materials to support hands-on projects and ensure lab efficiency.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 – Jun 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Campus Event Programmer</h3>
            <h4 className="vertical-timeline-element-subtitle">Edmonds College, Lynnwood, WA</h4>
            <p>
              Organized and executed student events, balancing budgets, schedules, and logistics.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
