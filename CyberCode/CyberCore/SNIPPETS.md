# 💻 CYBERCORE - CODE SNIPPETS & EXEMPLOS

## Fragmentos de Código Úteis para Customização

---

## 🎨 NOVOS TEMAS DE CORES

### Tema Cyberpunk Clássico
```css
:root {
    --primary-color: #ff10f0;
    --secondary-color: #00ffff;
    --accent-color: #ffff00;
    --dark-bg: #0a0014;
    --dark-panel: #1a0033;
}
```

### Tema Hacker Matrix Puro
```css
:root {
    --primary-color: #00ff00;
    --secondary-color: #00cc00;
    --accent-color: #00ff00;
    --dark-bg: #000000;
    --dark-panel: #0d0d0d;
}
```

### Tema Sci-Fi Futurista
```css
:root {
    --primary-color: #00d9ff;
    --secondary-color: #0099ff;
    --accent-color: #ff0099;
    --dark-bg: #000a1a;
    --dark-panel: #001a33;
}
```

### Tema Retrowave/Synthwave
```css
:root {
    --primary-color: #ff10f0;
    --secondary-color: #00ffff;
    --accent-color: #ffaa00;
    --dark-bg: #0a0520;
    --dark-panel: #1a0a40;
}
```

---

## 🔊 ADICIONAR EFEITOS SONOROS

### Ativar Sons Simples
```javascript
// Som ao clicar
document.addEventListener('click', () => {
    const synth = new AudioContext();
    const osc = synth.createOscillator();
    const gain = synth.createGain();
    osc.connect(gain);
    gain.connect(synth.destination);
    osc.frequency.value = 1000;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.1, synth.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, synth.currentTime + 0.1);
    osc.start();
    osc.stop(synth.currentTime + 0.1);
});
```

### Reproduzir Áudio MP3
```javascript
function playSound(url, volume = 0.5) {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play().catch(err => console.log('Audio play failed:', err));
}

// Uso:
// playSound('sounds/beep.mp3', 0.3);
```

---

## 📊 ADICIONAR DASHBOARD COM ESTATÍSTICAS

### Novo Widget de Estatísticas
```html
<!-- Adicionar em index.html após .tech-specs -->
<div class="stats-widget">
    <div class="stat-bar">
        <span class="stat-name">CPU Usage:</span>
        <div class="stat-bar-fill">
            <div class="stat-bar-value" style="width: 75%;"></div>
        </div>
        <span class="stat-value">75%</span>
    </div>
    
    <div class="stat-bar">
        <span class="stat-name">Memory:</span>
        <div class="stat-bar-fill">
            <div class="stat-bar-value" style="width: 48%;"></div>
        </div>
        <span class="stat-value">48%</span>
    </div>
    
    <div class="stat-bar">
        <span class="stat-name">Network:</span>
        <div class="stat-bar-fill">
            <div class="stat-bar-value" style="width: 92%;"></div>
        </div>
        <span class="stat-value">92%</span>
    </div>
</div>
```

### CSS para Widget
```css
.stats-widget {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    background: rgba(15, 20, 25, 0.5);
    border: 1px solid rgba(0, 255, 136, 0.3);
    border-radius: 8px;
    backdrop-filter: blur(10px);
}

.stat-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
}

.stat-name {
    color: #00ff88;
    min-width: 80px;
}

.stat-bar-fill {
    flex: 1;
    height: 8px;
    background: rgba(0, 255, 136, 0.1);
    border-radius: 4px;
    overflow: hidden;
}

.stat-bar-value {
    height: 100%;
    background: linear-gradient(90deg, #00ff88, #00ff44);
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.stat-value {
    color: #00ff44;
    font-weight: bold;
    min-width: 35px;
    text-align: right;
}
```

---

## 🎮 ADICIONAR CONTROLES INTERATIVOS

### Sistema de Botões Futurista
```html
<div class="control-panel">
    <button class="cyber-button" onclick="handleCommand('scan')">
        SCAN NETWORK
    </button>
    <button class="cyber-button" onclick="handleCommand('analyze')">
        ANALYZE DATA
    </button>
    <button class="cyber-button" onclick="handleCommand('execute')">
        EXECUTE PROTOCOL
    </button>
</div>
```

### CSS para Botões
```css
.control-panel {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
}

.cyber-button {
    padding: 12px 24px;
    background: rgba(0, 255, 136, 0.1);
    border: 2px solid rgba(0, 255, 136, 0.5);
    color: #00ff88;
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);
}

.cyber-button:hover {
    background: rgba(0, 255, 136, 0.2);
    border-color: rgba(0, 255, 136, 0.8);
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.4);
    transform: translateY(-2px);
}

.cyber-button:active {
    transform: translateY(0);
    box-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
}
```

### JavaScript para Botões
```javascript
function handleCommand(command) {
    const terminalContent = document.getElementById('terminalContent');
    const line = document.createElement('div');
    line.className = 'terminal-line';
    
    switch(command) {
        case 'scan':
            line.innerHTML = '> <span class="highlight">✓ Network scan initiated...</span>';
            break;
        case 'analyze':
            line.innerHTML = '> <span class="highlight">✓ Data analysis started...</span>';
            break;
        case 'execute':
            line.innerHTML = '> <span class="highlight">✓ Protocol execution activated...</span>';
            break;
    }
    
    terminalContent.appendChild(line);
    terminalContent.scrollTop = terminalContent.scrollHeight;
}
```

---

## 🌐 ADICIONAR NOTIFICAÇÕES TOAST

### Sistema de Notificações
```javascript
class ToastNotification {
    static show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 20px;
            background: rgba(15, 20, 25, 0.95);
            border: 2px solid rgba(0, 255, 136, 0.5);
            border-radius: 4px;
            color: #00ff88;
            font-family: 'Courier New', monospace;
            font-size: 13px;
            backdrop-filter: blur(10px);
            z-index: 9999;
            animation: toast-slide-in 0.3s ease-out;
            box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
        `;
        
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'toast-slide-out 0.3s ease-out forwards';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// Adicionar animações em CSS:
// @keyframes toast-slide-in { from { transform: translateX(400px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
// @keyframes toast-slide-out { from { transform: translateX(0); opacity: 1; } to { transform: translateX(400px); opacity: 0; } }

// Uso:
// ToastNotification.show('Sistema online!', 'success');
```

---

## 📈 ADICIONAR GRÁFICOS ANIMADOS

### Simples Gráfico de Linhas
```javascript
class SimpleChart {
    constructor(containerId, title) {
        this.container = document.getElementById(containerId);
        this.title = title;
        this.data = [];
        this.createChart();
    }
    
    createChart() {
        const chart = document.createElement('div');
        chart.style.cssText = `
            padding: 20px;
            background: rgba(15, 20, 25, 0.5);
            border: 1px solid rgba(0, 255, 136, 0.3);
            border-radius: 8px;
            backdrop-filter: blur(10px);
            color: #00ff88;
            font-family: 'Courier New', monospace;
        `;
        
        chart.innerHTML = `
            <h3 style="margin-bottom: 15px;">${this.title}</h3>
            <canvas id="chart-canvas" width="300" height="150"></canvas>
        `;
        
        this.container.appendChild(chart);
        this.canvas = chart.querySelector('#chart-canvas');
    }
    
    addData(value) {
        this.data.push(value);
        if (this.data.length > 20) this.data.shift();
        this.draw();
    }
    
    draw() {
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = 'rgba(10, 10, 20, 0.5)';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        ctx.strokeStyle = '#00ff88';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        this.data.forEach((value, index) => {
            const x = (index / this.data.length) * this.canvas.width;
            const y = this.canvas.height - (value * 2);
            
            if (index === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        
        ctx.stroke();
    }
}

// Uso:
// const chart = new SimpleChart('chart-container', 'Performance Monitor');
// setInterval(() => chart.addData(Math.random() * 100), 1000);
```

---

## 🔐 ADICIONAR PROTEÇÃO/BLOQUEIO

### Tela de Login Futurista
```html
<div id="loginScreen" class="login-screen">
    <div class="login-box">
        <h2>NEURAL INTERFACE</h2>
        <p>ACCESS REQUIRED</p>
        
        <input type="password" id="accessCode" placeholder="Enter Access Code...">
        <button onclick="verifyAccess()">AUTHENTICATE</button>
        
        <p id="accessStatus"></p>
    </div>
</div>
```

### CSS e JavaScript
```css
.login-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0a0a0a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
}

.login-box {
    border: 2px solid #00ff88;
    padding: 40px;
    background: rgba(15, 20, 25, 0.9);
    text-align: center;
    border-radius: 4px;
}

.login-box input {
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    background: rgba(0, 255, 136, 0.05);
    border: 1px solid #00ff88;
    color: #00ff88;
    font-family: 'Courier New', monospace;
}
```

```javascript
function verifyAccess() {
    const code = document.getElementById('accessCode').value;
    const status = document.getElementById('accessStatus');
    
    // Código de acesso: "CYBERCORE2026"
    if (code === 'CYBERCORE2026') {
        status.innerHTML = '<span class="highlight">✓ ACCESS GRANTED</span>';
        setTimeout(() => {
            document.getElementById('loginScreen').style.display = 'none';
        }, 500);
    } else {
        status.innerHTML = '<span class="error">✗ ACCESS DENIED</span>';
    }
}
```

---

## 🎬 EFEITOS AVANÇADOS

### Distorção Holográfica
```javascript
function createHolographicEffect(element) {
    setInterval(() => {
        const randomGlitch = Math.random() * 2;
        element.style.filter = `
            hue-rotate(${randomGlitch}deg)
            brightness(${0.95 + Math.random() * 0.1})
            contrast(${1.1 + Math.random() * 0.1})
        `;
    }, 100);
}

// Uso:
// createHolographicEffect(document.querySelector('.hacker-avatar'));
```

### Efeito de Digitalize
```javascript
function digitalizeEffect(element, duration = 1000) {
    return new Promise(resolve => {
        const startTime = Date.now();
        
        const animate = () => {
            const progress = (Date.now() - startTime) / duration;
            
            if (progress < 1) {
                element.style.filter = `pixelate(${progress * 10}px)`;
                requestAnimationFrame(animate);
            } else {
                element.style.filter = 'pixelate(0px)';
                resolve();
            }
        };
        
        animate();
    });
}
```

---

## 📱 MODO RESPONSIVO MELHORADO

### Media Queries Customizadas
```css
/* Ultra-wide screens */
@media (min-width: 2560px) {
    .hacker-frame {
        width: 500px;
        height: 600px;
    }
    
    .hud-text {
        font-size: 20px;
    }
}

/* Large tablets */
@media (min-width: 1200px) and (max-width: 1920px) {
    .hacker-frame {
        width: 350px;
        height: 450px;
    }
}

/* Landscape phones */
@media (max-height: 500px) {
    .hacker-frame {
        width: 150px;
        height: 180px;
    }
    
    .breathing-ring {
        width: 170px;
        height: 170px;
    }
}
```

---

## 🚀 PERFORMANCE TWEAKS

### Lazy Loading de Imagens
```javascript
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}
```

### Debounce para Resize
```javascript
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Uso:
window.addEventListener('resize', debounce(() => {
    console.log('Window resized');
}, 250));
```

---

**CyberCore Code Snippets v1.0**  
Use estes fragmentos para expandir a funcionalidade!
