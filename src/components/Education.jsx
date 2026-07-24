export default function Education() {
    return (
        <div className="education-details">
            <div className="title">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>school-outline</title><path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z" /></svg>
                    <h2>Education Details</h2>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-down</title><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </div>
            <form action="">
                <div className="form-input">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" placeholder="Enter school (elem, hs, college)" />
                </div>
                <div className="form-input">
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" placeholder="Enter degree or field of study" />
                </div>
            </form>
        </div>
    )
}