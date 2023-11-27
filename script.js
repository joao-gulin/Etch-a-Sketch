// Function to create the initial grid
function createGrid() {
    const container = document.getElementById('container');

    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement('div');
        square.className = 'square'
        container.appendChild(square);
    }
}

// Function to create a new grid based on user input
function createNewGrid() {
    // Get user input for the number of squares per side
    const newSize = prompt('Enter the number of square per side (max: 100):');

    // Validate and create a new grid
    if (newSize && newSize > 0 && newSize <= 100) {
        clearGrid();
        createDynamicGrid(newSize);
    } else {
        alert('Please enter a valid number between 1 and 100');
    }
}

// Function to clear the existing grid
function clearGrid() {
    const container = document.getElementById('container');
    container.innerHTML = '';
}

// Function to create a dynamic grid based on the size
function createDynamicGrid(size) {
    const container = document.getElementById('container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.className = 'square';

        // Add event listener for hover effect
        square.addEventListener('mouseover', handleSquareHover)

        container.appendChild(square);
    }
}

function handleSquareHover(event) {
    const square = event.target;

    // Randomize RGB values
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

    // Progressive darkening effect
    let currentColor = square.style.backgroundColor || 'rgb(255, 255, 255)';
    let [r, g, b] = currentColor.slice(4, -1).split(',').map(Number);

    r = Math.max(0, r - 25.5)
    g = Math.max(0, g - 25.5)
    b = Math.max(0, b - 25.5)

    square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// Initialize the grid on page load
document.addEventListener('DOMContentLoaded', createGrid);