// Shared Application Logic
document.addEventListener('DOMContentLoaded', () => {
    // Global event handlers and initialization can go here
    setupModalHandlers();
    setupCRUDOperations();
});

function setupModalHandlers() {
    // Example modal functions
    window.showModal = function(modalType) {
        const modalMap = {
            'addEmployee': 'addEmployeeModal',
            'addVehicle': 'addVehicleModal',
            'newOrder': 'newOrderModal'
        };

        const modalId = modalMap[modalType];
        if (modalId) {
            const modal = document.getElementById(modalId);
            if (modal) modal.classList.add('active');
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) modal.classList.remove('active');
    };
}

function setupCRUDOperations() {
    // Shared CRUD operation handlers
    window.editEmployee = function(id) {
        showModal('addEmployee');
        // In production, fetch employee data and populate form
    };

    window.deleteEmployee = function(id) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // In production, make API call to delete employee
        }
    };

    window.addOrderItem = function() {
        const orderItems = document.getElementById('orderItems');
        if (orderItems) {
            const newItem = orderItems.children[0].cloneNode(true);
            newItem.querySelectorAll('input, select').forEach(input => input.value = '');
            orderItems.appendChild(newItem);
        }
    };

    window.removeItem = function(button) {
        const orderItems = document.getElementById('orderItems');
        if (orderItems && orderItems.children.length > 1) {
            button.closest('.form-group').remove();
        }
    };
}