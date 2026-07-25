export default function PersonalDetailsForm({
    onChange, 
    data: {fullName, email, phoneNumber, address}
}) {

    return (
        <div className="personal-details">
            <div className="title">
                <span>                    
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