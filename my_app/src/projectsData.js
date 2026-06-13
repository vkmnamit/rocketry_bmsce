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
        overview: 'To establish the foundational capabilities of Rocketry BMSCE through the design, assembly, testing, and launch of the team\'s earliest experimental rocket platform.',
        history: 'Rosella successfully laid the technological and organizational foundation for all future Rocketry BMSCE missions, creating the team\'s first launch procedures, engineering workflows, and subsystem structures.',
        teamLeads: [
            { name: 'Said Mouhaiche', role: 'Project Manager', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?fit=crop&q=80&w=200&h=200' }
        ],
        contributions: [
            'Developed modular payload bay.',
            'Integrated high-definition onboard cameras.'
        ]
    }
};

// Detailed project entries added from documentation-style content
projectsData['naf-2'] = {
    name: 'NAF-2',
    year: '2025',
    status: 'Past',
    heroImage: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=2000',
    missionPatch: 'https://res.cloudinary.com/dgrrdy6sk/image/upload/v1781285445/missionpatch1_gz05ro.png',
    overview: 'Independent Launch Validation Mission: To validate redundant recovery mechanisms and independent launch operation capabilities.',
    technicalArchitecture: 'GFRP airframe, Von Karman series nose cone, custom-designed fins for enhanced stability, in-house avionics and telemetry systems, recovery hardware, and parachute deployment systems.',
    missionConclusion: 'Although a commercial motor anomaly resulted in a sub-nominal apogee, the mission achieved safe and successful recovery. The team successfully executed complete independent launch operations and received positive recognition from industry experts.',
    launchOperations: 'Rocketry BMSCE became one of the few student-led teams in India to establish and execute end-to-end independent launch capabilities.',
    deploymentDate: 'December 14, 2025',
    launchSite: 'Handigundi Betta, Ramanagara District, Karnataka, India',
    motto: 'One Launch At A Time',
    contributions: [
        'Independent launch operations development',
        'Redundant recovery systems validation',
        'Avionics and telemetry integration for independent launch'
    ]
};

projectsData['vyomagni'] = {
    name: 'Vyomagni',
    year: '2025',
    status: 'Past',
    heroImage: 'https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?auto=format&fit=crop&q=80&w=2000',
    missionPatch: 'https://res.cloudinary.com/dgrrdy6sk/image/upload/v1781285444/missionpatch3_qvout0.png',
    overview: 'IN-SPACe Model Rocketry Competition Mission: To validate payload integration capabilities and precision apogee launch performance.',
    technicalArchitecture: '6-inch diameter rocket integrated with a 1 kg CanSat payload, carbon-fiber 3D-printed components for weight reduction, G10 fins, and a GFRP airframe.',
    missionConclusion: 'Successfully qualified for the national finals and demonstrated one of the most stable flights in the competition, despite a sub-nominal recovery sequence.',
    achievement: 'Validated advanced payload integration, precision flight control, and competition-grade aerospace engineering capabilities.',
    eventDate: 'October 27–30, 2025',
    location: 'Tumkuhiraj, Tamkuhi Raj Vidhan Sabha',
    motto: 'Vyom-Agni: Reaching the Skies Through Fire'
};

projectsData['lumos-s3p3'] = {
    name: 'LUMOS S3P3',
    year: '2026',
    status: 'Ongoing',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
    missionPatch: 'https://res.cloudinary.com/dgrrdy6sk/image/upload/v1781285444/missionpatch2_keupyc.png',
    overview: 'Motor Development Program: To develop an in-house I-Class solid propulsion motor in collaboration with startups and industry partners.',
    technicalArchitecture: 'A structured propulsion development and testing program focused on progressively increasing impulse levels while maintaining safety, reliability, and repeatability throughout the testing cycle.',
    objective: 'To establish indigenous propulsion capabilities that can support future high-performance launch vehicles developed by Rocketry BMSCE.',
    statusDetail: 'Ongoing Development & Testing',
    motto: 'Powering the Next Frontier'
};

projectsData['phoenix'] = {
    name: 'Phoenix – NAF-2 Mk II',
    year: '2026',
    status: 'Development',
    heroImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=2000',
    missionPatch: 'https://res.cloudinary.com/dgrrdy6sk/image/upload/v1781285409/missionpatch4_f4zs7d.png',
    overview: 'Advanced Telemetry & Avionics Demonstrator: To develop and validate highly precise, sophisticated, and redundant telemetry and avionics systems incorporating booster-section ejection mechanisms for future higher-apogee missions.',
    technicalArchitecture: 'Next-generation avionics architecture featuring redundant telemetry, advanced flight electronics, booster separation systems, enhanced recovery technologies, and precision mission-control capabilities.',
    objective: 'To serve as a technology demonstrator for future high-altitude missions and establish the foundation for advanced launch vehicle development.',
    programStatus: 'Under Development',
    motto: 'Rise Beyond Limits'
};
