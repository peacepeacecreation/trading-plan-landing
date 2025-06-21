# Адаптивність TraderPlanLanding

## Огляд

Цей проект тепер повністю адаптивний для мобільних пристроїв та планшетів, зберігаючи оригінальний дизайн для десктопа.

## Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm-lg)
- **Desktop**: > 1024px (lg+)

## Основні зміни

### 1. Layout Component
- Адаптивний header з меншими розмірами для мобільних
- Прихована кнопка "Pricing" на мобільних пристроях
- Зменшені відступи та розміри логотипу

### 2. BottomNavigation Component
- Вертикальне розташування тексту на мобільних
- Зменшені розміри шрифтів та відступів
- Адаптивні відступи між елементами

### 3. Landing Page
- Адаптивний розмір планети (50vh на мобільних, 70vh на десктопі)
- Зменшені розміри логотипу та тексту
- Адаптивна кнопка з меншими розмірами на мобільних

### 4. AI Agent Page
- Адаптивна сітка карток (1 колонка на мобільних, 3 на десктопі)
- Зменшені розміри іконок та тексту
- Адаптивні відступи та розміри

### 5. Commercial Page
- Адаптивна сітка статистики
- Зменшені розміри кнопок та тексту
- Адаптивні відступи в картках

### 6. ScrollIndicator
- Зменшені розміри індикаторів на мобільних
- Адаптивні відступи

## CSS Зміни

### Адаптивні стилі
```css
/* Mobile-specific styles */
@media (max-width: 640px) {
  .nav-section {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  
  .planet-rotate img {
    max-width: 50vh;
    max-height: 50vh;
  }
}

/* Tablet-specific styles */
@media (min-width: 641px) and (max-width: 1024px) {
  .nav-section {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}
```

### Адаптивний globe overlay
```css
.globe-overlay::after {
  width: 300px;
  height: 300px;
}

@media (min-width: 640px) {
  .globe-overlay::after {
    width: 600px;
    height: 600px;
  }
}
```

## Хуки для адаптивності

### useIsMobile()
Повертає `boolean` - чи є поточний екран мобільним (< 768px)

### useIsTablet()
Повертає `boolean` - чи є поточний екран планшетом (768px - 1024px)

### useScreenSize()
Повертає `'mobile' | 'tablet' | 'desktop'` - поточний розмір екрану

## Tailwind Класи

### Адаптивні розміри
- `text-lg sm:text-2xl` - збільшення тексту на більших екранах
- `px-4 sm:px-6` - збільшення відступів на більших екранах
- `w-16 sm:w-24` - збільшення ширини на більших екранах

### Адаптивні сітки
- `grid-cols-1 md:grid-cols-3` - 1 колонка на мобільних, 3 на десктопі
- `flex-col sm:flex-row` - вертикальне розташування на мобільних, горизонтальне на десктопі

### Адаптивні відступи
- `mb-6 sm:mb-8` - збільшення нижнього відступу на більших екранах
- `gap-2 sm:gap-[47px]` - збільшення відступів між елементами

## Тестування

### Мобільні пристрої
- iPhone SE (375px)
- iPhone 12/13/14 (390px)
- Samsung Galaxy S21 (360px)

### Планшети
- iPad (768px)
- iPad Pro (1024px)
- Surface Pro (912px)

### Десктоп
- MacBook (1280px)
- iMac (1920px)
- Ultrawide (2560px)

## Best Practices

1. **Mobile-first approach** - спочатку стилі для мобільних, потім для більших екранів
2. **Використання Tailwind breakpoints** - `sm:`, `md:`, `lg:`, `xl:`
3. **Адаптивні зображення** - різні розміри для різних екранів
4. **Touch-friendly** - мінімальний розмір кнопок 44px на мобільних
5. **Читабельність** - мінімальний розмір тексту 16px на мобільних

## Компоненти з адаптивністю

- ✅ Layout.tsx
- ✅ BottomNavigation.tsx
- ✅ ScrollIndicator.tsx
- ✅ landing.tsx
- ✅ ai-agent.tsx
- ✅ commercial.tsx
- ✅ not-found.tsx
- ✅ index.css
- ✅ tailwind.config.ts
- ✅ use-mobile.tsx

Всі компоненти тепер повністю адаптивні та оптимізовані для різних розмірів екрану! 
