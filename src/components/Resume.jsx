export default function Resume({
    personalDetails: {fullName, email, phoneNumber, address},
    educationDetails,
}) {

    const educationSection = educationDetails.map(education => (
        <div>
            <b>{education.school}</b>
            <p>{education.degree}</p>
            
            <p>School: {education.school}</p>
            <p>Degree: {education.degree}</p>
            <p>Location: {education.location}</p>
            <p>Start date: {education.startDate}</p>
            <p>End date: {education.endDate}</p>
        </div>
    ))

    return (
        <div className="resume">
            <div className="resume-header">
                <h2>Resume Header</h2>
                <p>Full name: {fullName}</p>
                <p>Email: {email}</p>
                <p>Phone: {phoneNumber}</p>
                <p>address: {address}</p>
            </div>
            <div className="resume-content">
                <section>
                    <h2>Education</h2>
                    {educationSection}
                </section>
                <section>
                    <h2>Experience</h2>
                </section>
            </div>
        </div>
    )
}