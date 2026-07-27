import PersonalDetailsForm from "./forms/PersonalDetailsForms"
import EducationForm from "./forms/EducationForm"
import ExperienceForm from "./forms/ExperienceForm"

export default function Editor({
    personalDetails, 
    education,
    educationOnChange,
    addEducation,
    deleteEducation,
    saveEducation,
    onChange
}) {


    const educations = education.map(educ => (
        <div className="side-item" key={educ.id}>
            <button>
                <h3>{educ.school}</h3>
            </button>
            <button onClick={() => {
                deleteEducation(educ.id)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>Delete</title>
                    <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                </svg>
            </button>
        </div>
    ))
        
    return (
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
                </div>
            </div>
            <EducationForm
                education={education}
                educationOnChange={educationOnChange}
                addEducation={addEducation}
                saveEducation={saveEducation}
                // onChange={handleEducationDetailsInput}
            />
            <ExperienceForm />
        </section>
    )
}