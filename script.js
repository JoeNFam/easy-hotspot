// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Save preference to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Initialize Feather icons
    feather.replace();
    
    // Simulate data loading
    loadData();
});

function loadData() {
    // This would normally fetch data from your backend
    console.log("Loading dashboard data...");
    
    // Example: Update a stat dynamically
    setTimeout(() => {
        document.querySelector('.stats-grid').innerHTML += `
            <div class="bg-gray-800 rounded-lg p-6 border border-green-500 shadow-lg shadow-green-500/10">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-gray-400">New Signups</p>
                        <h3 class="text-3xl font-bold">24</h3>
                    </div>
                    <div class="p-3 bg-green-500/10 rounded-full">
                        <i data-feather="user-check" class="text-green-400"></i>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="text-green-400 text-sm">↑ 8% from yesterday</p>
                </div>
            </div>
        `;
        feather.replace();
    }, 2000);
}

// Chart simulation (in a real app, you'd use Chart.js or similar)
document.addEventListener('DOMContentLoaded', function() {
    const chartContainer = document.querySelector('.chart-placeholder');
    if (chartContainer) {
        // This would be replaced with actual charting library implementation
        chartContainer.innerHTML = `
            <div class="h-64 flex items-end space-x-2">
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 70%"></div>
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 85%"></div>
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 60%"></div>
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 90%"></div>
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 75%"></div>
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 40%"></div>
                <div class="flex-1 bg-gradient-to-t from-green-500 to-green-700 rounded-t" style="height: 30%"></div>
            </div>
        `;
    }
});