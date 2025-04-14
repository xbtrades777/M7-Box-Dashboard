// Sample data for the M7 Box Dashboard
const sampleData = {
  rdr: [
    { date: '2025-04-13', boxColor: 'green', boxSize: '0.35', confirmation: true, falseDay: false },
    { date: '2025-04-12', boxColor: 'red', boxSize: '-0.42', confirmation: true, falseDay: true },
    { date: '2025-04-11', boxColor: 'green', boxSize: '0.28', confirmation: false, falseDay: false },
    { date: '2025-04-10', boxColor: 'green', boxSize: '0.65', confirmation: true, falseDay: false },
    { date: '2025-04-09', boxColor: 'red', boxSize: '-0.18', confirmation: false, falseDay: false },
    { date: '2025-04-08', boxColor: 'green', boxSize: '0.92', confirmation: true, falseDay: false },
    { date: '2025-04-07', boxColor: 'red', boxSize: '-0.55', confirmation: true, falseDay: true },
    { date: '2025-04-06', boxColor: 'equal', boxSize: '0.00', confirmation: false, falseDay: false },
    { date: '2025-04-05', boxColor: 'red', boxSize: '-0.76', confirmation: true, falseDay: false },
    { date: '2025-04-04', boxColor: 'green', boxSize: '0.41', confirmation: false, falseDay: false },
    { date: '2025-04-03', boxColor: 'green', boxSize: '1.25', confirmation: true, falseDay: false },
    { date: '2025-04-02', boxColor: 'red', boxSize: '-0.38', confirmation: false, falseDay: false },
    { date: '2025-04-01', boxColor: 'green', boxSize: '0.57', confirmation: true, falseDay: true },
    { date: '2025-03-31', boxColor: 'red', boxSize: '-1.12', confirmation: true, falseDay: false },
    { date: '2025-03-30', boxColor: 'green', boxSize: '0.19', confirmation: false, falseDay: false },
    { date: '2025-03-29', boxColor: 'equal', boxSize: '0.00', confirmation: false, falseDay: false },
    { date: '2025-03-28', boxColor: 'red', boxSize: '-0.83', confirmation: true, falseDay: false },
    { date: '2025-03-27', boxColor: 'green', boxSize: '0.72', confirmation: true, falseDay: false },
    { date: '2025-03-26', boxColor: 'red', boxSize: '-0.29', confirmation: false, falseDay: false },
    { date: '2025-03-25', boxColor: 'green', boxSize: '1.05', confirmation: true, falseDay: true },
  ],
  odr: [
    { date: '2025-04-13', boxColor: 'red', boxSize: '-0.45', confirmation: true, falseDay: false },
    { date: '2025-04-12', boxColor: 'green', boxSize: '0.22', confirmation: false, falseDay: false },
    { date: '2025-04-11', boxColor: 'red', boxSize: '-0.63', confirmation: true, falseDay: true },
    { date: '2025-04-10', boxColor: 'green', boxSize: '0.38', confirmation: false, falseDay: false },
    { date: '2025-04-09', boxColor: 'green', boxSize: '0.71', confirmation: true, falseDay: false },
    { date: '2025-04-08', boxColor: 'red', boxSize: '-0.17', confirmation: false, falseDay: false },
    { date: '2025-04-07', boxColor: 'equal', boxSize: '0.00', confirmation: false, falseDay: false },
    { date: '2025-04-06', boxColor: 'green', boxSize: '0.89', confirmation: true, falseDay: false },
    { date: '2025-04-05', boxColor: 'red', boxSize: '-0.52', confirmation: true, falseDay: true },
    { date: '2025-04-04', boxColor: 'green', boxSize: '0.33', confirmation: false, falseDay: false },
    { date: '2025-04-03', boxColor: 'red', boxSize: '-0.94', confirmation: true, falseDay: false },
    { date: '2025-04-02', boxColor: 'green', boxSize: '1.16', confirmation: true, falseDay: true },
    { date: '2025-04-01', boxColor: 'red', boxSize: '-0.26', confirmation: false, falseDay: false },
    { date: '2025-03-31', boxColor: 'green', boxSize: '0.47', confirmation: true, falseDay: false },
    { date: '2025-03-30', boxColor: 'red', boxSize: '-0.75', confirmation: true, falseDay: false },
  ],
  adr: [
    { date: '2025-04-13', boxColor: 'green', boxSize: '0.53', confirmation: true, falseDay: false },
    { date: '2025-04-12', boxColor: 'red', boxSize: '-0.68', confirmation: true, falseDay: true },
    { date: '2025-04-11', boxColor: 'green', boxSize: '0.31', confirmation: false, falseDay: false },
    { date: '2025-04-10', boxColor: 'equal', boxSize: '0.00', confirmation: false, falseDay: false },
    { date: '2025-04-09', boxColor: 'red', boxSize: '-0.42', confirmation: false, falseDay: false },
    { date: '2025-04-08', boxColor: 'green', boxSize: '0.78', confirmation: true, falseDay: false },
    { date: '2025-04-07', boxColor: 'red', boxSize: '-0.23', confirmation: false, falseDay: false },
    { date: '2025-04-06', boxColor: 'green', boxSize: '1.32', confirmation: true, falseDay: true },
    { date: '2025-04-05', boxColor: 'red', boxSize: '-0.57', confirmation: true, falseDay: false },
    { date: '2025-04-04', boxColor: 'green', boxSize: '0.16', confirmation: false, falseDay: false },
    { date: '2025-04-03', boxColor: 'red', boxSize: '-0.82', confirmation: true, falseDay: false },
    { date: '2025-04-02', boxColor: 'green', boxSize: '0.65', confirmation: true, falseDay: false },
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
const dataTableBody = document.getElementById('data-table-body');
const recordsCount = document.getElementById('records-count');
const noDataMessage = document.getElementById('no-data');
const totalRecordsElement = document.getElementById('total-records');
const confirmationStatsElement = document.getElementById('confirmation-stats');
const falseDayStatsElement = document.getElementById('falseday-stats');
const boxColorHeader = document.getElementById('box-color-header');
const boxSizeHeader = document.getElementById('box-size-header');
const confirmationChartTitle = document.getElementById('confirmation-chart-title');
const falseDayChartTitle = document.getElementById('falseday-chart-title');
const confirmationDetails = document.getElementById('confirmation-details');
const falseDayDetails = document.getElementById('falseday-details');

// Charts
let confirmationChart;
let falseDayChart;

// State
let currentSession = 'rdr';
let currentColorFilter = '';
let currentSizeFilter = null;
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

  // Reset filters
  colorFilter.value = '';
  sizeFilter.value = '-1';
  currentColorFilter = '';
  currentSizeFilter = null;

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
      
      const dateCell = document.createElement('td');
      dateCell.textContent = item.date;
      row.appendChild(dateCell);
      
      const colorCell = document.createElement('td');
      colorCell.textContent = item.boxColor;
      colorCell.className = item
