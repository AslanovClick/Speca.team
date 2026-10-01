# Speca — лендинг мережі нішевих агрегаторів

Сайт-візитка проєкту Speca: Hero, Співпраця, Ніші, Як це працює, Контакти.

## Стек

- [Astro 5](https://astro.build) — статичний сайт, без UI-фреймворків
- Чистий CSS з токенами (`src/styles/global.css`), темна та світла тема
- Шрифти: Tektur (заголовки), Onest (текст), Feature Mono (логотип)

## Команди

```bash
npm install      # залежності
npm run dev      # локальний сервер http://localhost:4321
npm run check    # перевірка типів
npm run build    # збірка в dist/
npm run preview  # перегляд зібраного сайту
```

## Структура

```
src/
  components/   секції та елементи сторінки
  data/         ніші: кольори, домени, показники, контури логотипів
  i18n/         тексти (uk.ts; ru — пізніше)
  layouts/      базовий шаблон
  pages/        index (основна версія), v1 (перший варіант Hero)
  styles/       глобальні стилі та токени тем
```

## Що ще заглушка

- Форма заявки нікуди не надсилає (див. `TODO` у `Contact.astro`)
- Контакти, а також показники всіх ніш, крім speca.bike
- Файли шрифту Feature Mono — покласти в `public/fonts/` (`FeatureMono-Bold.woff2`, `FeatureMono-Medium.woff2`)
- Російська версія текстів
