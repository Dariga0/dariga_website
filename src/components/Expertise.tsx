import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faLaptopCode, faRobot } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C++",
    "Python",
    "LTSpice",
    "MATLAB",
    "Arduino",
    "Raspberry Pi",
    "Linux"
];

const labelsSecond = [
    "AutoCAD",
    "Circuit Design",
    "Soldering",
    "Embedded Programming",
    "Microsoft Office",
    "Team Collaboration"
];

const labelsThird = [
    "PyTorch",
    "ResNet-50",
    "Grad-CAM",
    "Gradio",
    "GitHub",
    "Computer Vision",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Electrical & Embedded Systems</h3>
                        <p>
                            Proficient in circuit design, LTSpice simulation, and microcontroller programming.
                            Hands-on lab experience with soldering, embedded systems, and real-world hardware projects.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tools & Languages:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                        <h3>Engineering Design & Prototyping</h3>
                        <p>
                            Skilled in AutoCAD, soldering, and collaborative prototyping. Experienced working in academic labs,
                            mentoring students, and managing team-based engineering projects.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Skills:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                        <h3>AI Research & Computer Vision</h3>
                        <p>
                            Contributed to a research project on agricultural crop classification using ResNet-50 and Grad-CAM.
                            Built an interpretable, interactive demo with Gradio and supported model evaluation using PyTorch.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
