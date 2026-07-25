export default function Resume({
    personalDetails: {fullName, email, phoneNumber, address},
    education,
}) {

    const educationSection = education.map(educ => (
        <div className="education" key={educ.id}>
            <b>{educ.school}</b>
            <p>{educ.degree}</p>
            <p>{educ.location}</p>
            <p>{educ.startDate} - {educ.endDate}</p>
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
                    <div className="educations">
                        {educationSection}
                    </div>
                </section>
                <section>
                    <h2>Experience</h2>
                </section>
            </div>
        </div>
    )
}