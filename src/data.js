export const defaultData = {
    personalDetails: {
        fullName: 'Sagi Cat',
        email: 'sagi@cat.com',
        phoneNumber: '09123456789',
        address: 'Miputak, Dipolog City'
    }
}

export const educationDetails = [
    {
        id: crypto.randomUUID(),
        school: 'Miputak Elementary School',
        degree: 'Elementary',
        location: 'Miputak, Dipolog City',
        startDate: '01/2016',
        endDate: '02/2020'
    },
    {
        id: crypto.randomUUID(),
        school: 'Andres Bonifacio College',
        degree: 'Computer Science',
        location: 'Miputak, Dipolog City',
        startDate: '01/2020',
        endDate: '02/2024'
    },
]