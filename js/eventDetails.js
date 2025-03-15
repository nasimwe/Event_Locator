document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    
    if (!eventId) {
        showEventNotFound();
        return;
    }
    
    const event = events.find(event => event.id === parseInt(eventId));
    
    if (!event) {
        showEventNotFound();
        return;
    }
    
    // Display event details
    displayEventDetails(event);
});

function showEventNotFound() {
    const loading = document.getElementById('loading');
    const eventNotFound = document.getElementById('event-not-found');
    
    loading.style.display = 'none';
    eventNotFound.classList.remove('d-none');
}

function displayEventDetails(event) {
    const eventDetails = document.getElementById('event-details');
    const loading = document.getElementById('loading');
    
    // Simulate loading
    setTimeout(() => {
        loading.style.display = 'none';
        
        // Create event details content
        const detailsHTML = createEventDetailsHTML(event);
        
        // Replace the loading indicator with the event details
        eventDetails.innerHTML = detailsHTML;
        
        // Update page title
        document.title = `${event.name} - Event Locator`;
    }, 800);
}

function createEventDetailsHTML(event) {
    const dateObj = new Date(event.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    
    // Create HTML for specific event details based on category
    let specificDetailsHTML = '';
    
    switch (event.category) {
        case 'music':
            specificDetailsHTML = `
                <div class="mb-4">
                    <h4>Lineup</h4>
                    <ul class="list-group">
                        ${event.details.lineup.map(artist => `<li class="list-group-item">${artist}</li>`).join('')}
                    </ul>
                </div>
            `;
            break;
        case 'sports':
            specificDetailsHTML = `
                <div class="mb-4">
                    <h4>Teams</h4>
                    <div class="d-flex justify-content-center align-items-center mb-3">
                        <div class="text-center mx-3">
                            <h5>${event.details.teams[0]}</h5>
                        </div>
                        <div class="text-center mx-3">
                            <h5>vs</h5>
                        </div>
                        <div class="text-center mx-3">
                            <h5>${event.details.teams[1]}</h5>
                        </div>
                    </div>
                </div>
            `;
            break;
        case 'arts':
            specificDetailsHTML = `
                <div class="mb-4">
                    <h4>Featured Performances</h4>
                    <ul class="list-group">
                        ${event.details.performances ? event.details.performances.map(performance => `<li class="list-group-item">${performance}</li>`).join('') : ''}
                        ${event.details.artists ? event.details.artists.map(artist => `<li class="list-group-item">${artist}</li>`).join('') : ''}
                    </ul>
                </div>
            `;
            break;
        case 'food':
            specificDetailsHTML = `
                <div class="mb-4">
                    <h4>Featured Cuisines</h4>
                    <div class="row">
                        ${event.details.cuisines ? event.details.cuisines.map(cuisine => `
                            <div class="col-md-4 mb-2">
                                <div class="p-2 bg-light rounded text-center">
                                    ${cuisine}
                                </div>
                            </div>
                        `).join('') : ''}
                        ${event.details.features ? event.details.features.map(feature => `
                            <div class="col-md-6 mb-2">
                                <div class="p-2 bg-light rounded text-center">
                                    ${feature}
                                </div>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>
            `;
            break;
        case 'tech':
            specificDetailsHTML = `
                <div class="mb-4">
                    <h4>Featured Speakers</h4>
                    <ul class="list-group">
                        ${event.details.speakers.map(speaker => `<li class="list-group-item">${speaker}</li>`).join('')}
                    </ul>
                </div>
                <div class="mb-4">
                    <h4>Topics</h4>
                    <div class="row">
                        ${event.details.topics ? event.details.topics.map(topic => `
                            <div class="col-md-6 mb-2">
                                <div class="p-2 bg-light rounded text-center">
                                    ${topic}
                                </div>
                            </div>
                        `).join('') : ''}
                    </div>
                </div>
            `;
            break;
    }
    
    return `
        <div class="event-banner" style="background-image: url('${event.image}');">
            <div class="event-banner-content">
                <h1>${event.name}</h1>
                <span class="event-category category-${event.category}">${getCategoryName(event.category)}</span>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-8">
                <div class="mb-4">
                    <h3>Event Description</h3>
                    <p class="event-description">${event.description}</p>
                </div>
                
                ${specificDetailsHTML}
            </div>
            
            <div class="col-lg-4">
                <div class="event-details-info">
                    <h3>Event Information</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <strong>Date:</strong> ${formattedDate}
                        </li>
                        <li class="list-group-item">
                            <strong>Time:</strong> ${event.time}
                        </li>
                        <li class="list-group-item">
                            <strong>Location:</strong> ${event.location}, ${event.city}
                        </li>
                        <li class="list-group-item">
                            <strong>Address:</strong> ${event.details.venue.address}
                        </li>
                        <li class="list-group-item">
                            <strong>Ticket Price:</strong> ${event.details.ticketPrice}
                        </li>
                        <li class="list-group-item">
                            <strong>Organizer:</strong> ${event.details.organizer}
                        </li>
                    </ul>
                </div>
                
                <div class="d-grid gap-2 mb-4">
                    <a href="${event.details.website}" class="btn btn-primary btn-lg" target="_blank">Buy Tickets</a>
                    <button class="btn btn-outline-primary" onclick="window.history.back()">Back to Events</button>
                </div>
            </div>
        </div>
    `;
}

function getCategoryName(categoryValue) {
    const categories = {
        'music': 'Music',
        'sports': 'Sports',
        'arts': 'Arts & Theater',
        'food': 'Food & Drink',
        'tech': 'Technology'
    };
    
    return categories[categoryValue] || 'Event';
}