export default function EducationForm({
    // onChange,
    education,
    educationOnChange,
    saveEducation,
    isActive
}) {
    return (
        <>
            {isActive ? (
                <div className="education-details">            
                    <form action={saveEducation}>
                        <div className="form-input">
                            <label htmlFor="school">School</label>
                            <input 
                                type="text" 
                                id="school" 
                                name="school"
                                placeholder="Enter school (elem, hs, college)" 
                                data-key="school"
                                value={education.school}
                                onChange={(e) => educationOnChange(e, education.id)}
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
                                data-key="degree"
                                value={education.degree}
                                onChange={(e) => educationOnChange(e, education.id)}
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
                                data-key="location"
                                value={education.location}
                                onChange={(e) => educationOnChange(e, education.id)}
                                required
                            />
                        </div>
                        <div className="date-group">
                            <div className="form-input">
                                <label htmlFor="startDate">Start Date</label>
                                <input 
                                    type="month" 
                                    id="startDate" 
                                    name="startDate"
                                    data-key="startDate"
                                    value={education.startDate}
                                    onChange={(e) => educationOnChange(e, education.id)}
                                    required
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="endDate">End Date</label>
                                <input 
                                    type="month" 
                                    id="endDate" 
                                    name="endDate"
                                    data-key="endDate"
                                    value={education.endDate}
                                    onChange={(e) => educationOnChange(e, education.id)}
                                    required
                                />
                            </div>
                        </div>
                    </form>
                    
                </div>
            ) : null}
        </>
    )
}