import { useState } from "react"
import Education from "./Education"
import Experience from "./Experience"
import Footer from "./Footer"
import PersonalDetails from "./PersonalDetails"
import Resume from "./Resume"
import { defaultData } from "../defaultData"

export default function App() {
    const [personalDetails, setPersonalDetails] = useState(defaultData.personalDetails)
    
    function handleOnChange(e) {
        const {key} = e.target.dataset
        
        setPersonalDetails({
            ...personalDetails, 
            [key]: e.target.value
        })
    }

    return (
        <>
            <main>
                <div className="container">
                    <div className="sidebar">
                        <PersonalDetails 
                            data={personalDetails}
                            onChange={handleOnChange}
                        />
                        <Education />
                        <Experience />
                    </div>
                    <Resume
                        personalDetails={personalDetails}
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}