import Nav from "./Nav";
import Editor from "./Editor";

export default function Sidebar({ 
    personalDetails, 
    education,
    educationOnChange,
    addEducation,
    deleteEducation,
    saveEducation,
    onChange 
}) {
    return (
        <div className="sidebar">
            {/* <Nav /> */}
            <Editor 
                personalDetails={personalDetails} 
                education={education}
                educationOnChange={educationOnChange}
                saveEducation={saveEducation}
                deleteEducation={deleteEducation}
                onChange={onChange}  
            />       
        </div>
    )
}