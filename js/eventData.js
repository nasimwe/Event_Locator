// Sample event data for the Rwanda Event Locator application
const events = [
    {
        id: 1,
        name: "Kigali International Music Festival",
        date: "2025-06-15",
        time: "16:00",
        location: "Amahoro Stadium",
        city: "Kigali",
        category: "music",
        description: "Join us for Rwanda's biggest music festival featuring top artists across Africa and beyond. Experience live performances, traditional and contemporary music, delicious food, and amazing vibes.",
        image: "https://rdb.rw/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-10-at-15.07.20.jpeg",
        details: {
            organizer: "Rwanda Events Ltd.",
            ticketPrice: "10,000-25,000 RWF",
            website: "https://ticqet.rw/kigali-music",
            lineup: ["Bruce Melodie", "The Ben", "Sauti Sol", "Diamond Platnumz", "Burna Boy"],
            venue: {
                name: "Amahoro Stadium",
                address: "KK 17 Ave, Kigali",
                capacity: "30,000 attendees"
            }
        }
    },
    {
        id: 2,
        name: "Basketball Africa League Finals",
        date: "2025-05-20",
        time: "19:30",
        location: "BK Arena",
        city: "Kigali",
        category: "sports",
        description: "Witness basketball history as the top African teams battle it out in the Basketball Africa League Finals. Experience the electric atmosphere as championship dreams are made or broken.",
        image: "https://bal.nba.com/images/bal-logo-share.jpg",
        details: {
            organizer: "Basketball Africa League",
            ticketPrice: "5,000-20,000 RWF",
            website: "https://bal.nba.com",
            teams: ["Rwanda Energy Group (REG)", "US Monastir"],
            venue: {
                name: "BK Arena",
                address: "Nyarugenge, Kigali",
                capacity: "10,000 seats"
            }
        }
    },
    {
        id: 3,
        name: "Kigali Theater Festival",
        date: "2025-04-10",
        time: "14:00",
        location: "Kigali Conference Centre",
        city: "Kigali",
        category: "arts",
        description: "Experience the magic of Rwandan theater with a weekend of special performances, behind-the-scenes tours, and workshops with theater professionals showcasing traditional and contemporary performances.",
        image: "https://www.kcc.rw/uploads/9/8/2/4/98249186/3d7a9754_orig.jpg",
        details: {
            organizer: "Rwanda Arts Council",
            ticketPrice: "3,000-10,000 RWF",
            website: "https://example.com/kigali-theater",
            performances: ["Mashirika Performing Arts", "Isôko Theater", "Urukerereza Dance Troupe", "Spoken Word Rwanda"],
            venue: {
                name: "Kigali Conference Centre",
                address: "KG 2 Roundabout, Kigali",
                note: "Multiple performance spaces throughout the venue"
            }
        }
    },
    {
        id: 4,
        name: "Rwanda Food & Coffee Expo",
        date: "2025-07-25",
        time: "12:00",
        location: "Kigali Convention Centre",
        city: "Kigali",
        category: "food",
        description: "Indulge in culinary delights from renowned chefs and taste exquisite Rwandan coffee and cuisine at this premier food exposition showcasing the best of Rwanda's gastronomy.",
        image: "https://theforefrontmagazine.com/wp-content/uploads/2024/05/Coffee2.jpg",
        details: {
            organizer: "Rwanda Development Board",
            ticketPrice: "5,000 RWF",
            website: "https://example.com/food-coffee-expo",
            features: ["Chef demonstrations", "Coffee tastings", "Gourmet marketplace", "Traditional cuisine workshops"],
            venue: {
                name: "Kigali Convention Centre",
                address: "KG 2 Roundabout, Kigali",
                capacity: "5,000 attendees"
            }
        }
    },
    {
        id: 5,
        name: "Rwanda Tech Innovation Summit",
        date: "2025-09-15",
        time: "09:00",
        location: "Norrsken House",
        city: "Kigali",
        category: "tech",
        description: "Explore cutting-edge technologies and hear from industry leaders at this premier tech innovation summit focused on Africa's digital transformation, fintech solutions, and Rwanda's growing tech ecosystem.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIpObXaQZCHSYjXx9T-whR0lekn9N_7O8Vw&s",
        details: {
            organizer: "kLab & Rwanda ICT Chamber",
            ticketPrice: "15,000 RWF",
            website: "https://example.com/rwanda-tech-summit",
            speakers: ["Paula Ingabire", "Lacina Koné", "Rebecca Enonchong", "Ashish Thakkar"],
            venue: {
                name: "Norrsken House Kigali",
                address: "KG 7 Ave, Kigali",
                capacity: "1,000 attendees"
            }
        }
    },
    {
        id: 6,
        name: "Jazz at Inema",
        date: "2025-05-30",
        time: "18:00",
        location: "Inema Arts Center",
        city: "Kigali",
        category: "music",
        description: "Enjoy a magical evening of jazz under the stars with performances by renowned musicians and emerging local talents, set against the backdrop of Rwanda's premier arts center.",
        image: "https://contemporaryand.com/wp-content/uploads/2019/05/inema-entrance-nomad-advertising-rwanda.jpg",
        details: {
            organizer: "Inema Arts Center",
            ticketPrice: "5,000 RWF",
            website: "https://inemaartcenter.com",
            lineup: ["Neptunez Band", "Mighty Popo", "Kigali Jazz Junction All-Stars"],
            venue: {
                name: "Inema Arts Center",
                address: "KG 563 St, Kacyiru, Kigali",
                capacity: "300 attendees"
            }
        }
    },
    {
        id: 7,
        name: "Contemporary African Art Exhibition",
        date: "2025-08-05",
        time: "10:00",
        location: "Kigali Contemporary Art Museum",
        city: "Kigali",
        category: "arts",
        description: "Experience thought-provoking works from contemporary Rwandan and African artists pushing the boundaries of modern art in this limited-time exhibition.",
        image: "https://moody.rice.edu/sites/default/files/styles/hero/public/exhibitions/NBaker_MCA_200205_7042.jpg?itok=O6NsJEGO",
        details: {
            organizer: "Rwanda Arts Initiative",
            ticketPrice: "2,000 RWF",
            website: "https://example.com/contemporary-art-kigali",
            artists: ["Innocent Nkurunziza", "Timothy Wandulu", "Gustave Nsengiyumva", "Crista Uwase"],
            venue: {
                name: "Rwanda Art Museum",
                address: "KK 15 Rd, Nyanza, Kigali",
                hours: "10:00 AM - 6:00 PM"
            }
        }
    },
    {
        id: 8,
        name: "Umuganura Harvest Festival",
        date: "2025-08-07",
        time: "11:00",
        location: "Nyanza Cultural Center",
        city: "Nyanza",
        category: "cultural",
        description: "Celebrate Rwanda's traditional harvest festival with authentic cuisine, cultural performances, traditional games, and ceremonies showcasing Rwanda's rich heritage.",
        image: "https://www.ktpress.rw/wp-content/uploads/2020/08/Umuganura-8.jpg",
        details: {
            organizer: "Ministry of Culture and Sports",
            ticketPrice: "Free entrance",
            website: "https://example.com/umuganura",
            activities: ["Traditional dances", "Rwandan cuisine", "Cultural exhibitions", "Agricultural showcase", "Royal drum performances"],
            venue: {
                name: "Nyanza Cultural Center",
                address: "Nyanza District, Southern Province",
                duration: "2 days"
            }
        }
    },
    {
        id: 9,
        name: "CECAFA Kagame Cup Final",
        date: "2025-07-15",
        time: "19:00",
        location: "Amahoro Stadium",
        city: "Kigali",
        category: "sports",
        description: "Watch the best football clubs from East and Central Africa compete in the final match of the prestigious regional tournament named after President Paul Kagame.",
        image: "https://imvahonshya.co.rw/wp-content/uploads/2024/06/af241021-edc5-4db6-9100-86d79c8c8d47.jpeg",
        details: {
            organizer: "CECAFA & Rwanda Football Federation",
            ticketPrice: "3,000-7,000 RWF",
            website: "https://ferwafa.rw",
            features: ["Pre-match entertainment", "Half-time show", "Fan zone activities"],
            venue: {
                name: "Amahoro Stadium",
                address: "KK 17 Ave, Kigali",
                capacity: "30,000 seats"
            }
        }
    },
    {
        id: 10,
        name: "Africa Innovation Summit",
        date: "2025-10-05",
        time: "08:30",
        location: "Kigali Convention Centre",
        city: "Kigali",
        category: "tech",
        description: "Join industry experts and researchers for discussions on how technology solutions can address African challenges and drive sustainable development across the continent.",
        image: "https://www.africainnovationsummit.org/uploads/news/dI-qCFrctMQRHDCvclYPunKRvwBBZnBB_c.jpg",
        details: {
            organizer: "Smart Africa Alliance",
            ticketPrice: "20,000 RWF",
            website: "https://smartafrica.org",
            topics: ["Digital Transformation", "Smart Cities", "AgriTech", "Sustainable Development"],
            venue: {
                name: "Kigali Convention Centre",
                address: "KG 2 Roundabout, Kigali",
                schedule: "3-day conference with workshops"
            }
        }
    }
];