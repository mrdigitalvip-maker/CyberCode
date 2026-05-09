/* ===================================
   CYBERCORE - JAVASCRIPT ANIMATIONS & INTERACTIONS
   Matrix Rain, Particles, Terminal & Effects
   =================================== */

// ===== MATRIX RAIN ANIMATION =====
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        this.columns = [];
        this.resizeCanvas();
        this.animate();

        window.addEventListener('resize', () => this.resizeCanvas());
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fontSize = 16;
        this.columnWidth = this.fontSize;
        this.initColumns();
    }

    initColumns() {
        const columnCount = Math.ceil(this.canvas.width / this.columnWidth);
        this.columns = Array(columnCount).fill(0).map(() => ({
            y: Math.random() * this.canvas.height,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.3,
            chars: this.getRandomChars(Math.random() * 30 + 10)
        }));
    }

    getRandomChars(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        }
        return result;
    }

    animate() {
        // Semi-transparent black fill for trail effect
        this.ctx.fillStyle = 'rgba(10, 10, 20, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Green text
        this.ctx.fillStyle = 'rgba(0, 255, 136, 0.6)';
        this.ctx.font = `${this.fontSize}px 'Courier New', monospace`;
        this.ctx.shadowColor = 'rgba(0, 255, 136, 0.5)';
        this.ctx.shadowBlur = 10;

        this.columns.forEach((column, index) => {
            const x = index * this.columnWidth;
            
            // Display characters
            column.chars.split('').forEach((char, charIndex) => {
                const y = column.y + charIndex * this.fontSize;
                
                if (y > this.canvas.height) {
                    return;
                }

                // Brightness gradient (brighter at top of rain)
                const brightness = 1 - (charIndex / column.chars.length);
                this.ctx.globalAlpha = brightness * column.opacity * 0.8;
                this.ctx.fillText(char, x, y);
            });

            // Reset global alpha
            this.ctx.globalAlpha = 1;

            // Update position
            column.y += column.speed;

            // Reset when off-screen
            if (column.y > this.canvas.height) {
                column.y = -column.chars.length * this.fontSize;
                column.speed = Math.random() * 2 + 1;
                column.chars = this.getRandomChars(Math.random() * 30 + 10);
            }
        });

        requestAnimationFrame(() => this.animate());
    }
}

// ===== PARTICLES SYSTEM =====
class ParticleSystem {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.particles = [];
        this.createParticles();
        this.animateParticles();
    }

    createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const delay = Math.random() * 15;
            const duration = 15 + Math.random() * 10;
            const startX = Math.random() * window.innerWidth;
            
            particle.style.left = startX + 'px';
            particle.style.bottom = '-10px';
            particle.style.animationDuration = duration + 's';
            particle.style.animationDelay = delay + 's';
            
            this.container.appendChild(particle);
            this.particles.push({
                element: particle,
                startTime: Date.now(),
                delay: delay,
                duration: duration,
                startX: startX
            });
        }
    }

    animateParticles() {
        setInterval(() => {
            // Randomly create new particles
            if (this.particles.length < 50) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const delay = 0;
                const duration = 15 + Math.random() * 10;
                const startX = Math.random() * window.innerWidth;
                
                particle.style.left = startX + 'px';
                particle.style.bottom = '-10px';
                particle.style.animationDuration = duration + 's';
                
                this.container.appendChild(particle);
                this.particles.push({
                    element: particle,
                    startTime: Date.now(),
                    delay: 0,
                    duration: duration,
                    startX: startX
                });

                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                    this.particles = this.particles.filter(p => p.element !== particle);
                }, duration * 1000);
            }
        }, 2000);
    }
}

// ===== TERMINAL SYSTEM =====
class TerminalSystem {
    constructor() {
        this.terminalContent = document.getElementById('terminalContent');
        this.terminalTime = document.getElementById('terminalTime');
        this.messages = [
            '> Processing neural network...',
            '> <span class="highlight">✓ Quantum processors online</span>',
            '> Synchronizing with network...',
            '> <span class="highlight">✓ Firewall active</span>',
            '> Accessing secure protocols...',
            '> <span class="highlight">✓ Encryption verified</span>',
            '> Running diagnostic systems...',
            '> <span class="highlight">✓ All parameters nominal</span>',
            '> Initiating deep scan...',
            '> <span class="highlight">✓ Scan complete</span>',
            '> Updating AI core...',
            '> <span class="highlight">✓ Update successful</span>',
            '> Ready for next command...',
        ];
        this.messageIndex = 0;
        this.updateTerminal();
        this.updateTime();
    }

    updateTerminal() {
        setInterval(() => {
            const newLine = document.createElement('div');
            newLine.className = 'terminal-line';
            newLine.innerHTML = this.messages[this.messageIndex % this.messages.length];
            
            this.terminalContent.appendChild(newLine);
            
            // Keep only last 6 lines
            const lines = this.terminalContent.querySelectorAll('.terminal-line');
            if (lines.length > 6) {
                lines[0].remove();
            }

            // Auto-scroll to bottom
            this.terminalContent.scrollTop = this.terminalContent.scrollHeight;
            
            this.messageIndex++;
        }, 3000);
    }

    updateTime() {
        const updateClock = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            
            this.terminalTime.textContent = `${hours}:${minutes}:${seconds}`;
        };

        updateClock();
        setInterval(updateClock, 1000);
    }
}

// ===== INTERACTIVE EFFECTS =====
class InteractiveEffects {
    constructor() {
        this.setupMouseGlow();
        this.setupKeyboardInteractions();
        this.setupHoverEffects();
    }

    setupMouseGlow() {
        let mouseX = 0;
        let mouseY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Create subtle glow effect at mouse position
            const glow = document.createElement('div');
            glow.style.position = 'fixed';
            glow.style.left = mouseX + 'px';
            glow.style.top = mouseY + 'px';
            glow.style.width = '30px';
            glow.style.height = '30px';
            glow.style.background = 'radial-gradient(circle, rgba(0, 255, 136, 0.3) 0%, transparent 70%)';
            glow.style.borderRadius = '50%';
            glow.style.pointerEvents = 'none';
            glow.style.zIndex = '999';
            glow.style.transform = 'translate(-50%, -50%)';
            glow.style.animation = 'fade-out 0.6s ease-out forwards';

            document.body.appendChild(glow);

            setTimeout(() => glow.remove(), 600);
        });

        // Add fade-out animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fade-out {
                0% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(1.5);
                }
            }
        `;
        document.head.appendChild(style);
    }

    setupKeyboardInteractions() {
        document.addEventListener('keypress', (e) => {
            // Terminal effect on key press
            const terminalContent = document.getElementById('terminalContent');
            if (e.key !== ' ') {
                const keyEvent = document.createElement('div');
                keyEvent.className = 'terminal-line';
                keyEvent.innerHTML = `> KEY_PRESS: <span class="highlight">${e.key.toUpperCase()}</span> [${e.keyCode}]`;
                terminalContent.appendChild(keyEvent);

                const lines = terminalContent.querySelectorAll('.terminal-line');
                if (lines.length > 6) {
                    lines[0].remove();
                }
            }
        });
    }

    setupHoverEffects() {
        const specItems = document.querySelectorAll('.spec-item');
        specItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
            });
        });

        const hudElements = document.querySelectorAll('.hud-element');
        hudElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.style.transform = 'scale(1.05)';
                element.style.filter = 'brightness(1.2)';
            });

            element.addEventListener('mouseleave', () => {
                element.style.transform = 'scale(1)';
                element.style.filter = 'brightness(1)';
            });
        });
    }
}

// ===== ADVANCED EFFECTS =====
class AdvancedEffects {
    constructor() {
        this.setupGlitchEffect();
        this.setupScreenFlicker();
        this.setupCyberpunkPulse();
    }

    setupGlitchEffect() {
        // Random glitch effects
        setInterval(() => {
            if (Math.random() < 0.05) {
                const container = document.querySelector('.container');
                container.style.filter = 'hue-rotate(180deg)';
                setTimeout(() => {
                    container.style.filter = 'hue-rotate(0deg)';
                }, 50);
            }
        }, 2000);
    }

    setupScreenFlicker() {
        // Subtle screen flicker for immersion
        setInterval(() => {
            if (Math.random() < 0.03) {
                const vignette = document.querySelector('.vignette');
                const originalOpacity = window.getComputedStyle(vignette).opacity;
                vignette.style.opacity = '0.7';
                setTimeout(() => {
                    vignette.style.opacity = originalOpacity;
                }, 30);
            }
        }, 1000);
    }

    setupCyberpunkPulse() {
        // Pulse effect on entire interface
        let pulseIntensity = 0;
        setInterval(() => {
            const container = document.querySelector('.container');
            pulseIntensity = (pulseIntensity + 0.02) % 1;
            const brightness = 0.95 + Math.sin(pulseIntensity * Math.PI) * 0.05;
            container.style.filter = `brightness(${brightness})`;
        }, 50);
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('%cCyberCore v2.0', 'color: #00ff88; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff88;');
    console.log('%cNeural Interface Activated', 'color: #00ff44; font-size: 14px;');
    console.log('%cAll systems operational', 'color: #00ff88; font-size: 12px;');

    // Initialize Matrix Rain
    const canvas = document.getElementById('matrixCanvas');
    const matrix = new MatrixRain(canvas);

    // Initialize Particle System
    const particles = new ParticleSystem('particlesContainer');

    // Initialize Terminal
    const terminal = new TerminalSystem();

    // Initialize Interactive Effects
    const interactive = new InteractiveEffects();

    // Initialize Advanced Effects
    const advanced = new AdvancedEffects();

    // Add smooth transitions
    document.body.style.transition = 'all 0.3s ease';

    // Performance monitoring (optional)
    let frameCount = 0;
    let lastTime = Date.now();
    
    const checkPerformance = () => {
        frameCount++;
        const currentTime = Date.now();
        if (currentTime - lastTime >= 1000) {
            console.log(`FPS: ${frameCount}`);
            frameCount = 0;
            lastTime = currentTime;
        }
        requestAnimationFrame(checkPerformance);
    };

    // Uncomment to enable FPS monitoring
    // checkPerformance();
});

// ===== UTILITY FUNCTIONS =====
function createGlowEffect(element, color = '#00ff88') {
    const glow = document.createElement('div');
    glow.style.position = 'absolute';
    glow.style.top = '50%';
    glow.style.left = '50%';
    glow.style.transform = 'translate(-50%, -50%)';
    glow.style.width = element.offsetWidth + 'px';
    glow.style.height = element.offsetHeight + 'px';
    glow.style.background = `radial-gradient(ellipse at center, ${color}33 0%, transparent 70%)`;
    glow.style.pointerEvents = 'none';
    glow.style.zIndex = '-1';
    element.style.position = 'relative';
    element.appendChild(glow);
}

function animate(element, keyframes, duration = 1000) {
    return new Promise((resolve) => {
        element.animate(keyframes, {
            duration: duration,
            fill: 'forwards'
        }).onfinish = resolve;
    });
}

// ===== ERROR HANDLING =====
window.addEventListener('error', (event) => {
    console.error('%cCyberCore Error:', 'color: #ff006e; font-weight: bold;', event.message);
});

// ===== PERFORMANCE OPTIMIZATION =====
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
            console.warn(`%cPerformance Issue: ${entry.name} took ${entry.duration.toFixed(2)}ms`, 'color: #ffaa00;');
        }
    }
});

observer.observe({ entryTypes: ['measure', 'navigation'] });

// ===== RESPONSIVE HANDLER =====
window.addEventListener('resize', () => {
    // Adjust layout on resize
    const container = document.querySelector('.container');
    container.style.transition = 'all 0.3s ease';
});

// ===== FULLSCREEN FUNCTIONALITY =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'F11' || (e.key === 'F' && e.ctrlKey)) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`%cFullscreen request failed: ${err.message}`, 'color: #ffaa00;');
            });
        }
    }
});

// ===== DARK MODE LOCK =====
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all') {
    console.log('%cDark mode detected and applied', 'color: #00ff88;');
}

// Prevent light mode
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
    if (e.matches) {
        document.body.style.colorScheme = 'dark';
    }
});
