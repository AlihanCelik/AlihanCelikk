# 🚀 Alihan Çelik - Coder / Developer Portfolio Website

Yazılımcılara ve geliştiricilere özel tasarlanmış; IDE editör görünümü, Matrix yağmuru efekti, interaktif terminal komut satırı ve proje vitrini içeren kişisel web sitesi.

---

## 🛠️ Özellikler

- **Siber / Hacker Tasarımı**: Dark mode, Glassmorphism, ışıltılı neom renk paleti (Cyan & Green & Purple).
- **IDE Editör Mockup**: Hero alanında sekmeler arasında geçiş yapılabilen (`developer.ts`, `skills.config.json`, `contact.py`) çalışan kod penceresi.
- **İnteraktif CLI Terminal**: Ziyaretçilerin `help`, `whoami`, `skills`, `projects`, `contact`, `matrix`, `clear` komutlarını çalıştırabildiği canlı komut satırı.
- **Matrix Rain Efekti**: Arka planda 60 FPS çalışan toggle'lanabilir Matrix kodu yağmuru.
- **Kolay Özelleştirilebilir**: `script.js` dosyasının en üstündeki `USER_DATA` objesini değiştirerek kendi projelerini ve bilgilerini saniyeler içinde güncelleyebilirsin.

---

## 🌐 Web Sitesini ÜCRETSİZ İnternette Yayınlama Rehberi

Siteni tamamen **ücretsiz** olarak internete yükleyip yayınlayabileceğin 3 harika yöntem:

### Yöntem 1: GitHub Pages (Tavsiye Edilen - Ücretsiz)

1. **GitHub'da Repo Oluştur**:
   - [GitHub.com](https://github.com)'a gir ve **New Repository** butonuna bas.
   - Repo adını `alihan-portfolio` veya `alihan.github.io` yap.
   - Public (Açık) olarak işaretle ve reponu oluştur.

2. **Kodları Yükle**:
   Terminalden veya GitHub web arayüzünden dosyaları (`index.html`, `style.css`, `script.js`) repoya yükle:
   ```bash
   git init
   git add .
   git commit -m "feat: initial coder portfolio release"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADI/alihan-portfolio.git
   git push -u origin main
   ```

3. **Pages'i Etkinleştir**:
   - Repository sayfasında **Settings** -> **Pages** sekmesine git.
   - **Branch** kısmından `main` ve `/ (root)` seçip **Save** butonuna tıkla.
   - 1-2 dakika içinde siten `https://KULLANICI_ADI.github.io/alihan-portfolio` adresinde canlıya geçecektir!

---

### Yöntem 2: Vercel (En Hızlı 1-Tık Yayınlama)

1. [Vercel.com](https://vercel.com) adresine ücretsiz üye ol (GitHub hesabınla giriş yapabilirsin).
2. **Add New Project** -> GitHub reponu seç (`alihan-portfolio`).
3. **Deploy** butonuna bas.
4. Siten saniyeler içinde `alihan-portfolio.vercel.app` adresiyle yayında!

---

### Yöntem 3: Netlify (Sürükle & Bırak)

1. [Netlify.com](https://netlify.com) adresine kaydol.
2. Dashboard'da **Sites** sekmesine gel ve `index.html`, `style.css`, `script.js` dosyalarının bulunduğu klasörü sürükleyip bırak.
3. Siten anında yayında!

---

## 📝 İçeriği Özelleştirme

Sitedeki tüm yazıları ve projeleri değiştirmek için `script.js` dosyasını açıp en baştaki bölümü düzenlemen yeterlidir:

```javascript
const USER_DATA = {
    name: "Alihan Çelik",
    roleTitles: ["Full-Stack Software Engineer", "AI Developer"],
    email: "alihan.celik@example.com",
    github: "https://github.com/KULLANICI_ADIN",
    // Projelerini buraya ekle
    projects: [ ... ]
};
```
# AlihanCelikk
