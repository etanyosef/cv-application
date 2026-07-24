import Education from "./Education"
import Experience from "./Experience"
import Footer from "./Footer"
import PersonalDetails from "./PersonalDetails"
import Resume from "./Resume"

export default function App() {
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