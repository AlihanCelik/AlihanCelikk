/* ==========================================================================
   Alihan Çelik - Bilgisayar Mühendisi Interactive Portfolio Script
   ========================================================================== */

// --- AUTHENTIC CV USER DATA ---
const USER_DATA = {
    name: "Alihan Çelik",
    roleTitles: [
        "Bilgisayar Mühendisi"
    ],
    email: "alihancelikk03@gmail.com",
        phone: "0 555 037 66 29",
        github: "https://github.com/AlihanCelik",
        linkedin: "https://www.linkedin.com/in/alihan-%C3%A7elik-081616248/",
        university: "Karadeniz Teknik Üniversitesi - Bilgisayar Mühendisliği (2021-2026)",
        gpa: "3.45 - Bölüm 4.'sü",
        bio: "KTÜ Bilgisayar Mühendisliği mezunuyum. Mobil Uygulama Komitesi Başkanlığı yürüttüm. Android (Kotlin), Spring Boot, ASP.NET Core ve Yapay Zeka (BERTurk NLP, Federatif Öğrenme) projeleri geliştiriyorum.",
        experience: [
            {
                company: "Orion Innovation Turkey",
                role: "Stajyer Mobil Uygulama Geliştirici",
                period: "Temmuz 2025 – Eylül 2025",
                tech: ["Kotlin", "Jetpack Compose", "Firebase"]
            },
            {
                company: "ELASOFT",
                role: "Stajyer Backend Geliştirici",
                period: "Temmuz 2024 – Ağustos 2024",
                tech: ["ASP.NET Core", "C#", "Dapper ORM", "Web API"]
            },
            {
                company: "Freelance",
                role: "Mobil Uygulama Geliştirici",
                period: "2022 – 2025",
                tech: ["Kotlin", "Flutter", "Git/GitHub", "Ekip Yönetimi"]
            }
        ],
        projects: [
            {
                name: "Duygu Analizli AI Chat (Lisans Bitirme Projesi)",
                desc: "BERTurk tabanlı NLP modelleriyle mesaj içeriklerinden anlık duygu analizi yapan, mikroservis mimarili anlık mesajlaşma platformu.",
                category: "mobile ai backend",
                tech: ["Kotlin (Compose, MVVM, Clean Arch, Hilt, Room)", "Spring Boot", "Python (Flask/FastAPI)", "WebSocket (STOMP)", "RabbitMQ", "PostgreSQL"],
                github: "https://github.com/AlihanCelik/BitimeProjesi-ChatAPP"
            },
            {
                name: "Federatif Oltalama (Phishing) Tespit Sistemi",
                desc: "E-posta analizi yapan ve hibrit savunma algoritmalarıyla label-flipping veri zehirleme saldırılarını engelleyen federatif yapay zeka sistemi.",
                category: "ai backend",
                tech: ["Python", "TensorFlow", "Flower (flwr)", "BiLSTM", "GloVe"],
                github: "https://github.com/AlihanCelik/federated-phishing-detection"
            },
            {
                name: "Depremeli (TEKNOFEST)",
                desc: "Mobilginers ekibi liderliğiyle geliştirilen deprem anı acil durum iletişimi ve güvenlik uygulaması.",
                category: "mobile",
                tech: ["Kotlin", "Coroutines", "Retrofit", "Firebase"],
                github: "https://github.com/AlihanCelik/DepremEli-Teknofest"
            },
            {
                name: "Noteor (Google Play)",
                desc: "Parola koruması ve hatırlatıcı sunan, Google Play'de yayınlanmış not alma uygulaması.",
                category: "mobile",
                tech: ["Kotlin", "Room Database", "Coroutines"],
                github: "https://github.com/AlihanCelik/NOTEOR"
            },
            {
                name: "Calculation Hub (Google Play)",
                desc: "Finans, sağlık, birim dönüştürme ve matematiksel hesaplama araçları barındıran Google Play uygulaması.",
                category: "mobile",
                tech: ["Kotlin", "Room Database", "Retrofit"],
                github: "https://github.com/AlihanCelik/CalculationHub"
            }
        ]
};

// --- DOM Content Loaded Initialization ---
document.addEventListener("DOMContentLoaded", () => {
    initTypingEffect();
    initIdeTabs();
    initInteractiveTerminal();
    initProjectFilters();
    initTimelineFilters();
    initMatrixRain();
    initCopyEmail();
    initContactForm();
    initMobileNav();
});

/* -------------------------------------------------------------------------- */
/* 1. Typing Effect for Roles                                                 */
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

        if (isDeleting && USER_DATA.roleTitles.length > 1) {
            roleElem.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40;
        } else {
            roleElem.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 90;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            if (USER_DATA.roleTitles.length === 1) {
                return; // Stay statically typed on "Bilgisayar Mühendisi"
            }
            isDeleting = true;
            typeSpeed = 2000;
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

            appendTerminalLine(`alihan@dev:~$ ${command}`, "output-cmd");
            processCommand(command);

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
                    <span style="color: var(--accent-cyan); font-weight: bold;">[Mevcut Komutlar]:</span><br>
                    • <code class="cmd-highlight">whoami</code> veya <code class="cmd-highlight">about</code>: Biyografi & KTÜ Derecesi<br>
                    • <code class="cmd-highlight">experience</code>: İş tecrübeleri (Orion, ELASOFT)<br>
                    • <code class="cmd-highlight">skills</code>: Teknik yetenekler (Kotlin, Spring Boot, AI)<br>
                    • <code class="cmd-highlight">projects</code>: Bitirme projesi & Google Play uygulamaları<br>
                    • <code class="cmd-highlight">gpa</code>: Mezuniyet ortalaması<br>
                    • <code class="cmd-highlight">contact</code>: İletişim bilgileri & Telefon<br>
                    • <code class="cmd-highlight">matrix</code>: Matrix efekti aç/kapat<br>
                    • <code class="cmd-highlight">clear</code>: Ekranı temizle
                `, "output-info");
                break;

            case "whoami":
            case "about":
                appendTerminalLine(`
                    <span style="color: var(--accent-green); font-weight: bold;">${USER_DATA.name}</span> - Bilgisayar Mühendisi<br>
                    Eğitim: ${USER_DATA.university}<br>
                    Derece: ${USER_DATA.gpa}<br>
                    Özet: ${USER_DATA.bio}
                `, "output-info");
                break;

            case "experience":
                let expHTML = `<span style="color: var(--accent-green); font-weight: bold;">İş & Staj Geçmişi:</span><br>`;
                USER_DATA.experience.forEach(e => {
                    expHTML += `• <strong>${e.company}</strong> (${e.period}) - ${e.role} [${e.tech.join(", ")}]<br>`;
                });
                appendTerminalLine(expHTML, "output-info");
                break;

            case "gpa":
                appendTerminalLine(`
                    🎓 <strong>KTÜ Bilgisayar Mühendisliği</strong><br>
                    GPA: <span style="color: var(--accent-green); font-weight: bold;">3.45</span> (Bölüm Dördüncüsü)
                `, "output-info");
                break;

            case "skills":
                appendTerminalLine(`
                    <span style="color: var(--accent-cyan);">Mobil:</span> Kotlin, Java, Jetpack Compose, MVVM/MVI, Flutter, Retrofit, Room<br>
                    <span style="color: var(--accent-cyan);">Backend:</span> Java Spring Boot, ASP.NET Core/MVC, Python FastAPI/Flask, PostgreSQL, RabbitMQ, WebSocket<br>
                    <span style="color: var(--accent-cyan);">Yapay Zeka:</span> BERTurk NLP, Duygu Analizi, TensorFlow, Federatif Öğrenme (Flower)
                `, "output-info");
                break;

            case "projects":
                let projHTML = `<span style="color: var(--accent-green); font-weight: bold;">Öne Çıkan Projeler:</span><br>`;
                USER_DATA.projects.forEach((p, idx) => {
                    projHTML += `${idx + 1}. <strong>${p.name}</strong> - ${p.desc} [<em>${p.tech.join(", ")}</em>]<br>`;
                });
                appendTerminalLine(projHTML, "output-info");
                break;

            case "contact":
                appendTerminalLine(`
                    E-Posta: <a href="mailto:${USER_DATA.email}" style="color: var(--accent-cyan);">${USER_DATA.email}</a><br>
                    Telefon: ${USER_DATA.phone}<br>
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
        canvas.style.opacity = "0.35";
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

        statusDiv.style.color = "var(--accent-cyan)";
        statusDiv.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Mesaj gönderiliyor...`;

        setTimeout(() => {
            statusDiv.style.color = "var(--accent-green)";
            statusDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> Teşekkürler ${name}! Mesajınız alındı.`;
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

/* -------------------------------------------------------------------------- */
/* 9. Timeline Roadmap Filter                                                 */
/* -------------------------------------------------------------------------- */
function initTimelineFilters() {
    const tfilterBtns = document.querySelectorAll(".timeline-filter-btn");
    const roadmapCards = document.querySelectorAll(".roadmap-card");

    tfilterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tfilterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-tfilter");

            roadmapCards.forEach(card => {
                const category = card.getAttribute("data-tcat");
                if (filterValue === "all" || category === filterValue) {
                    card.style.display = "flex";
                    card.style.animation = "fadeIn 0.4s ease forwards";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}

