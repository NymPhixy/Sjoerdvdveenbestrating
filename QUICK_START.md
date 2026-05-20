# 🚀 Quick Start Guide - Sjoerd Website

Volg deze stappen om de website snel aan te passen en online te zetten.

## ⚡ 5 Minuten Setup

### 1. **Contactgegevens Toevoegen**

Open `config.js` en update:

```javascript
contact: {
    phone: '+31612345678',           // ← Je telefoonnummer
    phoneFormatted: '+31 (0)6 1234 5678',
    email: 'sjoerd@bestrating.nl',   // ← Je email
    whatsapp: '31612345678'          // ← Zonder +
}
```

### 2. **Social Media Links**

Nog in `config.js`:

```javascript
social: {
    tiktok: 'https://www.tiktok.com/@jousenaam',  // ← Je TikTok
    instagram: 'https://www.instagram.com/jousenaam/',  // Optional
}
```

### 3. **Bedrijfsgegevens**

```javascript
business: {
    name: 'Sjoerd van der Veen',  // ← Controleer
    description: 'Bestrating & Hovenierswerk',
    region: 'Noord-Nederland en omgeving'  // ← Je werkgebied
}
```

### 4. **Website Testen**

```bash
# Gewoon open in browser:
1. Rechtsklik op index.html
2. "Open with" → browser
   (of sleep het bestand naar je browser)
```

### 5. **Online Zetten (2 opties)**

#### **Optie A: Vercel (Aanbevolen, 2 minuten)**

```bash
1. Ga naar https://vercel.com
2. "New Project" → Upload map
3. Deploy klaar!
```

#### **Optie B: Netlify (Ook snel)**

```bash
1. Ga naar https://netlify.com
2. Sleep je mappen naar de box
3. Klaar!
```

---

## 📝 Essentiële Aanpassingen

### Afbeeldingen Toevoegen

```
1. Maak map aan: assets/
2. Voeg afbeeldingen toe
3. In HTML, vervang SVG placeholders:
```

```html
<!-- Oud -->
<div class="hero-image-placeholder">
  <svg>...</svg>
</div>

<!-- Nieuw -->
<div class="hero-image-placeholder">
  <img src="assets/hero.jpg" alt="Ons werk" />
</div>
```

### TikTok Videos Embedden

```html
<!-- Vervang de video placeholders -->
<div class="video-card">
  <iframe src="https://www.tiktok.com/embed/..." width="100%"></iframe>
</div>
```

---

## ✅ Checklist

- [ ] `config.js` bijgewerkt (telefoon, email, TikTok)
- [ ] Website getest in browser (Ctrl+Shift+F5 refresh)
- [ ] Alle links klikken (test op telefoon!)
- [ ] Formulier test: vul in en klik "Stuur aanvraag"
- [ ] Afbeeldingen toegevoegd (optioneel nu)
- [ ] Website online gezet (Vercel/Netlify)

---

## 🔧 Kleine Aanpassingen

### Titel/Subtitle Veranderen

In `index.html` hero section:

```html
<h1 class="hero-title">Jouw nieuwe titel hier</h1>
<p class="hero-subtitle">Jouw subtitle...</p>
```

### Kleuren Veranderen

In `style.css`:

```css
:root {
  --primary: #2d3436; /* Donker grijs → verander */
  --accent: #d4a574; /* Beige accent → verander */
  --light-bg: #f8f7f5; /* Lichte achtergrond */
}
```

### Services Aanpassen

In `config.js`:

```javascript
services: [
  {
    id: "bestrating",
    name: "Bestrating",
    icon: "◆",
    description: "Jouw beschrijving hier...",
  },
  // Voeg meer toe of verander bestaande
];
```

---

## 📱 Testen op Mobiel

```bash
1. Telefoon en computer in zelfde WiFi
2. IP adres van computer:
   - Windows: ipconfig (zoek "IPv4 Address")
   - Mac: ifconfig
3. In telefoon browser: http://[IP]:8000
```

Of gebruik live preview in VS Code:

```bash
Rechtsklik index.html → "Open with Live Server"
```

---

## 📞 Formulier Inzendingen Checken

```bash
1. Open website in browser
2. Druk F12 (DevTools)
3. Console tab
4. Type: getAllFormSubmissions()
5. Enter
```

Zie alle inzendingen met gegevens!

---

## 🆘 Problemen?

| Probleem                    | Oplossing                       |
| --------------------------- | ------------------------------- |
| Website ziet er raar uit    | Ctrl+Shift+Delete (cache)       |
| Links werken niet           | Controleer `config.js` telefoon |
| Formulier crashed           | Check console (F12)             |
| Mobiel ziet er anders uit   | Normaal, website is responsive  |
| Afbeeldingen niet zichtbaar | Check pad in `assets/`          |

---

## 🎯 Volgende Stappen (Later)

1. **Email Setup**: Formulier naar je email
   - Mailgun / SendGrid
   - Backend API nodig

2. **Analytics**: Google Analytics toevoegen
   - Aantal bezoekers volgen
   - Welke pagina's populair

3. **SEO**: Beter in Google
   - Meta descriptions toevoegen
   - Keywords optimaliseren

4. **Admin Panel**: Inzendingen beheren
   - Dashboard voor formulieren
   - Upload/verwijder projecten

---

## 💡 Pro Tips

1. **Regelmatig backup maken** van je bestanden
2. **Test op mobiel** voordat je live gaat
3. **Afbeeldingen comprimeren** (kleinere bestanden = sneller)
4. **Links regelmatig checken** of ze nog werken
5. **Analytics** helpt je te zien wat bezoekers doen

---

## 🎓 Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://netlify.com/docs)
- [CSS Tips](https://css-tricks.com)
- [Web Performance](https://web.dev)

---

## 📧 Support

Voor vragen:

1. Check het `README.md` bestand
2. Kijk in console voor errors (F12)
3. Test in meerdere browsers

---

**Je website is klaar! 🎉**

Nu alleen nog `config.js` updaten en klaar is Kees!

Start met stap 1 hierboven. Veel succes! 🚀
