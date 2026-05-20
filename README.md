# Sjoerd van der Veen - Bestrating & Hovenierswerk Website

Een moderne, minimalistische website gebouwd met HTML, CSS en JavaScript. Professioneel, strak en warm design.

## 📋 Bestandsstructuur

```
Sjoerdvdveenbestrating/
├── index.html          # Hoofd HTML-bestand met alle secties
├── style.css          # Alle styling met CSS variables
├── script.js          # Interactiviteit en functionaliteiten
├── assets/            # Map voor afbeeldingen (aanmaken indien nodig)
└── README.md          # Dit bestand
```

## 🎯 Website Secties

### 1. **Navigatie**

- Sticky navbar met logo/bedrijfsnaam
- Menu links: Home, Werkzaamheden, Projecten, TikTok, Aanvraag, Contact
- WhatsApp-knop rechtsboven
- Responsive mobile menu

### 2. **Hero Section**

- Grote titel en subtitel
- Two call-to-action buttons (Bel, WhatsApp)
- Projectfoto placeholder
- Handgeschreven accent ("Vakwerk buiten")

### 3. **Werkzaamheden**

- 7 servicecards (Bestrating, Tuinaanleg, Hovenierswerk, enz.)
- Hover-effecten
- Responsive grid layout

### 4. **Projecten/Portfolio**

- Portfolio grid met projectcards
- Afbeelding, titel, beschrijving, categorie
- Hover-animaties

### 5. **TikTok Videos**

- Video placeholder grid
- Responsive layout
- Link naar TikTok-profiel

### 6. **Aanvraagformulier**

- 8 formuliervelden
- Frontend validatie
- LocalStorage opslag
- Success/error berichten
- Backend-ready (placeholder API)

### 7. **Contact**

- Telefoon, WhatsApp, TikTok links
- Werkgebied info
- CTA buttons

### 8. **Footer**

- Bedrijfsinfo
- Snelkoppelingen
- Contact info

## 🎨 Design & Styling

### Kleuren (CSS Variables)

- **Primary**: `#2d3436` (donker grijs)
- **Secondary**: `#636e72` (medium grijs)
- **Accent**: `#d4a574` (warm beige)
- **Light Background**: `#f8f7f5` (zeer licht)
- **White**: `#ffffff`

### Typografie

- **Primary Font**: 'Inter' (modern, schoon)
- **Display Font**: 'Playfair Display' (elegant, voor accenten)
- Google Fonts ingesloten in HTML

### Responsive Breakpoints

- **Desktop**: 1200px
- **Tablet**: 768px
- **Mobile**: 480px

## 🔧 Functionaliteiten

### Formulier

```javascript
// Formuliergegevens worden opgeslagen in localStorage
// Ophalen alle inzendingen:
getAllFormSubmissions();

// Ophalen per servicetype:
getFormSubmissionsByService("bestrating");
```

### Contactlinks

- **Telefoonnummer**: Pas aan in HTML (zoeken naar `+31600000000`)
- **WhatsApp**: Automatisch gegenereerde link met bericht
- **TikTok**: Update de TikTok-link

### Mobile Menu

- Automatisch responsive
- Sluit bij klik op link
- Escape-toets sluit menu

## 📱 Responsive Design

Website werkt perfect op:

- ✅ Desktop (1200px+)
- ✅ Tablet (768px-1199px)
- ✅ Mobile (320px-767px)

Alle knokken zijn touch-friendly en goed klikbaar op mobiel.

## 🚀 Aan de slag

### 1. Contactgegevens Bijwerken

Open `index.html` en vervang:

- `+31600000000` → Sjoerd's echte telefoonnummer
- `https://www.tiktok.com` → Sjoerd's TikTok profiel

Zoek alle voorkomens van deze waardes (Ctrl+F).

### 2. Afbeeldingen Toevoegen

Maak een `assets/` map aan en voeg afbeeldingen toe:

```
assets/
├── hero-project.jpg
├── portfolio-1.jpg
├── portfolio-2.jpg
└── ...
```

Update de SVG placeholders in HTML met echte afbeeldingen:

```html
<div class="hero-image-placeholder">
  <img src="assets/hero-project.jpg" alt="Projectwerk" />
</div>
```

### 3. Portfolio Uitbreiden

Dupliceer een portfolio-card en update:

```html
<div class="portfolio-card">
  <div class="portfolio-image">
    <img src="assets/project-3.jpg" alt="Beschrijving" />
  </div>
  <div class="portfolio-info">
    <span class="portfolio-category">Bestrating</span>
    <h3>Projecttitel</h3>
    <p>Projectbeschrijving...</p>
  </div>
</div>
```

### 4. Videos Toevoegen

Vervang de TikTok-placeholders met echte embedded videos:

```html
<div class="video-card">
  <iframe src="https://www.tiktok.com/embed/..." width="100%"></iframe>
</div>
```

### 5. Backend Koppeling (Optional)

Uncomment de `sendFormToBackend()` functie in `script.js`:

```javascript
// Uncomment in script.js
function sendFormToBackend(formData) {
  fetch("/api/submit-form", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error));
}
```

Setup backend voor:

- Email notificaties naar Sjoerd
- Database opslag
- Admin panel voor inzendingen

## 🎯 Aanpassingen Maken

### Kleuren Veranderen

Edit CSS variables in `style.css`:

```css
:root {
  --primary: #2d3436; /* Verander deze kleuren */
  --secondary: #636e72;
  --accent: #d4a574;
  --light-bg: #f8f7f5;
}
```

### Spacing Aanpassen

```css
:root {
  --spacing-lg: 2rem; /* Verander hier */
  --spacing-xl: 3rem;
}
```

### Lettertype Wijzigen

Google Fonts link is in `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet" />
```

## 📊 Form Data Beheren

Alle formulierinzendingen worden opgeslagen in browser's localStorage.

**Inzendingen bekijken:**

1. Open website in browser
2. Open DevTools (F12)
3. Console tab
4. Type: `getAllFormSubmissions()`
5. Enter

**Formaat van de data:**

```json
{
  "name": "Jan Jansen",
  "phone": "06-12345678",
  "email": "jan@example.com",
  "location": "Groningen",
  "service": "bestrating",
  "description": "Oprit aanleggen...",
  "period": "week",
  "contact": "whatsapp",
  "timestamp": "2026-05-20T10:30:00.000Z"
}
```

## 🔒 SEO & Metadata

Update de metadata in `index.html` `<head>`:

```html
<title>Sjoerd van der Veen - Bestrating & Hovenierswerk</title>
<meta
  name="description"
  content="Professionele bestrating en hovenierswerk..."
/>
<meta name="keywords" content="bestrating, tuinaanleg, hovenierswerk..." />
```

## 🌐 Website Hosten

### Locale Testen

1. Open `index.html` direct in browser
2. Website werkt offline

### Online Hosting Opties

- **Vercel** (gratis, snel, aanbevolen)
- **Netlify** (gratis)
- **GitHub Pages** (gratis)
- **Shared Hosting** (betaald)

Push code naar GitHub en deploy met Vercel/Netlify in 2 minuten.

## 📞 Contactgegevens Format

### Telefoonnummer

```
Formaat: +31 6 XXXX XXXX
WhatsApp: https://wa.me/31612345678?text=...
Tel link: tel:+31612345678
```

### Email Contact

```
Formaat: info@sjoerd-bestrating.nl
mailto: mailto:info@sjoerd-bestrating.nl
```

## ✅ Checklist voor Launch

- [ ] Contactgegevens gecontroleerd (telefoon, WhatsApp, email)
- [ ] TikTok-link geupdate
- [ ] Projectfoto's toegevoegd
- [ ] Hero sectie afbeelding ingesteld
- [ ] Alle links getest (op desktop en mobiel)
- [ ] Formulier getest
- [ ] Mobile responsiveness gecontroleerd
- [ ] Social media links aangepast
- [ ] Kleurenschema goedgekeurd

## 🐛 Troubleshooting

### Formulier werkt niet

- Check console voor errors (F12)
- Zorg dat alle required velden zijn ingevuld
- Controleer email format

### Mobile menu niet responsive

- Hard refresh: Ctrl+Shift+Delete
- Clear cache en cookies

### Afbeeldingen laden niet

- Check bestandspaden
- Zorg dat assets/ map aanwezig is
- Controleer bestandsnamen

## 💡 Tips & Best Practices

1. **Regelmatig testen** op mobiel
2. **Afbeeldingen optimaliseren** (comprimeren voor web)
3. **Analytics toevoegen** (Google Analytics)
4. **Form submissions** regelmatig checken
5. **Links testen** na updates
6. **SEO verbeteren** met meer content

## 📚 Bronnen

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [Web.dev](https://web.dev)
- [Google Fonts](https://fonts.google.com)

## 🤝 Support

Voor vragen over de website:

1. Check dit README
2. Kijk in console voor errors
3. Controleer bestandspaden en links
4. Test op verschillende browsers

---

**Website gebouwd met ❤️ voor Sjoerd van der Veen Bestrating & Hovenierswerk**

Versie: 1.0  
Laatst geupdate: Mei 2026
