// Initialize particles.js first
document.addEventListener("DOMContentLoaded", () => {
    // Initialize particles
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#6366f1",
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000",
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#6366f1",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse",
                },
                onclick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    });

    // Start loading animation
    const progress = document.querySelector(".progress");
    const preloader = document.querySelector(".preloader");
    let width = 0;

    const increaseProgress = () => {
        if (width >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.style.opacity = "0";
                document.body.style.overflow = "visible";
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 500);
            }, 500);
            return;
        }
        width += Math.random() * 15;
        if (width > 100) width = 100;
        progress.style.width = width + "%";
    };

    const progressInterval = setInterval(increaseProgress, 100);

    // Fallback if loading takes too long
    setTimeout(() => {
        if (preloader.style.display !== "none") {
            width = 100;
            progress.style.width = "100%";
            clearInterval(progressInterval);
            preloader.style.opacity = "0";
            document.body.style.overflow = "visible";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        }
    }, 5000);
});

// Custom Cursor
const cursor = document.querySelector(".cursor")
const cursorFollower = document.querySelector(".cursor-follower")

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px"
  cursor.style.top = e.clientY + "px"

  setTimeout(() => {
    cursorFollower.style.left = e.clientX + "px"
    cursorFollower.style.top = e.clientY + "px"
  }, 100)
})

// Hide cursor on mobile
if (window.innerWidth <= 768) {
  cursor.style.display = "none"
  cursorFollower.style.display = "none"
}

// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
  toggleScrollLock(navMenu.classList.contains("active"))
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    navMenu.classList.contains("active") &&
    !navMenu.contains(e.target) &&
    !navToggle.contains(e.target)
  ) {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
    toggleScrollLock(false)
  }
})

// Handle orientation change
window.addEventListener("orientationchange", () => {
  // Reset mobile menu
  navMenu.classList.remove("active")
  navToggle.classList.remove("active")
  toggleScrollLock(false)

  // Reset any full-height elements
  setTimeout(() => {
    document.documentElement.style.height = "100%"
    document.body.style.height = "100%"
  }, 300)
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Typewriter Effect
const typewriter = document.getElementById("typewriter")
const texts = ["AI Developer", "Data Scientist", "Machine Learning Engineer", "Python Developer", "Problem Solver"]

let textIndex = 0
let charIndex = 0
let isDeleting = false

function type() {
  const currentText = texts[textIndex]

  if (isDeleting) {
    typewriter.textContent = currentText.substring(0, charIndex - 1)
    charIndex--
  } else {
    typewriter.textContent = currentText.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    textIndex = (textIndex + 1) % texts.length
    typeSpeed = 500
  }

  setTimeout(type, typeSpeed)
}

// Start typewriter effect after page load
setTimeout(type, 1000)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Trigger skill bar animations
      if (entry.target.classList.contains("skill-category")) {
        animateSkillBars(entry.target)
      }

      // Trigger counter animations
      if (entry.target.classList.contains("stat-card")) {
        animateCounter(entry.target)
      }
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".skill-category, .timeline-item, .project-card, .education-card, .stat-card",
  )
  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Skill bar animation
function animateSkillBars(skillCategory) {
  const skillItems = skillCategory.querySelectorAll(".skill-item")
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      const level = item.getAttribute("data-level")
      const progressBar = item.querySelector(".skill-progress")
      progressBar.style.width = level + "%"
    }, index * 200)
  })
}

// Counter animation
function animateCounter(statCard) {
  const numberElement = statCard.querySelector(".stat-number")
  const target = Number.parseFloat(numberElement.getAttribute("data-target"))
  const duration = 2000
  const increment = target / (duration / 16)
  let current = 0

  const updateCounter = () => {
    current += increment
    if (current < target) {
      numberElement.textContent = Math.floor(current)
      requestAnimationFrame(updateCounter)
    } else {
      numberElement.textContent = target
    }
  }

  updateCounter()
}

// Contact form handling
const contactForm = document.getElementById("contact-form")
contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const submitBtn = this.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = '<span class="loading"></span> Sending...'
  submitBtn.disabled = true

  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      this.reset()
      submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      submitBtn.style.background = "linear-gradient(135deg, #10b981, #059669)"
      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.style.background = ""
        submitBtn.disabled = false
      }, 3000)
      showNotification("Message sent successfully! I'll get back to you soon.", "success")
    }, () => {
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
      showNotification("Failed to send message. Please try again.", "error")
    })
})

// Notification system
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "linear-gradient(135deg, #10b981, #059669)" : "linear-gradient(135deg, #6366f1, #8b5cf6)"};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
        backdrop-filter: blur(20px);
    `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Close button functionality
  const closeBtn = notification.querySelector(".notification-close")
  closeBtn.addEventListener("click", () => {
    notification.style.transform = "translateX(400px)"
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification)
      }
    }, 300)
  })

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.style.transform = "translateX(400px)"
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }
  }, 5000)
}

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-content")
  const heroImage = document.querySelector(".hero-image")

  if (hero && scrolled < window.innerHeight) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`
    heroImage.style.transform = `translateY(${scrolled * 0.2}px)`
  }
})

// Project card tilt effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 10
    const rotateY = (centerX - x) / 10

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)"
  })
})

// Skill tags hover effect with enhanced animation
document.querySelectorAll(".skill-tag, .tech-tag").forEach((tag) => {
  tag.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.1) rotate(3deg)"
    this.style.boxShadow = "0 5px 15px rgba(99, 102, 241, 0.3)"
  })

  tag.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1) rotate(0deg)"
    this.style.boxShadow = "none"
  })
})

// Enhanced scroll indicator
const scrollIndicator = document.querySelector(".scroll-indicator")
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
      behavior: "smooth",
    })
  })
}

// Add loading animation to external links
document.querySelectorAll('a[target="_blank"]').forEach((link) => {
  link.addEventListener("click", function () {
    const originalText = this.innerHTML
    this.innerHTML = '<span class="loading"></span> Opening...'
    this.disabled = true
  })
})

// Section reveal on scroll
const sections = document.querySelectorAll("section")
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal")
        sectionObserver.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.2,
  },
)

sections.forEach((section) => {
  sectionObserver.observe(section)
})

// Smooth scroll to top button
const scrollToTopBtn = document.querySelector(".scroll-to-top")
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add("visible")
  } else {
    scrollToTopBtn.classList.remove("visible")
  }
})

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle")
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

// Apply dark mode if the user had previously selected it
if (localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode")
}

// Apply dark mode if the system preference is dark
else if (prefersDarkScheme.matches) {
  document.body.classList.add("dark-mode")
}

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")

  // Save user preference in local storage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled")
  } else {
    localStorage.setItem("dark-mode", "disabled")
  }
})

// Media element animations
const mediaElements = document.querySelectorAll(".media-element")
const mediaObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const media = entry.target.querySelector("video, img")
        if (media.tagName === "VIDEO") {
          media.play()
        } else {
          media.classList.add("fade-in")
        }
        mediaObserver.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.2,
  },
)

mediaElements.forEach((element) => {
  mediaObserver.observe(element)
})

// Form validation and submission
const form = document.getElementById("myForm")
form.addEventListener("submit", function (e) {
  e.preventDefault()

  // Simple client-side validation
  const name = this.name.value.trim()
  const email = this.email.value.trim()
  const message = this.message.value.trim()

  if (!name || !email || !message) {
    return showNotification("Please fill in all fields.", "error")
  }

  if (!validateEmail(email)) {
    return showNotification("Please enter a valid email address.", "error")
  }

  // If validation passes, submit the form
  this.submit()
})

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(String(email).toLowerCase())
}

// Dynamic content loading for portfolio
const projectContainer = document.getElementById("project-container")
const projectLoader = document.getElementById("project-loader")

function loadProjects() {
  projectLoader.style.display = "block"

  setTimeout(() => {
    projectLoader.style.display = "none"

    // Simulate loaded projects
    const projects = [
      {
        title: "Project 1",
        description: "Description for project 1",
        image: "https://via.placeholder.com/400x300",
        url: "#",
      },
      {
        title: "Project 2",
        description: "Description for project 2",
        image: "https://via.placeholder.com/400x300",
        url: "#",
      },
      {
        title: "Project 3",
        description: "Description for project 3",
        image: "https://via.placeholder.com/400x300",
        url: "#",
      },
    ]

    projects.forEach((project) => {
      const projectCard = document.createElement("div")
      projectCard.className = "project-card"
      projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <a href="${project.url}" class="btn">View Project</a>
                </div>
            `
      projectContainer.appendChild(projectCard)
    })
  }, 1000)
}

// Load projects on page load
loadProjects()

// Filter projects by category
const filterBtns = document.querySelectorAll(".filter-btn")
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const category = this.getAttribute("data-filter")

    // Active class toggle
    filterBtns.forEach((b) => b.classList.remove("active"))
    this.classList.add("active")

    // Filter logic
    const projects = document.querySelectorAll(".project-card")
    projects.forEach((project) => {
      if (category === "all" || project.classList.contains(category)) {
        project.style.display = "block"
      } else {
        project.style.display = "none"
      }
    })
  })
})

// Scroll reveal for services section
const servicesSection = document.getElementById("services")
const serviceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const services = entry.target.querySelectorAll(".service")
        services.forEach((service, index) => {
          setTimeout(() => {
            service.classList.add("slide-in")
          }, index * 100)
        })
        serviceObserver.unobserve(entry.target)
      }
    })
  },
  {
    threshold: 0.2,
  },
)

serviceObserver.observe(servicesSection)

// Fallback to remove preloader if it's stuck
setTimeout(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader && preloader.style.display !== "none") {
        preloader.style.opacity = "0";
        document.body.style.overflow = "visible";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
}, 5000); // Fallback after 5 seconds

// Initialize EmailJS with your public key
(function() {
    emailjs.init("7zeJusMVYP40IQSgP"); // Add quotes around the public key
})();

// Function to send email
function sendEmail(e) {
    e.preventDefault();

    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Add input validation
    if (!templateParams.from_name || !templateParams.from_email || !templateParams.subject || !templateParams.message) {
        showNotification('Please fill in all fields', 'error');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        return;
    }

    // Send email using EmailJS
    emailjs.send('service_uo1q4ea', 'template_idkiidg', templateParams)
        .then(function(response) {
            // Success
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent Successfully!';
            document.getElementById('contact-form').reset();
            showNotification('Message sent successfully!', 'success');
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        }, function(error) {
            // Error
            submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
            console.error('Email failed to send:', error);
            showNotification('Failed to send message. Please try again.', 'error');
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
}
