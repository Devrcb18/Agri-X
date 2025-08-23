<<<<<<< HEAD
// Global JavaScript functions for AgriX application

document.addEventListener('DOMContentLoaded', function() {
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            if (alert.classList.contains('fade')) {
                alert.classList.remove('show');
            } else {
                alert.style.display = 'none';
            }
        }, 5000);
    });
});

// Utility functions
function showLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    }
}

function hideLoading(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = '';
    }
}

function formatNumber(num) {
    return new Intl.NumberFormat().format(num);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Dashboard chart colors
const chartColors = {
    primary: '#2E7D32',
    secondary: '#4CAF50',
    accent: '#81C784',
    success: '#28a745',
    warning: '#ffc107',
    danger: '#dc3545',
    info: '#17a2b8'
};

// Console welcome message
console.log('🌱 AgriX - Agricultural Intelligence Platform');
console.log('🚀 Ready for smart farming solutions');
=======
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize Bootstrap popovers
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
    
    // Dashboard button click handler
    const dashboardBtn = document.getElementById('dashboard-btn');
    if (dashboardBtn) {
        dashboardBtn.addEventListener('click', function(e) {
            console.log('Dashboard button clicked');
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Loading...';
            this.disabled = true;
            
            // Reset after a short delay to allow navigation
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    }
    
    // Create images directory if needed
    // This is just a placeholder; the directory creation happens server-side
    
    // Form validation
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    
    // Weather location auto-detection
    const locationBtn = document.getElementById('detect-location');
    if (locationBtn) {
        locationBtn.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    document.getElementById('latitude').value = lat;
                    document.getElementById('longitude').value = lon;
                    document.getElementById('location-detected').classList.remove('d-none');
                }, function() {
                    alert('Unable to retrieve your location. Please enter it manually.');
                });
            } else {
                alert('Geolocation is not supported by your browser. Please enter your location manually.');
            }
        });
    }
    
    // Crop recommendation form dynamic fields
    const cropTypeSelect = document.getElementById('crop_type');
    if (cropTypeSelect) {
        cropTypeSelect.addEventListener('change', function() {
            const cropType = this.value;
            const seasonSelect = document.getElementById('season');
            
            // Reset seasons
            if (seasonSelect) {
                seasonSelect.innerHTML = '<option value="" selected disabled>Select a season</option>';
                
                // Add appropriate seasons based on crop type
                if (cropType === 'rice' || cropType === 'maize') {
                    addOption(seasonSelect, 'kharif', 'Kharif (Monsoon)');
                    addOption(seasonSelect, 'rabi', 'Rabi (Winter)');
                } else if (cropType === 'wheat') {
                    addOption(seasonSelect, 'rabi', 'Rabi (Winter)');
                } else if (cropType === 'cotton') {
                    addOption(seasonSelect, 'kharif', 'Kharif (Monsoon)');
                } else if (cropType === 'sugarcane') {
                    addOption(seasonSelect, 'kharif', 'Kharif (Monsoon)');
                    addOption(seasonSelect, 'perennial', 'Perennial');
                } else {
                    addOption(seasonSelect, 'kharif', 'Kharif (Monsoon)');
                    addOption(seasonSelect, 'rabi', 'Rabi (Winter)');
                    addOption(seasonSelect, 'zaid', 'Zaid (Summer)');
                    addOption(seasonSelect, 'perennial', 'Perennial');
                }
            }
        });
    }
    
    // Helper function to add options to select
    function addOption(selectElement, value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        selectElement.appendChild(option);
    }
});
>>>>>>> e7bd2cad140782cdd3ebee1e75d0138bdb5097b0
