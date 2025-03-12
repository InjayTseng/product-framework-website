// Framework Calculator - Interactive tool for users to calculate framework scores

class FrameworkCalculator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.framework = 'rice'; // Default framework
    this.data = [];
    this.chart = null;
    
    this.init();
  }
  
  init() {
    this.createUI();
    this.setupEventListeners();
  }
  
  createUI() {
    const html = `
      <div class="calculator-container">
        <div class="calculator-header">
          <h3>Framework Calculator</h3>
          <div class="framework-selector">
            <label for="framework-select">Select Framework:</label>
            <select id="framework-select">
              <option value="rice">RICE Framework</option>
              <option value="ice">ICE Framework</option>
              <option value="weighted">Weighted Scoring</option>
              <option value="value-effort">Value vs Effort</option>
            </select>
          </div>
        </div>
        
        <div class="calculator-body">
          <div class="input-section" id="input-section">
            <!-- Dynamic inputs will be added here -->
          </div>
          
          <div class="action-buttons">
            <button id="add-item" class="action-button">
              <i class="fas fa-plus"></i> Add Item
            </button>
            <button id="calculate" class="action-button primary">
              <i class="fas fa-calculator"></i> Calculate
            </button>
          </div>
        </div>
        
        <div class="results-section">
          <div class="chart-container">
            <canvas id="results-chart"></canvas>
          </div>
          <div class="results-table" id="results-table">
            <!-- Results table will be added here -->
          </div>
        </div>
      </div>
    `;
    
    this.container.innerHTML = html;
    
    // Initialize the input section based on the default framework
    this.updateInputSection();
  }
  
  setupEventListeners() {
    const frameworkSelect = document.getElementById('framework-select');
    const addItemButton = document.getElementById('add-item');
    const calculateButton = document.getElementById('calculate');
    
    if (frameworkSelect) {
      frameworkSelect.addEventListener('change', () => {
        this.framework = frameworkSelect.value;
        this.updateInputSection();
      });
    }
    
    if (addItemButton) {
      addItemButton.addEventListener('click', () => {
        this.addItem();
      });
    }
    
    if (calculateButton) {
      calculateButton.addEventListener('click', () => {
        this.calculateScores();
      });
    }
  }
  
  updateInputSection() {
    const inputSection = document.getElementById('input-section');
    if (!inputSection) return;
    
    // Clear existing inputs
    inputSection.innerHTML = '';
    
    // Add header row based on selected framework
    const headerRow = document.createElement('div');
    headerRow.className = 'input-row header';
    
    switch (this.framework) {
      case 'rice':
        headerRow.innerHTML = `
          <div class="input-cell">Feature</div>
          <div class="input-cell">Reach</div>
          <div class="input-cell">Impact</div>
          <div class="input-cell">Confidence</div>
          <div class="input-cell">Effort</div>
          <div class="input-cell">Actions</div>
        `;
        break;
      case 'ice':
        headerRow.innerHTML = `
          <div class="input-cell">Feature</div>
          <div class="input-cell">Impact</div>
          <div class="input-cell">Confidence</div>
          <div class="input-cell">Ease</div>
          <div class="input-cell">Actions</div>
        `;
        break;
      case 'weighted':
        headerRow.innerHTML = `
          <div class="input-cell">Feature</div>
          <div class="input-cell">Value</div>
          <div class="input-cell">Weight</div>
          <div class="input-cell">Actions</div>
        `;
        break;
      case 'value-effort':
        headerRow.innerHTML = `
          <div class="input-cell">Feature</div>
          <div class="input-cell">Value</div>
          <div class="input-cell">Effort</div>
          <div class="input-cell">Actions</div>
        `;
        break;
    }
    
    inputSection.appendChild(headerRow);
    
    // Add initial item
    this.addItem();
  }
  
  addItem() {
    const inputSection = document.getElementById('input-section');
    if (!inputSection) return;
    
    const itemRow = document.createElement('div');
    itemRow.className = 'input-row';
    
    switch (this.framework) {
      case 'rice':
        itemRow.innerHTML = `
          <div class="input-cell">
            <input type="text" class="feature-name" placeholder="Feature name">
          </div>
          <div class="input-cell">
            <input type="number" class="reach" min="0" placeholder="Reach">
          </div>
          <div class="input-cell">
            <select class="impact">
              <option value="0.25">Minimal (0.25x)</option>
              <option value="0.5">Low (0.5x)</option>
              <option value="1" selected>Medium (1x)</option>
              <option value="2">High (2x)</option>
              <option value="3">Massive (3x)</option>
            </select>
          </div>
          <div class="input-cell">
            <select class="confidence">
              <option value="0.5">Low (50%)</option>
              <option value="0.8" selected>Medium (80%)</option>
              <option value="1">High (100%)</option>
            </select>
          </div>
          <div class="input-cell">
            <input type="number" class="effort" min="0.1" step="0.1" placeholder="Effort">
          </div>
          <div class="input-cell">
            <button class="delete-item"><i class="fas fa-trash"></i></button>
          </div>
        `;
        break;
      case 'ice':
        itemRow.innerHTML = `
          <div class="input-cell">
            <input type="text" class="feature-name" placeholder="Feature name">
          </div>
          <div class="input-cell">
            <input type="number" class="impact" min="1" max="10" placeholder="Impact (1-10)">
          </div>
          <div class="input-cell">
            <input type="number" class="confidence" min="1" max="10" placeholder="Confidence (1-10)">
          </div>
          <div class="input-cell">
            <input type="number" class="ease" min="1" max="10" placeholder="Ease (1-10)">
          </div>
          <div class="input-cell">
            <button class="delete-item"><i class="fas fa-trash"></i></button>
          </div>
        `;
        break;
      case 'weighted':
        itemRow.innerHTML = `
          <div class="input-cell">
            <input type="text" class="feature-name" placeholder="Feature name">
          </div>
          <div class="input-cell">
            <input type="number" class="value" min="1" max="10" placeholder="Value (1-10)">
          </div>
          <div class="input-cell">
            <input type="number" class="weight" min="1" max="10" placeholder="Weight (1-10)">
          </div>
          <div class="input-cell">
            <button class="delete-item"><i class="fas fa-trash"></i></button>
          </div>
        `;
        break;
      case 'value-effort':
        itemRow.innerHTML = `
          <div class="input-cell">
            <input type="text" class="feature-name" placeholder="Feature name">
          </div>
          <div class="input-cell">
            <input type="number" class="value" min="1" max="10" placeholder="Value (1-10)">
          </div>
          <div class="input-cell">
            <input type="number" class="effort" min="1" max="10" placeholder="Effort (1-10)">
          </div>
          <div class="input-cell">
            <button class="delete-item"><i class="fas fa-trash"></i></button>
          </div>
        `;
        break;
    }
    
    inputSection.appendChild(itemRow);
    
    // Add event listener to delete button
    const deleteButton = itemRow.querySelector('.delete-item');
    if (deleteButton) {
      deleteButton.addEventListener('click', () => {
        inputSection.removeChild(itemRow);
      });
    }
  }
  
  calculateScores() {
    this.data = [];
    
    // Get all input rows
    const inputRows = document.querySelectorAll('.input-row:not(.header)');
    
    // Calculate scores based on framework
    switch (this.framework) {
      case 'rice':
        inputRows.forEach(row => {
          const featureName = row.querySelector('.feature-name').value || 'Unnamed Feature';
          const reach = parseFloat(row.querySelector('.reach').value) || 0;
          const impact = parseFloat(row.querySelector('.impact').value) || 0;
          const confidence = parseFloat(row.querySelector('.confidence').value) || 0;
          const effort = parseFloat(row.querySelector('.effort').value) || 1;
          
          const score = (reach * impact * confidence) / effort;
          
          this.data.push({
            name: featureName,
            score: score.toFixed(2),
            details: {
              reach,
              impact,
              confidence,
              effort
            }
          });
        });
        break;
      case 'ice':
        inputRows.forEach(row => {
          const featureName = row.querySelector('.feature-name').value || 'Unnamed Feature';
          const impact = parseFloat(row.querySelector('.impact').value) || 0;
          const confidence = parseFloat(row.querySelector('.confidence').value) || 0;
          const ease = parseFloat(row.querySelector('.ease').value) || 0;
          
          const score = impact * confidence * ease;
          
          this.data.push({
            name: featureName,
            score: score.toFixed(2),
            details: {
              impact,
              confidence,
              ease
            }
          });
        });
        break;
      case 'weighted':
        inputRows.forEach(row => {
          const featureName = row.querySelector('.feature-name').value || 'Unnamed Feature';
          const value = parseFloat(row.querySelector('.value').value) || 0;
          const weight = parseFloat(row.querySelector('.weight').value) || 0;
          
          const score = value * weight;
          
          this.data.push({
            name: featureName,
            score: score.toFixed(2),
            details: {
              value,
              weight
            }
          });
        });
        break;
      case 'value-effort':
        inputRows.forEach(row => {
          const featureName = row.querySelector('.feature-name').value || 'Unnamed Feature';
          const value = parseFloat(row.querySelector('.value').value) || 0;
          const effort = parseFloat(row.querySelector('.effort').value) || 1;
          
          // For value-effort, we don't calculate a single score
          this.data.push({
            name: featureName,
            value,
            effort,
            quadrant: this.getQuadrant(value, effort)
          });
        });
        break;
    }
    
    // Sort data by score (except for value-effort)
    if (this.framework !== 'value-effort') {
      this.data.sort((a, b) => b.score - a.score);
    }
    
    // Display results
    this.displayResults();
  }
  
  getQuadrant(value, effort) {
    if (value >= 5 && effort < 5) return 'Quick Win';
    if (value >= 5 && effort >= 5) return 'Strategic';
    if (value < 5 && effort < 5) return 'Maybe Later';
    return 'Don\'t Do';
  }
  
  displayResults() {
    // Display chart
    this.displayChart();
    
    // Display table
    this.displayTable();
  }
  
  displayChart() {
    const chartCanvas = document.getElementById('results-chart');
    if (!chartCanvas) return;
    
    // Destroy existing chart if it exists
    if (this.chart) {
      this.chart.destroy();
    }
    
    // Create new chart based on framework
    const ctx = chartCanvas.getContext('2d');
    
    switch (this.framework) {
      case 'rice':
      case 'ice':
      case 'weighted':
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: this.data.map(item => item.name),
            datasets: [{
              label: `${this.framework.toUpperCase()} Score`,
              data: this.data.map(item => item.score),
              backgroundColor: '#3498db',
              borderColor: '#2980b9',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Score'
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: `${this.framework.toUpperCase()} Framework Results`,
                font: {
                  size: 16
                }
              }
            }
          }
        });
        break;
      case 'value-effort':
        // Create scatter plot for value-effort
        const datasets = [
          {
            label: 'Quick Win',
            data: this.data.filter(item => item.quadrant === 'Quick Win')
              .map(item => ({ x: item.value, y: item.effort, name: item.name })),
            backgroundColor: '#2ecc71'
          },
          {
            label: 'Strategic',
            data: this.data.filter(item => item.quadrant === 'Strategic')
              .map(item => ({ x: item.value, y: item.effort, name: item.name })),
            backgroundColor: '#3498db'
          },
          {
            label: 'Maybe Later',
            data: this.data.filter(item => item.quadrant === 'Maybe Later')
              .map(item => ({ x: item.value, y: item.effort, name: item.name })),
            backgroundColor: '#f1c40f'
          },
          {
            label: 'Don\'t Do',
            data: this.data.filter(item => item.quadrant === 'Don\'t Do')
              .map(item => ({ x: item.value, y: item.effort, name: item.name })),
            backgroundColor: '#e74c3c'
          }
        ];
        
        this.chart = new Chart(ctx, {
          type: 'scatter',
          data: { datasets },
          options: {
            responsive: true,
            maintainAspectRatio: false,
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
              title: {
                display: true,
                text: 'Value vs Effort Matrix',
                font: {
                  size: 16
                }
              },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    const point = context.raw;
                    return `${point.name}: Value ${point.x}, Effort ${point.y}`;
                  }
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
        break;
    }
  }
  
  displayTable() {
    const tableContainer = document.getElementById('results-table');
    if (!tableContainer) return;
    
    let tableHTML = '<table class="results-table-content">';
    
    // Create table header based on framework
    switch (this.framework) {
      case 'rice':
        tableHTML += `
          <thead>
            <tr>
              <th>Rank</th>
              <th>Feature</th>
              <th>RICE Score</th>
              <th>Reach</th>
              <th>Impact</th>
              <th>Confidence</th>
              <th>Effort</th>
            </tr>
          </thead>
          <tbody>
        `;
        
        this.data.forEach((item, index) => {
          tableHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${item.name}</td>
              <td><strong>${item.score}</strong></td>
              <td>${item.details.reach}</td>
              <td>${item.details.impact}</td>
              <td>${item.details.confidence}</td>
              <td>${item.details.effort}</td>
            </tr>
          `;
        });
        break;
      case 'ice':
        tableHTML += `
          <thead>
            <tr>
              <th>Rank</th>
              <th>Feature</th>
              <th>ICE Score</th>
              <th>Impact</th>
              <th>Confidence</th>
              <th>Ease</th>
            </tr>
          </thead>
          <tbody>
        `;
        
        this.data.forEach((item, index) => {
          tableHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${item.name}</td>
              <td><strong>${item.score}</strong></td>
              <td>${item.details.impact}</td>
              <td>${item.details.confidence}</td>
              <td>${item.details.ease}</td>
            </tr>
          `;
        });
        break;
      case 'weighted':
        tableHTML += `
          <thead>
            <tr>
              <th>Rank</th>
              <th>Feature</th>
              <th>Weighted Score</th>
              <th>Value</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
        `;
        
        this.data.forEach((item, index) => {
          tableHTML += `
            <tr>
              <td>${index + 1}</td>
              <td>${item.name}</td>
              <td><strong>${item.score}</strong></td>
              <td>${item.details.value}</td>
              <td>${item.details.weight}</td>
            </tr>
          `;
        });
        break;
      case 'value-effort':
        tableHTML += `
          <thead>
            <tr>
              <th>Feature</th>
              <th>Value</th>
              <th>Effort</th>
              <th>Quadrant</th>
            </tr>
          </thead>
          <tbody>
        `;
        
        this.data.forEach(item => {
          tableHTML += `
            <tr>
              <td>${item.name}</td>
              <td>${item.value}</td>
              <td>${item.effort}</td>
              <td><span class="quadrant-tag ${item.quadrant.toLowerCase().replace(' ', '-')}">${item.quadrant}</span></td>
            </tr>
          `;
        });
        break;
    }
    
    tableHTML += '</tbody></table>';
    
    tableContainer.innerHTML = tableHTML;
  }
}

// Initialize calculator when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('framework-calculator')) {
    new FrameworkCalculator('framework-calculator');
  }
}); 