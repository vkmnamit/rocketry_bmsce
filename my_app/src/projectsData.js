export const projectsData = {
    pardalote: {
        name: 'Pardalote',
        year: '2024-2025',
        status: 'Ongoing',
        heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=2000',
        videoUrl: 'https://www.youtube.com/embed/PardaloteVideoID', 
        overview: 'Pardalote, powered by the third iteration of our SRAD hybrid engine, builds on the legacy and extensive testing campaigns of its predecessors, Waratah and Wattle.',
        history: 'The Pardalote project was initiated in late 2023 with the goal of reaching 30,000 feet at the Spaceport America Cup. It features a custom-designed carbon fiber airframe and a sophisticated telemetry system.',
        teamLeads: [
            { name: 'Izaak Cerneaz', role: 'Aerostructures Lead', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&q=80&w=200&h=200' },
            { name: 'Myles McLaughlin', role: 'Propulsion-Chamber Lead', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&q=80&w=200&h=200' },
            { name: 'Conor Horgan', role: 'Propulsion-Tank Lead', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&q=80&w=200&h=200' },
            { name: 'Ethan Englund', role: 'GSE Lead', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?fit=crop&q=80&w=200&h=200' }
        ],
        contributions: [
            'Engineered a custom hybrid engine simulation suite.',
            'Conducted over 15 static fire tests.',
            'Optimized airframe weight by 15% using composite materials.'
        ]
    },
    wattle: {
        name: 'Wattle',
        year: '2023',
        status: 'Past',
        heroImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=2000',
        videoUrl: 'https://www.youtube.com/embed/WattleVideoID',
        overview: 'Wattle was our most successful mission to date, securing 1st place in the 10k ft COTS category at the Spaceport America Cup 2023.',
        history: 'Developed over a period of 18 months, Wattle focused on reliability and precision recovery. It set the groundwork for all future hybrid engine designs.',
        teamLeads: [
            { name: 'Sarah Jenkins', role: 'Flight Simulation Lead', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&q=80&w=200&h=200' },
            { name: 'Tom King', role: 'Avionics Lead', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fit=crop&q=80&w=200&h=200' }
        ],
        contributions: [
            'First successful implementation of real-time GPS tracking.',
            'Achieved dual-deployment parachute recovery.',
            'Winner of the Team Spirit award at IREC 2023.'
        ]
    },
    rosella: {
        name: 'Rosella',
        year: '2022',
        status: 'Past',
        heroImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000',
        videoUrl: 'https://www.youtube.com/embed/RosellaVideoID',
        overview: 'Rosella pushed the boundaries of our initial propulsion systems, achieving new altitudes for the team in 2022.',
        history: 'Rosella was named after the Australian parrot, symbolizing the team"s agility and colorful spirit in the face of engineering challenges.',
        teamLeads: [
            { name: 'Said Mouhaiche', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?fit=crop&q=80&w=200&h=200' }
        ],
        contributions: [
            'Developed modular payload bay.',
            'Integrated high-definition onboard cameras.'
        ]
    }
};
