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

export const experienceDetails = [
    {
        id: crypto.randomUUID(),
        company: 'Microhard',
        jobTitle: 'Janitor',
        location: 'Kanturatoy',
        startDate: '2025-03',
        endDate: '2026-04',
        responsibilities: [
            {
                id: crypto.randomUUID(),
                title: 'plato',
                description: 'hugas plato'
            },
            {
                id: crypto.randomUUID(),
                title: 'silhig',
                description: 'tig silhig'
            },
            {
                id: crypto.randomUUID(),
                title: 'bisan unsa',
                description: 'sulugoon'
            },
        ],
    },
]