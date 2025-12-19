document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation ---
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.screen');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');

            // Update UI
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            screens.forEach(screen => {
                screen.classList.remove('active');
                if (screen.id === targetId) {
                    screen.classList.add('active');
                }
            });
        });
    });

    // --- Mood Tracker ---
    const moodBtns = document.querySelectorAll('.mood-btn');

    moodBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            moodBtns.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            const mood = btn.getAttribute('data-mood');
            console.log(`Mood selected: ${mood}`);
            // Here you would typically save to local storage or DB
        });
    });

    // --- Food Journal ---
    const foodInput = document.getElementById('food-input');
    const calorieInput = document.getElementById('calorie-input');
    const addFoodBtn = document.getElementById('add-food-btn');
    const foodList = document.getElementById('food-list');

    addFoodBtn.addEventListener('click', addFoodItem);

    // Allow Enter key on both inputs
    foodInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calorieInput.focus();
    });
    calorieInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addFoodItem();
    });

    function addFoodItem() {
        const food = foodInput.value.trim();
        const cals = calorieInput.value.trim();

        if (!food) {
            alert("Please enter a food name.");
            return;
        }
        if (!cals) {
            alert("Please enter calories.");
            return;
        }

        const li = document.createElement('li');
        li.className = 'food-item';
        li.innerHTML = `
            <div class="food-info">
                <span class="food-name">${food}</span>
                <span class="food-cals">${cals} kcal</span>
            </div>
            <button type="button" class="delete-btn" title="Remove">×</button>
        `;

        // Add delete functionality
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        foodList.prepend(li); // Add to top

        // Clear inputs and focus back to food
        foodInput.value = '';
        calorieInput.value = '';
        foodInput.focus();
    }

    // --- Hydration Tracker ---
    let currentWater = 0;
    const maxWater = 2500; // Target in ml
    const waterLevelEl = document.getElementById('water-level');
    const waterAmountEl = document.getElementById('water-amount');
    const waterBtns = document.querySelectorAll('.water-btn');

    waterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = parseInt(btn.getAttribute('data-amount'));
            currentWater += amount;
            updateWaterUI();
        });
    });

    function updateWaterUI() {
        waterAmountEl.textContent = currentWater;

        // Calculate percentage for visual height (cap at 100%)
        let percentage = (currentWater / maxWater) * 100;
        if (percentage > 100) percentage = 100;

        waterLevelEl.style.height = `${percentage}%`;
    }

    // --- Journey Chart (Simple Mockup) ---
    const svg = document.getElementById('journey-chart');
    // Mock data: [day, consistency_score]
    const dataPoints = [
        { x: 0, y: 100 },
        { x: 50, y: 80 },
        { x: 100, y: 120 },
        { x: 150, y: 90 },
        { x: 200, y: 130 },
        { x: 250, y: 110 },
        { x: 300, y: 140 }
    ];

    // Convert data to polyline points string
    // Inverting Y because SVG 0 is top
    const chartHeight = 150;
    const pointsStr = dataPoints.map(p => `${p.x},${chartHeight - (p.y / 2)}`).join(' ');

    // Create polyline
    const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    polyline.setAttribute("points", pointsStr);
    polyline.setAttribute("fill", "none");
    polyline.setAttribute("stroke", "#88d4c3");
    polyline.setAttribute("stroke-width", "4");
    polyline.setAttribute("stroke-linecap", "round");
    polyline.setAttribute("stroke-linejoin", "round");

    svg.appendChild(polyline);
});
