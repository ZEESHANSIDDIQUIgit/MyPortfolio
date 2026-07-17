/* 
   ========================================================================
   SCRIPT.JS - Interactive Engine for Muhammad Zeeshan Siddiqui Portfolio
   ========================================================================
*/

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Project Data Store for Modals
const projectData = {
  finance_pro: {
    title: "FINANCE-PRO",
    category: "Full-Stack Web Application",
    tech: "Node.js, Express.js, MySQL, Javascript, HTML5/CSS",
    duration: "5 Weeks",
    link: "https://github.com/ZEESHANSIDDIQUIgit/FINACNEPRO-FINANCE_MANAGEMENT-SYSTEM",
    img: "images/finance-pro.png",
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
    img: "images/shark-assistant.png",
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
    img: "images/library-system.png",
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
    img: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'><rect width='100%' height='100%' fill='%23100c07'/><path d='M 350 200 L 450 200 L 450 300 L 350 300 Z' fill='none' stroke='%23D4AF37' stroke-width='1.5'/><circle cx='400' cy='250' r='5' fill='%23F2CC5C'/></svg>",
    desc: [
      "Your open-source personal hub containing active markdown statistics, automation workflow tokens, active repository listings, and profile metadata configurations.",
      "Used to host your main profile README visual elements, presenting your developer bio, programming languages, database structures, and links to your active socials.",
      "Maintains clean git history logs and operates as the entry point for your open source profile."
    ]
  }
};

/* 
   ------------------------------------------------------------------------
   1. PREMIUM CANVAS CURSOR — desktop only, skipped if reduced motion is preferred
   ------------------------------------------------------------------------
*/
const isTouchDevice = () => window.matchMedia("(hover: none) and (pointer: coarse)").matches;

const cursorCanvas = document.getElementById("cursor-canvas");
const cursorCtx = cursorCanvas.getContext("2d");

if (!isTouchDevice() && !reduceMotion) {
  cursorCanvas.width = window.innerWidth;
  cursorCanvas.height = window.innerHeight;
  window.addEventListener("resize", () => {
    cursorCanvas.width = window.innerWidth;
    cursorCanvas.height = window.innerHeight;
  });

  let cur = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let ring = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let isHovering = false;
  let isVisible = false;

  const trail = [];
  const TRAIL_LENGTH = 18;
  for (let i = 0; i < TRAIL_LENGTH; i++) {
    trail.push({ x: cur.x, y: cur.y });
  }

  window.addEventListener("mousemove", (e) => {
    cur.x = e.clientX;
    cur.y = e.clientY;
    isVisible = true;
  });
  window.addEventListener("mouseleave", () => { isVisible = false; });

  function drawCursor() {
    cursorCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

    if (!isVisible) { requestAnimationFrame(drawCursor); return; }

    const ease = isHovering ? 0.12 : 0.18;
    ring.x += (cur.x - ring.x) * ease;
    ring.y += (cur.y - ring.y) * ease;

    trail.unshift({ x: cur.x, y: cur.y });
    if (trail.length > TRAIL_LENGTH) trail.pop();

    for (let i = trail.length - 1; i > 0; i--) {
      const t = i / trail.length;
      const alpha = (1 - t) * 0.35;
      const size = (1 - t) * (isHovering ? 5 : 3.5);
      const grad = cursorCtx.createRadialGradient(trail[i].x, trail[i].y, 0, trail[i].x, trail[i].y, size);
      grad.addColorStop(0, `rgba(212,175,55,${alpha})`);
      grad.addColorStop(1, `rgba(212,175,55,0)`);
      cursorCtx.beginPath();
      cursorCtx.arc(trail[i].x, trail[i].y, size, 0, Math.PI * 2);
      cursorCtx.fillStyle = grad;
      cursorCtx.fill();
    }

    const ringRadius = isHovering ? 22 : 16;
    const ringAlpha = isHovering ? 0.9 : 0.6;
    const time = Date.now() * 0.002;

    cursorCtx.save();
    cursorCtx.translate(ring.x, ring.y);
    cursorCtx.rotate(time);
    cursorCtx.beginPath();
    cursorCtx.arc(0, 0, ringRadius, 0, Math.PI * 1.7);
    cursorCtx.strokeStyle = `rgba(212,175,55,${ringAlpha})`;
    cursorCtx.lineWidth = isHovering ? 2 : 1.5;
    cursorCtx.lineCap = "round";
    cursorCtx.stroke();
    cursorCtx.restore();

    cursorCtx.save();
    cursorCtx.translate(ring.x, ring.y);
    cursorCtx.rotate(-time * 0.6);
    cursorCtx.beginPath();
    cursorCtx.arc(0, 0, ringRadius, 0, Math.PI * 0.6);
    cursorCtx.strokeStyle = `rgba(242,204,92,${ringAlpha * 0.5})`;
    cursorCtx.lineWidth = 1;
    cursorCtx.lineCap = "round";
    cursorCtx.stroke();
    cursorCtx.restore();

    const glow = cursorCtx.createRadialGradient(ring.x, ring.y, 0, ring.x, ring.y, ringRadius + 10);
    glow.addColorStop(0, `rgba(212,175,55,${isHovering ? 0.12 : 0.06})`);
    glow.addColorStop(1, "rgba(212,175,55,0)");
    cursorCtx.beginPath();
    cursorCtx.arc(ring.x, ring.y, ringRadius + 10, 0, Math.PI * 2);
    cursorCtx.fillStyle = glow;
    cursorCtx.fill();

    const dotGrad = cursorCtx.createRadialGradient(cur.x, cur.y, 0, cur.x, cur.y, isHovering ? 5 : 3);
    dotGrad.addColorStop(0, "rgba(255,255,255,1)");
    dotGrad.addColorStop(0.4, "rgba(245,214,122,0.9)");
    dotGrad.addColorStop(1, "rgba(212,175,55,0)");
    cursorCtx.beginPath();
    cursorCtx.arc(cur.x, cur.y, isHovering ? 5 : 3, 0, Math.PI * 2);
    cursorCtx.fillStyle = dotGrad;
    cursorCtx.fill();

    requestAnimationFrame(drawCursor);
  }
  drawCursor();

  function initCursorInteractions() {
    const interactives = document.querySelectorAll(".cursor-interactive, a, button, select, textarea, input, .project-card");
    interactives.forEach(el => {
      el.addEventListener("mouseenter", () => { isHovering = true; });
      el.addEventListener("mouseleave", () => { isHovering = false; });
    });
  }
  initCursorInteractions();

  // Re-expose so filter section can call it
  window.initCursorInteractions = initCursorInteractions;
} else {
  cursorCanvas.style.display = "none";
}

/* 
   ------------------------------------------------------------------------
   2. AMBIENT PARTICLES — animated normally, drawn once statically if the
      user prefers reduced motion
   ------------------------------------------------------------------------
*/
const canvas = document.getElementById("ambient-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = isTouchDevice() ? 30 : 60;
const connectionDistance = 120;
let mouse = { x: null, y: null, radius: 150 };

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener("mouseleave", () => { mouse.x = null; mouse.y = null; });

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
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
    if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
    if (mouse.x !== null && mouse.y !== null) {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius;
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * 2;
        this.y += Math.sin(angle) * force * 2;
      }
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
    ctx.fill();
  }
}

function initParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) particles.push(new Particle());
}
initParticles();

function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < connectionDistance) {
        const opacity = (1 - distance / connectionDistance) * 0.08;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(handleParticles);
}

if (reduceMotion) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => p.draw());
} else {
  handleParticles();
}

/* 
   ------------------------------------------------------------------------
   3. SCROLL REVEAL & NAV
   ------------------------------------------------------------------------
*/
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);

  let currentSecId = "home";
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 120;
    if (window.scrollY >= secTop && window.scrollY < secTop + sec.clientHeight) {
      currentSecId = sec.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSecId}`) link.classList.add("active");
  });
}, { passive: true });

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal-active");
      if (entry.target.classList.contains("skills-grid")) animateSkills();
      if (entry.target.classList.contains("timeline")) animateTimelineGlow(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(el => revealObserver.observe(el));

/* 
   ------------------------------------------------------------------------
   4. TIMELINE GLOW — works for any number of .timeline blocks on the page
   ------------------------------------------------------------------------
*/
function animateTimelineGlow(timelineEl) {
  const glowLine = timelineEl.querySelector(".timeline-glow-line");
  const timelineItems = timelineEl.querySelectorAll(".timeline-item");
  if (!glowLine) return;
  setTimeout(() => {
    glowLine.style.height = "100%";
    timelineItems.forEach((item, index) => {
      setTimeout(() => item.classList.add("active"), index * 400);
    });
  }, 300);
}

/* 
   ------------------------------------------------------------------------
   5. SKILL BARS
   ------------------------------------------------------------------------
*/
let skillsAnimated = false;
function animateSkills() {
  if (skillsAnimated) return;
  skillsAnimated = true;
  document.querySelectorAll(".skill-bar-fill").forEach(bar => {
    bar.style.width = bar.getAttribute("data-width");
  });
  document.querySelectorAll(".skill-percent").forEach(txt => {
    const targetVal = parseInt(txt.getAttribute("data-target"), 10);
    let currentVal = 0;
    const stepTime = Math.abs(Math.floor(1500 / targetVal));
    const counter = setInterval(() => {
      currentVal++;
      txt.textContent = `${currentVal}%`;
      if (currentVal >= targetVal) clearInterval(counter);
    }, stepTime);
  });
}

/* 
   ------------------------------------------------------------------------
   6. PROJECT FILTER
   ------------------------------------------------------------------------
*/
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const activeFilter = btn.getAttribute("data-filter");
    projectCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
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
    if (window.initCursorInteractions) setTimeout(window.initCursorInteractions, 400);
  });
});

/* 
   ------------------------------------------------------------------------
   7. PROJECT MODAL
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
    const data = projectData[card.getAttribute("data-project-id")];
    if (!data) return;
    modalImg.src = data.img;
    modalTitle.textContent = data.title;
    modalMetaCategory.textContent = data.category;
    modalMetaDuration.textContent = data.duration;
    modalMetaRole.textContent = data.tech;
    modalLiveLink.href = data.link;
    modalTags.innerHTML = "";
    card.querySelectorAll(".project-tag").forEach(tag => {
      const newTag = document.createElement("span");
      newTag.className = "project-tag";
      newTag.textContent = tag.textContent;
      modalTags.appendChild(newTag);
    });
    modalDescContent.innerHTML = "";
    data.desc.forEach(pText => {
      const p = document.createElement("p");
      p.textContent = pText;
      modalDescContent.appendChild(p);
    });
    document.body.classList.add("modal-open");
    modalOverlay.classList.add("active");
    // Scroll modal to top
    modalOverlay.querySelector(".modal-window").scrollTop = 0;
  });
});

function closeModalWindow() {
  modalOverlay.classList.remove("active");
  document.body.classList.remove("modal-open");
}
modalClose.addEventListener("click", closeModalWindow);
modalBackBtn.addEventListener("click", closeModalWindow);
modalOverlay.addEventListener("click", (e) => { if (e.target === modalOverlay) closeModalWindow(); });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modalOverlay.classList.contains("active")) closeModalWindow();
});

/* 
   ------------------------------------------------------------------------
   8. CONTACT FORM — submits to Formspree (real email delivery)
   ------------------------------------------------------------------------
*/
const contactForm = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const successToast = document.getElementById("success-toast");
const errorToast = document.getElementById("error-toast");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  submitBtn.textContent = "Transmitting Message...";
  submitBtn.style.opacity = "0.7";

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      successToast.classList.add("active");
      contactForm.reset();
      setTimeout(() => successToast.classList.remove("active"), 4000);
    } else {
      errorToast.classList.add("active");
      setTimeout(() => errorToast.classList.remove("active"), 4000);
    }
  } catch (err) {
    errorToast.classList.add("active");
    setTimeout(() => errorToast.classList.remove("active"), 4000);
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Send Message";
    submitBtn.style.opacity = "1";
  }
});

/* 
   ------------------------------------------------------------------------
   9. TYPEWRITER (hero headline)
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
  if (!reduceMotion) setTimeout(cyclePhrases, 5000);
}

/* 
   ------------------------------------------------------------------------
   10. DEV CONSOLE — hero signature element: tab switching + live terminal log
   ------------------------------------------------------------------------
*/
const consoleTabs = document.querySelectorAll(".console-tab");
const consolePanels = document.querySelectorAll(".console-panel");

consoleTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    consoleTabs.forEach(t => { t.classList.remove("active"); t.setAttribute("aria-selected", "false"); });
    consolePanels.forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    const target = document.querySelector(`.console-panel[data-panel="${tab.dataset.tab}"]`);
    if (target) target.classList.add("active");
  });
});

const terminalLogEl = document.getElementById("console-log-text");
if (terminalLogEl) {
  const logLines = [
    "npm run build",
    "compiled successfully in 842ms",
    "fetching repos... 4 active",
    "status: open_to_work",
    "loading AI/ML module..."
  ];

  if (reduceMotion) {
    terminalLogEl.textContent = logLines[0];
  } else {
    let logIndex = 0;

    function typeLogLine(line, onComplete) {
      let i = 0;
      terminalLogEl.textContent = "";
      const typeInterval = setInterval(() => {
        terminalLogEl.textContent += line[i];
        i++;
        if (i >= line.length) {
          clearInterval(typeInterval);
          setTimeout(onComplete, 1800);
        }
      }, 35);
    }

    function cycleLog() {
      typeLogLine(logLines[logIndex], () => {
        logIndex = (logIndex + 1) % logLines.length;
        cycleLog();
      });
    }
    cycleLog();
  }
}

/* 
   ------------------------------------------------------------------------
   11. HAMBURGER MENU — single state flag, no race conditions
   ------------------------------------------------------------------------
*/
const hamburger = document.getElementById("hamburger");
const mobileOverlay = document.getElementById("mobile-overlay");
const mobileLinks = document.querySelectorAll(".mobile-nav-link");

let menuOpen = false;

function openMobileMenu() {
  menuOpen = true;
  hamburger.classList.add("open");
  hamburger.setAttribute("aria-expanded", "true");
  mobileOverlay.classList.add("open");
  document.body.classList.add("modal-open");
}

function closeMobileMenu() {
  menuOpen = false;
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  mobileOverlay.classList.remove("open");
  document.body.classList.remove("modal-open");
}

hamburger.addEventListener("click", () => {
  if (menuOpen) { closeMobileMenu(); } else { openMobileMenu(); }
});

mobileLinks.forEach(link => link.addEventListener("click", closeMobileMenu));
mobileOverlay.addEventListener("click", (e) => { if (e.target === mobileOverlay) closeMobileMenu(); });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOpen) closeMobileMenu();
});