# 🚀 TraderPlanLanding

**TradingPlan** - це інноваційна платформа для управління торговими операціями з інтеграцією AI-агента. Кожен клік без плану - це ще один цвях у вашій фінансовій труні. Ринок не прощає дурнів.

## 🎯 Мета проекту

Створити сучасну лендінг-сторінку для торгової платформи з:
- Привертає увагу трейдерів
- Демонструє можливості AI-агента
- Конвертує відвідувачів у користувачів
- Має сучасний технічний дизайн

## 🛠 Технологічний стек

### Frontend
- **React 18** - основний фреймворк
- **TypeScript** - типізація
- **Tailwind CSS** - стилізація
- **Framer Motion** - анімації
- **Wouter** - роутинг
- **Radix UI** - компоненти інтерфейсу
- **React Query** - управління станом

### Backend
- **Express.js** - сервер
- **Drizzle ORM** - робота з базою даних
- **Neon Database** - PostgreSQL
- **WebSocket** - real-time комунікація
- **Passport.js** - аутентифікація

### Інструменти
- **Vite** - збірка
- **ESBuild** - бандлінг
- **Drizzle Kit** - міграції БД

## 📁 Структура проекту 
TraderPlanLanding/
├── client/ # Frontend додаток
│ ├── src/
│ │ ├── components/ # React компоненти
│ │ ├── pages/ # Сторінки додатку
│ │ ├── hooks/ # Кастомні хуки
│ │ └── lib/ # Утиліти та конфігурація
│ └── public/ # Статичні файли
├── server/ # Backend сервер
│ ├── routes.ts # API маршрути
│ └── storage.ts # Робота з БД
├── shared/ # Спільний код
│ └── schema.ts # Схеми даних
└── attached_assets/ # Додаткові ресурси

## 🚀 Швидкий старт

### Встановлення залежностей
```bash
npm install
```

### Розробка
```bash
npm run dev
```

### Збірка для продакшену
```bash
npm run build
npm start
```

### База даних
```bash
npm run db:push
```

## 📱 Сторінки

1. **Landing** (`/`) - головна сторінка з ефектними анімаціями
2. **AI Agent** (`/ai-agent`) - інтерфейс AI-агента для торгівлі
3. **Commercial** (`/commercial`) - комерційні можливості
4. **404** - сторінка не знайдена

## 🎨 Дизайн

- **Кольорова схема**: Темна тема з акцентами синього
- **Типографіка**: Ubuntu Mono для технічного тексту
- **Анімації**: Плавні переходи та інтерактивні елементи
- **Адаптивність**: Повна підтримка мобільних пристроїв

## 🔧 Розробка

### Компоненти
Використовуйте готові UI компоненти з `src/components/ui/` на основі Radix UI.

### Стилі
- Tailwind CSS для стилізації
- CSS змінні для кольорів
- Анімації через Framer Motion

### Стан додатку
- React Query для серверного стану
- Локальний стан через useState/useReducer

## 📄 Правила розробки

### Код
- Використовуйте TypeScript для всіх файлів
- Дотримуйтесь ESLint правил
- Пишіть коментарі для складних алгоритмів

### Коміти
- Використовуйте conventional commits
- Приклади: `feat: add AI agent interface`, `fix: resolve mobile layout issues`

### Структура файлів
- Компоненти в `src/components/`
- Сторінки в `src/pages/`
- Утиліти в `src/lib/`
- Хуки в `src/hooks/`

## 🚀 Деплой

Проект готовий для деплою на:
- Vercel
- Netlify
- Railway
- Heroku

## 📄 Ліцензія

MIT License

---

**Remember**: Every click without a plan is another nail in your financial coffin. The market does not forgive fools. You are either predator or prey. **Decide.**
