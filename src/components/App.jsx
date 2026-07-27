import { useState } from "react"
import { 
    defaultData,
    educationDetails,
} from "../data"

import Footer from "./Footer"
import Resume from "./Resume"
import Sidebar from "./sidebar/Sidebar"

export default function App() {
    const [personalDetails, setPersonalDetails] = useState(defaultData.personalDetails)
    const [education, setEducation] = useState(educationDetails)

    function handlePersonalDetailsInput(e) {
        const {key} = e.target.dataset
        setPersonalDetails({
            ...personalDetails, 
            [key]: e.target.value,
        })
    }

    function handleEducationDetailsInput(e) {
        const {key} = e.target.dataset
        setEducationDetails({
            ...educationDetails, 
            [key]: e.target.value,
        })
    }

    function addEducation() {
        setEducation((prevEducation) => [
            ...prevEducation,
            {
                id: crypto.randomUUID(),
                school: '',
                degree: '',
                location: '',
                startDate: '',
                endDate: '',
            },
        ])
    }

    function deleteEducation(id) {
        setEducation(prevEducation => prevEducation.filter(
            educ => educ.id !== id
        ))
    }

    function educationOnChange(e, id) {
        const {name} = e.target.name
        setEducation((prevEducation) => prevEducation.map((educ) => {
            educ.id === id ? {...educ, [name]: e.target.value} : educ
        }))
    }

    function saveEducation(e) {
        const school = e.get('school')
        const degree = e.get('degree')
        const location = e.get('location')
        const startDate = e.get('startDate')
        const endDate = e.get('endDate')

        setEducation(prevEducation => ([
                ...prevEducation,
                {
                    id: crypto.randomUUID(),
                    school: school,
                    degree: degree,
                    location: location,
                    startDate: startDate,
                    endDate: endDate,
                },
        ]))
    }

    return (
        <>
            <main>
                <div className="container">
                    <Sidebar 
                        personalDetails={personalDetails} 
                        deleteEducation={deleteEducation}
                        education={education}
                        educationOnChange={educationOnChange}
                        addEducation={addEducation}
                        saveEducation={saveEducation}
                        onChange={handlePersonalDetailsInput}
                    />

                    <div className="preview">
                        <Resume
                            personalDetails={personalDetails}
                            education={education}
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}
