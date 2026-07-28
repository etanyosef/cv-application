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
        startDate: '2016-01',
        endDate: '2020-02'
    },
    {
        id: crypto.randomUUID(),
        school: 'Andres Bonifacio College',
        degree: 'Computer Science',
        location: 'Miputak, Dipolog City',
        startDate: '2020-01',
        endDate: '2024-02'
    },
]