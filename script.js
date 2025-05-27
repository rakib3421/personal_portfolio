// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader")
  setTimeout(() => {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }, 3000)
})

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

// Particles.js Configuration
const particlesJS = window.particlesJS // Declare particlesJS variable
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
})

// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
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

    setTimeout(() => {
      this.innerHTML = originalText
    }, 1000)
  })
})

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu if open
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  }

  // Arrow key navigation for sections
  if (e.key === "ArrowDown" && e.ctrlKey) {
    e.preventDefault()
    const sections = document.querySelectorAll("section[id]")
    const currentSection = getCurrentSection()
    const currentIndex = Array.from(sections).findIndex((section) => section.id === currentSection)

    if (currentIndex < sections.length - 1) {
      sections[currentIndex + 1].scrollIntoView({ behavior: "smooth" })
    }
  }

  if (e.key === "ArrowUp" && e.ctrlKey) {
    e.preventDefault()
    const sections = document.querySelectorAll("section[id]")
    const currentSection = getCurrentSection()
    const currentIndex = Array.from(sections).findIndex((section) => section.id === currentSection)

    if (currentIndex > 0) {
      sections[currentIndex - 1].scrollIntoView({ behavior: "smooth" })
    }
  }
})

function getCurrentSection() {
  const sections = document.querySelectorAll("section[id]")
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  return current
}

// Enhanced form validation
const formInputs = document.querySelectorAll(".form-group input, .form-group textarea")
formInputs.forEach((input) => {
  input.addEventListener("blur", function () {
    validateField(this)
  })

  input.addEventListener("input", function () {
    if (this.classList.contains("error")) {
      validateField(this)
    }
  })
})

function validateField(field) {
  const value = field.value.trim()
  const fieldType = field.type
  let isValid = true
  let errorMessage = ""

  // Remove existing error styling
  field.classList.remove("error")
  const existingError = field.parentNode.querySelector(".error-message")
  if (existingError) {
    existingError.remove()
  }

  // Validation rules
  if (field.hasAttribute("required") && !value) {
    isValid = false
    errorMessage = "This field is required"
  } else if (fieldType === "email" && value && !isValidEmail(value)) {
    isValid = false
    errorMessage = "Please enter a valid email address"
  } else if (field.name === "name" && value && value.length < 2) {
    isValid = false
    errorMessage = "Name must be at least 2 characters long"
  } else if (field.name === "message" && value && value.length < 10) {
    isValid = false
    errorMessage = "Message must be at least 10 characters long"
  }

  if (!isValid) {
    field.classList.add("error")
    const errorElement = document.createElement("div")
    errorElement.className = "error-message"
    errorElement.textContent = errorMessage
    errorElement.style.cssText = `
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            animation: slideInUp 0.3s ease;
        `
    field.parentNode.appendChild(errorElement)
  }

  return isValid
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Add CSS for error states
const errorStyles = document.createElement("style")
errorStyles.textContent = `
    .form-group input.error,
    .form-group textarea.error {
        border-color: #ef4444 !important;
        background: rgba(239, 68, 68, 0.1) !important;
    }

    .form-group input.error:focus,
    .form-group textarea.error:focus {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
`
document.head.appendChild(errorStyles)

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
  let inThrottle
  return function () {
    const args = arguments

    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(() => {
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar")
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }

    // Active navigation highlighting
    const sections = document.querySelectorAll("section[id]")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = ""
    sections.forEach((section) => {
      const sectionTop = section.offsetTop
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
  }, 100),
)

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add entrance animations to hero elements
  const heroElements = document.querySelectorAll(
    ".hero-greeting, .hero-title, .hero-subtitle-container, .hero-description, .hero-buttons, .hero-social, .hero-image",
  )
  heroElements.forEach((element, index) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    setTimeout(
      () => {
        element.style.transition = "all 0.8s ease"
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      },
      200 + index * 200,
    )
  })

  // Initialize AOS-like animations
  const aosElements = document.querySelectorAll("[data-aos]")
  aosElements.forEach((element) => {
    observer.observe(element)
  })
})

// Add smooth page transitions
window.addEventListener("beforeunload", () => {
  document.body.style.opacity = "0"
  document.body.style.transition = "opacity 0.3s ease"
})

// Easter egg: Konami code
const konamiCode = []
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65] // Up Up Down Down Left Right Left Right B A

document.addEventListener("keydown", (e) => {
  konamiCode.push(e.keyCode)
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift()
  }

  if (konamiCode.join(",") === konamiSequence.join(",")) {
    showNotification("🎉 Konami Code activated! You found the easter egg!", "success")
    // Add some fun effect
    document.body.style.animation = "rainbow 2s ease-in-out"
    setTimeout(() => {
      document.body.style.animation = ""
    }, 2000)
  }
})

// Add rainbow animation for easter egg
const rainbowStyles = document.createElement("style")
rainbowStyles.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`
document.head.appendChild(rainbowStyles)

// Make sure emailjs is loaded before this script runs, e.g., by including the CDN in your HTML file
(function(){
  emailjs.init("YOUR_USER_ID");
})();
