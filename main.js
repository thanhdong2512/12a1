// Add additional logic if needed (currently used for animations)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page is fully loaded, animations will begin!");
});

// Dropdown toggle animation
const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
  dropdown.classList.toggle("active");

  // Optional: Add a slight delay to synchronize animations
  if (dropdown.classList.contains("active")) {
    dropdown.style.animation = "scaleIn 0.5s ease-in-out";
  } else {
    dropdown.style.animation = "scaleOut 0.5s ease-in-out";
  }
});

// Trigger hero content animation on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.classList.add("animate");
});

// Insert animation styles dynamically
const styleSheet = document.styleSheets[0];

// Hero content fade-in animation
styleSheet.insertRule(
  `
      .hero-content.animate {
        animation: fadeIn 5s ease-in-out forwards;
      }
    `,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
    `,
  styleSheet.cssRules.length
);

// Dropdown scale animations
styleSheet.insertRule(
  `
      @keyframes scaleIn {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
    `,
  styleSheet.cssRules.length
);

styleSheet.insertRule(
  `
      @keyframes scaleOut {
        0% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0.8); opacity: 0; }
      }
    `,
  styleSheet.cssRules.length
);
