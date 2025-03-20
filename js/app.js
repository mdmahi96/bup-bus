document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');
  const suggestionContainer = document.getElementById('suggestion-container');
  const initialMessage = document.getElementById('initial-message');
  const noResults = document.getElementById('no-results');
  const noResultsTerm = document.getElementById('no-results-term');
  const resultsTableContainer = document.getElementById('results-table-container');
  const selectedStoppage = document.getElementById('selected-stoppage');
  const resultsTableBody = document.getElementById('results-table-body');
  const sortButtons = document.querySelectorAll('.sort-button');
  
  // Current search results and sort state
  let currentSearchResults = [];
  let currentSortField = 'routeNo';
  let currentSortDirection = 'asc';
  
  // Extract all unique stoppages from routes
  const allStoppages = extractStoppages();
  let filteredStoppages = [...allStoppages];
  
  // Event listeners
  searchInput.addEventListener('input', handleSearchInput);
  searchInput.addEventListener('focus', showSuggestions);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleStoppageSelect(searchInput.value);
    }
  });
  
  searchButton.addEventListener('click', function() {
    handleStoppageSelect(searchInput.value);
  });
  
  // Sort button event listeners
  sortButtons.forEach(button => {
    button.addEventListener('click', function() {
      const sortField = this.getAttribute('data-sort');
      
      // Toggle sort direction if same field clicked
      if (sortField === currentSortField) {
        currentSortDirection = currentSortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        currentSortField = sortField;
        currentSortDirection = 'asc';
      }
      
      // Update active button
      sortButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Re-render with sorted results
      sortAndRenderResults();
    });
  });
  
  // Close suggestions when clicking outside
  document.addEventListener('click', function(event) {
    if (!suggestionContainer.contains(event.target) && event.target !== searchInput) {
      suggestionContainer.classList.add('hidden');
    }
  });
  
  // Extract all unique stoppages from routes
  function extractStoppages() {
    const stoppagesSet = new Set();
    
    busRoutes.forEach(route => {
      const stops = route.route.split('→').map(stop => stop.trim());
      stops.forEach(stop => {
        stoppagesSet.add(stop);
      });
    });
    
    return Array.from(stoppagesSet).sort();
  }
  
  // Handle search input
  function handleSearchInput() {
    const term = searchInput.value;
    
    if (term.length > 0) {
      const filtered = allStoppages.filter(stoppage => 
        stoppage.toLowerCase().includes(term.toLowerCase())
      );
      filteredStoppages = filtered;
      renderSuggestions();
      showSuggestions();
    } else {
      filteredStoppages = [...allStoppages];
      renderSuggestions();
      suggestionContainer.classList.add('hidden');
    }
  }
  
  // Show suggestions
  function showSuggestions() {
    if (filteredStoppages.length > 0 && searchInput.value.length > 0) {
      renderSuggestions();
      suggestionContainer.classList.remove('hidden');
    }
  }
  
  // Render suggestions
  function renderSuggestions() {
    suggestionContainer.innerHTML = '';
    
    if (filteredStoppages.length > 0) {
      filteredStoppages.forEach(stoppage => {
        const div = document.createElement('div');
        div.className = 'p-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 suggestion-item';
        
        // Highlight matching text
        const term = searchInput.value.toLowerCase();
        if (term && stoppage.toLowerCase().includes(term)) {
          const index = stoppage.toLowerCase().indexOf(term);
          const before = stoppage.substring(0, index);
          const match = stoppage.substring(index, index + term.length);
          const after = stoppage.substring(index + term.length);
          
          div.innerHTML = before + '<span class="bg-blue-100 font-medium">' + match + '</span>' + after;
        } else {
          div.textContent = stoppage;
        }
        
        div.addEventListener('click', function() {
          handleStoppageSelect(stoppage);
        });
        suggestionContainer.appendChild(div);
      });
    } else {
      const div = document.createElement('div');
      div.className = 'p-3 text-gray-500 text-center';
      div.textContent = 'No stoppages found';
      suggestionContainer.appendChild(div);
    }
  }
  
  // Handle stoppage selection
  function handleStoppageSelect(stoppage) {
    const searchResults = busRoutes.filter(route => {
      return route.route.toLowerCase().includes(stoppage.toLowerCase());
    });
    
    searchInput.value = stoppage;
    suggestionContainer.classList.add('hidden');
    
    // Store current results for sorting
    currentSearchResults = searchResults;
    
    // Update UI based on results
    if (searchResults.length > 0) {
      // Reset sort to default
      currentSortField = 'routeNo';
      currentSortDirection = 'asc';
      sortButtons.forEach(btn => btn.classList.remove('active'));
      document.querySelector('[data-sort="routeNo"]').classList.add('active');
      
      // Render sorted results
      sortAndRenderResults();
      
      initialMessage.classList.add('hidden');
      noResults.classList.add('hidden');
      resultsTableContainer.classList.remove('hidden');
    } else {
      initialMessage.classList.add('hidden');
      noResultsTerm.textContent = stoppage;
      noResults.classList.remove('hidden');
      resultsTableContainer.classList.add('hidden');
    }
  }
  
  // Sort results
  function sortAndRenderResults() {
    const sorted = [...currentSearchResults].sort((a, b) => {
      let valA = a[currentSortField] || "";
      let valB = b[currentSortField] || "";
      
      // Convert to numbers for route numbers
      if (currentSortField === 'routeNo') {
        valA = parseInt(valA) || 0;
        valB = parseInt(valB) || 0;
      }
      
      // For time fields, convert to minutes for comparison
      if (['morning', 'noon', 'afternoon'].includes(currentSortField)) {
        valA = valA ? convertTimeToMinutes(valA) : -1;
        valB = valB ? convertTimeToMinutes(valB) : -1;
      }
      
      // Compare based on direction
      if (currentSortDirection === 'asc') {
        return valA > valB ? 1 : valA < valB ? -1 : 0;
      } else {
        return valA < valB ? 1 : valA > valB ? -1 : 0;
      }
    });
    
    renderResults(sorted, searchInput.value);
  }
  
  // Convert time string to minutes for sorting
  function convertTimeToMinutes(timeStr) {
    const parts = timeStr.split(':');
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }
  
  // Render results
  function renderResults(results, stoppage) {
    selectedStoppage.textContent = stoppage;
    resultsTableBody.innerHTML = '';
    
    results.forEach((result, index) => {
      const row = document.createElement('tr');
      row.className = 'hover:bg-gray-50 transition duration-150';
      
      // Add animation with delay for staggered effect
      setTimeout(() => {
        row.classList.add('active-row');
      }, index * 100);
      
      // Route Number
      const routeNoCell = document.createElement('td');
      routeNoCell.className = 'py-3 px-4 whitespace-nowrap font-medium text-gray-900';
      routeNoCell.textContent = result.routeNo;
      row.appendChild(routeNoCell);
      
      // Bus Number
      const busNoCell = document.createElement('td');
      busNoCell.className = 'py-3 px-4 whitespace-nowrap text-gray-700';
      busNoCell.textContent = result.busNo;
      row.appendChild(busNoCell);
      
      // Route
      const routeCell = document.createElement('td');
      routeCell.className = 'py-3 px-4 text-gray-700';
      
      const routeStops = result.route.split('→');
      routeStops.forEach((stop, index) => {
        const stopTrimmed = stop.trim();
        const span = document.createElement('span');
        
        const stopSpan = document.createElement('span');
        if (stopTrimmed.toLowerCase() === stoppage.toLowerCase()) {
          stopSpan.className = 'font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded';
        }
        stopSpan.textContent = stopTrimmed;
        span.appendChild(stopSpan);
        
        if (index < routeStops.length - 1) {
          span.appendChild(document.createTextNode(' → '));
        }
        
        routeCell.appendChild(span);
      });
      
      row.appendChild(routeCell);
      
      // Morning
      const morningCell = document.createElement('td');
      morningCell.className = 'py-3 px-4 whitespace-nowrap text-gray-700';
      if (result.morning) {
        const timeSpan = document.createElement('span');
        timeSpan.className = 'bg-green-50 text-green-700 px-2 py-1 rounded text-sm font-medium';
        timeSpan.textContent = result.morning;
        morningCell.appendChild(timeSpan);
      } else {
        morningCell.textContent = "-";
      }
      row.appendChild(morningCell);
      
      // Noon
      const noonCell = document.createElement('td');
      noonCell.className = 'py-3 px-4 whitespace-nowrap text-gray-700';
      if (result.noon) {
        const timeSpan = document.createElement('span');
        timeSpan.className = 'bg-yellow-50 text-yellow-700 px-2 py-1 rounded text-sm font-medium';
        timeSpan.textContent = result.noon;
        noonCell.appendChild(timeSpan);
      } else {
        noonCell.textContent = "-";
      }
      row.appendChild(noonCell);
      
      // Afternoon
      const afternoonCell = document.createElement('td');
      afternoonCell.className = 'py-3 px-4 whitespace-nowrap text-gray-700';
      if (result.afternoon) {
        const timeSpan = document.createElement('span');
        timeSpan.className = 'bg-orange-50 text-orange-700 px-2 py-1 rounded text-sm font-medium';
        timeSpan.textContent = result.afternoon;
        afternoonCell.appendChild(timeSpan);
      } else {
        afternoonCell.textContent = "-";
      }
      row.appendChild(afternoonCell);
      
      // Driver
      const driverCell = document.createElement('td');
      driverCell.className = 'py-3 px-4 text-gray-700';
      
      if (result.driver) {
        // Format driver contacts with phone icon
        const driverInfo = result.driver.split(',');
        driverInfo.forEach((info, idx) => {
          const parts = info.trim().split('-');
          if (parts.length === 2) {
            const driverName = parts[0].trim();
            const driverPhone = parts[1].trim();
            
            const driverDiv = document.createElement('div');
            driverDiv.className = 'flex items-center mb-1';
            
            const nameSpan = document.createElement('span');
            nameSpan.textContent = driverName + ': ';
            nameSpan.className = 'mr-1';
            
            const phoneLink = document.createElement('a');
            phoneLink.href = 'tel:' + driverPhone;
            phoneLink.className = 'text-blue-600 hover:underline flex items-center';
            
            const phoneIcon = document.createElement('span');
            phoneIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>';
            
            const phoneSpan = document.createElement('span');
            phoneSpan.textContent = driverPhone;
            
            phoneLink.appendChild(phoneIcon);
            phoneLink.appendChild(phoneSpan);
            
            driverDiv.appendChild(nameSpan);
            driverDiv.appendChild(phoneLink);
            
            driverCell.appendChild(driverDiv);
          } else {
            const driverDiv = document.createElement('div');
            driverDiv.textContent = info.trim();
            driverDiv.className = 'mb-1';
            driverCell.appendChild(driverDiv);
          }
        });
      } else {
        driverCell.textContent = "-";
      }
      
      row.appendChild(driverCell);
      
      resultsTableBody.appendChild(row);
    });
  }
});