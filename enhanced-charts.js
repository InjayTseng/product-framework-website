// Enhanced Chart Visualizations

// Configuration for interactive charts
const chartConfig = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    duration: 1000,
    easing: 'easeOutQuart'
  },
  plugins: {
    tooltip: {
      backgroundColor: 'rgba(44, 62, 80, 0.9)',
      titleFont: {
        size: 14,
        weight: 'bold'
      },
      bodyFont: {
        size: 13
      },
      padding: 10,
      cornerRadius: 4,
      displayColors: true
    },
    legend: {
      position: 'bottom',
      labels: {
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    }
  }
};

// Interactive RICE Framework Chart
function createInteractiveRiceChart(elementId) {
  const ctx = document.getElementById(elementId).getContext('2d');
  
  // Initial data
  const initialData = {
    labels: ['Feature A', 'Feature B', 'Feature C'],
    datasets: [{
      label: 'RICE Score',
      data: [533, 1875, 540],
      backgroundColor: '#3498db',
      borderColor: '#2980b9',
      borderWidth: 1
    }]
  };
  
  // Create chart
  const riceChart = new Chart(ctx, {
    type: 'bar',
    data: initialData,
    options: {
      ...chartConfig,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'RICE Score'
          }
        }
      },
      plugins: {
        ...chartConfig.plugins,
        title: {
          display: true,
          text: 'RICE Score Comparison',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 20
          }
        }
      }
    }
  });
  
  // Return chart instance for further manipulation
  return riceChart;
}

// Interactive Value vs Effort Chart
function createInteractiveValueEffortChart(elementId) {
  const ctx = document.getElementById(elementId).getContext('2d');
  
  // Create chart
  const valueEffortChart = new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [{
        label: 'Quick Wins',
        data: [
          { x: 8, y: 2 },
          { x: 7, y: 3 }
        ],
        backgroundColor: '#2ecc71',
        pointRadius: 8,
        pointHoverRadius: 10
      }, {
        label: 'Strategic',
        data: [
          { x: 9, y: 8 },
          { x: 8, y: 7 }
        ],
        backgroundColor: '#3498db',
        pointRadius: 8,
        pointHoverRadius: 10
      }, {
        label: 'Maybe Later',
        data: [
          { x: 3, y: 3 },
          { x: 4, y: 4 }
        ],
        backgroundColor: '#f1c40f',
        pointRadius: 8,
        pointHoverRadius: 10
      }, {
        label: 'Don\'t Do',
        data: [
          { x: 2, y: 9 },
          { x: 3, y: 8 }
        ],
        backgroundColor: '#e74c3c',
        pointRadius: 8,
        pointHoverRadius: 10
      }]
    },
    options: {
      ...chartConfig,
      scales: {
        x: {
          title: {
            display: true,
            text: 'Value'
          },
          min: 0,
          max: 10,
          ticks: {
            stepSize: 1
          }
        },
        y: {
          title: {
            display: true,
            text: 'Effort'
          },
          min: 0,
          max: 10,
          ticks: {
            stepSize: 1
          }
        }
      },
      plugins: {
        ...chartConfig.plugins,
        title: {
          display: true,
          text: 'Value vs Effort Matrix',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 20
          }
        },
        quadrants: {
          topLeft: {
            label: 'Don\'t Do',
            color: 'rgba(231, 76, 60, 0.1)'
          },
          topRight: {
            label: 'Strategic',
            color: 'rgba(52, 152, 219, 0.1)'
          },
          bottomLeft: {
            label: 'Maybe Later',
            color: 'rgba(241, 196, 15, 0.1)'
          },
          bottomRight: {
            label: 'Quick Wins',
            color: 'rgba(46, 204, 113, 0.1)'
          }
        }
      }
    }
  });
  
  // Return chart instance for further manipulation
  return valueEffortChart;
}

// Framework Comparison Chart
function createFrameworkComparisonChart(elementId) {
  const ctx = document.getElementById(elementId).getContext('2d');
  
  // Create chart
  const comparisonChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Ease of Use',
        'Data-Driven',
        'Flexibility',
        'Visualization',
        'Team Alignment',
        'Decision Speed'
      ],
      datasets: [{
        label: 'RICE',
        data: [3, 5, 4, 4, 3, 4],
        backgroundColor: 'rgba(52, 152, 219, 0.2)',
        borderColor: 'rgba(52, 152, 219, 1)',
        pointBackgroundColor: 'rgba(52, 152, 219, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
      }, {
        label: 'MoSCoW',
        data: [5, 2, 3, 3, 5, 5],
        backgroundColor: 'rgba(231, 76, 60, 0.2)',
        borderColor: 'rgba(231, 76, 60, 1)',
        pointBackgroundColor: 'rgba(231, 76, 60, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(231, 76, 60, 1)'
      }, {
        label: 'Value vs Effort',
        data: [4, 3, 5, 5, 4, 4],
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderColor: 'rgba(46, 204, 113, 1)',
        pointBackgroundColor: 'rgba(46, 204, 113, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(46, 204, 113, 1)'
      }]
    },
    options: {
      ...chartConfig,
      scales: {
        r: {
          angleLines: {
            display: true
          },
          suggestedMin: 0,
          suggestedMax: 5
        }
      },
      plugins: {
        ...chartConfig.plugins,
        title: {
          display: true,
          text: 'Framework Comparison',
          font: {
            size: 16,
            weight: 'bold'
          },
          padding: {
            top: 10,
            bottom: 20
          }
        }
      }
    }
  });
  
  // Return chart instance for further manipulation
  return comparisonChart;
}

// Custom plugin for quadrants in Value vs Effort chart
Chart.register({
  id: 'quadrants',
  beforeDraw: (chart) => {
    if (chart.config.options.plugins.quadrants) {
      const { ctx, chartArea, scales } = chart;
      const { top, bottom, left, right } = chartArea;
      const midX = left + (right - left) / 2;
      const midY = top + (bottom - top) / 2;
      
      // Draw quadrants
      const quadrants = chart.config.options.plugins.quadrants;
      
      // Top Left
      if (quadrants.topLeft) {
        ctx.fillStyle = quadrants.topLeft.color;
        ctx.fillRect(left, top, midX - left, midY - top);
      }
      
      // Top Right
      if (quadrants.topRight) {
        ctx.fillStyle = quadrants.topRight.color;
        ctx.fillRect(midX, top, right - midX, midY - top);
      }
      
      // Bottom Left
      if (quadrants.bottomLeft) {
        ctx.fillStyle = quadrants.bottomLeft.color;
        ctx.fillRect(left, midY, midX - left, bottom - midY);
      }
      
      // Bottom Right
      if (quadrants.bottomRight) {
        ctx.fillStyle = quadrants.bottomRight.color;
        ctx.fillRect(midX, midY, right - midX, bottom - midY);
      }
      
      // Draw quadrant labels
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#2c3e50';
      
      if (quadrants.topLeft && quadrants.topLeft.label) {
        ctx.fillText(quadrants.topLeft.label, left + (midX - left) / 2, top + (midY - top) / 2);
      }
      
      if (quadrants.topRight && quadrants.topRight.label) {
        ctx.fillText(quadrants.topRight.label, midX + (right - midX) / 2, top + (midY - top) / 2);
      }
      
      if (quadrants.bottomLeft && quadrants.bottomLeft.label) {
        ctx.fillText(quadrants.bottomLeft.label, left + (midX - left) / 2, midY + (bottom - midY) / 2);
      }
      
      if (quadrants.bottomRight && quadrants.bottomRight.label) {
        ctx.fillText(quadrants.bottomRight.label, midX + (right - midX) / 2, midY + (bottom - midY) / 2);
      }
    }
  }
});

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if chart elements exist before creating charts
  if (document.getElementById('riceChart')) {
    createInteractiveRiceChart('riceChart');
  }
  
  if (document.getElementById('valueEffortChart')) {
    createInteractiveValueEffortChart('valueEffortChart');
  }
  
  if (document.getElementById('frameworkComparisonChart')) {
    createFrameworkComparisonChart('frameworkComparisonChart');
  }
}); 