export default function ExperienceForm({
    experience,
    isActive,
    experienceOnChange,
}) {
    return (
        <>
            {isActive ? (
                <div className="experience-details">
                    <form action="">
                        <div className="form-input">
                            <label htmlFor="company">Company</label>
                            <input 
                                type="text" 
                                id="company" 
                                data-key="company"
                                value={experience.company}
                                onChange={(e) => experienceOnChange(e, experience.id)}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input 
                                type="text" 
                                id="jobTitle" 
                                data-key="jobTitle" 
                                value={experience.jobTitle}
                                onChange={e => experienceOnChange(e, experience.id)}
                            />
                        </div>
                        <div className="date-group">
                            <div className="form-input">
                                <label htmlFor="startDate">Start Date</label>
                                <input 
                                    type="month" 
                                    id="startDate" 
                                    data-key="startDate" 
                                    value={experience.startDate}
                                    onChange={e => experienceOnChange(e, experience.id)}
                                />
                            </div>
                            <div className="form-input">
                                <label htmlFor="endDate">End Date</label>
                                <input 
                                    type="month" 
                                    id="endDate" 
                                    data-key="endDate" 
                                    value={experience.endDate}
                                    onChange={e => experienceOnChange(e, experience.id)}
                                />
                            </div>
                        </div>
                        <div className="form-input">
                            <label htmlFor="location">Location</label>
                            <input 
                                type="text" 
                                id="location" 
                                data-key="location"
                                value={experience.location}
                                onChange={e => experienceOnChange(e, experience.id)}
                            />
                        </div>
                    </form>
                </div>
            ) : null}
        </>
    )
}