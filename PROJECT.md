# Silkoni - Development Guidelines for Claude Code

## 🎯 Контекст проекту

**Silkoni** - односторінковий сайт для продажу шовкових наволочок та тюрбанів для волосся.

### Бізнес-контекст:

- **Власник:** Андрій, веб-розробник з Харкова
- **Поточний стан:** Працює через Instagram (@silkoni) ~1 рік
- **Кількість товарів:** 2 (наволочки, тюрбани)
- **Мова:** Українська
- **Цільова аудиторія:** Україна, мобільні користувачі (mobile-first)

### Технічні цілі:

🎯 **PageSpeed Insights: 100/100**
🎯 **Максимальна SEO оптимізація**
🎯 **Швидкий запуск для тестування реклами та органічного трафіку**
🎯 **Навчальний проект** перед рефакторингом великого мебельного магазину

### Стратегічна мета:

Це тренувальний майданчик для освоєння сучасного стеку перед міграцією mebelvdom.org (1000 товарів) з WooCommerce на Astro + Medusa.js.

---

## 🚨 CRITICAL: Режим роботи (Developer Level: Beginner)

### ⚠️ ВАЖЛИВО: Це перший проект розробника на цьому стеку!

Claude Code працює в режимі **"обережного ментора"** з максимальною перестраховкою.

### Принцип: Explain → Ask → Execute

**ПЕРЕД будь-якою зміною коду AI ОБОВ'ЯЗКОВО:**

#### 1️⃣ ПОЯСНЮЄ ЩО буде зроблено

```
📁 Файли які будуть змінені:
- src/components/ProductGallery.tsx (новий файл, ~80 рядків)
- package.json (додам swiper)
- tailwind.config.js (конфігурація для swiper)

📝 Що саме відбудеться:
- Встановлю npm пакет swiper@11.x
- Створю React компонент для галереї з touch swipe
- Додам CSS імпорти для swiper
```

#### 2️⃣ ПОЯСНЮЄ ЧОМУ це потрібно

```
💡 Причина:
- Swiper - найкращий UX для мобільних пристроїв
- Підтримує touch gestures (свайп пальцем)
- Підтримує keyboard navigation
- Accessibility з коробки (ARIA labels)

🔄 Альтернативи:
- Embla Carousel (легший, 10kb vs 30kb)
- Keen Slider (15kb, але менше функцій)
- Власна реалізація (складно для початківця)

Вибираю Swiper бо: найкращий баланс UX/вага для мобільних
```

#### 3️⃣ ПОПЕРЕДЖАЄ про РИЗИКИ

```
⚠️ Ризики:
- Додаткові ~30kb до JavaScript bundle
- Залежність від сторонньої бібліотеки
- Можливі breaking changes при оновленні

📊 Вплив на Performance:
- PageSpeed: -2 бали (залишається 98/100)
- First Contentful Paint: +0.1s
- Total Blocking Time: +15ms

✅ Ризик прийнятний, бо:
- Використаємо client:visible (lazy load)
- Swiper оптимізований для production
- Критичний для UX на мобільних
```

#### 4️⃣ НАДАЄ план ВІДКАТУ

```
↩️ Як відкотити якщо не сподобається:
1. npm uninstall swiper
2. Видалити src/components/ProductGallery.tsx
3. Повернути стару розмітку в index.astro
4. git checkout -- . (якщо є git)

⏱️ Час на відкат: ~2 хвилини
```

#### 5️⃣ ЧЕКАЄ ПІДТВЕРДЖЕННЯ

```
❓ Продовжувати з встановленням Swiper?
Варіанти:
[1] Так, встановлюй Swiper
[2] Ні, покажи альтернативу (Embla)
[3] Ні, зроби простішу версію без бібліотек
```

---

### ❌ ЗАБОРОНЕНО робити БЕЗ явного дозволу:

**НІКОЛИ не робити автоматично:**

- ❌ Встановлювати npm/pnpm пакети
- ❌ Видаляти файли
- ❌ Змінювати package.json
- ❌ Змінювати конфіги (tsconfig.json, astro.config.mjs, tailwind.config.js)
- ❌ Редагувати компоненти з `/components/ui/` (shadcn)
- ❌ Додавати environment variables
- ❌ Змінювати схему Content Collections
- ❌ Додавати сторонні скрипти (analytics, widgets)
- ❌ Робити batch changes (>3 файли одночасно)
- ❌ Використовувати `client:load` без обґрунтування

**ЗАВЖДИ робити паузи та питати при:**

- 🔴 Першому запуску npm/pnpm команди
- 🔴 Створенні нового компонента
- 🔴 Інтеграції зовнішнього API
- 🔴 Зміні логіки форм/платежів
- 🔴 Додаванні client-side JavaScript
- 🔴 Зміні структури папок

---

### ✅ Формат комунікації

**Використовуй емодзі для структури:**

- 📁 **Файли** - які файли зміняться
- 💡 **Причина** - чому це потрібно
- ⚠️ **Ризики** - що може піти не так
- 🔄 **Альтернативи** - інші варіанти
- ↩️ **Відкат** - як повернути назад
- ⏱️ **Час** - скільки займе
- 📊 **Вплив** - як це вплине на performance
- ❓ **Питання** - чекаю відповіді

**Стиль:**

- Українською мовою (код англійською, коментарі українською)
- Простими словами, без жаргону
- Якщо термін - поясни його
- Код з коментарями
- Посилання на документацію

**Приклад ПОГАНОЇ комунікації:**

```
❌ Додаю react-hook-form. [код на 200 рядків]
```

**Приклад ХОРОШОЇ комунікації:**

```
✅ Пропоную додати react-hook-form для валідації форми замовлення.

💡 Чому:
react-hook-form - найлегша бібліотека для форм (8kb)
Вбудована валідація, не потрібен додатковий код
Інтеграція з LiqPay буде простішою

⚠️ Альтернативи:
- Formik (29kb, старіший підхід)
- Власна валідація (більше коду, більше багів)

📊 Вплив: +8kb JS, client:load компонент

❓ Встановлювати? [так/ні/покажи приклад]
```

---

### 🛠 Якщо щось пішло не так

**AI ОБОВ'ЯЗКОВО надає:**

1. ✅ Діагностику помилки простими словами
2. ✅ Кроки для відкату змін
3. ✅ Альтернативне рішення
4. ✅ Що погуглити для розуміння

**НІКОЛИ не каже:**

- ❌ "Просто перезапусти" (без пояснення ЧОМУ)
- ❌ "Це має працювати" (без діагностики)
- ❌ "Спробуй це" (без пояснення що воно робить)

---

## 🛠 VS Code Environment

### Встановлені Extensions:

- ✅ Astro (astro-build.astro-vscode)
- ✅ Claude Code for VS Code (Anthropic)
- ✅ Tailwind CSS IntelliSense (bradlc.vscode-tailwindcss)
- ✅ ESLint (dbaeumer.vscode-eslint)
- ✅ Prettier (esbenp.prettier-vscode)
- ✅ TypeScript/JavaScript (вбудований)
- ✅ ES7+ React snippets (dsznajder)
- ✅ Astro Snippets (Shelton Louis)
- ✅ Houston theme (astro-build)
- ✅ Rainbow CSV (mechatroner)

### Правила роботи з extensions:

- Astro extension розуміє `.astro` синтаксис
- Tailwind IntelliSense автокомпліт класів
- Prettier форматує при збереженні
- ESLint перевіряє код на помилки
- TypeScript strict mode увімкнений

---

## 📁 Структура проекту

```
silkoni/
├── CLAUDE.md                    # ← Ти тут 👋
├── README.md                    # Про проект (для людей)
├── package.json
├── tsconfig.json
├── astro.config.mjs
├── tailwind.config.js
├── .gitignore
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml             # Генерується автоматично
├── src/
│   ├── assets/                 # Зображення для Astro Image
│   │   └── products/
│   │       ├── pillowcase-1.jpg
│   │       ├── pillowcase-2.jpg
│   │       └── ...
│   ├── components/
│   │   ├── ui/                 # shadcn - НЕ чіпай без команди!
│   │   │   ├── button.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── carousel.tsx
│   │   ├── ProductGallery.tsx  # client:visible
│   │   ├── OrderForm.tsx       # client:load
│   │   ├── InstagramFeed.tsx   # client:idle
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── SEO.astro
│   ├── layouts/
│   │   └── Layout.astro        # Базовий layout
│   ├── content/
│   │   ├── config.ts           # Схема Content Collections
│   │   └── products/
│   │       ├── pillowcase.md
│   │       └── turban.md
│   ├── lib/
│   │   └── utils.ts            # cn() helper
│   └── pages/
│       └── index.astro         # ЄДИНА сторінка!
└── functions/                  # Cloudflare Workers
    └── liqpay.ts               # LiqPay signature generation
```

### Правила структури:

- ✅ Один файл `index.astro` для всього landing page
- ✅ Компоненти в `/components` без додаткових вкладених папок
- ✅ Тільки `/ui` окремо для shadcn компонентів
- ✅ При додаванні компонента - класти в `/components`
- ❌ НЕ створювати папки `/product`, `/layout`, `/forms` поки не скажу

---

## 🎨 Стек технологій

### Frontend Framework:

**Astro latest**

- Статична генерація за замовчуванням
- React острови тільки де потрібна інтерактивність
- Вбудована оптимізація зображень

### UI Framework:

**React latest** (тільки для інтерактивних островів)

- ProductGallery (свайп, zoom)
- OrderForm (валідація, LiqPay)
- InstagramFeed (асинхронна підгрузка)

### Styling:

**Tailwind CSS latest**

- Utility-first підхід
- Кастомізація через `tailwind.config.js`
- JIT режим для мінімального CSS

### UI Components:

**shadcn/ui**

- Copy-paste компоненти (не npm бібліотека!)
- Базуються на Radix UI + Tailwind
- Компоненти в `/components/ui/` - НЕ редагувати без команди

### Content Management:

**Astro Content Collections**

- TypeScript типізація контенту
- Markdown файли для товарів
- Автоматична валідація через Zod

### Package Manager:

**pnpm** (якщо є, інакше npm)

---

## 📝 Content Collections Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from "astro:content";

const products = defineCollection({
  type: "content",
  schema: z.object({
    // Основна інформація
    name: z.string(),
    description: z.string(),
    price: z.number(),
    currency: z.enum(["UAH"]).default("UAH"),

    // Зображення (відносні шляхи від /src/assets/)
    images: z.array(z.string()).min(1),
    thumbnail: z.string(), // Головне фото для соцмереж

    // Характеристики
    specifications: z.object({
      material: z.string(),
      size: z.string().optional(),
      care: z.string(),
      madeIn: z.string().default("Україна"),
    }),

    // SEO
    metaTitle: z.string().max(60).optional(),
    metaDescription: z.string().max(160),
    keywords: z.array(z.string()),

    // Структура даних для Google
    schema: z
      .object({
        brand: z.string().default("Silkoni"),
        availability: z.enum(["InStock", "OutOfStock"]).default("InStock"),
      })
      .optional(),

    // Сортування
    order: z.number().default(0),

    // Активність
    active: z.boolean().default(true),
  }),
});

export const collections = { products };
```

### Приклад файлу товару:

```markdown
---
# src/content/products/pillowcase.md

name: "Шовкова наволочка"
description: "Преміальна шовкова наволочка для здорового сну та краси волосся"
price: 1200
currency: "UAH"

images:
  - "products/pillowcase-1.jpg"
  - "products/pillowcase-2.jpg"
  - "products/pillowcase-3.jpg"
  - "products/pillowcase-4.jpg"
  - "products/pillowcase-5.jpg"

thumbnail: "products/pillowcase-1.jpg"

specifications:
  material: "100% натуральний шовк муліни (22 момі)"
  size: "50x70 см"
  care: "Ручне прання при 30°C, без віджимання"
  madeIn: "Україна"

metaTitle: "Шовкова наволочка преміум якості | Silkoni"
metaDescription: "Натуральний шовк для здорового сну. Гіпоалергенна, дихаюча тканина. Зменшує тертя волосся. Доставка по Україні."
keywords:
  - "шовкова наволочка"
  - "наволочка з шовку"
  - "для волосся"
  - "гіпоалергенна"

schema:
  brand: "Silkoni"
  availability: "InStock"

order: 1
active: true
---

## Переваги шовкової наволочки

Наша наволочка виготовлена з найякіснішого шовку муліни...

### Для вашого волосся

- Зменшує тертя та ламкість
- Запобігає пошкодженню кератинового шару
- Зберігає зачіску до ранку

### Для вашої шкіри

- Гіпоалергенна та дихаюча
- Не забирає вологу зі шкіри
- Підходить для чутливої шкіри

## Догляд

Рекомендуємо ручне прання при температурі до 30°C...
```

---

## ⚡️ React Islands Strategy

### Правило: Мінімум JavaScript на клієнті!

Astro за замовчуванням генерує **0 JavaScript**. React використовується ТІЛЬКИ для інтерактивних елементів.

### Директиви завантаження:

#### `client:load` (одразу)

**Використовувати ТІЛЬКИ для:**

- Критичних інтерактивних елементів
- Форма замовлення з LiqPay (конверсія критична)

```astro
<OrderForm product={product} client:load />
```

**Коли НЕ використовувати:**

- ❌ Галереї (не критично)
- ❌ Accordion (не критично)
- ❌ Instagram feed (не критично)

---

#### `client:visible` (при скролі)

**Дефолтний вибір для більшості компонентів:**

- Галерея товару
- Accordion з характеристиками
- Будь-які секції нижче fold

```astro
<ProductGallery images={photos} client:visible />
<Accordion items={specs} client:visible />
```

**Чому це найкраще:**

- Користувач бачить контент одразу (статичний HTML)
- JavaScript підгружається коли компонент у viewport
- PageSpeed залишається 100

---

#### `client:idle` (після основного)

**Використовувати для:**

- Не критичних функцій
- Instagram feed
- Analytics
- Chat widgets (якщо будуть)

```astro
<InstagramFeed client:idle />
```

**Як це працює:**

- Браузер завантажує критичний контент
- Чекає поки main thread вільний
- Тоді завантажує компонент

---

#### `client:media` (responsive)

**Рідко використовується**, але корисно:

```astro
<!-- Десктоп версія -->
<DesktopGallery client:media="(min-width: 768px)" />

<!-- Мобільна версія -->
<MobileGallery client:media="(max-width: 767px)" />
```

---

### ❌ Що НІКОЛИ не робити:

```astro
<!-- ❌ ПОГАНО: Все client:load -->
<Header client:load />
<ProductCard client:load />
<Footer client:load />
```

```astro
<!-- ✅ ДОБРЕ: Мінімум JS -->
<Header />  <!-- Статичний HTML -->
<ProductCard />  <!-- Статичний HTML -->
<ProductGallery client:visible />  <!-- JS тільки тут -->
<Footer />  <!-- Статичний HTML -->
```

---

## 💅 Стиль коду

### TypeScript:

```typescript
// ✅ ДОБРЕ: Strict types
interface ProductProps {
  name: string;
  price: number;
  images: string[];
}

// ❌ ПОГАНО: any
const product: any = {...}
```

**Правила:**

- `strict: true` в tsconfig.json
- Завжди типізувати props
- Уникати `any` (якщо необхідно - коментар чому)

---

### Imports:

```typescript
// ✅ ДОБРЕ: Аліаси @/
import { Button } from "@/components/ui/button";
import Layout from "@/layouts/Layout.astro";

// ❌ ПОГАНО: Відносні шляхи
import { Button } from "../../components/ui/button";
```

**Налаштування в tsconfig.json:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

---

### React компоненти:

```tsx
// ✅ ДОБРЕ: Arrow functions, TypeScript, named exports
interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  // Хуки на початку
  const [currentIndex, setCurrentIndex] = useState(0);

  // Обчислення
  const currentImage = images[currentIndex];

  // Handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Render
  return <div className="gallery">{/* JSX */}</div>;
};

// ❌ ПОГАНО: function declaration, default export
export default function ProductGallery(props: any) {
  // ...
}
```

---

### Tailwind CSS:

```tsx
// ✅ ДОБРЕ: Використовуй cn() для умовних класів
import { cn } from '@/lib/utils';

<button
  className={cn(
    "px-4 py-2 rounded-lg",
    isActive && "bg-blue-500",
    isDisabled && "opacity-50 cursor-not-allowed"
  )}
/>

// ❌ ПОГАНО: Рядкова конкатенація
<button
  className={"px-4 py-2 " + (isActive ? "bg-blue-500" : "")}
/>

// ❌ ПОГАНО: Inline styles
<button style={{ padding: "8px 16px", borderRadius: "8px" }} />
```

**Mobile-first breakpoints:**

```tsx
// ✅ Базові стилі для мобільних, потім адаптації для великих екранів
<div className="
  px-4 py-8           /* mobile */
  md:px-8 md:py-12   /* tablet */
  lg:px-16 lg:py-16  /* desktop */
">
```

---

### Коментарі:

```typescript
// ✅ ДОБРЕ: Українською, пояснюють ЧОМУ, не ЩО
// Використовуємо debounce щоб не перевантажувати API при кожному натисканні
const debouncedSearch = useMemo(() => debounce(handleSearch, 300), []);

// ❌ ПОГАНО: Очевидні коментарі
// Встановлюємо стан в true
setState(true);
```

---

### Форматування:

**Prettier config (.prettierrc):**

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ]
}
```

**Автоформатування при збереженні** (уже налаштовано в VS Code)

---

## 🔍 SEO Requirements

### Мета цілі:

- 🎯 PageSpeed Insights: **100/100**
- 🎯 Перша позиція в Google за "шовкові наволочки Україна"
- 🎯 Rich snippets (зірочки, ціни) в результатах пошуку

---

### Базовий SEO компонент:

```astro
---
// src/components/SEO.astro
interface Props {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'product';
  schema?: object;
}

const {
  title,
  description,
  canonical = Astro.url.href,
  image = '/og-default.jpg',
  type = 'website',
  schema
} = Astro.props;

const siteName = 'Silkoni';
const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
---

<!-- Primary Meta Tags -->
<title>{fullTitle}</title>
<meta name="title" content={fullTitle} />
<meta name="description" content={description} />
<link rel="canonical" href={canonical} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={type} />
<meta property="og:url" content={canonical} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.site).href} />
<meta property="og:site_name" content={siteName} />
<meta property="og:locale" content="uk_UA" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content={canonical} />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(image, Astro.site).href} />

<!-- Schema.org JSON-LD -->
{schema && (
  <script type="application/ld+json" set:html={JSON.stringify(schema)} />
)}
```

---

### Schema.org для товарів:

```typescript
// Генерація structured data для Product
const productSchema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: product.name,
  description: product.description,
  image: product.images.map((img) => new URL(img, Astro.site).href),
  brand: {
    "@type": "Brand",
    name: "Silkoni",
  },
  offers: {
    "@type": "Offer",
    url: Astro.url.href,
    priceCurrency: "UAH",
    price: product.price,
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Silkoni",
    },
  },
};
```

---

### Sitemap (автоматичний):

```javascript
// astro.config.mjs
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://silkoni.com",
  integrations: [
    // Автоматична генерація sitemap.xml
    sitemap(),
  ],
});
```

---

### robots.txt:

```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://silkoni.com/sitemap.xml
```

---

## 📸 Зображення та оптимізація

### Astro Image API - основний інструмент

**НІКОЛИ не робити ручну оптимізацію!** Astro зробить це автоматично.

### Workflow:

```
1. Фотографуєш товар (Sony A7C2)
2. Базова обробка в Affinity/Pixelmator:
   - Кольорокорекція
   - Crop
   - Експорт: JPG 100% quality або PNG
3. Кладеш в /src/assets/products/
4. Astro при білді генерує:
   ✅ AVIF (50% економії)
   ✅ WebP (30% економії)
   ✅ JPG (fallback)
   ✅ 5-7 розмірів для responsive
```

---

### Використання:

```astro
---
import { Image } from 'astro:assets';
import pillowcase from '@/assets/products/pillowcase-1.jpg';
---

<!-- ✅ ДОБРЕ: Astro Image з оптимізацією -->
<Image
  src={pillowcase}
  alt="Шовкова наволочка Silkoni - бежевий колір"
  widths={[375, 640, 768, 1024, 1280]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  formats={['avif', 'webp', 'jpg']}
  loading="lazy"
  decoding="async"
  class="rounded-lg"
/>

<!-- ❌ ПОГАНО: Звичайний img -->
<img src="/pillowcase.jpg" alt="Наволочка" />
```

---

### Responsive images strategy:

```astro
<!-- Hero image (перший екран) -->
<Image
  src={heroImage}
  loading="eager"  <!-- Не lazy! -->
  fetchpriority="high"
  widths={[640, 768, 1024, 1280, 1920]}
/>

<!-- Галерея (нижче fold) -->
<Image
  src={galleryImage}
  loading="lazy"  <!-- Lazy load -->
  widths={[375, 640, 768, 1024]}
/>
```

---

### Alt текст (ОБОВ'ЯЗКОВО):

```astro
<!-- ✅ ДОБРЕ: Описовий alt -->
<Image
  src={product}
  alt="Шовкова наволочка Silkoni бежевого кольору з застібкою-конвертом, розмір 50x70 см"
/>

<!-- ❌ ПОГАНО: Порожній або загальний alt -->
<Image src={product} alt="Товар" />
<Image src={product} alt="" />
```

---

### Performance checklist для зображень:

- ✅ Всі зображення через `<Image>` компонент
- ✅ Hero image: `loading="eager"`, `fetchpriority="high"`
- ✅ Інші зображення: `loading="lazy"`
- ✅ Формати: AVIF → WebP → JPG
- ✅ Responsive sizes вказані
- ✅ Alt текст завжди присутній і описовий
- ❌ Ніколи не використовувати `<img>` напряму

---

## 📱 Instagram Integration

### Мета:

- Показати 6 останніх постів з Instagram
- Lazy load (не впливає на PageSpeed)
- Кнопка "Більше в Instagram" в контактах

---

### Instagram Basic Display API:

**Setup (роби один раз):**

1. Створи Facebook App
2. Додай Instagram Basic Display
3. Отримай Access Token
4. Додай токен в `.env`:

```bash
# .env (НЕ коміти в git!)
INSTAGRAM_ACCESS_TOKEN=your_token_here
```

---

### Компонент InstagramFeed:

```tsx
// src/components/InstagramFeed.tsx
import { useState, useEffect } from "react";

interface InstagramPost {
  id: string;
  permalink: string;
  media_url: string;
  caption: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
}

export const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Завантаження постів
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Instagram API error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="animate-pulse">Завантаження...</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square overflow-hidden rounded-lg hover:opacity-80 transition">
          <img
            src={post.media_url}
            alt={post.caption?.slice(0, 100) || "Instagram пост"}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
};
```

---

### API endpoint (Astro):

```typescript
// src/pages/api/instagram.ts
export async function GET() {
  const token = import.meta.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return new Response(JSON.stringify({ error: "No token" }), {
      status: 500,
    });
  }

  try {
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,permalink,media_url,caption,media_type&access_token=${token}`
    );

    const data = await response.json();

    return new Response(JSON.stringify(data.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "API error" }), {
      status: 500,
    });
  }
}
```

---

### Використання в index.astro:

```astro
---
import InstagramFeed from '@/components/InstagramFeed';
---

<section id="instagram" class="py-16">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl font-bold mb-8">Більше фото та відгуків</h2>

    <!-- Lazy load після всього -->
    <InstagramFeed client:idle />

    <div class="mt-8 text-center">
      <a
        href="https://instagram.com/silkoni"
        target="_blank"
        class="inline-flex items-center gap-2 text-lg hover:underline"
      >
        Подивитись всі пости в Instagram →
      </a>
    </div>
  </div>
</section>
```

---

### Важливо:

- ⚠️ Instagram токени мають термін дії (60 днів)
- ⚠️ Треба оновлювати токен періодично
- ⚠️ Альтернатива: проста кнопка без API (завжди працює)

---

## 💳 LiqPay Integration

### Архітектура (безпечна):

```
User → OrderForm → Cloudflare Worker → LiqPay
                    (генерує підпис)
```

**КРИТИЧНО:** Приватний ключ LiqPay НІКОЛИ не повинен бути на клієнті!

---

### Environment Variables:

```bash
# .env (НЕ коміти!)
LIQPAY_PUBLIC_KEY=your_public_key
LIQPAY_PRIVATE_KEY=your_private_key  # СЕКРЕТ!
```

**Cloudflare Pages:**

```bash
# Додаєш через dashboard
wrangler secret put LIQPAY_PRIVATE_KEY
```

---

### Cloudflare Worker для підпису:

```typescript
// functions/liqpay.ts
import crypto from "crypto";

interface LiqPayRequest {
  amount: number;
  currency: string;
  description: string;
  order_id: string;
}

export async function onRequestPost(context) {
  const { amount, currency, description, order_id } =
    await context.request.json();

  const privateKey = context.env.LIQPAY_PRIVATE_KEY;
  const publicKey = context.env.LIQPAY_PUBLIC_KEY;

  // Створюємо data object
  const data = {
    version: 3,
    public_key: publicKey,
    action: "pay",
    amount,
    currency,
    description,
    order_id,
    result_url: "https://silkoni.com/success",
    server_url: "https://silkoni.com/api/liqpay-callback",
  };

  // Кодуємо в base64
  const dataString = JSON.stringify(data);
  const dataBase64 = btoa(dataString);

  // Генеруємо підпис
  const signString = privateKey + dataBase64 + privateKey;
  const signature = crypto
    .createHash("sha1")
    .update(signString)
    .digest("base64");

  return new Response(
    JSON.stringify({
      data: dataBase64,
      signature,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
```

---

### OrderForm компонент:

```tsx
// src/components/OrderForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface OrderFormProps {
  product: {
    name: string;
    price: number;
  };
}

export const OrderForm = ({ product }: OrderFormProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Отримуємо підпис від Worker
      const response = await fetch("/liqpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: product.price,
          currency: "UAH",
          description: product.name,
          order_id: `ORDER_${Date.now()}`,
        }),
      });

      const { data, signature } = await response.json();

      // Створюємо форму і відправляємо в LiqPay
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://www.liqpay.ua/api/3/checkout";

      const dataInput = document.createElement("input");
      dataInput.type = "hidden";
      dataInput.name = "data";
      dataInput.value = data;

      const signInput = document.createElement("input");
      signInput.type = "hidden";
      signInput.name = "signature";
      signInput.value = signature;

      form.appendChild(dataInput);
      form.appendChild(signInput);
      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment error:", error);
      alert("Помилка оплати. Спробуйте ще раз.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Імʼя
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <Button type="submit" disabled={loading} className="w-full">
        {loading ? "Обробка..." : `Оплатити ${product.price} грн`}
      </Button>
    </form>
  );
};
```

---

### Безпека (КРИТИЧНО):

❌ **НІКОЛИ:**

- Зберігати `LIQPAY_PRIVATE_KEY` в коді
- Генерувати підпис на клієнті
- Коммітити `.env` файли

✅ **ЗАВЖДИ:**

- Генерувати підпис на сервері (Worker)
- Валідувати callback від LiqPay через підпис
- Використовувати HTTPS

---

## 🎯 Performance Goals

### Цільові метрики PageSpeed Insights:

```
Performance:  100 / 100
Accessibility: 100 / 100
Best Practices: 100 / 100
SEO: 100 / 100
```

### Core Web Vitals:

- **LCP** (Largest Contentful Paint): < 1.0s
- **FID** (First Input Delay): < 50ms
- **CLS** (Cumulative Layout Shift): < 0.05

---

### Стратегія досягнення 100/100:

#### 1. Мінімізувати JavaScript

```
✅ 0kb для статичних сторінок
✅ ~15kb для OrderForm (client:load)
✅ ~10kb для ProductGallery (client:visible)
✅ ~5kb для InstagramFeed (client:idle)

Всього: ~30kb (gzipped)
```

#### 2. Оптимізувати зображення

```
✅ AVIF формат (50% економії)
✅ Responsive sizes
✅ Lazy loading (крім hero)
✅ Aspect ratio (no CLS)
```

#### 3. Критичний CSS

```
✅ Tailwind CSS (~5-10kb після purge)
✅ Inline critical CSS
✅ Preload fonts
```

#### 4. Hosting

```
✅ Cloudflare Pages (Edge CDN)
✅ HTTP/3
✅ Brotli compression
✅ Cache headers
```

---

### Performance checklist:

**Перед кожним деплоєм:**

- [ ] `pnpm build` без warnings
- [ ] Перевірити розмір bundle: `du -sh dist/`
- [ ] Lighthouse CI локально
- [ ] Перевірити всі зображення мають `alt`
- [ ] Немає `console.log` в production
- [ ] Перевірити mobile viewport

**Після деплою:**

- [ ] PageSpeed Insights (mobile + desktop)
- [ ] Core Web Vitals (Search Console)
- [ ] Тести на реальному пристрої

---

## 🚀 Deployment на Cloudflare Pages

### Налаштування:

```bash
# 1. Встанови Wrangler CLI
npm install -g wrangler

# 2. Залогінься
wrangler login

# 3. Deploy
wrangler pages publish dist
```

---

### Автодеплой з GitHub:

1. Підключи репозиторій до Cloudflare Pages
2. Build settings:

```
Build command: pnpm build
Build output: /dist
Root directory: /
```

3. Environment variables:

```
INSTAGRAM_ACCESS_TOKEN=...
LIQPAY_PUBLIC_KEY=...
LIQPAY_PRIVATE_KEY=...
```

4. Push → автоматичний деплой за ~2 хвилини

---

### Кастомний домен:

```
1. Cloudflare Pages → Custom domains
2. Додай silkoni.com
3. DNS налаштується автоматично
```

---

## ✅ Checklist перед стартом розробки

### Необхідні аккаунти:

- [ ] GitHub (для репозиторію)
- [ ] Cloudflare (для хостингу)
- [ ] Instagram Business (для API)
- [ ] LiqPay (для оплати)

### VS Code налаштований:

- [x] Astro extension
- [x] Tailwind CSS IntelliSense
- [x] ESLint
- [x] Prettier
- [x] Claude Code for VS Code

### Контент підготовлений:

- [ ] Фото товарів (5-7 на товар)
- [ ] Тексти описів українською
- [ ] Характеристики товарів
- [ ] Логотип (якщо є)

### Технічна підготовка:

- [ ] Node.js 18+ встановлений
- [ ] pnpm або npm
- [ ] Git налаштований

---

## 📚 Корисні посилання

**Документація:**

- Astro: https://docs.astro.build
- shadcn/ui: https://ui.shadcn.com
- Tailwind: https://tailwindcss.com/docs
- Cloudflare Pages: https://pages.cloudflare.com

**API:**

- Instagram Basic Display: https://developers.facebook.com/docs/instagram-basic-display-api
- LiqPay: https://www.liqpay.ua/documentation/api/home

---

## 🎉 Готовий до розробки!

Тепер Claude Code має всю необхідну інформацію для роботи над проектом.

**Наступні кроки:**

1. Створити проект: `pnpm create astro@latest`
2. Встановити shadcn/ui
3. Налаштувати Content Collections
4. Створити перші компоненти
5. Деплой на Cloudflare Pages

**Пам'ятай:** Я (Claude Code) завжди пояснюю → питаю → виконую.
Ніколи не роблю нічого без твого дозволу!

---

_Створено: 16 грудня 2024_
_Версія: 1.0_

## 📝 Changelog (Мої зміни)

### 16.12.2024

- Оновлено версії на latest
- [тут будеш додавати свої зміни в майбутньому]
