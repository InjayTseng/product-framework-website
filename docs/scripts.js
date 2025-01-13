document.addEventListener('DOMContentLoaded', function() {
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
