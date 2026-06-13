/* 
   ========================================================================
   SCRIPT.JS - Interactive Engine for Muhammad Zeeshan Siddiqui Portfolio
   ========================================================================
*/

// Project Data Store for Modals
const projectData = {
  finance_pro: {
    title: "FINANCE-PRO",
    category: "Full-Stack Web Application",
    tech: "Node.js, Express.js, MySQL, Javascript, HTML5/CSS",
    duration: "5 Weeks",
    link: "https://github.com/ZEESHANSIDDIQUIgit/FINACNEPRO-FINANCE_MANAGEMENT-SYSTEM",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230b0b10'/><line x1='100' y1='380' x2='700' y2='380' stroke='rgba(255,255,255,0.05)' stroke-width='2'/><path d='M 100 300 L 220 220 L 340 280 L 460 140 L 580 180 L 700 80' fill='none' stroke='%236366f1' stroke-width='3'/><circle cx='460' cy='140' r='8' fill='%233b82f6' stroke='%23f8fafc' stroke-width='2'/></svg>",
    desc: [
      "FinancePro is a full-stack finance tracking application designed to help users budget, monitor expenses, and manage active balance sheets with a secure MySQL database.",
      "Built with a focus on data integrity, the Express.js server processes records securely using parametrized queries. The system provides immediate balance tallies based on transactions.",
      "The layout incorporates dynamic cards highlighting active accounts, customized categories (e.g. utilities, dining, study), and linear graphs tracing weekly savings trends."
    ]
  },
  shark_assistant: {
    title: "\"Shark\" Voice Assistant",
    category: "Python Voice Automation",
    tech: "Python, SpeechRecognition, Pyttsx3, Web APIs",
    duration: "4 Weeks",
    link: "https://github.com/ZEESHANSIDDIQUIgit/Basic-Voice-Assistant-",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230b0b10'/><circle cx='400' cy='250' r='100' fill='none' stroke='%233b82f6' stroke-width='2' stroke-dasharray='10 5'/><path d='M 350 250 Q 400 150 450 250 T 550 250' fill='none' stroke='%236366f1' stroke-width='3'/><circle cx='400' cy='250' r='10' fill='%236366f1'/></svg>",
    desc: [
      "A smart voice-driven assistant built with Python. Features speech recognition inputs, system action automations, online web scraping triggers, and integrations with climate and news APIs.",
      "Named 'SHARK', this assistant utilizes offline pyttsx3 speech synthetics to talk back, delivering jokes, reading current news highlights, or listing active calendar events.",
      "Through modular Python scripts, users can configure custom automation macros such as opening custom websites, searching browser items, or sending automated notifications."
    ]
  },
  qr_library: {
    title: "QR Based Library Management",
    category: "Full-Stack Library System",
    tech: "Node.js, Express.js, MySQL, QR API, Javascript",
    duration: "6 Weeks",
    link: "https://github.com/ZEESHANSIDDIQUIgit/QR-Based-Library-Management-System",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230b0b10'/><rect x='300' y='150' width='200' height='200' rx='10' fill='none' stroke='%236366f1' stroke-width='2'/><rect x='340' y='190' width='40' height='40' fill='%233b82f6'/><rect x='420' y='190' width='40' height='40' fill='%23f8fafc'/><rect x='340' y='270' width='40' height='40' fill='%23f8fafc'/><rect x='420' y='270' width='40' height='40' fill='%236366f1'/></svg>",
    desc: [
      "A full-stack, QR-code based library management system featuring student self-issue/return workflows and real-time administrative metrics.",
      "Integrates with dynamic QR APIs to generate barcodes for books and student library passes, enabling quick scanning for issuing and returning assets.",
      "The loan tracker calculates return latency fees automatically based on customizable date thresholds, updating record logs inside a relational MySQL schema."
    ]
  },
  profile_repo: {
    title: "ZEESHANSIDDIQUIgit Hub",
    category: "GitHub Profile Repository",
    tech: "Markdown, GitHub Actions, Git Workflows",
    duration: "2 Weeks",
    link: "https://github.com/ZEESHANSIDDIQUIgit/ZEESHANSIDDIQUIgit",
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%230b0b10'/><path d='M 350 200 L 450 200 L 450 300 L 350 300 Z' fill='none' stroke='%236366f1' stroke-width='1.5'/><circle cx='400' cy='250' r='5' fill='%233b82f6'/></svg>",
    desc: [
      "Your open-source personal hub containing active markdown statistics, automation workflow tokens, active repository listings, and profile metadata configurations.",
      "Used to host your main profile README visual elements, presenting your developer bio, programming languages, database structures, and links to your active socials.",
      "Maintains clean git history logs and operates as the entry point for your open source profile."
    ]
  }
};

/* 
   ------------------------------------------------------------------------
   1. CUSTOM CURSOR TRAIL PHYSICS
   ------------------------------------------------------------------------
*/
const cursorDot = document.getElementById("cursor-dot");
const cursorFollower = document.getElementById("cursor-follower");

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

// Update mouse target coordinates
window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  
  // Instantly place the small dot
  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

// Follower lag animation using linear interpolation (lerp)
function animateCursor() {
  const lerpFactor = 0.15; // Smoothness factor
  
  followerX += (mouseX - followerX) * lerpFactor;
  followerY += (mouseY - followerY) * lerpFactor;
  
  cursorFollower.style.left = `${followerX}px`;
  cursorFollower.style.top = `${followerY}px`;
  
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Set cursor hover state classes on interactive elements
function initCursorInteractions() {
  const interactives = document.querySelectorAll(".cursor-interactive, a, button, select, textarea, input, .project-card");
  
  interactives.forEach(el => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });
    
    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
    });
  });
}
initCursorInteractions();


/* 
   ------------------------------------------------------------------------
   2. AMBIENT INTERACTIVE PARTICLES (Canvas Background)
   ------------------------------------------------------------------------
*/
const canvas = document.getElementById("ambient-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 60;
const connectionDistance = 120;
let mouse = { x: null, y: null, radius: 150 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Track mouse positioning inside canvas bounds
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});
window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.baseSpeedX = (Math.random() - 0.5) * 0.4;
    this.baseSpeedY = (Math.random() - 0.5) * 0.4;
    this.speedX = this.baseSpeedX;
    this.speedY = this.baseSpeedY;
    this.opacity = Math.random() * 0.4 + 0.1;
  }

  update() {
    // Basic travel path
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off border limits
    if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;

    // Mouse repulsion logic
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        
        // Push particles away smoothly
        this.x += Math.cos(angle) * force * 2;
        this.y += Math.sin(angle) * force * 2;
      }
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}
initParticles();

// Animation frame execution
function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Render and calculate paths between particles
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();

    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < connectionDistance) {
        // Line transparency fades out as distance approaches limit
        const opacity = (1 - distance / connectionDistance) * 0.08;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(handleParticles);
}
handleParticles();


/* 
   ------------------------------------------------------------------------
   3. SCROLL REVEAL & NAV SCROLL ACTIONS (Intersection Observer)
   ------------------------------------------------------------------------
*/
// Set up sticky navbar modification and link highlighter
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Highlight active menu item based on current viewport section
  let currentSecId = "home";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    const secHeight = sec.clientHeight;
    if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
      currentSecId = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSecId}`) {
      link.classList.add("active");
    }
  });
});

// Scroll reveal using Intersection Observer
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
      
      // Skill bars trigger when skills-grid is showing
      if (entry.target.classList.contains("skills-grid")) {
        animateSkills();
      }
      
      // Experience timeline timeline glow tracer
      if (entry.target.classList.contains("timeline")) {
        animateTimelineGlow();
      }
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => {
  revealObserver.observe(el);
});


/* 
   ------------------------------------------------------------------------
   4. PROGRESS TIMELINE GLOW LINE & DOT ACTIVE STATES
   ------------------------------------------------------------------------
*/
function animateTimelineGlow() {
  const glowLine = document.getElementById("timeline-glow");
  const timelineItems = document.querySelectorAll(".timeline-item");
  
  // Delay slightly for transition impact
  setTimeout(() => {
    glowLine.style.height = "100%";
    
    // Mark items active sequentially
    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("active");
      }, index * 400);
    });
  }, 300);
}


/* 
   ------------------------------------------------------------------------
   5. SKILLS MATRIX PROGRESSION BAR TRIGGERS
   ------------------------------------------------------------------------
*/
let skillsAnimated = false;
function animateSkills() {
  if (skillsAnimated) return; // Prevent double trigger
  skillsAnimated = true;
  
  const progressBars = document.querySelectorAll(".skill-bar-fill");
  const percentTexts = document.querySelectorAll(".skill-percent");

  progressBars.forEach(bar => {
    const targetWidth = bar.getAttribute("data-width");
    bar.style.width = targetWidth;
  });

  percentTexts.forEach(txt => {
    const targetVal = parseInt(txt.getAttribute("data-target"), 10);
    let currentVal = 0;
    const duration = 1500; // Match CSS speed
    const stepTime = Math.abs(Math.floor(duration / targetVal));
    
    const counter = setInterval(() => {
      currentVal++;
      txt.textContent = `${currentVal}%`;
      if (currentVal >= targetVal) {
        clearInterval(counter);
      }
    }, stepTime);
  });
}


/* 
   ------------------------------------------------------------------------
   6. PORTFOLIO FILTER MENU CONTROLS
   ------------------------------------------------------------------------
*/
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active class state on filter bar
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const activeFilter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");

      // Smooth fade transition
      card.style.opacity = "0";
      card.style.transform = "scale(0.95) translateY(10px)";
      
      setTimeout(() => {
        if (activeFilter === "all" || cardCategory === activeFilter) {
          card.classList.remove("hidden");
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "scale(1) translateY(0)";
          }, 50);
        } else {
          card.classList.add("hidden");
        }
      }, 300);
    });
    
    // Refresh cursor links configuration in case of DOM changes
    setTimeout(initCursorInteractions, 400);
  });
});


/* 
   ------------------------------------------------------------------------
   7. PROJECT SHOWCASE MODAL PANEL HANDLERS
   ------------------------------------------------------------------------
*/
const modalOverlay = document.getElementById("project-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalTags = document.getElementById("modal-tags");
const modalMetaCategory = document.getElementById("modal-meta-category");
const modalMetaDuration = document.getElementById("modal-meta-duration");
const modalMetaRole = document.getElementById("modal-meta-role");
const modalDescContent = document.getElementById("modal-description-content");
const modalLiveLink = document.getElementById("modal-live-link");
const modalClose = document.getElementById("modal-close");
const modalBackBtn = document.getElementById("modal-back-btn");

projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const projectId = card.getAttribute("data-project-id");
    const data = projectData[projectId];
    if (!data) return;

    // Load data properties inside modal DOM
    modalImg.src = data.img;
    modalTitle.textContent = data.title;
    modalMetaCategory.textContent = data.category;
    modalMetaDuration.textContent = data.duration;
    modalMetaRole.textContent = data.tech;
    modalLiveLink.href = data.link;

    // Load tags lists
    modalTags.innerHTML = "";
    const originalTags = card.querySelectorAll(".project-tag");
    originalTags.forEach(tag => {
      const newTag = document.createElement("span");
      newTag.className = "project-tag";
      newTag.textContent = tag.textContent;
      modalTags.appendChild(newTag);
    });

    // Populate descriptions paragraphs
    modalDescContent.innerHTML = "";
    data.desc.forEach(pText => {
      const p = document.createElement("p");
      p.textContent = pText;
      modalDescContent.appendChild(p);
    });

    // Render active overlay configurations
    document.body.classList.add("modal-open");
    modalOverlay.classList.add("active");
  });
});

// Close triggers
function closeModalWindow() {
  modalOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
  
  // Clear cursor interactions hover classes
  document.body.classList.remove("cursor-hover");
}

modalClose.addEventListener("click", closeModalWindow);
modalBackBtn.addEventListener("click", closeModalWindow);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModalWindow();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
    closeModalWindow();
  }
});


/* 
   ------------------------------------------------------------------------
   8. CONTACT FORM SIMULATED SUBMIT FLOW (Toast Notification)
   ------------------------------------------------------------------------
*/
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const successToast = document.getElementById("success-toast");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Highlight submitting state on CTA button
  submitBtn.disabled = true;
  submitBtn.textContent = "Transmitting Message...";
  submitBtn.style.opacity = "0.7";

  // Simulate remote server transmission delay
  setTimeout(() => {
    // Show success notification layout
    successToast.classList.add("active");
    
    // Reset inputs
    contactForm.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
    submitBtn.style.opacity = "1";

    // Auto-retract notification after 4s limit
    setTimeout(() => {
      successToast.classList.remove("active");
    }, 4000);
  }, 1800);
});


/* 
   ------------------------------------------------------------------------
   9. HERO HEADLINE TYPEWRITER ROTATOR
   ------------------------------------------------------------------------
*/
const typedEl = document.getElementById("typed-text");

if (typedEl) {
  const phrases = [
    { pre: "Building ", word: "Intelligent", post: " Software." },
    { pre: "Crafting ", word: "Scalable", post: " Systems." },
    { pre: "Engineering ", word: "Modern", post: " Web Apps." },
    { pre: "Exploring ", word: "AI", post: " Models." }
  ];
  let phraseIndex = 0;

  typedEl.style.transition = "opacity 0.9s ease";

  function renderPhrase(p) {
    typedEl.innerHTML = `${p.pre}<span class="glow-text">${p.word}</span>${p.post}`;
  }

  renderPhrase(phrases[0]);

  function cyclePhrases() {
    typedEl.style.opacity = "0";

    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      renderPhrase(phrases[phraseIndex]);
      typedEl.style.opacity = "1";
    }, 900);

    setTimeout(cyclePhrases, 5000);
  }

  setTimeout(cyclePhrases, 5000);
}