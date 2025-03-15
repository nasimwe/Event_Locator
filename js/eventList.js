// Event List functionality for the Event Locator application

document.addEventListener('DOMContentLoaded', function() {
    // Parse URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const category = urlParams.get('category');
    const date = urlParams.get('date');
    
    // Update page title
    updatePageTitle(city, category, date);
    
    // Update filter form values
    if (category) {
        document.getElementById('filter-category').value = category;
    }
    
    if (date) {
        document.getElementById('filter-date').value = date;
    }
    
    // Filter events based on search parameters
    const filteredEvents = filterEvents(city, category, date);
    
    // Display filtered events
    displayEvents(filteredEvents);
    
    // Set up event listeners for filters
    setupFilterListeners();
});

function updatePageTitle(city, category, date) {
    let title = 'Events';
    let description = 'Browse events happening near you';
    
    if (city) {
        title = `Events in ${city}`;
        description = `Browse events happening in ${city}`;
    }
    
    if (category) {
        const categoryName = getCategoryName(category);
        title += city ? ` - ${categoryName}` : ` - ${categoryName}`;
        description += ` in the ${categoryName.toLowerCase()} category`;
    }
    
    if (date) {
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        title += ` on ${formattedDate}`;
        description += ` on ${formattedDate}`;
    }
    
    document.getElementById('search-title').textContent = title;
    document.getElementById('search-description').textContent = description;
    document.title = title + ' - Event Locator';
}

function getCategoryName(categoryValue) {
    const categories = {
        'music': 'Music',
        'sports': 'Sports',
        'arts': 'Arts & Theater',
        'food': 'Food & Drink',
        'tech': 'Technology'
    };
    
    return categories[categoryValue] || 'All Categories';
}

function filterEvents(city, category, date) {
    return events.filter(event => {
        // Filter by city
        if (city && event.city.toLowerCase() !== city.toLowerCase()) {
            return false;
        }
        
        // Filter by category
        if (category && event.category !== category) {
            return false;
        }
        
        // Filter by date
        if (date && event.date !== date) {
            return false;
        }
        
        return true;
    });
}

function displayEvents(eventsToDisplay) {
    const eventList = document.getElementById('event-list');
    const loading = document.getElementById('loading');
    const noEvents = document.getElementById('no-events');
    
    // Simulate loading
    setTimeout(() => {
        loading.style.display = 'none';
        
        if (eventsToDisplay.length === 0) {
            noEvents.classList.remove('d-none');
            return;
        }
        
        // Create event cards
        eventsToDisplay.forEach(event => {
            const eventCard = createEventCard(event);
            eventList.appendChild(eventCard);
        });
    }, 800);
}

function createEventCard(event) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';
    
    const card = document.createElement('div');
    card.className = 'card event-card h-100';
    
    const dateObj = new Date(event.date);
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    
    card.innerHTML = `
        <img src="${event.image}" class="card-img-top" alt="${event.name}">
        <div class="card-body">
            <span class="event-category category-${event.category}">${getCategoryName(event.category)}</span>
            <h5 class="card-title">${event.name}</h5>
            <p class="event-date"><i class="bi bi-calendar"></i> ${formattedDate}, ${event.time}</p>
            <p class="event-location"><i class="bi bi-geo-alt"></i> ${event.location}, ${event.city}</p>
            <p class="card-text">${event.description.substring(0, 100)}...</p>
            <a href="event-details.html?id=${event.id}" class="btn btn-primary">View Details</a>
        </div>
    `;
    
    col.appendChild(card);
    return col;
}

function setupFilterListeners() {
    const filterForm = document.getElementById('filter-form');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const category = document.getElementById('filter-category').value;
            const date = document.getElementById('filter-date').value;
            
            // Get existing URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Update or add new parameters
            if (category) {
                urlParams.set('category', category);
            } else {
                urlParams.delete('category');
            }
            
            if (date) {
                urlParams.set('date', date);
            } else {
                urlParams.delete('date');
            }
            
            // Build new URL with updated parameters
            const newUrl = `events.html${urlParams.toString() ? '?' + urlParams.toString() : ''}`;
            
            // Navigate to the new URL
            window.location.href = newUrl;
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            // Get existing URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Remove filter parameters
            urlParams.delete('category');
            urlParams.delete('date');
            
            // Keep only the city parameter
            const city = urlParams.get('city');
            let newUrl = 'events.html';
            
            if (city) {
                newUrl += `?city=${encodeURIComponent(city)}`;
            }
            
            // Navigate to the new URL
            window.location.href = newUrl;
        });
    }
}