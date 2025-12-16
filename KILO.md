# Silkoni - Code Agent Instructions (Kilo Code / Qwen3)

## 🎯 PROJECT CONTEXT

**Project:** Silkoni - Single-page silk pillowcase & hair turban e-commerce  
**Language:** Ukrainian (website content)  
**Developer Level:** Junior/Intermediate  
**Goal:** PageSpeed 100/100, Maximum SEO optimization

---

## 🚨 CRITICAL: SAFETY RULES

### ❌ NEVER DO WITHOUT EXPLICIT PERMISSION:

1. **DO NOT install npm packages** - Always ask first
2. **DO NOT delete files** - Ask before any deletion
3. **DO NOT modify package.json** - User approval required
4. **DO NOT change config files** without permission:
   - `astro.config.mjs`
   - `tailwind.config.mjs`
   - `tsconfig.json`
   - `components.json`
5. **DO NOT edit `/components/ui/` shadcn components** - These are managed by shadcn CLI
6. **DO NOT add environment variables** - Ask first
7. **DO NOT change project structure** - Keep folders as defined

### ✅ YOU CAN DO FREELY:

1. Create new files in approved locations:
   - `src/components/` (except `/ui`)
   - `src/layouts/`
   - `src/content/products/`
   - `src/pages/`
2. Edit existing non-config files
3. Add content to markdown files
4. Fix TypeScript errors
5. Add Tailwind classes

### ⚠️ ASK BEFORE:

1. Creating new folders
2. Adding React components
3. Installing any dependency
4. Modifying routing
5. Adding external APIs

---

## 🛠 TECHNOLOGY STACK

### Core Framework:
```
Astro 5+ (latest)
Node.js 22+
pnpm (package manager)
TypeScript (strict mode)
```

### Styling:
```
Tailwind CSS 4+
shadcn/ui (Neutral palette)
CSS Variables for theming
```

### React (for interactive islands):
```
React 19+
@astrojs/react integration
```

### File Locations:
```
Working directory: /Users/andrejbozhko/repos/silkoni
Import alias: @/ → src/
```

---

## 📁 PROJECT STRUCTURE

```
silkoni/
├── KILO.md              # ← You are here
├── CLAUDE.md            # Senior AI instructions (reference only)
├── src/
│   ├── assets/          # Images (Astro Image optimization)
│   │   └── products/    # Product photos
│   ├── components/
│   │   ├── ui/          # shadcn components (DO NOT EDIT!)
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── *.tsx        # React islands
│   ├── layouts/
│   │   └── Layout.astro
│   ├── content/
│   │   ├── config.ts    # Content Collections schema
│   │   └── products/    # Product markdown files
│   │       ├── pillowcase.md
│   │       └── turban.md
│   ├── lib/
│   │   └── utils.ts     # cn() helper
│   ├── pages/
│   │   └── index.astro  # Main landing page
│   └── styles/
│       └── global.css   # Tailwind imports
└── public/              # Static assets
    └── logo.svg
```

---

## 💅 CODE STYLE GUIDE

### TypeScript - ALWAYS add types:

```typescript
// ✅ CORRECT
interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;

// ❌ WRONG
const { title, description } = Astro.props; // No types!
```

### Imports - Use @/ alias:

```typescript
// ✅ CORRECT
import { Button } from '@/components/ui/button';
import Layout from '@/layouts/Layout.astro';

// ❌ WRONG
import { Button } from '../../components/ui/button';
```

### Tailwind CSS - Use cn() helper:

```tsx
// ✅ CORRECT
import { cn } from '@/lib/utils';

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className
)} />

// ❌ WRONG
<div className={`base-classes ${isActive ? 'active-classes' : ''} ${className}`} />
```

### React Components - Arrow functions with types:

```tsx
// ✅ CORRECT
interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  return <div>{/* ... */}</div>;
};

// ❌ WRONG
export default function ProductGallery(props: any) { // No 'any'!
  return <div>{/* ... */}</div>;
}
```

### Astro Components - Props interface at top:

```astro
---
interface Props {
  title: string;
  class?: string;
}

const { title, class: className } = Astro.props;
---

<div class={className}>
  <h1>{title}</h1>
</div>
```

---

## 📦 CONTENT COLLECTIONS SCHEMA

**File:** `src/content/config.ts`

```typescript
import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    price: z.number(),
    currency: z.enum(['UAH']).default('UAH'),
    images: z.array(z.string()).min(1),
    colors: z.array(z.string()),
    description: z.string(),
    metaDescription: z.string().max(160),
    order: z.number().default(0),
    active: z.boolean().default(true),
  }),
});

export const collections = { products };
```

---

## 🖼️ IMAGE OPTIMIZATION

**ALWAYS use Astro Image component:**

```astro
---
import { Image } from 'astro:assets';
import productImage from '@/assets/products/pillowcase-pink.jpg';
---

<!-- ✅ CORRECT -->
<Image 
  src={productImage}
  alt="Descriptive alt text in Ukrainian"
  widths={[375, 640, 768, 1024]}
  formats={['avif', 'webp', 'jpg']}
  loading="lazy"
/>

<!-- ❌ WRONG -->
<img src="/pillowcase.jpg" alt="Product" />
```

---

## ⚛️ REACT ISLANDS STRATEGY

**Use correct directive:**

```astro
<!-- Critical - loads immediately -->
<OrderForm client:load />

<!-- Below fold - loads when visible -->
<ProductGallery client:visible />

<!-- Non-critical - loads when browser idle -->
<InstagramFeed client:idle />
```

**DO NOT use `client:load` for everything!**

---

## 🎨 TAILWIND CONVENTIONS

### Mobile-first approach:

```html
<!-- ✅ CORRECT - base styles for mobile -->
<div class="px-4 py-8 md:px-8 md:py-12 lg:px-16">

<!-- ❌ WRONG - desktop-first -->
<div class="px-16 md:px-8 px-4">
```

### Color palette (Neutral):

```
Background: bg-white
Text: text-black
Borders: border-gray-200
Muted: text-gray-500
```

---

## 📝 RESPONSE FORMAT

### When creating files:

```
📁 Creating: src/components/Header.astro

[Show code preview]

✅ File created successfully
⚠️ Note: Don't forget to import in Layout.astro
```

### When asking for confirmation:

```
⚠️ CONFIRMATION REQUIRED

I need to install: react-swiper (30kb)

Reason: For product gallery swipe functionality
Alternative: Embla Carousel (lighter, 10kb)

Proceed? [yes/no]
```

### When encountering errors:

```
❌ ERROR: TypeScript error in ProductCard.tsx

Problem: Missing type for 'product' prop
Fix: Added interface ProductCardProps

✅ Fixed - please review
```

---

## 🚀 DEPLOYMENT

**Workflow:**
```
Code change → git commit → git push → Auto-deploy to Cloudflare Pages
Live URL: https://silkoni.pages.dev
```

**DO NOT:**
- Modify GitHub Actions
- Change deployment settings
- Add build scripts without approval

---

## 📋 COMMON TASKS CHECKLIST

### Creating a new Astro component:

- [ ] Add TypeScript interface for Props
- [ ] Use @/ import alias
- [ ] Add descriptive comments in Ukrainian if complex
- [ ] Keep component under 100 lines
- [ ] Test that it compiles

### Creating a React component:

- [ ] Arrow function syntax
- [ ] TypeScript Props interface
- [ ] Named export (not default)
- [ ] Use cn() for conditional classes
- [ ] Add proper client: directive when importing

### Adding product content:

- [ ] Create markdown file in `src/content/products/`
- [ ] Follow schema exactly
- [ ] Write descriptions in Ukrainian
- [ ] Add all required fields
- [ ] Keep metaDescription under 160 characters

---

## 🎯 PERFORMANCE TARGETS

**Must maintain:**
- PageSpeed: 100/100
- LCP: < 1.0s
- CLS: < 0.05
- Total JS: < 50kb (gzipped)

**How:**
- Minimal client-side JS
- Lazy load images
- Use client:visible/idle
- Optimize images through Astro

---

## ❓ WHEN UNSURE

**Ask the user instead of guessing!**

Examples:
```
"Should I use client:visible or client:load for this gallery?"
"Do you want TypeScript strict mode for this component?"
"Which shadcn component should I use: Accordion or Collapsible?"
```

---

## 🔒 SECURITY

**NEVER include in code:**
- API keys
- Passwords
- Access tokens
- Personal data

**Use environment variables:**
```typescript
// ✅ CORRECT
const apiKey = import.meta.env.LIQPAY_PUBLIC_KEY;

// ❌ WRONG
const apiKey = "sandbox_i55568962772"; // Hardcoded!
```

---

## 📚 REFERENCE FILES

**Read these when needed:**
- `/CLAUDE.md` - Detailed architecture decisions
- `/src/content/config.ts` - Content schema
- `/components.json` - shadcn configuration

---

## ✅ FINAL CHECKLIST BEFORE EXECUTING

Before writing any code:

1. [ ] Do I have permission for this action?
2. [ ] Am I following TypeScript strict mode?
3. [ ] Am I using correct import aliases?
4. [ ] Am I following Tailwind mobile-first?
5. [ ] Will this impact performance negatively?
6. [ ] Have I asked for clarification if unsure?

---

## 🎊 YOU'RE READY!

**Remember:**
- Safety first - ask before risky actions
- Follow patterns strictly
- Keep code simple and readable
- Test that TypeScript compiles
- Maintain performance targets

**When in doubt → ASK! 🙋**

---

_Created: December 16, 2024_  
_For: Kilo Code (Qwen3 Coder)_  
_Project: Silkoni e-commerce_
