export default function Resume({personalDetails: {fullName, email, phoneNumber, address}}) {
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
                <h2>Resume Content</h2>
            </div>
        </div>
    )
}