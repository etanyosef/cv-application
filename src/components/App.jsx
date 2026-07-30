import { useState } from "react"
import { 
    defaultData,
    educationDetails,
    experienceDetails,
} from "../data"

import Footer from "./Footer"
import Resume from "./Resume"
import Sidebar from "./sidebar/Sidebar"

export default function App() {
    const [personalDetails, setPersonalDetails] = useState(defaultData.personalDetails)
    const [education, setEducation] = useState(educationDetails)
    const [experience, setExperience] = useState(experienceDetails)

    function handlePersonalDetailsInput(e) {
        const {key} = e.target.dataset
        setPersonalDetails({
            ...personalDetails, 
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
        const {key} = e.target.dataset
        setEducation((prevEducation) => prevEducation.map((educ) => {
            if (educ.id === id) {
                return {
                    ...educ, 
                    [key]: e.target.value
                }
            } else {
                return educ
            }
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

    function addExperience() {
        setExperience(prevExperience => [
            ...prevExperience,
            {
                id: crypto.randomUUID(),
                company: '',
                jobTitle: '',
                location: '',
                startDate: '',
                endDate: '',
                responsibilities: [
                    // {
                    //     id: crypto.randomUUID(),
                    //     title: '',
                    //     description: ''
                    // },
                ],
            },
        ])
    }

    function deleteExperience(id) {
        setExperience(prevExperience => prevExperience.filter(
            exp => exp.id !== id
        ))
    }

    function experienceOnChange(e, id) {
        const {key} = e.target.dataset
        setExperience(prevExperience => prevExperience.map(exp => (
            exp.id === id ? {...exp, [key]: e.target.value} : exp
        )))
    }

    function addResponsibility(expId) {
        setExperience(prevExperience => prevExperience.map(exp => {
            if (exp.id === expId) {
                return {
                    ...exp,
                    responsibilities: [
                        ...exp.responsibilities,
                        {
                            id: crypto.randomUUID(), 
                            title: '', 
                            description: ''
                        }
                    ]
                }
            } else {
                return exp
            }
        }))
    }

    function responsibilityOnChange(e, expId, respId) {
        const {key} = e.target.dataset
        setExperience(prevExperience => prevExperience.map(exp => {
            if (exp.id === expId) {
                exp.responsibilities.map(resp => {
                    resp.id === respId ? {...resp, [key]: e.target.value} : resp
                })
            } else {
                return exp
            }
        }))
    }

    return (
        <>
            <main>
                <div className="container">
                    <Sidebar 
                        personalDetails={personalDetails} 
                        onChange={handlePersonalDetailsInput}
                        deleteEducation={deleteEducation}
                        education={education}
                        educationOnChange={educationOnChange}
                        addEducation={addEducation}
                        saveEducation={saveEducation}
                        experience={experience}
                        addExperience={addExperience}
                        deleteExperience={deleteExperience}
                        experienceOnChange={experienceOnChange}
                        addResponsibility={addResponsibility}
                        responsibilityOnChange
                    />

                    <div className="preview">
                        <Resume
                            personalDetails={personalDetails}
                            education={education}
                            experience={experience}
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}
