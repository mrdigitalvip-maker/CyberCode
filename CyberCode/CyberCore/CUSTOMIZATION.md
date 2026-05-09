# 🎨 CYBERCORE - GUIA DE CUSTOMIZAÇÃO

## Como Personalizar a Interface CyberCore

Este guia explica como fazer customizações comuns no projeto.

---

## 1️⃣ ALTERAR CORES

### Mudar a Paleta de Cores Principal

Edite o arquivo `style.css` - seção `:root`:

```css
:root {
    /* Verde Neon (principal) */
    --primary-color: #00ff88;
    
    /* Verde mais escuro (secundário) */
    --secondary-color: #00ff44;
    
    /* Fundo preto profundo */
    --dark-bg: #0a0a0a;
    
    /* Painel escuro */
    --dark-panel: #0f1419;
    
    /* Vermelho cyberpunk (acentos) */
    --accent-color: #ff006e;
    
    /* Cor de brilho */
    --glow-color: #00ff88;
    
    /* Cor do texto */
    --text-color: #00ff88;
}
```

### Exemplos de Temas Alternativos

**Tema Roxo:**
```css
--primary-color: #b300ff;
--secondary-color: #d946ff;
--accent-color: #ff00b3;
```

**Tema Azul Cibernético:**
```css
--primary-color: #00d4ff;
--secondary-color: #00a8ff;
--accent-color: #0080ff;
```

**Tema Vermelho Intenso:**
```css
--primary-color: #ff0033;
--secondary-color: #ff6666;
--accent-color: #cc0000;
```

---

## 2️⃣ MODIFICAR VELOCIDADES DE ANIMAÇÃO

### Mudar Velocidade do Matrix Rain

Em `script.js`, na classe `MatrixRain`:

```javascript
// Aumentar velocidade (valores maiores = mais rápido)
speed: Math.random() * 3 + 1  // Antes: * 2 + 1

// Diminuir velocidade (valores menores = mais lento)
speed: Math.random() * 1 + 0.5  // Bem lento
```

### Mudar Velocidade da Piscada

Em `index.html`, no SVG do eye-glow:

```xml
<!-- Velocidade atual: 2s -->
<animate attributeName="r" values="8;9;10;9;8" dur="2s" repeatCount="indefinite"/>

<!-- Piscada mais rápida -->
<animate attributeName="r" values="8;9;10;9;8" dur="1s" repeatCount="indefinite"/>

<!-- Piscada mais lenta -->
<animate attributeName="r" values="8;9;10;9;8" dur="3s" repeatCount="indefinite"/>
```

### Mudar Velocidade da Respiração

Em `style.css`, busque `@keyframes avatar-breathe`:

```css
@keyframes avatar-breathe {
    /* Ciclo atual: 3 segundos */
    animation-duration: 3s ease-in-out infinite;
    
    /* Respiração mais rápida */
    animation-duration: 2s ease-in-out infinite;
    
    /* Respiração mais lenta */
    animation-duration: 4s ease-in-out infinite;
}
```

---

## 3️⃣ ADICIONAR NOVOS LOGS DE TERMINAL

### Adicionar Mensagens Personalizadas

Em `script.js`, localize a classe `TerminalSystem`:

```javascript
this.messages = [
    '> Initializing CyberCore neural network...',
    '> Loading AI protocols...',
    '> <span class="highlight">✓ All systems operational</span>',
    
    // ADICIONE AQUI:
    '> Sua mensagem customizada...',
    '> <span class="highlight">✓ Seu status</span>',
];
```

### Exemplo de Mensagens Customizadas

```javascript
this.messages = [
    '> Iniciando interface CyberCore...',
    '> Conectando ao servidor neural...',
    '> <span class="highlight">✓ Database sincronizado</span>',
    '> Carregando módulos de IA...',
    '> <span class="highlight">✓ GPT-9000 online</span>',
    '> Verificando credenciais...',
    '> <span class="highlight">✓ Autenticação confirmada</span>',
    '> Pronto para novos comandos...',
];
```

---

## 4️⃣ MODIFICAR CARACTERES DO MATRIX RAIN

### Alterar Caracteres da Chuva

Em `script.js`, localize na classe `MatrixRain`:

```javascript
// Caracteres atuais (0, 1, Kanji)
this.characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';

// Apenas números e letras
this.characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

// Hexadecimal style
this.characters = '0123456789ABCDEF';

// Caracteres matemáticos
this.characters = '+-×÷=±∞∑∫√∛∜∝';

// Emojis tech (experimental)
this.characters = '💾🔐🔒🔓🛡️⚡🔋💻🖥️⌨️🖱️';
```

---

## 5️⃣ PERSONALIZAR TEXTO DO AVATAR

### Mudar Titulo do Hacker

Em `index.html`, localize `.hacker-title`:

```html
<div class="hacker-title">
    <h1>NEURAL INTERFACE ACTIVE</h1>
    <p class="status-line">Status: <span class="status-active">OPERATIONAL</span></p>
</div>

<!-- Alterar para: -->
<div class="hacker-title">
    <h1>CYBERWARE ACTIVATED</h1>
    <p class="status-line">Mode: <span class="status-active">ELITE</span></p>
</div>
```

### Mudar Tech Specs

Em `index.html`, localize `.tech-specs`:

```html
<div class="tech-specs">
    <div class="spec-item">
        <span class="spec-label">CUSTOM PARAM:</span>
        <span class="spec-value">Seu Valor</span>
    </div>
</div>
```

---

## 6️⃣ AJUSTAR TAMANHO DO AVATAR

### Mudar Tamanho do SVG

Em `style.css`, localize `.hacker-frame`:

```css
.hacker-frame {
    width: 300px;   /* Altere aqui (padrão: 300px) */
    height: 400px;  /* Altere aqui (padrão: 400px) */
}

/* Exemplo - Avatar Maior */
.hacker-frame {
    width: 400px;
    height: 500px;
}

/* Exemplo - Avatar Menor */
.hacker-frame {
    width: 200px;
    height: 300px;
}
```

Após alterar `.hacker-frame`, ajuste também:

```css
.breathing-ring {
    width: 420px;   /* width + 120px */
    height: 420px;
}

.neon-glow {
    width: 450px;   /* width + 150px */
    height: 450px;
}
```

---

## 7️⃣ MODIFICAR EFEITOS VISUAIS

### Aumentar/Diminuir Brilho Geral

Em `style.css`, localize `.matrix-rain`:

```css
.matrix-rain {
    filter: brightness(0.8);  /* 0 = escuro, 1 = normal */
}

/* Aumentar brilho */
.matrix-rain {
    filter: brightness(1.2);
}

/* Diminuir ainda mais */
.matrix-rain {
    filter: brightness(0.5);
}
```

### Intensidade do Glow

Em `style.css`, busque `@keyframes neon-glow-pulse`:

```css
@keyframes neon-glow-pulse {
    0%, 100% {
        /* Aumentar intensidade do glow */
        box-shadow: 0 0 60px rgba(0, 255, 136, 0.5), 0 0 100px rgba(0, 255, 136, 0.3);
    }
    50% {
        /* Aumentar ainda mais */
        box-shadow: 0 0 100px rgba(0, 255, 136, 0.8), 0 0 150px rgba(0, 255, 136, 0.5);
    }
}
```

### Velocidade do Grid Neon

Em `style.css`, busque `@keyframes grid-pulse`:

```css
@keyframes grid-pulse {
    /* Velocidade atual: 4s */
    animation: grid-pulse 4s ease-in-out infinite;
    
    /* Mais rápido */
    animation: grid-pulse 2s ease-in-out infinite;
    
    /* Mais lento */
    animation: grid-pulse 6s ease-in-out infinite;
}
```

---

## 8️⃣ ADICIONAR SONS

### Adicionar Áudio Ambiente

Em `index.html`, já existe a tag audio. Adicione um arquivo:

```html
<audio id="ambientAudio" loop style="display: none;">
    <source src="path/to/your/ambient-sound.mp3" type="audio/mpeg">
</audio>
```

### Reproduzir Som com JavaScript

Em `script.js`, adicione na seção `INITIALIZATION`:

```javascript
// Reproduzir som ambiente (descomente para ativar)
// const audio = document.getElementById('ambientAudio');
// audio.volume = 0.3;  // 30% volume
// audio.play().catch(err => console.log('Audio play failed:', err));
```

---

## 9️⃣ CUSTOMIZAR FONTES

### Mudar Fonte do Terminal

Em `style.css`, localize `html, body`:

```css
html, body {
    font-family: 'Courier New', 'Lucida Console', monospace;
}

/* Alterar para outra fonte monospace */
html, body {
    font-family: 'JetBrains Mono', 'IBM Plex Mono', monospace;
}

/* Ou fonte custom */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap');
html, body {
    font-family: 'IBM Plex Mono', monospace;
}
```

---

## 🔟 ADICIONAR ELEMENTOS CUSTOMIZADOS

### Adicionar Badge/Status Extra

Em `index.html`, dentro de `.hud-top`:

```html
<div class="hud-element hud-custom">
    <div class="hud-text">[ CUSTOM ]</div>
    <div class="hud-status">
        <span class="status-dot"></span> Seu Status
    </div>
</div>
```

### Adicionar Modal Popup

Crie em `script.js`:

```javascript
function showPopup(title, message) {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(15, 20, 25, 0.9);
        border: 2px solid rgba(0, 255, 136, 0.5);
        padding: 30px;
        border-radius: 10px;
        z-index: 9999;
        font-family: 'Courier New', monospace;
        color: #00ff88;
        min-width: 300px;
        backdrop-filter: blur(10px);
    `;
    
    popup.innerHTML = `
        <h2 style="margin-bottom: 20px;">${title}</h2>
        <p style="margin-bottom: 20px;">${message}</p>
        <button onclick="this.parentElement.remove()" 
                style="background: #00ff88; color: #0a0a0a; border: none; padding: 10px 20px; cursor: pointer; border-radius: 5px;">
            Fechar
        </button>
    `;
    
    document.body.appendChild(popup);
}

// Usar assim:
// showPopup('Sistema', 'Sua mensagem customizada aqui!');
```

---

## ⚙️ OTIMIZAÇÕES AVANÇADAS

### Desabilitar Efeitos para Melhor Performance

Em `style.css`, comente animations:

```css
/* Desabilitar glitch effect */
/* .glitch-layer { animation: glitch 0.3s infinite; } */

/* Desabilitar grid pulse */
/* .neon-grid { animation: grid-pulse 4s ease-in-out infinite; } */

/* Desabilitar scan lines */
/* .scan-lines { animation: scan 8s linear infinite; } */
```

### Ligar FPS Monitor

Em `script.js`, descomente na seção `INITIALIZATION`:

```javascript
// Performance monitoring
checkPerformance();  // Descomente esta linha
```

---

## 🚀 DICAS PROFISSIONAIS

✅ Sempre faça backup antes de editar  
✅ Teste em diferentes navegadores  
✅ Use Dev Tools para debug (F12)  
✅ Pressione F5 para refresh da página  
✅ Limpe cache (Ctrl+Shift+Delete)  
✅ Use console.log() para debug  
✅ Teste responsividade (F12 → Toggle device toolbar)  

---

## ❓ TROUBLESHOOTING

### Página não carrega?
- Verifique se todos os arquivos (HTML, CSS, JS) estão na mesma pasta
- Limpe o cache do navegador
- Tente em outro navegador

### Animações travadas?
- Desabilite efeitos extras em `style.css`
- Reduza quantidade de partículas em `script.js`
- Verifique performance (F12 → Performance)

### Cores não aparecem?
- Verifique se as cores CSS estão em formato correto (#RRGGBB)
- Verifique se os seletores CSS estão corretos
- Use DevTools para inspecionar elementos

---

**CyberCore Customization Guide v1.0**
