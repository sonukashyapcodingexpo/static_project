# Luminate --- Corporate Website

> **Production build specification, design system, asset-generation
> brief and implementation guide**\
> **Technology:** HTML5 · CSS3 · Vanilla JavaScript · Static deployment\
> **Project type:** Multi-page international technology and digital
> services website\
> **Reference direction:** Premium corporate presentation inspired by
> the supplied Luminate & Saffron sitemap\
> **Status:** Implementation-ready specification; replace all bracketed
> brand/content placeholders before launch.

------------------------------------------------------------------------

## Table of contents

1.  [Project overview](#1-project-overview)
2.  [Project goals](#2-project-goals)
3.  [Technology and architecture](#3-technology-and-architecture)
4.  [Website sitemap and page
    inventory](#4-website-sitemap-and-page-inventory)
5.  [Recommended project structure](#5-recommended-project-structure)
6.  [Design direction and visual
    system](#6-design-direction-and-visual-system)
7.  [Reusable page and component
    system](#7-reusable-page-and-component-system)
8.  [Page content and layout
    requirements](#8-page-content-and-layout-requirements)
9.  [JavaScript functionality](#9-javascript-functionality)
10. [Image and media asset strategy](#10-image-and-media-asset-strategy)
11. [AI image-generation prompt
    library](#11-ai-image-generation-prompt-library)
12. [SEO implementation](#12-seo-implementation)
13. [Accessibility requirements](#13-accessibility-requirements)
14. [Performance and Core Web
    Vitals](#14-performance-and-core-web-vitals)
15. [Security and privacy](#15-security-and-privacy)
16. [Forms and static-site
    limitations](#16-forms-and-static-site-limitations)
17. [Browser and device support](#17-browser-and-device-support)
18. [Development workflow](#18-development-workflow)
19. [Testing and quality assurance](#19-testing-and-quality-assurance)
20. [Deployment](#20-deployment)
21. [Production launch checklist](#21-production-launch-checklist)
22. [Content and project
    assumptions](#22-content-and-project-assumptions)

------------------------------------------------------------------------

# 1. Project overview

Build a premium, responsive, multi-page corporate website for
**Luminate**, a technology and digital solutions company serving
businesses across local and international markets.

The website should communicate expertise in:

-   Website and web application development
-   CMS and e-commerce solutions
-   AI and SaaS development
-   Enterprise software and ERP solutions
-   SEO and digital marketing
-   International software development services

The website must look and behave like a carefully designed technology
consultancy website---not a collection of generic service pages.

### Project constraints

  Item                Requirement
  ------------------- --------------------------------------------
  Frontend            Semantic HTML5
  Styling             CSS3
  Interactions        Vanilla JavaScript (ES6+)
  Rendering           Static HTML pages
  Frameworks          No React, Vue, Angular, Next.js or similar
  Backend             No custom backend in this project
  Database            None
  Build system        No build system required
  Content             Manually maintained static content
  Deployment          Static hosting
  Responsive design   Mobile-first
  Architecture        Shared CSS and reusable JavaScript modules

**Important:** A static website can provide interactive menus, tabs,
accordions, client-side filtering, animations and form validation. It
cannot securely process submissions, send email, authenticate users or
persist private data by itself. Connect forms to an approved
form-processing service or separately hosted endpoint when required.

------------------------------------------------------------------------

# 2. Project goals

## Primary goals

1.  Establish a credible and premium brand presence.
2.  Explain the company's services clearly.
3.  Generate qualified enquiries through contact and quote forms.
4.  Showcase completed work and case studies.
5.  Build search visibility for service and location-specific keywords.
6.  Make the website easy to maintain without a frontend framework.
7.  Deliver a fast, accessible experience across devices.

## Success criteria

-   Visitors can understand the company's core offering within seconds.
-   Every major service has a dedicated, useful landing page.
-   Important pages are reachable through clear navigation and internal
    links.
-   Calls to action are visible without being aggressive.
-   All pages have unique titles, descriptions, headings and content.
-   No broken links, missing images, console errors or horizontal
    overflow.
-   Contact and quote forms have a tested submission destination before
    launch.
-   Mobile navigation and all interactive controls work with keyboard
    and touch.

------------------------------------------------------------------------

# 3. Technology and architecture

## 3.1 Required stack

### HTML5

Use semantic elements such as:

-   `header`
-   `nav`
-   `main`
-   `section`
-   `article`
-   `aside`
-   `footer`
-   `form`

Use one meaningful `h1` per page and maintain a logical heading
hierarchy.

### CSS3

Use:

-   CSS custom properties for design tokens.
-   Flexbox and CSS Grid for layouts.
-   Mobile-first media queries.
-   Reusable utility classes where they improve consistency.
-   Component-scoped naming conventions.
-   `clamp()` for fluid typography and spacing.
-   Reduced-motion support.

### Vanilla JavaScript

Use modern, modular JavaScript with ES modules where supported. Avoid a
large monolithic script.

Use JavaScript for:

-   Responsive navigation
-   Dropdown menus
-   Accordions and FAQs
-   Tabs and filters
-   Form validation
-   Back-to-top control
-   Scroll-based reveal effects
-   Active navigation states
-   Mobile interaction handling

Do not use JavaScript for content or layout that can be delivered
directly in HTML and CSS.

## 3.2 Architecture principles

-   Every page must load as a real, crawlable HTML document.
-   Do not generate the entire page body through JavaScript.
-   Keep page-specific content in the HTML file.
-   Load shared stylesheets and scripts across pages.
-   Keep third-party dependencies minimal.
-   Use relative paths consistently and test nested routes.
-   Avoid inline event handlers such as `onclick` in HTML.
-   Do not store secrets, API keys or private credentials in frontend
    files.

------------------------------------------------------------------------

# 4. Website sitemap and page inventory

The supplied sitemap proposes **71 pages/templates across eight
sections**. It includes one reusable Blog Details template. Individual
blog articles and individual case study details are dynamic content
entries and are not counted as separate fixed pages.

The page counts below reproduce the proposed section counts. Some rows
in the supplied PDF are blank; those missing page names must be
confirmed rather than invented.

## 4.1 Main website pages --- proposed count: 16

  Page                 Suggested URL
  -------------------- -----------------------------
  Home                 `/`
  About Us             `/about-us/`
  Our Services         `/services/`
  Our Portfolio        `/portfolio/`
  Case Studies         `/case-studies/`
  Our Team             `/our-team/`
  Careers              `/careers/`
  Contact Us           `/contact-us/`
  Request a Quote      `/request-a-quote/`
  FAQs                 `/faqs/`
  Testimonials         `/testimonials/`
  Privacy Policy       `/privacy-policy/`
  Terms & Conditions   `/terms-conditions/`
  Sitemap              `/sitemap/`
  Two entries          **Not specified in source**

## 4.2 Website & Web Development --- proposed count: 8

  Page                            Suggested URL
  ------------------------------- ---------------------------------
  Website Development Company     `/website-development/`
  Web Application Development     `/web-application-development/`
  API Development & Integration   `/api-development/`
  Mobile App Development          `/mobile-app-development/`
  Website Designing Services      `/website-design/`
  Web App UI/UX Design            `/web-app-ui-ux-design/`
  Mobile App Designing            `/mobile-app-design/`
  One entry                       **Not specified in source**

## 4.3 CMS & E-Commerce --- proposed count: 4

  Page                             Suggested URL
  -------------------------------- ---------------------------
  WordPress Development Services   `/wordpress-development/`
  E-Commerce Web Development       `/ecommerce-development/`
  Enterprise E-Commerce Software   `/enterprise-ecommerce/`
  Website Maintenance & Support    `/website-maintenance/`

## 4.4 AI & SaaS Solutions --- proposed count: 8

  Page                             Suggested URL
  -------------------------------- ----------------------------------
  Custom AI Development Services   `/ai-development/`
  AI Voice Agent Development       `/ai-voice-agents/`
  AI Chatbot Development           `/ai-chatbot-development/`
  Custom SaaS Development          `/saas-development/`
  Software Development Company     `/software-development/`
  Software Product Development     `/software-product-development/`
  Legacy Software Modernization    `/legacy-modernization/`
  Business Process Automation      `/business-process-automation/`

## 4.5 Enterprise Software & ERP --- proposed count: 13

  Page                                Suggested URL
  ----------------------------------- ------------------------------------
  ERP Software Development            `/erp-development/`
  CRM Software Development            `/crm-development/`
  HR Management Software (HRMS)       `/hrms-development/`
  Inventory Management Software       `/inventory-management-software/`
  Billing & Invoicing Software        `/billing-invoicing-software/`
  Logistics & Supply Chain Software   `/logistics-software/`
  School Management Software          `/school-management-software/`
  Hospital Management Software        `/hospital-management-software/`
  Hotel Management Software           `/hotel-management-software/`
  Coaching Institute Software         `/coaching-institute-software/`
  Real Estate Portal Development      `/real-estate-portal-development/`
  B2B Portal Development              `/b2b-portal-development/`
  Travel Portal Development           `/travel-portal-development/`

## 4.6 SEO & Digital Marketing --- proposed count: 5

  Page                           Suggested URL
  ------------------------------ ----------------------------
  Digital Marketing Services     `/digital-marketing/`
  Search Engine Optimization     `/seo-services/`
  Social Media Marketing         `/social-media-marketing/`
  Google & Meta Ads Management   `/ppc-management/`
  International SEO Services     `/international-seo/`

## 4.7 International & Local Location Pages --- proposed count: 11

The source explicitly names five country pages:

  --------------------------------------------------------------------------------
  Page                                Suggested URL
  ----------------------------------- --------------------------------------------
  Software Development Company USA    `/software-development-company-usa/`

  Software Development Company UK     `/software-development-company-uk/`

  Software Development Company Canada `/software-development-company-canada/`

  Software Development Company        `/software-development-company-australia/`
  Australia                           

  Software Development Company UAE    `/software-development-company-uae/`

  Six entries                         **Not specified in source**
  --------------------------------------------------------------------------------

The remaining six entries need stakeholder confirmation.

## 4.8 Additional Company & Resource Pages --- proposed count: 6

  Page                        Suggested URL
  --------------------------- -----------------------------
  Technology Stack            `/technology-stack/`
  Industries We Serve         `/industries/`
  Life at Company             `/life-at-company-name/`
  Our Process                 `/our-process/`
  Why Choose Us               `/why-choose-us/`
  Partners & Certifications   `/partners-certifications/`

## 4.9 Dynamic content types

The source specifies that blog articles and individual case study detail
pages are dynamic content entries, not separate fixed pages in the
71-page total.

For a static implementation, use one of these approaches:

1.  Create individual HTML files for every published article and case
    study.
2.  Maintain a manually updated listing page linking to those HTML
    files.

Do not describe a manually maintained static page as an automatically
managed CMS.

------------------------------------------------------------------------

# 5. Recommended project structure

Use a clear, scalable folder structure. Keep the root homepage easy to
find and group related pages into directories.

``` text
company-website/
│
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── README.md
├── favicon.ico
├── site.webmanifest
│
├── about-us/
│   └── index.html
├── services/
│   └── index.html
├── portfolio/
│   └── index.html
├── case-studies/
│   └── index.html
├── our-team/
│   └── index.html
├── careers/
│   └── index.html
├── contact-us/
│   └── index.html
├── request-a-quote/
│   └── index.html
├── faqs/
│   └── index.html
├── testimonials/
│   └── index.html
│
├── website-development/
│   └── index.html
├── web-application-development/
│   └── index.html
├── api-development/
│   └── index.html
├── mobile-app-development/
│   └── index.html
├── website-design/
│   └── index.html
├── web-app-ui-ux-design/
│   └── index.html
├── mobile-app-design/
│   └── index.html
│
├── wordpress-development/
│   └── index.html
├── ecommerce-development/
│   └── index.html
├── enterprise-ecommerce/
│   └── index.html
├── website-maintenance/
│   └── index.html
│
├── ai-development/
│   └── index.html
├── ai-voice-agents/
│   └── index.html
├── ai-chatbot-development/
│   └── index.html
├── saas-development/
│   └── index.html
├── software-development/
│   └── index.html
├── software-product-development/
│   └── index.html
├── legacy-modernization/
│   └── index.html
├── business-process-automation/
│   └── index.html
│
├── erp-development/
│   └── index.html
├── crm-development/
│   └── index.html
├── hrms-development/
│   └── index.html
├── inventory-management-software/
│   └── index.html
├── billing-invoicing-software/
│   └── index.html
├── logistics-software/
│   └── index.html
├── school-management-software/
│   └── index.html
├── hospital-management-software/
│   └── index.html
├── hotel-management-software/
│   └── index.html
├── coaching-institute-software/
│   └── index.html
├── real-estate-portal-development/
│   └── index.html
├── b2b-portal-development/
│   └── index.html
├── travel-portal-development/
│   └── index.html
│
├── digital-marketing/
│   └── index.html
├── seo-services/
│   └── index.html
├── social-media-marketing/
│   └── index.html
├── ppc-management/
│   └── index.html
├── international-seo/
│   └── index.html
│
├── locations/
│   ├── usa/index.html
│   ├── uk/index.html
│   ├── canada/index.html
│   ├── australia/index.html
│   └── uae/index.html
│
├── technology-stack/
│   └── index.html
├── industries/
│   └── index.html
├── life-at-company/
│   └── index.html
├── our-process/
│   └── index.html
├── why-choose-us/
│   └── index.html
├── partners-certifications/
│   └── index.html
│
├── blog/
│   ├── index.html
│   └── articles/
│       └── example-article/
│           └── index.html
│
├── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── global.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── animations.css
│   │   ├── responsive.css
│   │   └── pages/
│   │       ├── home.css
│   │       ├── service.css
│   │       └── contact.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── accordion.js
│   │   ├── tabs.js
│   │   ├── forms.js
│   │   ├── filters.js
│   │   ├── animations.js
│   │   └── utilities.js
│   │
│   ├── images/
│   │   ├── brand/
│   │   ├── hero/
│   │   ├── services/
│   │   ├── industries/
│   │   ├── portfolio/
│   │   ├── case-studies/
│   │   ├── team/
│   │   ├── locations/
│   │   ├── blog/
│   │   ├── icons/
│   │   └── backgrounds/
│   │
│   ├── fonts/
│   └── documents/
│
└── legal/
    ├── privacy-policy/index.html
    └── terms-conditions/index.html
```

This is a recommended structure, not a requirement to create empty pages
for unconfirmed sitemap entries. Keep URL and directory naming
consistent. If the host does not support directory index routing,
configure clean URL rewrites or use explicit `.html` links.

### Shared file responsibilities

  File               Responsibility
  ------------------ ----------------------------------------------
  `variables.css`    Colours, typography, spacing, shadows, radii
  `global.css`       Base typography, body, links, global rules
  `layout.css`       Containers, grids, section spacing
  `components.css`   Buttons, cards, forms, badges, navigation
  `responsive.css`   Breakpoints and responsive overrides
  `main.js`          Shared initialization
  `navigation.js`    Header, dropdowns, mobile menu
  `forms.js`         Validation and submission states
  `animations.js`    Reduced-motion-aware reveal effects

Use consistent relative paths from nested pages, for example
`../../assets/css/global.css` where required. Test every nested page on
the actual hosting configuration.

------------------------------------------------------------------------

# 6. Design direction and visual system

## 6.1 Art direction: designed, not generated

The website must look like it was art-directed and built by a senior product/brand designer with strong frontend experience—not assembled from an AI website prompt or a generic SaaS template.

The goal is a distinctive, restrained corporate website with a clear visual point of view. Prioritize layout, typography, spacing, image selection and content hierarchy over decorative effects.

### The design should feel

- Established and credible, like a technology consultancy with a real track record.
- Editorial rather than template-driven.
- Deliberate: every section has a reason to exist.
- Confident and understated, not trying to look futuristic.
- Human and business-focused, with real project evidence.
- Consistent across pages without making every page look identical.

### Avoid the common “AI-generated website” look

Do not use these as default design ingredients:

- Purple/blue gradient backgrounds on every section.
- Glowing blobs, neon borders, glassmorphism and floating orbs.
- Random 3D spheres, abstract AI brains, robot heads or holograms.
- Repeated rows of identical rounded cards.
- A centered headline followed by three cards repeated on every page.
- Huge pill-shaped buttons, excessive border radii or oversized shadows.
- Decorative dashboard screenshots that contain nonsense text and fake metrics.
- Generic stock-photo teams smiling around a laptop.
- Scroll animations on every element.
- Fake client logos, fake awards, fake counters or fabricated testimonials.
- An identical hero composition reused across all 71 pages.

Use visual effects only when they serve a specific communication purpose.

## 6.2 Reference quality and design research

Before implementation, review a small set of high-quality agency, editorial and enterprise product websites. Study the decisions—not their exact layouts:

- How they use whitespace and grid alignment.
- How typography creates hierarchy.
- How they balance text with photography or product screenshots.
- How navigation behaves on desktop and mobile.
- How they make long pages feel structured.
- How they use restrained colour and strong contrast.
- How they create variation between service pages.

Do not copy a reference site's branding, copy, layout or assets. Use references to develop an original system.

## 6.3 Recommended visual concept

Use a **warm editorial corporate system**:

- Main canvas: warm off-white rather than pure white everywhere.
- Text: near-black or deep charcoal.
- Supporting surfaces: white, pale stone and occasional deep navy.
- Accent: one controlled brand accent, used for links, small labels and primary actions.
- Photography: authentic workplace, architecture and real product imagery.
- Layout: strong columns, asymmetric splits and occasional full-bleed visual sections.
- Shape language: mostly square or subtly rounded corners; reserve larger radii for selected media.
- Dividers: thin, quiet rules to organize content.
- Motion: restrained transitions, not spectacle.

Suggested starting palette (confirm against the actual brand identity):

| Token | Value | Usage |
|---|---|---|
| Canvas | `#F5F4F0` | Main page background |
| Surface | `#FFFFFF` | Content surfaces |
| Ink | `#191B1D` | Primary text |
| Muted ink | `#666B70` | Supporting text |
| Rule | `#DADBD6` | Dividers and borders |
| Deep tone | `#202B35` | Occasional dark section |
| Accent | `#B85C3B` | Small, deliberate highlights |
| Accent soft | `#F1E5DF` | Subtle accent surface |

Do not force this palette if the company already has approved brand colours. The important rule is restraint: one dominant neutral system and one clear accent.

## 6.4 Typography: fewer styles, better hierarchy

Use a typography system with personality and discipline.

Recommended direction:
- Headings: a refined sans-serif such as Manrope, Plus Jakarta Sans or a licensed brand typeface.
- Body: Inter or a readable system sans-serif.
- Optional editorial contrast: a restrained serif only for a small number of pull quotes or editorial moments, if it suits the brand.

Do not mix multiple display fonts. Avoid ultra-wide tracking, all-caps paragraphs and oversized text everywhere.

| Element | Desktop guide | Mobile guide |
|---|---:|---:|
| Homepage display | 60–72px | 38–46px |
| Inner-page H1 | 48–60px | 34–42px |
| H2 | 36–44px | 28–34px |
| H3 | 22–28px | 20–24px |
| Body | 16–18px | 15–17px |
| Eyebrow / label | 11–13px | 11–12px |

Use `clamp()` for fluid sizing. Keep paragraphs to a comfortable measure (roughly 55–75 characters per line for long-form copy).

## 6.5 Grid, spacing and composition

Use a consistent layout grid, but do not make every section symmetrical.

- Main content width: approximately 1200–1280px.
- Desktop gutters: 48–64px.
- Tablet gutters: 28–36px.
- Mobile gutters: 20–24px.
- Use a 12-column desktop grid where useful.
- Align headings, body copy, image edges and CTAs to intentional grid lines.
- Vary section composition: 6/6 split, 5/7 split, full-width image, narrow editorial text, image-and-caption layouts.
- Use generous vertical spacing, but avoid empty space that has no hierarchy or purpose.
- Keep card heights natural when content differs; do not force every card into identical boxes.

A section should have a clear focal point. Do not add a card grid simply to fill space.

## 6.6 Homepage art direction

Recommended composition:

1. **Header:** compact, clean navigation with a strong wordmark and one clear CTA.
2. **Hero:** left-aligned editorial headline and concise copy; right side uses one distinctive, carefully selected image or a genuine product interface composition. Avoid the default centered headline plus floating dashboard collage.
3. **Proof strip:** a quiet row of verified client names, sectors or capabilities. If there is no verified proof, use a short capabilities statement instead.
4. **Services:** use a typographic list, numbered rows or a varied editorial grid—not six identical cards.
5. **Featured work:** make one case study visually dominant, with supporting projects in a secondary layout.
6. **Company point of view:** a strong statement paired with a real team/workplace image or a restrained graphic.
7. **Industries:** compact, clearly differentiated links with simple iconography only where useful.
8. **Process:** a horizontal or vertical sequence with clear stages, not floating glass cards.
9. **Testimonials:** use real approved quotes and attribution. Omit the section if there is no genuine material.
10. **Closing CTA:** a clear, calm invitation with useful contact context.
11. **Footer:** structured columns, good spacing and a strong typographic finish.

The homepage must establish a memorable visual rhythm. Alternate light and dark sections sparingly; do not alternate background colours mechanically.

## 6.7 Service-page art direction

Service pages should share a design system, not a cloned layout.

Keep consistent:
- Breadcrumbs.
- H1 and introductory copy.
- Primary CTA.
- Content width and typography.
- Related services and footer.

Allow variation in:
- Hero composition.
- Image placement.
- Capability presentation.
- Process layout.
- Case-study treatment.
- Supporting diagrams.

Use diagrams, interface screenshots and photography only when they explain the service. A service page should answer: what problem is solved, who it helps, what is delivered, how the work proceeds and what the next step is.

## 6.8 Buttons, links and controls

Use a small, consistent control language:

- Primary CTA: solid, rectangular or subtly rounded.
- Secondary CTA: text link or restrained outline.
- Text links: clear hover and focus treatment.
- Form controls: practical, high-contrast and easy to use.

Avoid oversized capsule buttons unless the approved brand system specifically calls for them. Motion should be quick and subtle (for example, a small colour shift or 1–2px movement), never a dramatic bounce.

## 6.9 Responsive behavior

Responsive design is a layout exercise, not just shrinking desktop content.

- Recompose split layouts intentionally on mobile.
- Move supporting imagery below the relevant heading when appropriate.
- Keep headings readable and avoid awkward one-word lines.
- Turn desktop navigation into a fully usable mobile menu.
- Use horizontally scrollable content only when the interaction is obvious and accessible.
- Avoid tiny text, cramped card grids and fixed-height content blocks.
- Test real content—not just placeholder text—at 360px, 390px, 768px, 1024px and 1440px.

## 6.10 Design acceptance test

Before scaling to all pages, review the homepage and one service page at desktop and mobile sizes.

Ask:

- Does this look like a real company with a clear point of view?
- Is the hierarchy obvious in the first five seconds?
- Could this layout be mistaken for a generic AI-generated template?
- Are the images relevant and believable?
- Is every visual effect doing useful work?
- Are there too many cards, gradients, shadows or rounded containers?
- Does the page have a deliberate rhythm from top to bottom?
- Does the mobile version feel designed rather than compressed?

If the page looks interchangeable with hundreds of agency templates, revise it before building the remaining pages.
# 7. Reusable page and component system

Even without a component framework, shared patterns must be implemented
consistently.

## 7.1 Global header

Include:

-   Brand logo
-   Main navigation
-   Services dropdown or mega menu
-   Company/about navigation
-   Resources navigation where applicable
-   Primary quote/contact CTA
-   Mobile menu button

Requirements:

-   Sticky or fixed behavior only if it improves usability.
-   Dropdowns must work with mouse, keyboard and touch.
-   Use `aria-expanded` and appropriate menu semantics.
-   Close mobile navigation after a link is selected.
-   Prevent background scrolling when a full-screen mobile menu is open.
-   Show a visible focus state.
-   Do not hide important navigation behind hover-only behavior.

## 7.2 Global footer

Include:

-   Logo and concise company description
-   Main service links
-   Company links
-   Location links
-   Contact details
-   Social links, if verified
-   Privacy Policy and Terms & Conditions
-   Copyright notice

Do not publish placeholder phone numbers, addresses or social profiles.

## 7.3 Reusable components

Build and standardize:

-   Section heading with eyebrow label
-   Primary and secondary buttons
-   Service card
-   Industry card
-   Portfolio card
-   Case study card
-   Testimonial block
-   Team profile card
-   Statistics block
-   Process step
-   FAQ accordion
-   Breadcrumb navigation
-   Related services section
-   CTA banner
-   Contact form
-   Quote form
-   Blog article card
-   Logo/partner strip

Use consistent spacing, typography, image ratios, hover behavior and
focus states.

## 7.4 Breadcrumbs

Add breadcrumbs to inner pages where useful.

Example:

`Home / Services / Website Development`

Use a clear current-page indication and valid structured data where
appropriate.

------------------------------------------------------------------------

# 8. Page content and layout requirements

## 8.1 Homepage

Recommended section order:

1.  Header and navigation.
2.  Hero with a strong positioning statement, concise supporting copy
    and primary CTA.
3.  Trust indicators using only verified facts.
4.  Core services overview.
5.  Selected portfolio or case studies.
6.  Company introduction and differentiators.
7.  Industries served.
8.  Technology capabilities.
9.  Development process.
10. Testimonials, only when genuine and approved.
11. FAQ preview.
12. Strong final CTA.
13. Footer.

The hero should communicate what the company does, who it helps and why
a visitor should continue.

## 8.2 Service detail pages

Use a shared service-page layout:

1.  Breadcrumbs.
2.  Service-specific hero.
3.  Problem and business context.
4.  Service overview.
5.  Capabilities and deliverables.
6.  Use cases or industry applications.
7.  Development approach.
8.  Relevant technology stack.
9.  Related case study, if available.
10. FAQs.
11. Related services.
12. CTA.

Each service page must have unique copy, examples and FAQs. Do not
simply replace the service name in one duplicated template.

## 8.3 Portfolio and case studies

Portfolio listing should support clear project discovery.

Each case study should ideally contain:

-   Client name or approved anonymized label
-   Industry
-   Project objective
-   Challenge
-   Solution
-   Scope and deliverables
-   Technology used
-   Verified outcomes
-   Relevant screenshots or project imagery

Never invent project results, client names, testimonials or performance
statistics.

## 8.4 About, team and careers

About page:

-   Company story
-   Mission and values
-   Leadership or team introduction
-   Working approach
-   Verified company milestones

Team page:

-   Real approved portraits
-   Names and roles
-   Short biographies

Careers page:

-   Company culture
-   Benefits that are genuinely offered
-   Current openings, if any
-   Application instructions

## 8.5 Contact and quote pages

Contact page:

-   Contact details
-   Business enquiry form
-   Service/location information where relevant
-   Clear expected response information only if verified

Quote page:

-   Project type
-   Approximate budget range, if useful
-   Project description
-   Contact details
-   Consent notice where applicable

Do not ask for unnecessary sensitive information.

## 8.6 International pages

Each country page should include:

-   Country-specific introduction
-   Relevant services
-   Local business context
-   Relevant use cases
-   Verified local contact details, if available
-   Relevant projects or proof
-   Country-specific FAQs
-   Appropriate CTA

Do not create thin doorway pages by changing only the country name.

------------------------------------------------------------------------

# 9. JavaScript functionality

Keep JavaScript small, modular and progressively enhanced.

  Feature             Expected behavior
  ------------------- ------------------------------------------------------
  Mobile menu         Opens, closes and supports keyboard
  Dropdown menu       Accessible click/touch/keyboard interaction
  Sticky header       Optional, smooth and non-obstructive
  FAQ accordion       Expand/collapse with accessible state
  Tabs                Switch visible content and maintain keyboard support
  Portfolio filter    Filter existing static project entries
  Form validation     Validate required fields and show clear errors
  Back to top         Appears after scrolling and returns to page top
  Reveal effects      Subtle and disabled for reduced-motion users
  Active navigation   Indicates current page/section where useful

### Implementation rules

-   Use `addEventListener`.
-   Avoid inline JavaScript.
-   Avoid unnecessary global variables.
-   Check that elements exist before attaching listeners.
-   Do not use scroll handlers that perform expensive layout work on
    every event.
-   Use `IntersectionObserver` for reveal effects where appropriate.
-   Respect `prefers-reduced-motion`.
-   Ensure core content remains available if JavaScript fails.

------------------------------------------------------------------------

# 10. Image and media asset strategy

The visual quality of the website will depend heavily on its imagery.
Create a consistent image library rather than generating unrelated
images page by page.

## 10.1 Asset categories

  Category       Required assets
  -------------- ----------------------------------------------------
  Brand          Logo, favicon, social sharing image
  Homepage       Main hero visual, supporting visuals
  Services       Website, app, API, AI, SaaS and e-commerce visuals
  Enterprise     ERP, CRM, HRMS, inventory and industry visuals
  Marketing      SEO, analytics and digital strategy visuals
  Portfolio      Project mockups and device presentations
  Case studies   Project-specific screenshots and editorial images
  Team           Approved real team portraits
  Locations      Country-specific contextual imagery
  Blog           Article thumbnails and editorial images
  UI             Icons, decorative marks and small illustrations
  Backgrounds    Subtle textures or abstract brand graphics

## 10.2 Suggested image dimensions

These are practical export targets, not mandatory dimensions. Use
responsive variants where an image appears at very different sizes.

  Asset                  Suggested export
  ---------------------- --------------------------------
  Homepage hero          1800 × 1200px
  Service hero           1600 × 1000px
  Wide section image     1400 × 900px
  Portfolio thumbnail    1200 × 900px
  Case study hero        1600 × 1000px
  Team portrait          800 × 1000px
  Blog thumbnail         1200 × 800px
  Social sharing image   1200 × 630px
  Logo                   SVG, with PNG fallback
  Favicon                SVG and standard browser sizes

## 10.3 Image formats

Preferred order:

1.  AVIF where supported and tested.
2.  WebP as a practical modern format.
3.  JPEG for photographic fallbacks where needed.
4.  PNG for transparency when appropriate.
5.  SVG for logos and simple vector graphics.

Use `<picture>` with fallback sources when providing multiple formats.

## 10.4 Image loading rules

-   Set explicit image width and height or aspect ratio to reduce layout
    shift.
-   Use descriptive filenames.
-   Add meaningful alt text to informative images.
-   Use empty alt text for decorative images.
-   Lazy-load below-the-fold images.
-   Do not lazy-load the main above-the-fold hero/LCP image.
-   Use `fetchpriority="high"` for the main hero image when appropriate.
-   Compress images before deployment.
-   Avoid serving oversized originals to small mobile cards.

## 10.5 Naming convention

Use lowercase, descriptive, hyphen-separated filenames.

Examples:

``` text
homepage-technology-hero.webp
website-development-service.webp
ai-automation-service.webp
erp-dashboard-preview.webp
school-management-software.webp
portfolio-ecommerce-platform.webp
case-study-finance-dashboard.webp
team-product-designer.webp
blog-digital-transformation.webp
```

Avoid names such as `image1.png`, `final-final.jpg` or
`new-banner2.webp`.

------------------------------------------------------------------------

# 11. AI image-generation prompt library

Use the following prompts as a consistent creative brief. Generate
separate assets for separate website placements. Do not expect one
generated image to work for every crop.

## 11.1 Master visual style prompt

Append this direction to relevant image prompts:

> Create a premium, photorealistic visual for an established
> international technology consultancy website. Art direction should be
> sophisticated, minimal, editorial and business-focused. Use a
> restrained palette of deep navy, warm off-white, soft neutral grey and
> subtle teal accents. Composition should feel intentional, spacious and
> high-end, with realistic lighting, believable materials, precise
> details and excellent visual hierarchy. The result must look like
> professional commercial photography or a high-end 3D art direction
> project, not a generic AI illustration. Avoid visual clutter, random
> floating UI, excessive neon, exaggerated holograms, distorted
> interfaces, gibberish text, fake logos, watermarks and decorative
> elements without purpose. Leave clean negative space where a website
> designer may place text. No readable text unless explicitly requested.

## 11.2 Homepage hero --- primary visual

**Filename:** `homepage-technology-hero.webp`\
**Aspect ratio:** 3:2 or 16:10\
**Recommended use:** Homepage hero, right-side visual.

**Prompt:**

> Create a premium, photorealistic hero visual for a global digital
> technology and software consulting company. Show a sophisticated
> modern workspace with a large elegant display presenting a realistic,
> beautifully structured business technology dashboard: subtle data
> visualizations, software architecture diagrams, clean interface panels
> and analytics. Include a restrained human element only if it adds
> credibility. Use deep navy, warm white, soft grey and refined teal
> accents. Cinematic but natural studio lighting, realistic reflections,
> precise screen geometry, elegant depth and carefully controlled
> negative space. The composition should feel like an award-winning
> technology brand campaign. No readable text, no logos, no watermarks,
> no sci-fi holograms, no clutter.

## 11.3 Website development service

**Filename:** `website-development-service.webp`\
**Aspect ratio:** 4:3

> Create a premium editorial technology visual showing a high-end
> responsive website displayed across a desktop monitor, tablet and
> smartphone. The interfaces should feel realistic, refined and
> professionally designed, with clear layouts, restrained typography and
> balanced spacing. Use a modern neutral workspace, soft daylight, dark
> navy details and subtle teal accents. No legible brand names, no
> gibberish text, no logos or watermarks.

## 11.4 Web application and UI/UX design

**Filename:** `web-app-ui-ux-service.webp`\
**Aspect ratio:** 4:3

> Create a sophisticated product-design scene featuring a realistic
> desktop application interface, organized design system panels,
> wireframe details and a mobile responsive preview. The composition
> should communicate thoughtful UX design, precision and product
> craftsmanship. Premium editorial photography, neutral surfaces, subtle
> navy and teal details, soft directional light. Avoid random floating
> windows and unreadable interface clutter.

## 11.5 API development and integration

**Filename:** `api-integration-service.webp`\
**Aspect ratio:** 4:3

> Create a clean, premium conceptual visual representing enterprise API
> integration. Show connected software systems represented through
> elegant structured interface panels, data flow paths and a central
> integration layer. Use realistic 3D materials and restrained technical
> symbolism. Deep navy background with subtle teal highlights, precise
> geometry and strong composition. No code text, no logos, no excessive
> glowing lines or generic network globe imagery.

## 11.6 Mobile application development

**Filename:** `mobile-app-development.webp`\
**Aspect ratio:** 4:3

> Create a premium commercial product visual showing a modern smartphone
> with a realistic, polished mobile application interface. Include a
> second device at a different angle for depth. Use an elegant neutral
> studio environment, natural reflections, precise device proportions
> and subtle navy and teal accents. No readable text, no fake brand
> logos, no distorted screens.

## 11.7 E-commerce development

**Filename:** `ecommerce-development.webp`\
**Aspect ratio:** 4:3

> Create a premium e-commerce technology campaign visual. Show a refined
> online shopping interface on a large display with carefully
> art-directed product photography, a clean product grid, product
> details and a mobile shopping preview. Use a luxury neutral studio
> setting, soft shadows, restrained colour and realistic screen detail.
> Avoid recognizable retailer branding, legible text and watermarks.

## 11.8 AI development

**Filename:** `ai-development.webp`\
**Aspect ratio:** 4:3

> Create a sophisticated visual representing practical enterprise
> artificial intelligence. Show a realistic workstation or refined 3D
> composition with an AI analytics interface, structured data
> visualization and a subtle intelligent automation motif. Make it
> credible, calm and business-focused rather than futuristic science
> fiction. Deep navy, warm white and restrained teal. No humanoid robot,
> no glowing brain cliché, no random text or logos.

## 11.9 AI voice agents

**Filename:** `ai-voice-agents.webp`\
**Aspect ratio:** 4:3

> Create a premium business technology visual representing an AI-powered
> voice assistant used for customer service. Show a realistic modern
> headset or microphone alongside a refined conversational analytics
> interface with subtle waveform visualization. Sophisticated studio
> lighting, minimal composition, navy and teal accents, believable
> materials. Avoid robotic faces, cartoon characters, excessive
> sound-wave effects and text.

## 11.10 AI chatbot

**Filename:** `ai-chatbot-development.webp`\
**Aspect ratio:** 4:3

> Create a premium visual of an enterprise customer-support chatbot
> interface displayed on a modern desktop and smartphone. Show clean
> conversation layout blocks, subtle assistant interface indicators and
> professional customer service context. Keep all text abstract or
> unreadable. Sophisticated lighting, minimal neutral workspace,
> restrained teal and navy details. No cartoon bot mascot or fake
> company logos.

## 11.11 SaaS development

**Filename:** `saas-development.webp`\
**Aspect ratio:** 4:3

> Create a high-end technology visual representing a scalable SaaS
> product. Show a polished cloud-based business application dashboard on
> a large display, with a clear sidebar, analytics cards and
> well-aligned interface elements. The image should feel like a
> professional software product launch campaign. Realistic materials,
> controlled reflections, elegant neutral background and restrained
> navy/teal palette.

## 11.12 ERP and CRM

**Filename:** `erp-crm-development.webp`\
**Aspect ratio:** 4:3

> Create a sophisticated enterprise software visual featuring a
> realistic ERP and CRM dashboard. Include carefully arranged business
> modules, charts, operational metrics and workflow panels. Use a
> high-end desktop monitor or elegant screen composition. Precise
> interface geometry, clean information hierarchy, restrained dark navy
> and teal palette, realistic studio environment. No readable fake
> metrics or company names.

## 11.13 School management software

**Filename:** `school-management-software.webp`\
**Aspect ratio:** 4:3

> Create a premium educational technology visual showing a realistic
> school administration dashboard on a desktop monitor and tablet. The
> interface should suggest attendance, student records, timetable and
> fee-management modules without readable text. Include a subtle,
> believable school environment in the background. Natural light,
> professional composition, calm blue and teal accents. No identifiable
> students or real school branding.

## 11.14 Hospital management software

**Filename:** `hospital-management-software.webp`\
**Aspect ratio:** 4:3

> Create a professional healthcare technology visual showing a hospital
> management dashboard with appointment scheduling, patient workflow and
> administrative interface panels. A modern clinical environment may
> appear softly in the background. Clean, trustworthy, realistic and
> privacy-conscious. Soft neutral lighting with restrained blue and teal
> accents. No real patient data, no readable text, no medical claims.

## 11.15 Inventory and logistics

**Filename:** `inventory-logistics-software.webp`\
**Aspect ratio:** 4:3

> Create a premium enterprise technology visual representing inventory
> and supply chain management. Show a sophisticated warehouse
> environment with organized shelves and a realistic handheld scanning
> device or business dashboard in the foreground. Communicate
> operational visibility, inventory accuracy and logistics coordination.
> Professional commercial photography, natural lighting, neutral
> industrial colours and restrained teal accents. No logos or text.

## 11.16 Billing and invoicing

**Filename:** `billing-invoicing-software.webp`\
**Aspect ratio:** 4:3

> Create an elegant business software visual showing a clean invoicing
> and finance management interface on a laptop screen, with organized
> financial summaries, transaction rows and invoice layout blocks. Use
> realistic interface proportions, premium desk materials and soft
> natural lighting. Restrained navy, white and teal palette. No readable
> personal data, bank details, currency claims or brand logos.

## 11.17 Digital marketing and SEO

**Filename:** `digital-marketing-seo.webp`\
**Aspect ratio:** 4:3

> Create a premium digital marketing analytics visual showing a
> realistic screen with search performance graphs, campaign analytics,
> traffic trends and structured reporting. The composition should
> communicate strategic growth and measurable marketing work. Elegant
> professional workspace, natural light, restrained navy and teal
> palette. No fabricated readable statistics, no logos, no clutter.

## 11.18 Portfolio and case study device mockup

**Filename:** `portfolio-project-mockup.webp`\
**Aspect ratio:** 4:3

> Create a premium portfolio presentation mockup for a digital
> technology agency. Show a beautifully designed fictional software
> product across a desktop monitor, tablet and mobile device, arranged
> with editorial precision. The UI should be plausible, consistent and
> polished. Use a neutral studio background and realistic shadows. No
> readable brand names, no watermarks, no distorted screens.

For actual portfolio entries, replace fictional mockups with approved
screenshots from real projects wherever possible.

## 11.19 Team photography

**Filename:** `team-collaboration.webp`\
**Aspect ratio:** 16:10

> Create natural, photorealistic corporate editorial photography of a
> diverse professional software team collaborating in a modern office
> meeting space. Show authentic discussion around a screen or design
> review, relaxed but professional body language, realistic office
> details and natural window lighting. Composition should feel candid
> and credible, not staged stock photography. Premium international
> consultancy art direction. Do not imply that these are actual
> employees; use only as generic illustrative imagery until replaced by
> approved real team photography.

## 11.20 Leadership and team portraits

**Filename:** `team-member-placeholder.webp`\
**Aspect ratio:** 4:5

> Create a professional corporate editorial portrait of a fictional
> technology professional, framed from chest up against a clean
> warm-neutral studio background. Natural expression, realistic skin
> texture, soft directional light, smart business-casual clothing and a
> restrained premium colour palette. The portrait should feel authentic
> and understated. This is a placeholder visual only and must not be
> presented as an actual employee.

## 11.21 International business locations

Create separate images for each country page rather than reusing the
same generic skyline.

**USA:** `location-usa.webp`

> Premium editorial photograph of a recognizable modern American
> business district skyline, contemporary office architecture, natural
> daylight, sophisticated corporate travel photography, realistic
> atmosphere, no text or logos.

**UK:** `location-uk.webp`

> Premium editorial photograph of a recognizable London business
> district with contemporary architecture and subtle city character,
> realistic daylight, refined corporate photography, no text or logos.

**Canada:** `location-canada.webp`

> Premium editorial photograph of a modern Canadian business district,
> contemporary office towers and a believable urban environment, crisp
> natural light, sophisticated corporate photography, no text or logos.

**Australia:** `location-australia.webp`

> Premium editorial photograph of a recognizable Australian business
> district with modern waterfront or city architecture, bright natural
> daylight, refined corporate photography, no text or logos.

**UAE:** `location-uae.webp`

> Premium editorial photograph of a modern UAE business district with
> distinctive contemporary architecture, warm natural daylight,
> sophisticated international corporate photography, no text or logos.

Use licensed or approved imagery. Verify that the generated image does
not misrepresent a physical office or imply a local presence that the
company does not have.

## 11.22 Blog and editorial imagery

Create a consistent family of blog thumbnails for subjects such as:

-   AI in business
-   Enterprise software
-   E-commerce trends
-   Web application design
-   Digital transformation
-   SEO strategy
-   Business automation

**Reusable prompt:**

> Create a premium editorial technology article thumbnail about
> \[ARTICLE TOPIC\]. Use one clear visual concept, sophisticated
> commercial art direction, restrained navy, warm neutral and subtle
> teal colours, realistic lighting and strong composition. Leave room
> for a title overlay if needed, but do not render any text. No logos,
> watermarks, generic AI robot imagery or visual clutter. Landscape 3:2
> composition.

## 11.23 Abstract section background

**Filename:** `abstract-brand-background.webp`

> Create a very subtle premium abstract background for a corporate
> technology website. Use soft layered geometric forms, delicate
> material texture and restrained navy-to-neutral tonal variation with a
> minimal teal detail. Extremely low visual complexity, elegant and
> understated, with generous empty space for text. No text, no icons, no
> logos, no glowing effects.

## 11.24 Image generation quality-control rules

Before using an asset:

-   Check for distorted devices and impossible interface layouts.
-   Check faces, hands, reflections and screen geometry.
-   Remove any accidental text or fake logos.
-   Ensure the image crop works at desktop and mobile sizes.
-   Confirm the image supports the actual page content.
-   Do not use generated people as real employees or generated projects
    as real client work.
-   Use original screenshots for genuine case studies.
-   Maintain a consistent colour grade and visual style across the
    website.
-   Record image source, license and approval status.

------------------------------------------------------------------------

# 12. SEO implementation

SEO must be planned for every HTML page before launch.

## 12.1 Metadata

Every indexable page needs:

-   Unique `<title>`
-   Unique meta description
-   Canonical URL
-   Correct language declaration
-   Appropriate robots directives
-   Open Graph title, description and image
-   Social sharing metadata where relevant

Example:

``` html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Website Development Services | Luminate</title>

  <meta
    name="description"
    content="Explore professional website development services from Luminate."
  >

  <link
    rel="canonical"
    href="https://www.example.com/website-development/"
  >

  <meta property="og:type" content="website">
  <meta property="og:title" content="Website Development | Luminate">
  <meta property="og:description" content="Professional website development solutions.">
  <meta property="og:image" content="https://www.example.com/assets/images/brand/og-image.jpg">
</head>
```

Replace all example URLs and text with approved production values.

## 12.2 Heading structure

-   One clear H1 for the main page topic.
-   H2 for major sections.
-   H3 for subsections.
-   Do not use headings only to achieve a visual font size.
-   Keep headings descriptive and useful.

## 12.3 Internal linking

-   Link related service pages contextually.
-   Link services from the homepage.
-   Link case studies to relevant services.
-   Link location pages only where useful.
-   Add breadcrumbs on appropriate inner pages.
-   Ensure important pages are reachable through HTML links.

## 12.4 Structured data

Use valid JSON-LD only when the markup accurately describes visible page
content.

Potential types:

-   `Organization`
-   `WebSite`
-   `BreadcrumbList`
-   `Service`
-   `Article`
-   `Person`

Do not add fake reviews, ratings, addresses, awards or local business
information.

## 12.5 Technical SEO

-   Create an XML sitemap.
-   Create a valid robots.txt.
-   Return a real 404 response for missing pages where hosting supports
    it.
-   Use clean, consistent lowercase URLs.
-   Redirect old URLs when changing established paths.
-   Avoid duplicate indexable content.
-   Use correct canonical URLs.
-   Add `hreflang` only when genuine localized or language alternatives
    exist.
-   Verify the website in Google Search Console after launch.

------------------------------------------------------------------------

# 13. Accessibility requirements

Target **WCAG 2.2 AA** as the accessibility goal.

-   Use semantic HTML.
-   Ensure all interactive controls work by keyboard.
-   Provide visible focus indicators.
-   Maintain sufficient text and interface contrast.
-   Use meaningful link text.
-   Add labels to every form control.
-   Associate validation messages with their fields.
-   Do not communicate errors through colour alone.
-   Add alt text for meaningful images.
-   Mark decorative images appropriately.
-   Respect reduced-motion preferences.
-   Keep touch targets comfortably usable.
-   Avoid keyboard traps.
-   Ensure dropdowns and accordions expose their state to assistive
    technology.

Accessibility must be tested, not assumed from valid HTML alone.

------------------------------------------------------------------------

# 14. Performance and Core Web Vitals

Performance is a production requirement.

## 14.1 Implementation

-   Compress and correctly size images.
-   Use responsive image sources.
-   Lazy-load below-the-fold images.
-   Preload only genuinely critical assets.
-   Minimize third-party scripts.
-   Avoid large JavaScript libraries.
-   Use local font files with suitable subsets where practical.
-   Avoid layout shifts caused by images, fonts or injected content.
-   Use CSS animations sparingly.
-   Avoid excessive DOM depth.

## 14.2 Suggested targets

Aim for the following Core Web Vitals thresholds at the 75th percentile:

  Metric            Good target
  -------- --------------------
  LCP             ≤ 2.5 seconds
  INP        ≤ 200 milliseconds
  CLS                     ≤ 0.1

These are field-performance targets, not guarantees from a local
Lighthouse run.

Also aim for strong Lighthouse scores in Performance, Accessibility,
Best Practices and SEO. Test representative pages on mobile and desktop.

------------------------------------------------------------------------

# 15. Security and privacy

A static frontend still needs careful security practices.

-   Use HTTPS.
-   Do not put API secrets or private credentials in JavaScript.
-   Avoid unsafe HTML insertion and untrusted `innerHTML`.
-   Use `textContent` for inserting plain user-provided text.
-   Validate and sanitize form submissions at the receiving service.
-   Use a Content Security Policy where practical.
-   Add appropriate security headers through the hosting provider.
-   Keep third-party scripts to a minimum.
-   Publish an accurate privacy policy.
-   Load analytics only after required consent where applicable.
-   Never collect sensitive information without a valid reason and
    appropriate safeguards.

------------------------------------------------------------------------

# 16. Forms and static-site limitations

## 16.1 Static form behavior

HTML and JavaScript can:

-   Display forms.
-   Validate required fields.
-   Validate email formats.
-   Show inline error messages.
-   Display loading and success states.
-   Send a request to a configured external endpoint.

HTML and JavaScript alone cannot securely:

-   Send email directly from a visitor's browser.
-   Store enquiries in a private database.
-   Protect secret API credentials.
-   Provide reliable server-side validation.
-   Authenticate users or manage private accounts.

## 16.2 Submission options

Choose one approved method:

1.  Static hosting provider's built-in form handling.
2.  A reputable third-party form service.
3.  A separately hosted API endpoint.

Before launch, test successful submission, failed submission, spam
handling, notifications and privacy disclosures.

Never show a success message unless the receiving service confirms that
the submission succeeded.

------------------------------------------------------------------------

# 17. Browser and device support

Test current stable versions of:

-   Google Chrome
-   Microsoft Edge
-   Mozilla Firefox
-   Safari
-   Android Chrome
-   iOS Safari

Test at representative widths:

-   360px mobile
-   390px mobile
-   768px tablet
-   1024px small laptop
-   1280px desktop
-   1440px large desktop
-   1920px wide desktop

The layout must not depend on a single screen size or device
orientation.

------------------------------------------------------------------------

# 18. Development workflow

Follow this sequence to avoid building dozens of inconsistent pages.

## Phase 1 --- Discovery and design foundation

-   Confirm the brand name, logo and approved colours.
-   Confirm the actual page inventory, especially blank sitemap entries.
-   Approve typography and visual direction.
-   Define the header, footer, buttons, cards and section system.
-   Create homepage and service-page wireframes.
-   Approve the initial image-generation style.

**Deliverable:** Approved design system and homepage direction.

## Phase 2 --- Core website

Build:

-   Homepage
-   About Us
-   Services
-   Portfolio
-   Case Studies
-   Team
-   Careers
-   Contact
-   Request a Quote
-   FAQs
-   Testimonials
-   Legal pages and sitemap

**Deliverable:** Complete core corporate website.

## Phase 3 --- Service pages

Build the service templates and populate all confirmed pages in:

-   Website and Web Development
-   CMS and E-Commerce
-   AI and SaaS
-   Enterprise Software and ERP
-   SEO and Digital Marketing

**Deliverable:** Service page library with unique content.

## Phase 4 --- International pages

Build confirmed country pages with relevant local content and accurate
business information.

**Deliverable:** International landing pages.

## Phase 5 --- Resources and content

Build:

-   Blog listing
-   Reusable article layout
-   Case study detail layout
-   Technology Stack
-   Industries
-   Company Process
-   Why Choose Us
-   Partners & Certifications

**Deliverable:** Resource and company content pages.

## Phase 6 --- QA and launch

-   Complete responsive testing.
-   Test all forms and links.
-   Optimize images.
-   Add metadata and structured data.
-   Configure sitemap and robots.txt.
-   Run accessibility and performance audits.
-   Verify hosting redirects and 404 behavior.
-   Connect analytics and Search Console where approved.

**Deliverable:** Production-ready static website.

------------------------------------------------------------------------

# 19. Testing and quality assurance

## Functional testing

-   [ ] Logo links to homepage.
-   [ ] All navigation links work.
-   [ ] Dropdowns work with keyboard and touch.
-   [ ] Mobile menu opens and closes correctly.
-   [ ] Every CTA points to a real destination.
-   [ ] Forms validate correctly.
-   [ ] Form submission is confirmed by the receiving service.
-   [ ] Accordions and tabs work.
-   [ ] Portfolio filters work.
-   [ ] Back-to-top control works.
-   [ ] No JavaScript console errors.
-   [ ] No broken images or links.

## Visual testing

-   [ ] Header and footer are consistent.
-   [ ] Typography follows the design system.
-   [ ] No horizontal overflow.
-   [ ] Images have correct proportions.
-   [ ] Mobile layouts are readable.
-   [ ] Buttons have hover, focus and active states.
-   [ ] Spacing is consistent.
-   [ ] No accidental placeholder content remains.

## SEO testing

-   [ ] Every indexable page has a unique title.
-   [ ] Every indexable page has a useful description.
-   [ ] Canonical URLs are correct.
-   [ ] H1 and heading hierarchy are logical.
-   [ ] Sitemap XML is valid.
-   [ ] Robots.txt is correct.
-   [ ] Internal links work.
-   [ ] Structured data validates.
-   [ ] No accidental `noindex` directives.
-   [ ] No duplicate or thin location pages.

## Accessibility testing

-   [ ] Keyboard-only navigation works.
-   [ ] Focus states are visible.
-   [ ] Forms have labels.
-   [ ] Contrast is sufficient.
-   [ ] Images have appropriate alt text.
-   [ ] Reduced-motion preference is respected.
-   [ ] Interactive controls expose their state.
-   [ ] Automated audit findings are reviewed manually.

------------------------------------------------------------------------

# 20. Deployment

The website can be hosted on any suitable static hosting provider, such
as:

-   GitHub Pages
-   Netlify
-   Cloudflare Pages
-   Vercel static deployment
-   Traditional Apache/Nginx hosting

Choose a host based on custom-domain support, HTTPS, clean URL routing,
redirects, form handling and deployment workflow.

## Deployment requirements

-   Configure the production domain.
-   Enable HTTPS.
-   Configure directory index and clean URL behavior.
-   Set up redirects for changed routes.
-   Configure a custom 404 page.
-   Upload the final sitemap and robots.txt.
-   Test nested pages after deployment.
-   Test form submissions on the production domain.
-   Verify canonical URLs and social sharing images.
-   Confirm that no development or staging content is indexable.

------------------------------------------------------------------------

# 21. Production launch checklist

## Brand and content

-   [ ] Approved logo and favicon.
-   [ ] Final brand colours and fonts.
-   [ ] Accurate company description.
-   [ ] Real contact details.
-   [ ] Approved service descriptions.
-   [ ] Genuine portfolio and case study content.
-   [ ] Genuine testimonials and team details.
-   [ ] Approved privacy and legal content.
-   [ ] All placeholder text removed.

## Design and development

-   [ ] Shared header and footer.
-   [ ] Responsive layouts.
-   [ ] Reusable page patterns.
-   [ ] Accessible navigation.
-   [ ] Working interactions.
-   [ ] Optimized image assets.
-   [ ] Correct relative paths.
-   [ ] No unused or broken assets.

## Technical

-   [ ] HTTPS.
-   [ ] Sitemap and robots.txt.
-   [ ] Metadata and canonical URLs.
-   [ ] Structured data checked.
-   [ ] Forms connected and tested.
-   [ ] 404 page configured.
-   [ ] Security headers reviewed.
-   [ ] Browser testing completed.
-   [ ] Lighthouse and Core Web Vitals reviewed.
-   [ ] Search Console configured.

------------------------------------------------------------------------

# 22. Content and project assumptions

The supplied sitemap is a proposed scope, not a verified count of pages
on the reference websites.

The following must be confirmed before final development:

1.  Final company name, logo and brand guidelines.
2.  Final list of 71 page/template slots. Several entries are blank in
    the supplied sitemap.
3.  Whether all five named country pages are required at launch.
4.  Which six additional location-page entries are intended.
5.  Whether the company has genuine offices or verified local contact
    details in target countries.
6.  Actual services, technology stack and industry expertise.
7.  Approved portfolio projects, screenshots and measurable results.
8.  Real team members and approved portraits.
9.  Contact details and form submission provider.
10. Privacy, cookie and analytics requirements.
11. Final domain and hosting provider.
12. Whether blog and case study content will be maintained manually as
    static HTML.

## Final implementation principle

Build a consistent, high-quality corporate website system---not 71
unrelated pages.

Start with the design system, global navigation, footer, homepage and
one excellent service-page template. Validate these before scaling the
design across the confirmed sitemap.

Every page must have a clear purpose, original useful content, a strong
visual hierarchy, accessible interactions and a relevant next action.

**The standard for completion is not simply that every URL loads. It is
that the entire website feels like one coherent, credible, premium
international technology brand.**
