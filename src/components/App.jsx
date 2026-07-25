import { useState } from "react"
import EducationForm from "./EducationForm"
import Experience from "./Experience"
import Footer from "./Footer"
import PersonalDetails from "./PersonalDetails"
import Resume from "./Resume"
import { defaultData } from "../defaultData"

export default function App() {
    const [personalDetails, setPersonalDetails] = useState(defaultData.personalDetails)
    const [educationDetails, setEducationDetails] = useState(defaultData.educationDetails);

    console.log(educationDetails)

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

    return (
        <>
            <main>
                <div className="container">
                    <div className="sidebar">
                        <PersonalDetails 
                            data={personalDetails}
                            onChange={handlePersonalDetailsInput}
                        />
                        <EducationForm
                            data={educationDetails}
                            onChange={handleEducationDetailsInput}
                        />
                        <Experience />
                    </div>
                    <Resume
                        personalDetails={personalDetails}
                        educationDetails={educationDetails}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}
