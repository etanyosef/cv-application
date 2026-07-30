import PersonalDetailsForm from "./forms/PersonalDetailsForms"
import EducationForm from "./forms/EducationForm"
import ExperienceForm from "./forms/ExperienceForm"
import { useState } from "react"

export default function Editor({
    personalDetails, 
    onChange,
    education,
    educationOnChange,
    addEducation,
    deleteEducation,
    experience,
    addExperience,
    deleteExperience,
    experienceOnChange,
    responsibilityOnChange,
    addResponsibility
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    function showFormHandler(id) {
        activeIndex === id ? setActiveIndex(0) : setActiveIndex(prevIndex => prevIndex = id)
    }

    const educations = education.map(educ => (
        <div key={educ.id}>
            <div className="side-item">
                <button onClick={ () => showFormHandler(educ.id) }>
                    <h3>{educ.school ? educ.school : 'New Education'}</h3>
                </button>
                <button onClick={ () => {deleteEducation(educ.id)} }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Delete</title>
                        <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </button>
            </div>
                
            <EducationForm 
                isActive={activeIndex === educ.id} 
                education={educ}
                educationOnChange={educationOnChange}
            />
        </div>
    ))

    const experiences = experience.map(exp => (
        <div key={exp.id}>
            <div className="side-item">
                <button onClick={ () => showFormHandler(exp.id) }>
                    <h3>{exp.company ? exp.company : 'New Company'}</h3>
                </button>
                <button onClick={() => deleteExperience(exp.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Delete</title>
                        <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </button>
            </div>

            <ExperienceForm 
                isActive={activeIndex === exp.id}
                experience={exp}         
                experienceOnChange={experienceOnChange}       
                responsibilityOnChange={responsibilityOnChange}
                addResponsibility={addResponsibility}
            />
        </div>
    ))
        
    return (
        <div className="sidebar">
            <section className="editor">
                <PersonalDetailsForm
                    data={personalDetails}
                    onChange={onChange}
                />
                <div className="sidebar-section">
                    <div className="title">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" />
                            </svg>
                            <h2>Education</h2>
                        </span>                
                    </div>
                    <div className="container">
                        {educations}
                        <button 
                            className="form-button" 
                            onClick={() => {
                                addEducation()
                                setActiveIndex(0)
                            }}
                        >
                            + Add Education
                        </button>
                    </div>
                </div>

                <div className="sidebar-section">
                    <div className="title">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M17 9H8V7H17V9M7 7H5V9H7V7M7 4H5V6H7V4M10 4H8V6H10V4M13 17V19H14C14.55 19 15 19.45 15 20H22V22H15C15 22.55 14.55 23 14 23H10C9.45 23 9 22.55 9 22H2V20H9C9 19.45 9.45 19 10 19H11V17H4C2.89 17 2 16.11 2 15L2 3C2 1.89 2.9 1 4 1H20C21.11 1 22 1.89 22 3L22 15C22 16.11 21.11 17 20 17H13M20 15V3H4V15L20 15M11 6H19V4H11V6M5 12H11V10H5V12M13 14H19V12H13V14Z" />
                            </svg>
                            <h2>Experience</h2>
                        </span>                
                    </div>
                    <div className="container">
                        {experiences}
                        <button 
                            className="form-button" 
                            onClick={() => {
                                addExperience()
                                setActiveIndex(0)
                            }}
                        >
                            + Add Experience
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}