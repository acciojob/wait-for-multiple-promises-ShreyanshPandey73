//your JS code here. If required.
// Function to simulate resolving a promise after a random time
function resolveAfterRandomTime(min, max) {
  const time = Math.floor(Math.random() * (max - min + 1)) + min;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time * 1000); // Convert to milliseconds
  });
}

// Function to populate table with results
function populateTable(results) {
  document.getElementById('row1col1').textContent = 'Promise 1';
  document.getElementById('row1col2').textContent = results[0];
  document.getElementById('row2col1').textContent = 'Promise 2';
  document.getElementById('row2col2').textContent = results[1];
  document.getElementById('row3col1').textContent = 'Promise 3';
  document.getElementById('row3col2').textContent = results[2];
  document.getElementById('row4col1').textContent = 'Total';
  document.getElementById('row4col2').textContent = (results.reduce((acc, curr) => acc + curr, 0) / 1000).toFixed(3);
}

// Create 3 promises
const promises = [
  resolveAfterRandomTime(1, 3),
  resolveAfterRandomTime(1, 3),
  resolveAfterRandomTime(1, 3)
];

// Update table with loading text
populateTable(['Loading...', '', '']);

// Wait for all promises to resolve using Promise.all
Promise.all(promises)
  .then((results) => {
    // Update table with results
    populateTable(results);
  })
  .catch((error) => {
    console.error(error);
  });
