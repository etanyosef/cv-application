export default function ExperienceForm({
    experience,
    isActive,
    experienceOnChange,
    responsibilityOnChange,
    addResponsibility,
}) {

    const responsibilitiesList = experience.responsibilities.map(resp => (
        <div key={resp.id}>
            <div className="side-item">
                <button>
                    <h4>{resp.title}</h4>            
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>Delete</title>
                        <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </button>
            </div>
        </div>
    ))

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
                        <div className="form-input">
                            <label htmlFor="responsibilities">Responsibilities</label>
                            {/* <textarea 
                                id="responsibilities"
                                data-key="responsibilities"
                                value={experience.responsibilities}
                                onChange={e => experienceOnChange(e, experience.id)}
                            ></textarea> */}
                            {responsibilitiesList.length > 0 ? 
                            <ul>
                                {responsibilitiesList}
                            </ul>
                            : null }
                        </div>
                    </form>
                    <button 
                        className="form-button"
                        onClick={() => addResponsibility(experience.id)}
                    >+ Add Responsibility</button>
                </div>
            ) : null}
            <br />
            <hr />
        </>
    )
}

function responsibilitiesForm(responsibility, responsibilityOnChange) {
    return (
        <form>
            <h3>Responsibility</h3>
            <div className="form-input">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    id="title" 
                    data-key="title" 
                    value={responsibility.title}
                    onChange={responsibilityOnChange}
                />
            </div>
            <div className="form-input">
                <label htmlFor="description">Description</label>
                <textarea 
                    id="description"
                    data-key="description"
                    value={responsibility.description}
                    onChange={responsibilityOnChange}
                ></textarea>
            </div>
        </form>
    )
}