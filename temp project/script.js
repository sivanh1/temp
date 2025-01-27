// Login Functions
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    if (username && password) {
        document.getElementById('loginScreen').classList.remove('active');
        document.getElementById('userRole').textContent = role;
        // In production, add proper authentication logic
    }
}

function logout() {
    document.getElementById('loginScreen').classList.add('active');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

// Navigation Functions
function showScreen(screenId) {
    // Update screen title
    document.getElementById('screenTitle').textContent = 
        screenId.charAt(0).toUpperCase() + screenId.slice(1);
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screenId).classList.add('active');
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

// Modal Functions
function showModal(modalType) {
    const modalMap = {
        'addEmployee': 'addEmployeeModal',
        'addVehicle': 'addVehicleModal',
        'newOrder': 'newOrderModal'
    };

    const modalId = modalMap[modalType];
    if (modalId) {
        document.getElementById(modalId).classList.add('active');
    }
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Order Functions
function addOrderItem() {
    const orderItems = document.getElementById('orderItems');
    const newItem = orderItems.children[0].cloneNode(true);
    newItem.querySelectorAll('input, select').forEach(input => input.value = '');
    orderItems.appendChild(newItem);
}

function removeItem(button) {
    if (document.getElementById('orderItems').children.length > 1) {
        button.closest('.form-group').remove();
    }
}

// Kanban Drag and Drop
document.querySelectorAll('.kanban-item').forEach(item => {
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        e.target.classList.add('dragging');
    });

    item.addEventListener('dragend', (e) => {
        e.target.classList.remove('dragging');
    });
});

document.querySelectorAll('.kanban-column').forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        if (draggable) {
            column.appendChild(draggable);
        }
    });
});

// CRUD Operations (Example functions)
function editEmployee(id) {
    showModal('addEmployee');
    // In production, fetch employee data and populate form
}

function deleteEmployee(id) {
    if (confirm('Are you sure you want to delete this employee?')) {
        // In production, make API call to delete employee
    }
}

function editVehicle(id) {
    showModal('addVehicle');
    // In production, fetch vehicle data and populate form
}

function deleteVehicle(id) {
    if (confirm('Are you sure you want to delete this vehicle?')) {
        // In production, make API call to delete vehicle
    }
}

function viewDocuments(id) {
    // In production, show documents viewer modal
    alert('Viewing documents for vehicle ' + id);
}

function viewZoneDetails(id) {
    // In production, show zone details modal
    alert('Viewing details for zone ' + id);
}

function refreshDispatch() {
    // In production, refresh dispatch board data
    alert('Refreshing dispatch board...');
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
    // Set up any necessary event listeners
    // Initialize any third-party components
    // Set up any necessary data
});
