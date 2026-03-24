function toggleFAQ(btn) {
  let p = btn.nextElementSibling;
  p.style.display = p.style.display === "block" ? "none" : "block";
}

// Optional: Add simple scroll animations if desired later
document.addEventListener("DOMContentLoaded", () => {
  console.log("AI Ready School scripts loaded.");
});

function showHub(hubId) {
  // Hide all panels
  document.querySelectorAll('.hub-panel').forEach(panel => {
    panel.style.display = 'none';
  });
  // Show selected panel
  document.getElementById('hub-' + hubId).style.display = 'block';
  
  // Update active tab styling
  document.querySelectorAll('.hub-tab').forEach(tab => {
    tab.classList.remove('active');
    tab.style.backgroundColor = 'transparent';
  });
  
  // Find the hovered tab and highlight it
  event.currentTarget.classList.add('active');
  event.currentTarget.style.backgroundColor = '#f8fafc';
}

