export default function EducationForm({
    // onChange,
    education,
    educationOnChange,
    addEducation,
    saveEducation
}) {
    return (
        <div className="education-details">
            <div className="title">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school-outline</title><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" /></svg>
                    <h2>Education</h2>
                </span>
                
            </div>
            <form action={saveEducation}>
                <div className="form-input">
                    <label htmlFor="school">School</label>
                    <input 
                        type="text" 
                        id="school" 
                        name="school"
                        placeholder="Enter school (elem, hs, college)" 
                        data-key="school"
                        required
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="degree">Degree</label>
                    <input 
                        type="text" 
                        id="degree" 
                        name="degree"
                        placeholder="Enter degree or field of study" 
                        required
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="location">Location</label>
                    <input 
                        type="text" 
                        id="location" 
                        name="location"
                        placeholder="Enter school location/address" 
                        required
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="startDate">Start Date</label>
                    <input 
                        type="month" 
                        id="startDate" 
                        name="startDate"
                        required
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="endDate">End Date</label>
                    <input 
                        type="month" 
                        id="endDate" 
                        name="endDate"
                        required
                    />
                </div>
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )
}