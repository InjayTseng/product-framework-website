document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            const frameworkCards = document.querySelectorAll('.category-card');
            
            frameworkCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const frameworks = Array.from(card.querySelectorAll('li')).map(li => li.textContent.toLowerCase());
                
                const matches = title.includes(searchTerm) || 
                               description.includes(searchTerm) ||
                               frameworks.some(framework => framework.includes(searchTerm));
                
                card.style.display = matches ? 'block' : 'none';
            });
        });
    }
    
    // PM Knowledge interactive progress bars
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        const progressBar = item.querySelector('.progress-fill');
        if (progressBar) {
            // Simulate progress based on user interaction
            item.addEventListener('click', function() {
                const currentWidth = parseInt(progressBar.style.width) || 0;
                const newWidth = Math.min(currentWidth + 20, 100);
                progressBar.style.width = newWidth + '%';
                
                // Add completion effect
                if (newWidth === 100) {
                    item.style.background = '#d4edda';
                    item.style.borderLeftColor = '#28a745';
                }
            });
        }
    });
    
    // Learning path step interaction
    const steps = document.querySelectorAll('.step');
    steps.forEach((step, index) => {
        step.addEventListener('click', function() {
            // Remove active class from all steps
            steps.forEach(s => s.classList.remove('active'));
            // Add active class to clicked step and all previous steps
            for (let i = 0; i <= index; i++) {
                steps[i].classList.add('active');
            }
        });
    });
    
    // Framework comparison functionality
    const frameworkData = {
        'RICE': { ease: 6, accuracy: 9, speed: 4, 'team-buy-in': 7 },
        'MoSCoW': { ease: 9, accuracy: 6, speed: 9, 'team-buy-in': 8 },
        'Kano': { ease: 4, accuracy: 8, speed: 3, 'team-buy-in': 6 },
        'ICE': { ease: 8, accuracy: 7, speed: 8, 'team-buy-in': 7 },
        'Value-Effort': { ease: 7, accuracy: 6, speed: 7, 'team-buy-in': 9 }
    };
    
    function updateComparisonChart() {
        const checkboxes = document.querySelectorAll('.framework-checkboxes input[type="checkbox"]');
        const dimension = document.getElementById('comparison-dimension').value;
        const comparisonChart = document.getElementById('frameworkComparisonChart');
        
        if (!comparisonChart) return;
        
        const selectedFrameworks = Array.from(checkboxes)
            .filter(cb => cb.checked)
            .map(cb => cb.value);
        
        const labels = selectedFrameworks;
        const data = selectedFrameworks.map(framework => frameworkData[framework][dimension]);
        
        const ctx = comparisonChart.getContext('2d');
        
        // Destroy existing chart if it exists
        if (window.comparisonChartInstance) {
            window.comparisonChartInstance.destroy();
        }
        
        window.comparisonChartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [{
                    label: dimension.charAt(0).toUpperCase() + dimension.slice(1).replace('-', ' '),
                    data: data,
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `Framework Comparison: ${dimension.charAt(0).toUpperCase() + dimension.slice(1).replace('-', ' ')}`,
                        font: { size: 16 }
                    },
                    legend: { display: false }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 10,
                        ticks: { stepSize: 2 }
                    }
                }
            }
        });
    }
    
    // Initialize comparison chart
    if (document.getElementById('comparison-dimension')) {
        updateComparisonChart();
        
        // Add event listeners for comparison controls
        const checkboxes = document.querySelectorAll('.framework-checkboxes input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateComparisonChart);
        });
        
        document.getElementById('comparison-dimension').addEventListener('change', updateComparisonChart);
    }
    
    // Tutorial System
    let currentTutorialStep = 1;
    const totalTutorialSteps = 4;
    
    // Auto-show tutorial for first-time visitors
    if (!localStorage.getItem('tutorialCompleted')) {
        setTimeout(() => {
            showTutorial();
        }, 2000);
    }
    
    window.showTutorial = function() {
        document.getElementById('tutorial-overlay').classList.remove('hidden');
        currentTutorialStep = 1;
        updateTutorialDisplay();
    };
    
    window.closeTutorial = function() {
        document.getElementById('tutorial-overlay').classList.add('hidden');
        localStorage.setItem('tutorialCompleted', 'true');
    };
    
    window.nextTutorialStep = function() {
        if (currentTutorialStep < totalTutorialSteps) {
            currentTutorialStep++;
            updateTutorialDisplay();
        } else {
            closeTutorial();
        }
    };
    
    window.prevTutorialStep = function() {
        if (currentTutorialStep > 1) {
            currentTutorialStep--;
            updateTutorialDisplay();
        }
    };
    
    function updateTutorialDisplay() {
        // Update steps
        document.querySelectorAll('.tutorial-step').forEach(step => {
            step.classList.remove('active');
        });
        document.querySelector(`[data-step="${currentTutorialStep}"]`).classList.add('active');
        
        // Update dots
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index + 1 <= currentTutorialStep);
        });
    }
    
    // Quiz System
    const quizData = {
        priority: [
            {
                question: "What does the 'R' in RICE framework stand for?",
                options: ["Reach", "Risk", "Revenue", "Resource"],
                correct: 0,
                explanation: "Reach refers to the number of people or events affected by the feature in a given time period."
            },
            {
                question: "Which MoSCoW category should contain features that are legally required?",
                options: ["Must Have", "Should Have", "Could Have", "Won't Have"],
                correct: 0,
                explanation: "Must Have features are critical and include legal requirements, core functionality, and safety features."
            },
            {
                question: "In the ICE framework, what does 'E' represent?",
                options: ["Effort", "Ease", "Efficiency", "Engagement"],
                correct: 1,
                explanation: "Ease refers to how easy the feature is to implement, similar to effort but focusing on simplicity."
            },
            {
                question: "Value vs Effort matrix places high-value, low-effort features in which quadrant?",
                options: ["Low Priority", "Quick Wins", "Major Projects", "Fill-ins"],
                correct: 1,
                explanation: "Quick Wins are high-value, low-effort features that should be prioritized for immediate implementation."
            },
            {
                question: "The Kano Model categorizes features that customers expect as:",
                options: ["Basic", "Performance", "Excitement", "Indifferent"],
                correct: 0,
                explanation: "Basic features are expected by customers and cause dissatisfaction if missing, but don't create excitement when present."
            }
        ]
    };
    
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let userAnswers = [];
    let quizScore = 0;
    
    window.startQuiz = function(category) {
        currentQuiz = quizData[category];
        if (!currentQuiz) return;
        
        currentQuestionIndex = 0;
        userAnswers = [];
        quizScore = 0;
        
        document.getElementById('quiz-title').textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Framework Quiz`;
        document.getElementById('quiz-modal').classList.remove('hidden');
        document.getElementById('quiz-content').classList.remove('hidden');
        document.getElementById('quiz-results').classList.add('hidden');
        
        displayQuestion();
    };
    
    function displayQuestion() {
        const question = currentQuiz[currentQuestionIndex];
        document.getElementById('question-text').textContent = question.question;
        
        const optionsContainer = document.getElementById('question-options');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'quiz-option';
            optionDiv.textContent = option;
            optionDiv.onclick = () => selectOption(index);
            optionsContainer.appendChild(optionDiv);
        });
        
        document.getElementById('quiz-progress').textContent = `${currentQuestionIndex + 1} of ${currentQuiz.length}`;
        document.getElementById('quiz-prev').disabled = currentQuestionIndex === 0;
        document.getElementById('quiz-next').textContent = currentQuestionIndex === currentQuiz.length - 1 ? 'Finish' : 'Next';
    }
    
    function selectOption(index) {
        document.querySelectorAll('.quiz-option').forEach(option => {
            option.classList.remove('selected');
        });
        document.querySelectorAll('.quiz-option')[index].classList.add('selected');
        userAnswers[currentQuestionIndex] = index;
    }
    
    window.nextQuestion = function() {
        if (currentQuestionIndex < currentQuiz.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            finishQuiz();
        }
    };
    
    window.prevQuestion = function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    };
    
    function finishQuiz() {
        // Calculate score
        quizScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === currentQuiz[index].correct) {
                quizScore++;
            }
        });
        
        // Show results
        document.getElementById('quiz-content').classList.add('hidden');
        document.getElementById('quiz-results').classList.remove('hidden');
        document.getElementById('final-score').textContent = quizScore;
        
        // Generate feedback
        const percentage = (quizScore / currentQuiz.length) * 100;
        let feedback = '';
        if (percentage >= 80) {
            feedback = '🎉 Excellent! You have a strong understanding of prioritization frameworks.';
        } else if (percentage >= 60) {
            feedback = '👍 Good job! You understand the basics. Consider reviewing the areas you missed.';
        } else {
            feedback = '📚 Keep learning! Review the framework details and try again.';
        }
        
        document.getElementById('quiz-feedback').innerHTML = `<p>${feedback}</p>`;
        
        // Update progress for this category
        updateCategoryProgress('priority', percentage);
    }
    
    window.retakeQuiz = function() {
        currentQuestionIndex = 0;
        userAnswers = [];
        document.getElementById('quiz-content').classList.remove('hidden');
        document.getElementById('quiz-results').classList.add('hidden');
        displayQuestion();
    };
    
    window.closeQuiz = function() {
        document.getElementById('quiz-modal').classList.add('hidden');
    };
    
    // Drag and Drop Prioritization
    let draggedElement = null;
    
    // Initialize drag and drop
    document.querySelectorAll('.draggable-item').forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
    });
    
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
    
    function handleDragStart(e) {
        draggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
    }
    
    function handleDragEnd(e) {
        this.classList.remove('dragging');
        draggedElement = null;
    }
    
    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
    
    function handleDragEnter(e) {
        this.parentElement.classList.add('drag-over');
    }
    
    function handleDragLeave(e) {
        if (!this.contains(e.relatedTarget)) {
            this.parentElement.classList.remove('drag-over');
        }
    }
    
    function handleDrop(e) {
        e.preventDefault();
        this.parentElement.classList.remove('drag-over');
        
        if (draggedElement) {
            this.appendChild(draggedElement);
        }
    }
    
    window.resetDragDrop = function() {
        const featurePool = document.querySelector('.feature-pool');
        document.querySelectorAll('.draggable-item').forEach(item => {
            featurePool.appendChild(item);
        });
        
        // Clear any existing feedback
        const existingFeedback = document.querySelector('.drag-drop-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
    };
    
    window.evaluatePrioritization = function() {
        const highZone = document.querySelector('[data-zone="high"]');
        const mediumZone = document.querySelector('[data-zone="medium"]');
        const lowZone = document.querySelector('[data-zone="low"]');
        
        const highItems = Array.from(highZone.children).map(item => item.dataset.feature);
        const mediumItems = Array.from(mediumZone.children).map(item => item.dataset.feature);
        const lowItems = Array.from(lowZone.children).map(item => item.dataset.feature);
        
        // Ideal prioritization based on typical business needs
        const idealHigh = ['user-auth'];
        const idealMedium = ['notifications', 'export-data'];
        const idealLow = ['dark-mode', 'advanced-search'];
        
        let score = 0;
        let feedback = '';
        
        // Check high priority items
        if (highItems.includes('user-auth')) score += 2;
        if (highItems.includes('dark-mode')) score -= 1;
        if (highItems.includes('advanced-search')) score -= 1;
        
        // Check medium priority items
        if (mediumItems.includes('notifications') || mediumItems.includes('export-data')) score += 1;
        
        // Generate feedback
        if (score >= 2) {
            feedback = '<div class="feedback-positive">Great prioritization! You correctly identified user authentication as high priority.</div>';
        } else if (score >= 0) {
            feedback = '<div class="feedback-neutral">Good effort! Consider that user authentication is typically the highest priority for security.</div>';
        } else {
            feedback = '<div class="feedback-negative">Consider reviewing prioritization principles. Security features like authentication are usually top priority.</div>';
        }
        
        // Remove existing feedback
        const existingFeedback = document.querySelector('.drag-drop-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }
        
        // Add new feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'drag-drop-feedback';
        feedbackDiv.innerHTML = feedback;
        document.querySelector('.tool-actions').insertAdjacentElement('afterend', feedbackDiv);
    };
    
    // RICE Calculator
    function updateRiceScore() {
        const reach = parseFloat(document.getElementById('rice-reach').value) || 0;
        const impact = parseFloat(document.getElementById('rice-impact').value) || 0;
        const confidence = parseFloat(document.getElementById('rice-confidence').value) || 0;
        const effort = parseFloat(document.getElementById('rice-effort').value) || 1;
        
        if (reach && impact && confidence && effort) {
            const score = Math.round((reach * impact * confidence) / effort);
            document.getElementById('rice-score').textContent = score;
            
            let explanation = '';
            if (score > 1000) {
                explanation = 'Excellent! This feature has a very high RICE score and should be prioritized.';
            } else if (score > 500) {
                explanation = 'Good score! This feature is worth implementing.';
            } else if (score > 100) {
                explanation = 'Moderate score. Consider if resources could be better used elsewhere.';
            } else {
                explanation = 'Low score. This feature may not be worth the effort at this time.';
            }
            
            document.getElementById('rice-explanation').textContent = explanation;
        } else {
            document.getElementById('rice-score').textContent = '0';
            document.getElementById('rice-explanation').textContent = 'Enter all values to calculate your RICE score';
        }
    }
    
    // Add event listeners for RICE calculator
    ['rice-reach', 'rice-impact', 'rice-confidence', 'rice-effort'].forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updateRiceScore);
            element.addEventListener('change', updateRiceScore);
        }
    });
    
    // Progress tracking
    function updateCategoryProgress(category, percentage) {
        const progressElement = document.querySelector(`[data-progress="${category}"]`);
        if (progressElement) {
            progressElement.style.width = percentage + '%';
        }
        
        // Save progress to localStorage
        const progress = JSON.parse(localStorage.getItem('frameworkProgress') || '{}');
        progress[category] = Math.max(progress[category] || 0, percentage);
        localStorage.setItem('frameworkProgress', JSON.stringify(progress));
    }
    
    // Load saved progress
    function loadSavedProgress() {
        const progress = JSON.parse(localStorage.getItem('frameworkProgress') || '{}');
        Object.keys(progress).forEach(category => {
            const progressElement = document.querySelector(`[data-progress="${category}"]`);
            if (progressElement) {
                progressElement.style.width = progress[category] + '%';
            }
        });
    }
    
    // Initialize progress on page load
    loadSavedProgress();
    // RICE Framework Example Chart
    const riceCtx = document.getElementById('riceChart').getContext('2d');
    new Chart(riceCtx, {
        type: 'bar',
        data: {
            labels: ['Feature A', 'Feature B', 'Feature C'],
            datasets: [{
                label: 'RICE Score',
                data: [533, 1875, 540],
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'RICE Score Comparison Example',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'RICE Score'
                    }
                }
            }
        }
    });

    // MoSCoW Framework Chart
    const moscowCtx = document.getElementById('moscowChart').getContext('2d');
    new Chart(moscowCtx, {
        type: 'doughnut',
        data: {
            labels: ['Must Have', 'Should Have', 'Could Have', "Won't Have"],
            datasets: [{
                data: [60, 20, 15, 5],
                backgroundColor: [
                    '#e74c3c',  // Must Have - Red
                    '#3498db',  // Should Have - Blue
                    '#2ecc71',  // Could Have - Green
                    '#95a5a6'   // Won't Have - Gray
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Typical MoSCoW Distribution',
                    font: {
                        size: 16
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Value vs Effort Chart
    const valueEffortCtx = document.getElementById('valueEffortChart').getContext('2d');
    new Chart(valueEffortCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Tasks',
                data: [
                    { x: 8, y: 2, label: 'Quick Win' },
                    { x: 9, y: 8, label: 'Strategic' },
                    { x: 3, y: 3, label: 'Maybe Later' },
                    { x: 2, y: 9, label: 'Don\'t Do' }
                ],
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Value'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    title: {
                        display: true,
                        text: 'Effort'
                    },
                    min: 0,
                    max: 10
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Value vs Effort Matrix'
                }
            }
        }
    });

    // Eisenhower Matrix Chart
    const eisenhowerCtx = document.getElementById('eisenhowerChart').getContext('2d');
    new Chart(eisenhowerCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Tasks',
                data: [
                    { x: 8, y: 8, r: 10, label: 'Do First' },
                    { x: 8, y: 2, r: 8, label: 'Schedule' },
                    { x: 2, y: 8, r: 6, label: 'Delegate' },
                    { x: 2, y: 2, r: 4, label: 'Don\'t Do' }
                ],
                backgroundColor: 'rgba(52, 152, 219, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Importance'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    title: {
                        display: true,
                        text: 'Urgency'
                    },
                    min: 0,
                    max: 10
                }
            }
        }
    });

    // Kano Model Chart
    const kanoCtx = document.getElementById('kanoChart').getContext('2d');
    new Chart(kanoCtx, {
        type: 'line',
        data: {
            labels: ['None', 'Basic', 'Performance', 'Delighter'],
            datasets: [
                {
                    label: 'Customer Satisfaction',
                    data: [0, 0, 8, 10],
                    borderColor: '#2ecc71',
                    fill: false
                },
                {
                    label: 'Customer Dissatisfaction',
                    data: [0, -8, -4, 0],
                    borderColor: '#e74c3c',
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    title: {
                        display: true,
                        text: 'Customer Satisfaction'
                    },
                    min: -10,
                    max: 10
                }
            }
        }
    });

    // ICE Framework Chart
    const iceCtx = document.getElementById('iceChart').getContext('2d');
    new Chart(iceCtx, {
        type: 'radar',
        data: {
            labels: ['Impact', 'Confidence', 'Ease'],
            datasets: [{
                label: 'Feature A',
                data: [8, 7, 6],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db'
            },
            {
                label: 'Feature B',
                data: [6, 8, 9],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: '#2ecc71'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    // WSJF Chart
    const wsjfCtx = document.getElementById('wsjfChart').getContext('2d');
    new Chart(wsjfCtx, {
        type: 'bar',
        data: {
            labels: ['Feature A', 'Feature B', 'Feature C'],
            datasets: [{
                label: 'WSJF Score',
                data: [12, 8, 15],
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'WSJF Score'
                    }
                }
            }
        }
    });

    // Opportunity Scoring Chart
    const opportunityCtx = document.getElementById('opportunityChart').getContext('2d');
    new Chart(opportunityCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Features',
                data: [
                    { x: 9, y: 3, label: 'High Opportunity' },
                    { x: 7, y: 6, label: 'Medium Opportunity' },
                    { x: 4, y: 8, label: 'Low Opportunity' }
                ],
                backgroundColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Importance'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    title: {
                        display: true,
                        text: 'Satisfaction'
                    },
                    min: 0,
                    max: 10
                }
            }
        }
    });

    // HEART Framework Chart
    const heartCtx = document.getElementById('heartChart').getContext('2d');
    new Chart(heartCtx, {
        type: 'radar',
        data: {
            labels: ['Happiness', 'Engagement', 'Adoption', 'Retention', 'Task Success'],
            datasets: [{
                label: 'Current Metrics',
                data: [7, 8, 6, 7, 8],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 10
                }
            }
        }
    });

    // Hybrid Framework Chart
    const hybridCtx = document.getElementById('hybridChart').getContext('2d');
    new Chart(hybridCtx, {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Must Have',
                data: [{ x: 8, y: 8, r: 10 }],
                backgroundColor: 'rgba(231, 76, 60, 0.6)'
            },
            {
                label: 'Should Have',
                data: [{ x: 8, y: 3, r: 8 }],
                backgroundColor: 'rgba(52, 152, 219, 0.6)'
            },
            {
                label: 'Could Have',
                data: [{ x: 3, y: 8, r: 6 }],
                backgroundColor: 'rgba(46, 204, 113, 0.6)'
            },
            {
                label: 'Won\'t Have',
                data: [{ x: 3, y: 3, r: 4 }],
                backgroundColor: 'rgba(149, 165, 166, 0.6)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Importance'
                    },
                    min: 0,
                    max: 10
                },
                y: {
                    title: {
                        display: true,
                        text: 'Urgency'
                    },
                    min: 0,
                    max: 10
                }
            }
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
