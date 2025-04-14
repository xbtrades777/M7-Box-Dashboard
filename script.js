// Sample data for the M7 Box Dashboard with additional fields
const sampleData = {
  rdr: [
    { date: '2025-04-13', boxColor: 'green', boxSize: '0.35', drConfirmation: 'long', m7BoxConfirmation: false, m7BoxRetracementLevel: 'above', falseDay: false, returnToM7Box: false, newHigh: true, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-12', boxColor: 'red', boxSize: '-0.42', drConfirmation: 'short', m7BoxConfirmation: false, m7BoxRetracementLevel: 'below', falseDay: true, returnToM7Box: true, newHigh: false, newLow: false, m7BoxRetracement: 'after' },
    { date: '2025-04-11', boxColor: 'green', boxSize: '0.28', drConfirmation: false, m7BoxConfirmation: true, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-10', boxColor: 'green', boxSize: '0.65', drConfirmation: 'long', m7BoxConfirmation: true, m7BoxRetracementLevel: 'above', falseDay: false, returnToM7Box: true, newHigh: true, newLow: false, m7BoxRetracement: 'before' },
    { date: '2025-04-09', boxColor: 'red', boxSize: '-0.18', drConfirmation: false, m7BoxConfirmation: false, m7BoxRetracementLevel: 'below', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-08', boxColor: 'green', boxSize: '0.92', drConfirmation: 'long', m7BoxConfirmation: true, m7BoxRetracementLevel: 'above', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-07', boxColor: 'red', boxSize: '-0.55', drConfirmation: 'short', m7BoxConfirmation: false, m7BoxRetracementLevel: 'below', falseDay: true, returnToM7Box: true, newHigh: false, newLow: true, m7BoxRetracement: 'after' },
    { date: '2025-04-06', boxColor: 'equal', boxSize: '0.00', drConfirmation: false, m7BoxConfirmation: false, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-05', boxColor: 'red', boxSize: '-0.76', drConfirmation: 'short', m7BoxConfirmation: true, m7BoxRetracementLevel: 'below', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-04', boxColor: 'green', boxSize: '0.41', drConfirmation: false, m7BoxConfirmation: false, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: 'before' },
    { date: '2025-04-03', boxColor: 'green', boxSize: '1.25', drConfirmation: 'long', m7BoxConfirmation: false, m7BoxRetracementLevel: 'above', falseDay: false, returnToM7Box: true, newHigh: true, newLow: false, m7BoxRetracement: 'after' },
    { date: '2025-04-02', boxColor: 'red', boxSize: '-0.38', drConfirmation: false, m7BoxConfirmation: true, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-01', boxColor: 'green', boxSize: '0.57', drConfirmation: 'long', m7BoxConfirmation: true, m7BoxRetracementLevel: 'above', falseDay: true, returnToM7Box: true, newHigh: false, newLow: false, m7BoxRetracement: 'before' },
    { date: '2025-03-31', boxColor: 'red', boxSize: '-1.12', drConfirmation: 'short', m7BoxConfirmation: false, m7BoxRetracementLevel: 'below', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-03-30', boxColor: 'green', boxSize: '0.19', drConfirmation: false, m7BoxConfirmation: true, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: 'before' },
    { date: '2025-03-29', boxColor: 'equal', boxSize: '0.00', drConfirmation: false, m7BoxConfirmation: false, m7BoxRetracementLevel: null, falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-03-28', boxColor: 'red', boxSize: '-0.83', drConfirmation: 'short', m7BoxConfirmation: true, m7BoxRetracementLevel: 'below', falseDay: false, returnToM7Box: true, newHigh: false, newLow: true, m7BoxRetracement: 'after' },
    { date: '2025-03-27', boxColor: 'green', boxSize: '0.72', drConfirmation: 'long', m7BoxConfirmation: false, m7BoxRetracementLevel: 'above', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-03-26', boxColor: 'red', boxSize: '-0.29', drConfirmation: false, m7BoxConfirmation: true, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: 'before' },
    { date: '2025-03-25', boxColor: 'green', boxSize: '1.05', drConfirmation: 'long', m7BoxConfirmation: true, m7BoxRetracementLevel: 'above', falseDay: true, returnToM7Box: true, newHigh: false, newLow: false, m7BoxRetracement: 'after' },
  ],
  odr: [
    { date: '2025-04-13', boxColor: 'red', boxSize: '-0.45', drConfirmation: 'short', m7BoxConfirmation: false, m7BoxRetracementLevel: 'below', falseDay: false, returnToM7Box: true, newHigh: false, newLow: true, m7BoxRetracement: 'after' },
    { date: '2025-04-12', boxColor: 'green', boxSize: '0.22', drConfirmation: false, m7BoxConfirmation: true, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: 'before' },
    { date: '2025-04-11', boxColor: 'red', boxSize: '-0.63', drConfirmation: 'short', m7BoxConfirmation: true, m7BoxRetracementLevel: 'below', falseDay: true, returnToM7Box: true, newHigh: false, newLow: false, m7BoxRetracement: 'after' },
    // More sample data would normally be here
  ],
  adr: [
    { date: '2025-04-13', boxColor: 'green', boxSize: '0.53', drConfirmation: 'long', m7BoxConfirmation: true, m7BoxRetracementLevel: 'above', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: null },
    { date: '2025-04-12', boxColor: 'red', boxSize: '-0.68', drConfirmation: 'short', m7BoxConfirmation: false, m7BoxRetracementLevel: 'below', falseDay: true, returnToM7Box: true, newHigh: false, newLow: true, m7BoxRetracement: 'after' },
    { date: '2025-04-11', boxColor: 'green', boxSize: '0.31', drConfirmation: false, m7BoxConfirmation: true, m7BoxRetracementLevel: 'inside', falseDay: false, returnToM7Box: false, newHigh: false, newLow: false, m7BoxRetracement: 'before' },
    // More sample data would normally be here
  ]
};

// Size ranges for filtering
const SIZE_RANGES = [
  { label: '0.0 to 0.1', value: [0, 0.1] },
  { label: '0.11 to 0.2', value: [0.11, 0.2] },
  { label: '0.21 to 0.3', value: [0.21, 0.3] },
  { label: '0.31 to 0.4', value: [0.31, 0.4] },
  { label: '0.41 to 0.5', value: [0.41, 0.5] },
  { label: '0.51 to 0.6', value: [0.51, 0.6] },
  { label: '0.61 to 0.7', value: [0.61, 0.7] },
  { label: '0.71 to 0.8', value: [0.71, 0.8] },
  { label: '0.81 to 0.9', value: [0.81, 0.9] },
  { label: '0.91 to 1.0', value: [0.91, 1.0] },
  { label: '1.01 to 1.5', value: [1.01, 1.5] },
  { label: '1.51 to 2.0', value: [1.51, 2.0] },
  { label: '-0.1 to 0.0', value: [-0.1, 0] },
  { label: '-0.2 to -0.11', value: [-0.2, -0.11] },
  { label: '-0.3 to -0.21', value: [-0.3, -0.21] },
  { label: '-0.4 to -0.31', value: [-0.4, -0.31] },
  { label: '-0.5 to -0.41', value: [-0.5, -0.41] },
  { label: '-0.6 to -0.51', value: [-0.6, -0.51] },
  { label: '-0.7 to -0.61', value: [-0.7, -0.61] },
  { label: '-0.8 to -0.71', value: [-0.8, -0.71] },
  { label: '-0.9 to -0.81', value: [-0.9, -0.81] },
  { label: '-1.0 to -0.91', value: [-1.0, -0.91] },
  { label: '-1.5 to -1.01', value: [-1.5, -1.01] },
  { label: '-2.0 to -1.51', value: [-2.0, -1.51] },
];

// Session details
const SESSIONS = {
  rdr: { name: 'RDR (Regular)', timeRange: '09:30 - 15:55 EST' },
  odr: { name: 'ODR (London)', timeRange: '03:00 - 08:25 EST' },
  adr: { name: 'ADR (Asia)', timeRange: '19:30 - 01:55 EST' },
};

// DOM elements
const sessionOptions = document.querySelectorAll('.session-option');
const colorFilter = document.getElementById('color-filter');
const sizeFilter = document.getElementById('size-filter');
const confirmationFilter = document.getElementById('confirmation-filter');
const m7BoxConfirmationFilter = document.getElementById('m7-box-confirmation-filter');
const m7BoxRetracementLevelFilter = document.getElementById('m7-box-retracement-level-filter');
const m7BoxRetracementFilter = document.getElementById('m7-box-retracement-filter');
const dataTableBody = document.getElementById('data-table-body');
const recordsCount = document.getElementById('records-count');
const noDataMessage = document.getElementById('no-data');
const totalRecordsElement = document.getElementById('total-records');
const confirmationStatsElement = document.getElementById('confirmation-stats');
const falseDayStatsElement = document.getElementById('falseday-stats');
const m7BoxConfirmationStatsElement = document.getElementById('m7-box-confirmation-stats');
const retracementLevelStatsElement = document.getElementById('retracement-level-stats');
const boxColorHeader = document.getElementById('box-color-header');
const boxSizeHeader = document.getElementById('box-size-header');
const confirmationChartTitle = document.getElementById('confirmation-chart-title');
const falseDayChartTitle = document.getElementById('falseday-chart-title');
const m7BoxConfirmationChartTitle = document.getElementById('m7-box-confirmation-chart-title');
const retracementLevelChartTitle = document.getElementById('retracement-level-chart-title');
const returnToM7BoxChartTitle = document.getElementById('return-to-m7-box-chart-title');
const confirmationDetails = document.getElementById('confirmation-details');
const falseDayDetails = document.getElementById('falseday-details');
const m7BoxConfirmationDetails = document.getElementById('m7-box-confirmation-details');
const retracementLevelDetails = document.getElementById('retracement-level-details');
const returnToM7BoxDetails = document.getElementById('return-to-m7-box-details');

// Charts
let confirmationChart;
let falseDayChart;
let m7BoxConfirmationChart;
let retracementLevelChart;
let returnToM7BoxChart;

// State
let currentSession = 'rdr';
let currentColorFilter = '';
let currentSizeFilter = null;
let currentConfirmationFilter = '';
let currentM7BoxConfirmationFilter = '';
let currentM7BoxRetracementLevelFilter = '';
let currentM7BoxRetracementFilter = '';
let filteredData = [];

// Initialize the dashboard
function initializeDashboard() {
  // Add event listeners
  sessionOptions.forEach(option => {
    option.addEventListener('click', function() {
      const session = this.dataset.session;
      setActiveSession(session);
    });
  });

  colorFilter.addEventListener('change', function() {
    currentColorFilter = this.value;
    updateDashboard();
  });

  sizeFilter.addEventListener('change', function() {
    const rangeIndex = parseInt(this.value);
    currentSizeFilter = rangeIndex >= 0 ? SIZE_RANGES[rangeIndex].value : null;
    updateDashboard();
  });
  
  confirmationFilter.addEventListener('change', function() {
    currentConfirmationFilter = this.value;
    updateDashboard();
  });
  
  m7BoxConfirmationFilter.addEventListener('change', function() {
    currentM7BoxConfirmationFilter = this.value;
    updateDashboard();
  });
  
  m7BoxRetracementLevelFilter.addEventListener('change', function() {
    currentM7BoxRetracementLevelFilter = this.value;
    updateDashboard();
  });
  
  m7BoxRetracementFilter.addEventListener('change', function() {
    currentM7BoxRetracementFilter = this.value;
    updateDashboard();
  });

  // Initialize charts
  initializeCharts();

  // Initial data load
  updateDashboard();
}

// Set active session
function setActiveSession(session) {
  currentSession = session;
  
  // Update UI
  sessionOptions.forEach(option => {
    if (option.dataset.session === session) {
      option.classList.add('selected');
      option.querySelector('input').checked = true;
    } else {
      option.classList.remove('selected');
      option.querySelector('input').checked = false;
    }
  });

  // Update headers
  boxColorHeader.textContent = `${SESSIONS[session].name} M7 Box Color`;
  boxSizeHeader.textContent = `${SESSIONS[session].name} M7 Box Size`;
  
  // Update chart titles
  confirmationChartTitle.textContent = `Confirmation Probability by M7 Box Color - ${SESSIONS[session].name}`;
  falseDayChartTitle.textContent = `False Day Probability After Confirmation - ${SESSIONS[session].name}`;
  m7BoxConfirmationChartTitle.textContent = `M7 Box Confirmation Probability - ${SESSIONS[session].name}`;
  retracementLevelChartTitle.textContent = `M7 Box Retracement Level Probability - ${SESSIONS[session].name}`;
  returnToM7BoxChartTitle.textContent = `Probabilities After Return to M7 Box - ${SESSIONS[session].name}`;

  // Reset filters
  colorFilter.value = '';
  sizeFilter.value = '-1';
  confirmationFilter.value = '';
  m7BoxConfirmationFilter.value = '';
  m7BoxRetracementLevelFilter.value = '';
  m7BoxRetracementFilter.value = '';
  currentColorFilter = '';
  currentSizeFilter = null;
  currentConfirmationFilter = '';
  currentM7BoxConfirmationFilter = '';
  currentM7BoxRetracementLevelFilter = '';
  currentM7BoxRetracementFilter = '';

// Update dashboard with new session data
  updateDashboard();
}

// Filter data based on current filters
function filterData() {
  let data = sampleData[currentSession] || [];
  
  // Apply color filter
  if (currentColorFilter) {
    data = data.filter(item => item.boxColor === currentColorFilter);
  }
  
  // Apply size filter
  if (currentSizeFilter) {
    data = data.filter(item => {
      const size = parseFloat(item.boxSize);
      return size >= currentSizeFilter[0] && size <= currentSizeFilter[1];
    });
  }
  
  // Apply M7 Box confirmation filter
  if (currentM7BoxConfirmationFilter === 'yes') {
    data = data.filter(item => item.m7BoxConfirmation);
  } else if (currentM7BoxConfirmationFilter === 'no') {
    data = data.filter(item => !item.m7BoxConfirmation);
  }
  
  // Apply DR confirmation filter
  if (currentConfirmationFilter === 'long') {
    data = data.filter(item => item.drConfirmation === 'long');
  } else if (currentConfirmationFilter === 'short') {
    data = data.filter(item => item.drConfirmation === 'short');
  } else if (currentConfirmationFilter === 'none') {
    data = data.filter(item => !item.drConfirmation);
  }
  
  // Apply M7 Box retracement level filter
  if (currentM7BoxRetracementLevelFilter === 'above') {
    data = data.filter(item => item.m7BoxRetracementLevel === 'above');
  } else if (currentM7BoxRetracementLevelFilter === 'inside') {
    data = data.filter(item => item.m7BoxRetracementLevel === 'inside');
  } else if (currentM7BoxRetracementLevelFilter === 'below') {
    data = data.filter(item => item.m7BoxRetracementLevel === 'below');
  }
  
  // Apply M7 Box retracement filter
  if (currentM7BoxRetracementFilter === 'before') {
    data = data.filter(item => item.m7BoxRetracement === 'before');
  } else if (currentM7BoxRetracementFilter === 'after') {
    data = data.filter(item => item.m7BoxRetracement === 'after');
  }
  
  return data;
}

// Update the dashboard with filtered data
function updateDashboard() {
  // Filter data
  filteredData = filterData();
  
  // Update the data table
  updateDataTable();
  
  // Update statistics
  updateStatistics();
  
  // Update charts
  updateCharts();
}

// Update the data table with filtered data
function updateDataTable() {
  // Clear existing rows
  dataTableBody.innerHTML = '';
  
  // Show message if no data
  if (filteredData.length === 0) {
    noDataMessage.style.display = 'block';
  } else {
    noDataMessage.style.display = 'none';
    
    // Add data rows
    filteredData.forEach(item => {
      const row = document.createElement('tr');
      
      // Date
      const dateCell = document.createElement('td');
      dateCell.textContent = item.date;
      row.appendChild(dateCell);
      
      // Box Color
      const colorCell = document.createElement('td');
      colorCell.textContent = item.boxColor;
      colorCell.className = item.boxColor;
      row.appendChild(colorCell);
      
      // Box Size
      const sizeCell = document.createElement('td');
      sizeCell.textContent = item.boxSize;
      row.appendChild(sizeCell);
      
      // M7 Box Confirmation - Now before DR Confirmation
      const m7BoxConfirmationCell = document.createElement('td');
      m7BoxConfirmationCell.textContent = item.m7BoxConfirmation ? 'Yes' : 'No';
      m7BoxConfirmationCell.className = item.m7BoxConfirmation ? 'yes' : 'no';
      row.appendChild(m7BoxConfirmationCell);
      
      // DR Confirmation
      const confirmationCell = document.createElement('td');
      confirmationCell.textContent = item.drConfirmation ? item.drConfirmation : 'None';
      confirmationCell.className = item.drConfirmation ? item.drConfirmation : 'none';
      row.appendChild(confirmationCell);
      
      // M7 Box Retracement Level (replacing Beyond M7 Box)
      const m7BoxRetracementLevelCell = document.createElement('td');
      m7BoxRetracementLevelCell.textContent = item.m7BoxRetracementLevel ? 
        (item.m7BoxRetracementLevel === 'above' ? 'Above the M7 Box' : 
         item.m7BoxRetracementLevel === 'inside' ? 'Inside the M7 Box' : 'Below the M7 Box') : 'N/A';
      m7BoxRetracementLevelCell.className = item.m7BoxRetracementLevel || 'no';
      row.appendChild(m7BoxRetracementLevelCell);
      
      // False Day
      const falseDayCell = document.createElement('td');
      falseDayCell.textContent = item.falseDay ? 'Yes' : 'No';
      falseDayCell.className = item.falseDay ? 'yes' : 'no';
      row.appendChild(falseDayCell);
      
      // Return to M7 Box
      const returnToM7BoxCell = document.createElement('td');
      returnToM7BoxCell.textContent = item.returnToM7Box ? 'Yes' : 'No';
      returnToM7BoxCell.className = item.returnToM7Box ? 'yes' : 'no';
      row.appendChild(returnToM7BoxCell);
      
      // M7 Box Retracement
      const m7BoxRetracementCell = document.createElement('td');
      m7BoxRetracementCell.textContent = item.m7BoxRetracement ? 
        (item.m7BoxRetracement === 'before' ? 'Before Confirmation' : 'After Confirmation') : 'N/A';
      m7BoxRetracementCell.className = item.m7BoxRetracement ? item.m7BoxRetracement : 'no';
      row.appendChild(m7BoxRetracementCell);
      
      dataTableBody.appendChild(row);
    });
  }
  
  // Update record count
  recordsCount.textContent = filteredData.length;
}

// Update statistics
function updateStatistics() {
  const totalCount = filteredData.length;
  const confirmationsCount = filteredData.filter(item => item.drConfirmation).length;
  const longConfirmationsCount = filteredData.filter(item => item.drConfirmation === 'long').length;
  const shortConfirmationsCount = filteredData.filter(item => item.drConfirmation === 'short').length;
  const falseDaysCount = filteredData.filter(item => item.falseDay).length;
  const m7BoxConfirmationsCount = filteredData.filter(item => item.m7BoxConfirmation).length;
  
  // Retracement level statistics
  const aboveCount = filteredData.filter(item => item.m7BoxRetracementLevel === 'above').length;
  const insideCount = filteredData.filter(item => item.m7BoxRetracementLevel === 'inside').length;
  const belowCount = filteredData.filter(item => item.m7BoxRetracementLevel === 'below').length;
  
  const confirmationPct = totalCount ? (confirmationsCount / totalCount * 100).toFixed(2) : 0;
  const falseDayPct = confirmationsCount ? (falseDaysCount / confirmationsCount * 100).toFixed(2) : 0;
  const m7BoxConfirmationPct = totalCount ? (m7BoxConfirmationsCount / totalCount * 100).toFixed(2) : 0;
  
  totalRecordsElement.textContent = totalCount;
  confirmationStatsElement.textContent = `${confirmationsCount} (${confirmationPct}%) [Long: ${longConfirmationsCount}, Short: ${shortConfirmationsCount}]`;
  falseDayStatsElement.textContent = `${falseDaysCount} (${falseDayPct}%)`;
  m7BoxConfirmationStatsElement.textContent = `${m7BoxConfirmationsCount} (${m7BoxConfirmationPct}%)`;
  retracementLevelStatsElement.textContent = `Above: ${aboveCount}, Inside: ${insideCount}, Below: ${belowCount}`;
}

// Initialize the charts
function initializeCharts() {
  // Confirmation probability chart
  const confirmationCtx = document.getElementById('confirmationChart').getContext('2d');
  confirmationChart = new Chart(confirmationCtx, {
    type: 'bar',
    data: {
      labels: ['Green', 'Red', 'Equal'],
      datasets: [
        {
          label: 'Long Confirmation (%)',
          data: [0, 0, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Short Confirmation (%)',
          data: [0, 0, 0],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Probability (%)'
          }
        }
      }
    }
  });
  
  // False day probability chart
  const falseDayCtx = document.getElementById('falseDayChart').getContext('2d');
  falseDayChart = new Chart(falseDayCtx, {
    type: 'bar',
    data: {
      labels: ['Green', 'Red', 'Equal'],
      datasets: [{
        label: 'False Day Probability (%)',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Probability (%)'
          }
        }
      }
    }
  });
  
  // M7 Box confirmation probability chart
  const m7BoxConfirmationCtx = document.getElementById('m7BoxConfirmationChart').getContext('2d');
  m7BoxConfirmationChart = new Chart(m7BoxConfirmationCtx, {
    type: 'bar',
    data: {
      labels: ['Green', 'Red', 'Equal'],
      datasets: [{
        label: 'M7 Box Confirmation Probability (%)',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Probability (%)'
          }
        }
      }
    }
  });
  
  // Retracement Level chart
  const retracementLevelCtx = document.getElementById('retracementLevelChart').getContext('2d');
  retracementLevelChart = new Chart(retracementLevelCtx, {
    type: 'bar',
    data: {
      labels: ['Green', 'Red', 'Equal'],
      datasets: [
        {
          label: 'Above M7 Box (%)',
          data: [0, 0, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Inside M7 Box (%)',
          data: [0, 0, 0],
          backgroundColor: 'rgba(255, 205, 86, 0.6)',
          borderColor: 'rgba(255, 205, 86, 1)',
          borderWidth: 1
        },
        {
          label: 'Below M7 Box (%)',
          data: [0, 0, 0],
          backgroundColor: 'rgba(255, 99, 132, 0.6)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Percentage (%)'
          }
        }
      }
    }
  });
  
  // Return to M7 Box probabilities chart
  const returnToM7BoxCtx = document.getElementById('returnToM7BoxChart').getContext('2d');
  returnToM7BoxChart = new Chart(returnToM7BoxCtx, {
    type: 'bar',
    data: {
      labels: ['False Day', 'New High (Long)', 'New Low (Short)'],
      datasets: [{
        label: 'Probability After Return to M7 Box (%)',
        data: [0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          title: {
            display: true,
            text: 'Probability (%)'
          }
        }
      }
    }
  });
}

// Update charts with current data
function updateCharts() {
  // Calculate confirmation probabilities by M7 Box color
  const confirmationData = calculateConfirmationByColor();
  
  // Update confirmation chart
  confirmationChart.data.datasets[0].data = [
    confirmationData.green.longProbability,
    confirmationData.red.longProbability,
    confirmationData.equal.longProbability
  ];
  
  confirmationChart.data.datasets[1].data = [
    confirmationData.green.shortProbability,
    confirmationData.red.shortProbability,
    confirmationData.equal.shortProbability
  ];
  
  confirmationChart.update();
  
  // Update confirmation details
  confirmationDetails.innerHTML = `
    <p><strong>Green M7 Box:</strong> ${confirmationData.green.totalProbability}% confirmation rate (${confirmationData.green.totalCount}/${confirmationData.green.total})</p>
    <p>&nbsp;&nbsp; - Long: ${confirmationData.green.longProbability}% (${confirmationData.green.longCount}/${confirmationData.green.total})</p>
    <p>&nbsp;&nbsp; - Short: ${confirmationData.green.shortProbability}% (${confirmationData.green.shortCount}/${confirmationData.green.total})</p>
    <p><strong>Red M7 Box:</strong> ${confirmationData.red.totalProbability}% confirmation rate (${confirmationData.red.totalCount}/${confirmationData.red.total})</p>
    <p>&nbsp;&nbsp; - Long: ${confirmationData.red.longProbability}% (${confirmationData.red.longCount}/${confirmationData.red.total})</p>
    <p>&nbsp;&nbsp; - Short: ${confirmationData.red.shortProbability}% (${confirmationData.red.shortCount}/${confirmationData.red.total})</p>
    <p><strong>Equal M7 Box:</strong> ${confirmationData.equal.totalProbability}% confirmation rate (${confirmationData.equal.totalCount}/${confirmationData.equal.total})</p>
    <p>&nbsp;&nbsp; - Long: ${confirmationData.equal.longProbability}% (${confirmationData.equal.longCount}/${confirmationData.equal.total})</p>
    <p>&nbsp;&nbsp; - Short: ${confirmationData.equal.shortProbability}% (${confirmationData.equal.shortCount}/${confirmationData.equal.total})</p>
  `;
  
  // Calculate false day probabilities
  const falseDayData = calculateFalseDayProbability();
  
  // Update false day chart
  falseDayChart.data.datasets[0].data = [
    falseDayData.green.probability,
    falseDayData.red.probability,
    falseDayData.equal.probability
  ];
  falseDayChart.update();
  
  // Update false day details
  falseDayDetails.innerHTML = `
    <p><strong>Green M7 Box:</strong> ${falseDayData.green.probability}% false day rate (${falseDayData.green.count}/${falseDayData.green.total})</p>
    <p><strong>Red M7 Box:</strong> ${falseDayData.red.probability}% false day rate (${falseDayData.red.count}/${falseDayData.red.total})</p>
    <p><strong>Equal M7 Box:</strong> ${falseDayData.equal.probability}% false day rate (${falseDayData.equal.count}/${falseDayData.equal.total})</p>
  `;
  
  // Calculate M7 Box confirmation probabilities
  const m7BoxConfirmationData = calculateM7BoxConfirmationByColor();
  
  // Update M7 Box confirmation chart
  m7BoxConfirmationChart.data.datasets[0].data = [
    m7BoxConfirmationData.green.probability,
    m7BoxConfirmationData.red.probability,
    m7BoxConfirmationData.equal.probability
  ];
  m7BoxConfirmationChart.update();
  
  // Update M7 Box confirmation details
  m7BoxConfirmationDetails.innerHTML = `
    <p><strong>Green M7 Box:</strong> ${m7BoxConfirmationData.green.probability}% M7 Box confirmation rate (${m7BoxConfirmationData.green.count}/${m7BoxConfirmationData.green.total})</p>
    <p><strong>Red M7 Box:</strong> ${m7BoxConfirmationData.red.probability}% M7 Box confirmation rate (${m7BoxConfirmationData.red.count}/${m7BoxConfirmationData.red.total})</p>
    <p><strong>Equal M7 Box:</strong> ${m7BoxConfirmationData.equal.probability}% M7 Box confirmation rate (${m7BoxConfirmationData.equal.count}/${m7BoxConfirmationData.equal.total})</p>
  `;
  
  // Calculate Retracement Level probabilities
  const retracementLevelData = calculateRetracementLevelByColor();
  
  // Update Retracement Level chart
  retracementLevelChart.data.datasets[0].data = [
    retracementLevelData.green.abovePct,
    retracementLevelData.red.abovePct,
    retracementLevelData.equal.abovePct
  ];
  
  retracementLevelChart.data.datasets[1].data = [
    retracementLevelData.green.insidePct,
    retracementLevelData.red.insidePct,
    retracementLevelData.equal.insidePct
  ];
  
  retracementLevelChart.data.datasets[2].data = [
    retracementLevelData.green.belowPct,
    retracementLevelData.red.belowPct,
    retracementLevelData.equal.belowPct
  ];
  
  retracementLevelChart.update();
  
  // Update Retracement Level details
  retracementLevelDetails.innerHTML = `
    <p><strong>Green M7 Box Retracement Levels:</strong></p>
    <p>&nbsp;&nbsp; - Above: ${retracementLevelData.green.abovePct}% (${retracementLevelData.green.above}/${retracementLevelData.green.total})</p>
    <p>&nbsp;&nbsp; - Inside: ${retracementLevelData.green.insidePct}% (${retracementLevelData.green.inside}/${retracementLevelData.green.total})</p>
    <p>&nbsp;&nbsp; - Below: ${retracementLevelData.green.belowPct}% (${retracementLevelData.green.below}/${retracementLevelData.green.total})</p>
    <p><strong>Red M7 Box Retracement Levels:</strong></p>
    <p>&nbsp;&nbsp; - Above: ${retracementLevelData.red.abovePct}% (${retracementLevelData.red.above}/${retracementLevelData.red.total})</p>
    <p>&nbsp;&nbsp; - Inside: ${retracementLevelData.red.insidePct}% (${retracementLevelData.red.inside}/${retracementLevelData.red.total})</p>
    <p>&nbsp;&nbsp; - Below: ${retracementLevelData.red.belowPct}% (${retracementLevelData.red.below}/${retracementLevelData.red.total})</p>
  `;
  
  // Calculate Return to M7 Box probabilities
  const returnToM7BoxData = calculateReturnToM7BoxProbabilities();
  
  // Update Return to M7 Box chart
  returnToM7BoxChart.data.datasets[0].data = [
    returnToM7BoxData.falseDay.probability,
    returnToM7BoxData.newHigh.probability,
    returnToM7BoxData.newLow.probability
  ];
  returnToM7BoxChart.update();
  
  // Update Return to M7 Box details
  returnToM7BoxDetails.innerHTML = `
    <p><strong>False Day Probability:</strong> ${returnToM7BoxData.falseDay.probability}% (${returnToM7BoxData.falseDay.count}/${returnToM7BoxData.total})</p>
    <p><strong>New High Probability (Long):</strong> ${returnToM7BoxData.newHigh.probability}% (${returnToM7BoxData.newHigh.count}/${returnToM7BoxData.total})</p>
    <p><strong>New Low Probability (Short):</strong> ${returnToM7BoxData.newLow.probability}% (${returnToM7BoxData.newLow.count}/${returnToM7BoxData.total})</p>
  `;
}

// Calculate confirmation probabilities by M7 Box color
function calculateConfirmationByColor() {
  const result = {
    green: { 
      total: 0, 
      totalCount: 0,
      longCount: 0, 
      shortCount: 0, 
      totalProbability: 0,
      longProbability: 0,
      shortProbability: 0
    },
    red: { 
      total: 0, 
      totalCount: 0,
      longCount: 0, 
      shortCount: 0, 
      totalProbability: 0,
      longProbability: 0,
      shortProbability: 0
    },
    equal: { 
      total: 0, 
      totalCount: 0,
      longCount: 0, 
      shortCount: 0, 
      totalProbability: 0,
      longProbability: 0,
      shortProbability: 0
    }
  };
  
  filteredData.forEach(item => {
    if (item.boxColor === 'green') {
      result.green.total++;
      if (item.drConfirmation) {
        result.green.totalCount++;
        if (item.drConfirmation === 'long') {
          result.green.longCount++;
        } else if (item.drConfirmation === 'short') {
          result.green.shortCount++;
        }
      }
    } else if (item.boxColor === 'red') {
      result.red.total++;
      if (item.drConfirmation) {
        result.red.totalCount++;
        if (item.drConfirmation === 'long') {
          result.red.longCount++;
        } else if (item.drConfirmation === 'short') {
          result.red.shortCount++;
        }
      }
    } else if (item.boxColor === 'equal') {
      result.equal.total++;
      if (item.drConfirmation) {
        result.equal.totalCount++;
        if (item.drConfirmation === 'long') {
          result.equal.longCount++;
        } else if (item.drConfirmation === 'short') {
          result.equal.shortCount++;
        }
      }
    }
  });
  
  // Calculate probabilities
  result.green.totalProbability = result.green.total ? parseFloat((result.green.totalCount / result.green.total * 100).toFixed(2)) : 0;
  result.green.longProbability = result.green.total ? parseFloat((result.green.longCount / result.green.total * 100).toFixed(2)) : 0;
  result.green.shortProbability = result.green.total ? parseFloat((result.green.shortCount / result.green.total * 100).toFixed(2)) : 0;
  
  result.red.totalProbability = result.red.total ? parseFloat((result.red.totalCount / result.red.total * 100).toFixed(2)) : 0;
  result.red.longProbability = result.red.total ? parseFloat((result.red.longCount / result.red.total * 100).toFixed(2)) : 0;
  result.red.shortProbability = result.red.total ? parseFloat((result.red.shortCount / result.red.total * 100).toFixed(2)) : 0;
  
  result.equal.totalProbability = result.equal.total ? parseFloat((result.equal.totalCount / result.equal.total * 100).toFixed(2)) : 0;
  result.equal.longProbability = result.equal.total ? parseFloat((result.equal.longCount / result.equal.total * 100).toFixed(2)) : 0;
  result.equal.shortProbability = result.equal.total ? parseFloat((result.equal.shortCount / result.equal.total * 100).toFixed(2)) : 0;
  
  return result;
}

// Calculate false day probabilities by M7 Box color
function calculateFalseDayProbability() {
  const result = {
    green: { total: 0, count: 0, probability: 0 },
    red: { total: 0, count: 0, probability: 0 },
    equal: { total: 0, count: 0, probability: 0 }
  };
  
  filteredData.forEach(item => {
    if (!item.drConfirmation) return;
    
    if (item.boxColor === 'green') {
      result.green.total++;
      if (item.falseDay) result.green.count++;
    } else if (item.boxColor === 'red') {
      result.red.total++;
      if (item.falseDay) result.red.count++;
    } else if (item.boxColor === 'equal') {
      result.equal.total++;
      if (item.falseDay) result.equal.count++;
    }
  });
  
  result.green.probability = result.green.total ? parseFloat((result.green.count / result.green.total * 100).toFixed(2)) : 0;
  result.red.probability = result.red.total ? parseFloat((result.red.count / result.red.total * 100).toFixed(2)) : 0;
  result.equal.probability = result.equal.total ? parseFloat((result.equal.count / result.equal.total * 100).toFixed(2)) : 0;
  
  return result;
}

// Calculate M7 Box confirmation probabilities by M7 Box color
function calculateM7BoxConfirmationByColor() {
  const result = {
    green: { total: 0, count: 0, probability: 0 },
    red: { total: 0, count: 0, probability: 0 },
    equal: { total: 0, count: 0, probability: 0 }
  };
  
  filteredData.forEach(item => {
    if (item.boxColor === 'green') {
      result.green.total++;
      if (item.m7BoxConfirmation) result.green.count++;
    } else if (item.boxColor === 'red') {
      result.red.total++;
      if (item.m7BoxConfirmation) result.red.count++;
    } else if (item.boxColor === 'equal') {
      result.equal.total++;
      if (item.m7BoxConfirmation) result.equal.count++;
    }
  });
  
  result.green.probability = result.green.total ? parseFloat((result.green.count / result.green.total * 100).toFixed(2)) : 0;
  result.red.probability = result.red.total ? parseFloat((result.red.count / result.red.total * 100).toFixed(2)) : 0;
  result.equal.probability = result.equal.total ? parseFloat((result.equal.count / result.equal.total * 100).toFixed(2)) : 0;
  
  return result;
}

// Calculate Retracement Level distribution by M7 Box color
function calculateRetracementLevelByColor() {
  const result = {
    green: { 
      total: 0, 
      above: 0, 
      inside: 0, 
      below: 0,
      abovePct: 0,
      insidePct: 0,
      belowPct: 0
    },
    red: { 
      total: 0, 
      above: 0, 
      inside: 0, 
      below: 0,
      abovePct: 0,
      insidePct: 0,
      belowPct: 0
    },
    equal: { 
      total: 0, 
      above: 0, 
      inside: 0, 
      below: 0,
      abovePct: 0,
      insidePct: 0,
      belowPct: 0
    }
  };
  
  filteredData.forEach(item => {
    if (item.boxColor === 'green') {
      result.green.total++;
      if (item.m7BoxRetracementLevel === 'above') {
        result.green.above++;
      } else if (item.m7BoxRetracementLevel === 'inside') {
        result.green.inside++;
      } else if (item.m7BoxRetracementLevel === 'below') {
        result.green.below++;
      }
    } else if (item.boxColor === 'red') {
      result.red.total++;
      if (item.m7BoxRetracementLevel === 'above') {
        result.red.above++;
      } else if (item.m7BoxRetracementLevel === 'inside') {
        result.red.inside++;
      } else if (item.m7BoxRetracementLevel === 'below') {
        result.red.below++;
      }
    } else if (item.boxColor === 'equal') {
      result.equal.total++;
      if (item.m7BoxRetracementLevel === 'above') {
        result.equal.above++;
      } else if (item.m7BoxRetracementLevel === 'inside') {
        result.equal.inside++;
      } else if (item.m7BoxRetracementLevel === 'below') {
        result.equal.below++;
      }
    }
  });
  
  // Calculate percentages
  result.green.abovePct = result.green.total ? parseFloat((result.green.above / result.green.total * 100).toFixed(2)) : 0;
  result.green.insidePct = result.green.total ? parseFloat((result.green.inside / result.green.total * 100).toFixed(2)) : 0;
  result.green.belowPct = result.green.total ? parseFloat((result.green.below / result.green.total * 100).toFixed(2)) : 0;
  
  result.red.abovePct = result.red.total ? parseFloat((result.red.above / result.red.total * 100).toFixed(2)) : 0;
  result.red.insidePct = result.red.total ? parseFloat((result.red.inside / result.red.total * 100).toFixed(2)) : 0;
  result.red.belowPct = result.red.total ? parseFloat((result.red.below / result.red.total * 100).toFixed(2)) : 0;
  
  result.equal.abovePct = result.equal.total ? parseFloat((result.equal.above / result.equal.total * 100).toFixed(2)) : 0;
  result.equal.insidePct = result.equal.total ? parseFloat((result.equal.inside / result.equal.total * 100).toFixed(2)) : 0;
  result.equal.belowPct = result.equal.total ? parseFloat((result.equal.below / result.equal.total * 100).toFixed(2)) : 0;
  
  return result;
}

// Calculate probabilities after returning to M7 Box
function calculateReturnToM7BoxProbabilities() {
  const result = {
    total: 0,
    falseDay: { count: 0, probability: 0 },
    newHigh: { count: 0, probability: 0 },
    newLow: { count: 0, probability: 0 }
  };
  
  // Filter to include only days where price returned to M7 Box
  const returnToM7BoxDays = filteredData.filter(item => item.returnToM7Box);
  result.total = returnToM7BoxDays.length;
  
  returnToM7BoxDays.forEach(item => {
    if (item.falseDay) result.falseDay.count++;
    if (item.newHigh) result.newHigh.count++;
    if (item.newLow) result.newLow.count++;
  });
  
  result.falseDay.probability = result.total ? parseFloat((result.falseDay.count / result.total * 100).toFixed(2)) : 0;
  result.newHigh.probability = result.total ? parseFloat((result.newHigh.count / result.total * 100).toFixed(2)) : 0;
  result.newLow.probability = result.total ? parseFloat((result.newLow.count / result.total * 100).toFixed(2)) : 0;
  
  return result;
}

// Initialize dashboard when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeDashboard);
