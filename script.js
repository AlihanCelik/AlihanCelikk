/* ==========================================================================
   Alihan Çelik - Coder / Software Engineer Interactive Portfolio Script
   ========================================================================== */

// --- CONFIGURABLE USER DATA ---
const USER_DATA = {
    name: "Alihan Çelik",
    roleTitles: [
        "Full-Stack Software Engineer",
        "Flutter & Mobile Developer",
        "AI & Backend Architect",
        "Clean Code Enthusiast"
    ],
    email: "alihan.celik@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    location: "Turkey 🇹🇷",
    bio: "Modern web, mobil (Flutter) ve Yapay Zeka entegrasyonlu yazılım çözümleri üreten tutkulu bir mühendis.",
    skills: {
        languages: ["Python", "Dart", "JavaScript", "TypeScript", "SQL", "HTML5/CSS3"],
        frameworks: ["Flutter", "FastAPI", "React", "Flask", "Node.js"],
        ai_tools: ["OpenAI LLM APIs", "System Control Logic", "Docker", "Git", "Bash"]
    },
    projects: [
        {
            name: "Atlas Asistanım",
            desc: "Python backend sistem kontrolü ve Flutter masaüstü yapay zeka asistanı.",
            category: "ai mobile",
            tech: ["Python", "Flutter", "System API"],
            github: "https://github.com"
        },
        {
            name: "Code Rain & Visualizer",
            desc: "Matrix efekti ve 60 FPS özel canvas görselleştirici widget motoru.",
            category: "web ai",
            tech: ["Dart Canvas", "Custom Painter"],
            github: "https://github.com"
        },
        {
            name: "Smart Backend Engine",
            desc: "FastAPI & Flask ile yüksek performanslı veri işleme ve mikro servis mimarisi.",
            category: "ai",
            tech: ["Python", "FastAPI", "Docker"],
            github: "https://github.com"
        },
        {
            name: "Coder Portfolio Web App",
            desc: "IDE simülasyonlu, terminal destekli ve modern siber temalı geliştirici sitesi.",
            category: "web",
            tech: ["HTML5", "CSS3", "JavaScript"],
            github: "https://github.com"
        }
    ]
};

// --- DOM Content Loaded Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initTypingEffect();
    initIdeTabs();
    initInteractiveTerminal();
    initProjectFilters();
    initMatrixRain();
    initCopyEmail();
    initContactForm();
    initMobileNav();
});

/* -------------------------------------------------------------------------- */
/* 1. Typing Effect for Roles in Hero Section                                 */
/* -------------------------------------------------------------------------- */
function initTypingEffect() {
    const roleElem = document.getElementById("typing-role");
    if (!roleElem) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentRole = USER_DATA.roleTitles[roleIndex];
        
        if (isDeleting) {
            roleElem.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            roleElem.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 90;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at full word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % USER_DATA.roleTitles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
}

/* -------------------------------------------------------------------------- */
/* 2. IDE Mockup Tab Switcher                                                 */
/* -------------------------------------------------------------------------- */
function initIdeTabs() {
    const tabs = document.querySelectorAll(".ide-tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            tab.classList.add("active");
            const targetTab = tab.getAttribute("data-tab");
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
}

/* -------------------------------------------------------------------------- */
/* 3. Interactive CLI Terminal                                                */
/* -------------------------------------------------------------------------- */
function initInteractiveTerminal() {
    const terminalInput = document.getElementById("terminal-input");
    const terminalBody = document.getElementById("terminal-body");

    if (!terminalInput || !terminalBody) return;

    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const command = terminalInput.value.trim().toLowerCase();
            if (command === "") return;

            // Output command prompt line
            appendTerminalLine(`alihan@dev:~$ ${command}`, "output-cmd");

            // Process Command
            processCommand(command);

            // Reset input & scroll to bottom
            terminalInput.value = "";
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    function appendTerminalLine(text, className = "") {
        const line = document.createElement("div");
        line.className = `terminal-line ${className}`;
        line.innerHTML = text;
        terminalBody.appendChild(line);
    }

    function processCommand(cmd) {
        switch (cmd) {
            case "help":
                appendTerminalLine(`
                    <span style="color: var(--accent-cyan); font-weight: bold;">[Mevcut Komutlar / Available Commands]:</span><br>
                    • <code class="cmd-highlight">whoami</code> veya <code class="cmd-highlight">about</code>: Biyografi & Hakkımda<br>
                    • <code class="cmd-highlight">skills</code>: Teknik yetenek ve diller<br>
                    • <code class="cmd-highlight">projects</code>: Geliştirilen öne çıkan projeler<br>
                    • <code class="cmd-highlight">contact</code>: İletişim bilgileri ve e-posta<br>
                    • <code class="cmd-highlight">matrix</code>: Matrix yağmuru efektini aç/kapat<br>
                    • <code class="cmd-highlight">clear</code>: Terminal ekranını temizle
                `, "output-info");
                break;

            case "whoami":
            case "about":
                appendTerminalLine(`
                    <span style="color: var(--accent-green); font-weight: bold;">User: ${USER_DATA.name}</span><br>
                    Role: ${USER_DATA.roleTitles[0]}<br>
                    Location: ${USER_DATA.location}<br>
                    Bio: ${USER_DATA.bio}
                `, "output-info");
                break;

            case "skills":
                appendTerminalLine(`
                    <span style="color: var(--accent-cyan);">Diller:</span> ${USER_DATA.skills.languages.join(", ")}<br>
                    <span style="color: var(--accent-cyan);">Frameworkler:</span> ${USER_DATA.skills.frameworks.join(", ")}<br>
                    <span style="color: var(--accent-cyan);">Yapay Zeka & Sistemler:</span> ${USER_DATA.skills.ai_tools.join(", ")}
                `, "output-info");
                break;

            case "projects":
                let projHTML = `<span style="color: var(--accent-green); font-weight: bold;">Geliştirilen Projeler:</span><br>`;
                USER_DATA.projects.forEach((p, idx) => {
                    projHTML += `${idx + 1}. <strong>${p.name}</strong> - ${p.desc} [<em>${p.tech.join(", ")}</em>]<br>`;
                });
                appendTerminalLine(projHTML, "output-info");
                break;

            case "contact":
                appendTerminalLine(`
                    E-Posta: <a href="mailto:${USER_DATA.email}" style="color: var(--accent-cyan);">${USER_DATA.email}</a><br>
                    GitHub: <a href="${USER_DATA.github}" target="_blank" style="color: var(--accent-cyan);">${USER_DATA.github}</a><br>
                    LinkedIn: <a href="${USER_DATA.linkedin}" target="_blank" style="color: var(--accent-cyan);">${USER_DATA.linkedin}</a>
                `, "output-info");
                break;

            case "matrix":
                toggleMatrixRainState();
                appendTerminalLine("Matrix rain effect state toggled.", "output-success");
                break;

            case "clear":
                terminalBody.innerHTML = "";
                appendTerminalLine(`<span class="welcome-text">Ekran temizlendi. Komutlar için 'help' yazın.</span>`, "output-info");
                break;

            default:
                appendTerminalLine(`Komut bulunamadı: '${cmd}'. Komut listesi için <code class="cmd-highlight">help</code> yazabilirsiniz.`, "output-error");
                break;
        }
    }
}

/* -------------------------------------------------------------------------- */
/* 4. Projects Category Filter                                                */
/* -------------------------------------------------------------------------- */
function initProjectFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");

            projectCards.forEach(card => {
                const categories = card.getAttribute("data-category");
                if (filterValue === "all" || categories.includes(filterValue)) {
                    card.style.display = "flex";
                    card.style.animation = "fadeIn 0.4s ease forwards";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

/* -------------------------------------------------------------------------- */
/* 5. Matrix Rain Canvas Effect                                               */
/* -------------------------------------------------------------------------- */
let matrixInterval = null;
let matrixActive = true;

function initMatrixRain() {
    const canvas = document.getElementById("bg-canvas");
    const toggleBtn = document.getElementById("toggle-matrix-btn");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
    const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789</>{}[]=+#$";
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const rainDrops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(9, 13, 22, 0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00f0ff";
        ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }

    matrixInterval = setInterval(draw, 35);

    if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
            toggleMatrixRainState();
        });
    }
}

function toggleMatrixRainState() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    if (matrixActive) {
        canvas.style.opacity = "0";
        matrixActive = false;
    } else {
        canvas.style.opacity = "0.15";
        matrixActive = true;
    }
}

/* -------------------------------------------------------------------------- */
/* 6. Copy Email to Clipboard                                                 */
/* -------------------------------------------------------------------------- */
function initCopyEmail() {
    const copyBtn = document.getElementById("copy-email-btn");
    const emailText = document.getElementById("email-text");

    if (!copyBtn || !emailText) return;

    copyBtn.addEventListener("click", () => {
        const textToCopy = emailText.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = `<span>Kopyalandı! ✓</span> <i class="fa-solid fa-check" style="color: var(--accent-green);"></i>`;
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
            }, 2000);
        });
    });
}

/* -------------------------------------------------------------------------- */
/* 7. Contact Form Visualizer                                                 */
/* -------------------------------------------------------------------------- */
function initContactForm() {
    const form = document.getElementById("contact-form");
    const statusDiv = document.getElementById("form-status");

    if (!form || !statusDiv) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("form-name").value;
        const email = document.getElementById("form-email").value;
        const message = document.getElementById("form-message").value;

        statusDiv.style.color = "var(--accent-cyan)";
        statusDiv.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> POST /api/contact [Payload: ${name}]...`;

        setTimeout(() => {
            statusDiv.style.color = "var(--accent-green)";
            statusDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım.`;
            form.reset();
        }, 1200);
    });
}

/* -------------------------------------------------------------------------- */
/* 8. Mobile Navigation Toggle                                                */
/* -------------------------------------------------------------------------- */
function initMobileNav() {
    const mobileBtn = document.getElementById("mobile-toggle");
    const mainNav = document.getElementById("main-nav");

    if (!mobileBtn || !mainNav) return;

    mobileBtn.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });
    });
}
