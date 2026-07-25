import PersonalDetailsForm from "./forms/PersonalDetailsForms"
import EducationForm from "./forms/EducationForm"
import ExperienceForm from "./forms/ExperienceForm"

export default function Editor({
    personalDetails, 
    education,
    educationOnChange,
    addEducation,
    saveEducation,
    onChange
}) {
    return (
        <section className="editor">
            <PersonalDetailsForm
                data={personalDetails}
                onChange={onChange}
            />
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