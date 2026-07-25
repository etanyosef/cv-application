import Nav from "./Nav";
import Editor from "./Editor";

export default function Sidebar({ 
    personalDetails, 
    education,
    educationOnChange,
    addEducation,
    saveEducation,
    onChange 
}) {
    return (
        <div className="sidebar">
            <Nav />
            <Editor 
                personalDetails={personalDetails} 
                education={education}
                educationOnChange={educationOnChange}
                saveEducation={saveEducation}
                onChange={onChange}  
            />       
        </div>
    )
}