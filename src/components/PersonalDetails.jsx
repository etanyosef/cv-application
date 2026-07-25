export default function PersonalDetails({
    onChange, 
    data: {fullName, email, phoneNumber, address}
}) {

    return (
        <div className="personal-details">
            <div className="title">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>card-account-details-outline</title><path d="M22,3H2C0.91,3.04 0.04,3.91 0,5V19C0.04,20.09 0.91,20.96 2,21H22C23.09,20.96 23.96,20.09 24,19V5C23.96,3.91 23.09,3.04 22,3M22,19H2V5H22V19M14,17V15.75C14,14.09 10.66,13.25 9,13.25C7.34,13.25 4,14.09 4,15.75V17H14M9,7A2.5,2.5 0 0,0 6.5,9.5A2.5,2.5 0 0,0 9,12A2.5,2.5 0 0,0 11.5,9.5A2.5,2.5 0 0,0 9,7M14,7V8H20V7H14M14,9V10H20V9H14M14,11V12H18V11H14" /></svg>
                    <h2>Personal Details</h2>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            <form data-section="personalDetails">
                <div className="form-input">
                    <label htmlFor="full-name">Full Name</label>
                    <input 
                        type="text" 
                        id="full-name" 
                        placeholder="Enter your full name" 
                        value={fullName}
                        onChange={onChange}
                        data-key="fullName"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email address" 
                        value={email}
                        onChange={onChange}
                        data-key="email"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="phone-number">Phone number</label>
                    <input 
                        type="tel" 
                        id="phone-number" 
                        placeholder="Enter your phone number" 
                        value={phoneNumber}
                        onChange={onChange}
                        data-key="phoneNumber"
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        placeholder="Enter your complete address" 
                        value={address}
                        onChange={onChange}
                        data-key="address"
                    />
                </div>
            </form>
        </div>
    )
}