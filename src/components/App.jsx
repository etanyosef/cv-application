import Education from "./Education"
import Experience from "./Experience"
import Footer from "./Footer"
import PersonalDetails from "./PersonalDetails"
import Resume from "./Resume"

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
                <div className="sidebar">
                    <PersonalDetails />
                    <Education />
                    <Experience />
                </div>
                <Resume />
            </main>
            <Footer />
        </>
    )
}