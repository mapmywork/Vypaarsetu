# VpaarSetu (व्यापारसेतु) — Business Services & Compliance Portfolio

A modern, responsive business services portfolio and lead-generation website built for **VpaarSetu**, a business registration and regulatory compliance assistance brand in India.

> **"Your Business. Your Vision. Our Guidance."**

---

## 🌟 Overview & Key Features

- **Brand & Identity**: Modern Indian business identity using custom palette (`#1746A2`, `#0D2340`, `#F3F6FB`, `#19A783`, `#FFFFFF`), Plus Jakarta Sans typography, and subtle micro-interactions.
- **Full Route Architecture**:
  - `/`: Hero, brand introduction, featured services, why choose us, 4-step workflow, structure comparison, FAQs, and conversion CTA.
  - `/services`: Responsive grid for all 8 business services with live keyword search and category filtering.
  - `/about`: Brand story, mission, vision, operating principles, and consulting network overview.
  - `/contact`: Interactive validated form using `React Hook Form`, direct WhatsApp chat integration, phone helpline, and Lucknow head office details.
  - **8 Dedicated Service Pages**:
    - `/gst-registration`: Goods & Services Tax registration
    - `/msme-registration`: Udyam MSME priority certification
    - `/company-registration`: Corporate entity selection advisory
    - `/private-limited-company-registration`: Startup incorporation under Companies Act 2013
    - `/opc-registration`: One Person Company registration for solo founders
    - `/llp-registration`: Limited Liability Partnership registration
    - `/partnership-firm-registration`: Partnership Deed and ROF registration
    - `/food-licence-registration`: FSSAI FoSCoS 14-digit food safety licensing
- **Interactive Structure Comparison Table**: Compares Private Limited vs. OPC vs. LLP vs. Traditional Partnership across key criteria (liability, audit exemptions, FDI investor friendliness, compliance overhead).
- **Direct Contact Integrations**:
  - **WhatsApp**: Direct chat links pre-filled with the active service context (`+91 76198 49962`).
  - **Helpline Phone**: Click-to-call `+91 76198 49962`.
  - **Email**: `vypaarsetulko@gmail.com`.
  - **Registered Office**: `02 Infront Of Ram Kishore Inter College, Jankipuram extension, Lucknow 226021`.
- **Authentic Regulatory Integrity**:
  - No fabricated statistics, false guarantee badges, or artificial pricing.
  - Clear statutory disclaimers distinguishing government charges from professional facilitation fees.
  - Links to official government portals (MCA SPICe+, GSTN, Udyam, FoSCoS).

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Motion & Transitions**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management & Validation**: [React Hook Form](https://react-hook-form.com/)

---

## 📁 Directory Structure

```text
vpaarsetu/
├── public/
│   └── logo-icon.svg          # Brand logo mark SVG
├── src/
│   ├── components/
│   │   ├── common/            # SEO, Breadcrumb, Badge, FAQAccordion, CTASection
│   │   ├── forms/             # ContactForm with React Hook Form validation
│   │   ├── home/              # HeroSection, BrandIntro, FeaturedServices, WhyChooseUs,
│   │   │                      # HowWeWork, StructureComparison, HomeFAQ
│   │   ├── layout/            # Navbar, Footer, ScrollToTop
│   │   └── services/          # ServiceHero, ServiceCard, EligibilitySection, BenefitsGrid,
│   │                          # DocumentChecklist, ProcessTimeline, RelatedServices
│   ├── config/
│   │   └── siteConfig.js      # Central contact info, WhatsApp generator, portal links
│   ├── data/
│   │   ├── comparisons.js     # Entity comparison matrix data
│   │   ├── faqs.js            # General and homepage FAQ data
│   │   └── services.js        # Detailed data for all 8 Indian business services
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── NotFoundPage.jsx
│   │   ├── ServiceDetailPage.jsx
│   │   └── ServicesPage.jsx
│   ├── styles/
│   │   └── index.css          # Tailwind CSS base styles & custom components
│   ├── App.jsx                # Application routes
│   └── main.jsx               # React 18 DOM mount point
├── index.html                 # HTML shell with Google Fonts & SEO metadata
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Custom palette, typography, and shadow tokens
└── vite.config.js             # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` (v9 or higher)

### 1. Installation

```bash
# Clone or navigate to the project directory
cd /path/to/vpaarsetu

# Install dependencies
npm install
```

### 2. Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open your browser at **`http://localhost:3000`** (or the port indicated in your console).

### 3. Production Build

Verify linting, type safety, and generate the optimized production bundle:

```bash
npm run build
```

The production assets will be output to the `dist/` folder.

### 4. Preview Production Build

Preview the built production distribution locally:

```bash
npm run preview
```

---

## ⚙️ Configuration & Customization

All primary brand assets, contact numbers, and office addresses are configured in one central file:

```javascript
// src/config/siteConfig.js
export const siteConfig = {
  name: "VpaarSetu",
  phone: "+91 76198 49962",
  phoneRaw: "+917619849962",
  email: "vypaarsetulko@gmail.com",
  whatsappNumber: "917619849962",
  address: "02 Infront Of Ram Kishore Inter College Jankipuram extension Lucknow 226021",
  headquarters: "02 Infront Of Ram Kishore Inter College, Jankipuram Extension, Lucknow, Uttar Pradesh 226021",
  // ...
};
```

---

## 📬 Backend Form Endpoint Integration

The contact form in `src/components/forms/ContactForm.jsx` handles full client-side validation. To connect your production CRM (HubSpot, LeadSquared, webhook, or email backend), wire up `onSubmit`:

```javascript
const onSubmit = async (data) => {
  setIsSubmitting(true);
  try {
    const res = await fetch('/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    // handle response
  } catch (err) {
    // handle error
  }
};
```

---

## ⚖️ Legal Disclaimer

VpaarSetu is an independent consulting and compliance facilitation brand. All company incorporations, tax numbers, and statutory licences are issued exclusively by the competent government authorities (MCA, GSTN, Ministry of MSME, FSSAI).
