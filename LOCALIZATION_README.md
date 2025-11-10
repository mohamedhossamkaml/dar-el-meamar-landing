# Arabic Localization Feature

## Overview
The landing page now supports both **English** and **Arabic** languages with full RTL (Right-to-Left) support.

## Features Implemented

### 1. **Language Context** (`src/context/LanguageContext.tsx`)
- Manages language state (English/Arabic)
- Persists language preference in localStorage
- Automatically sets HTML `dir` attribute (ltr/rtl)
- Provides translation hook `useLanguage()`

### 2. **Translation Files** (`src/locales/translations.ts`)
- Complete English translations
- Complete Arabic translations (العربية)
- Organized by sections:
  - Navigation
  - Hero Section
  - About Section
  - Services Section
  - Gallery Section
  - Works/Stats Section
  - Contact Section
  - Footer

### 3. **Language Toggle Component** (`src/components/Tools/LanguageToggle.tsx`)
- Button showing "العربية" when in English mode
- Button showing "English" when in Arabic mode
- Integrated in both desktop and mobile navigation

### 4. **RTL Support**
- Automatic direction switching (ltr ↔ rtl)
- Tailwind RTL utilities (`rtl:` prefix)
- Proper text alignment for both languages

## How to Use

### For Users
1. Click the language button in the navigation bar
2. Choose between "English" or "العربية"
3. The entire page will update instantly
4. Language preference is saved for next visit

### For Developers

#### Access translations in any component:
```tsx
import { useLanguage } from '../context/LanguageContext';

const MyComponent = () => {
  const { t, language, isRTL } = useLanguage();
  
  return (
    <div>
      <h1>{t.hero.title}</h1>
      <p>{t.hero.subtitle}</p>
    </div>
  );
};
```

#### Add new translations:
Edit `src/locales/translations.ts`:
```typescript
export const translations = {
  en: {
    mySection: {
      title: 'My Title',
      desc: 'My Description'
    }
  },
  ar: {
    mySection: {
      title: 'عنواني',
      desc: 'وصفي'
    }
  }
};
```

#### Use RTL-aware Tailwind classes:
```tsx
<div className="ml-4 rtl:mr-4 rtl:ml-0">
  {/* margin-left in LTR, margin-right in RTL */}
</div>

<div className="text-left rtl:text-right">
  {/* left-aligned in English, right-aligned in Arabic */}
</div>
```

## Components Updated

✅ **Navbar** - Full translation with language toggle
✅ **Hero** - Title, subtitle, and CTA buttons
✅ **About** - Section title and subtitle
✅ **Mobile Menu** - Language toggle added

## To Complete Full Translation

To translate the remaining components, follow this pattern:

1. Import the hook:
```tsx
import { useLanguage } from '../context/LanguageContext';
```

2. Use the hook:
```tsx
const { t } = useLanguage();
```

3. Replace hardcoded text:
```tsx
// Before:
<h2>Our Services</h2>

// After:
<h2>{t.services.title}</h2>
```

## Remaining Components to Translate

- [ ] Services - Use `t.services.list` array
- [ ] Gallery - Use `t.gallery.title`
- [ ] Works - Use `t.works.stats` and `t.works.labels`
- [ ] Contact - Use `t.contact` object
- [ ] Footer - Use `t.footer` object

## Testing

1. Switch to Arabic - UI should flip to RTL
2. Refresh page - Language preference should persist
3. Check mobile menu - Language toggle should work
4. Verify all translated text displays correctly

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ RTL support works across all browsers

---

**Note:** The translation keys are already prepared for all sections. You just need to apply the `useLanguage()` hook and replace hardcoded text with `{t.section.key}` in remaining components.
