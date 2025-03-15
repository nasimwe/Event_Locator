// Main JavaScript file for the Event Locator application

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    const searchForm = document.getElementById('search-form');
    
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const city = document.getElementById('city').value;
            const category = document.getElementById('category').value;
            const date = document.getElementById('date').value;
            
            // Build the query string
            let queryParams = [];
            if (city) queryParams.push(`city=${encodeURIComponent(city)}`);
            if (category) queryParams.push(`category=${encodeURIComponent(category)}`);
            if (date) queryParams.push(`date=${encodeURIComponent(date)}`);
            
            const queryString = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
            
            // Redirect to the events page with the search parameters
            window.location.href = `events.html${queryString}`;
        });
    }
    
    // Handle category links
    const categoryLinks = document.querySelectorAll('a[href^="events.html?category="]');
    
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            window.location.href = href;
        });
    });
});