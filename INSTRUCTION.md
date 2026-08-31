# AK Games Landing — Инструкция по деплою и правкам

## Общая структура
- **Исходный код**: `nuxt.config.ts`, `components/`, `assets/`, `public/`, `functions/`
- **Сборка**: `npx nuxt generate` → `.output/public/`
- **Функции**: `.output/public/functions/api/contact.ts` — обработчик формы
- **Деплой**: Cloudflare Pages (wrangler) + KV namespace

---

## 1. Локальная разработка

```bash
# Установка зависимостей (один раз)
npm install

# Запуск dev-сервера (Hot Module Replacement)
npx nuxt dev

# Или обычный режим
npx nxu dev
```

Сайт будет доступен по адресу `http://localhost:3000`.

---

## 2. Внесение изменений и сборка

### Изменение кода
- Править файлы в `src/` (Nuxt 3 structure)
- Добавлять/изменять страницы/компоненты
- Редактировать `nuxt.config.ts` (параметры, фавикон, meta)

### Сборка статики
```bash
npx nuxt generate
```
Результат появится в `.output/public/` — это и есть то, что деплоится на Cloudflare.

**Важно:** После изменений обязательно копируйте функции, если они менялись:

```bash
# Если менялись функции — обновить копию
cp -r functions .output/public/functions/
```

---

## 3. Деплой на Cloudflare Pages

### Способ А — через CLI (рекомендуется)

```bash
# Убедитесь, что установлен wrangler
npm install -g wrangler

# Деплой текущей сборки
wrangler pages deploy .output/public --project-name=ak-games
```

После успешного деплоя выведется URL вроде:
`https://<hash>.ak-games-8lx.pages.dev`

### Способ Б — через веб-дашборд

1. Зайдите в Cloudflare: https://dash.cloudflare.com
2. Левое меню → **Workers & Pages** → проект `ak-games`
3. **Add a new deployment** → **Upload files**
4. Папка: `.output/public`
5. Нажмите **Deploy**

---

## 4. Cloudflare KV — хранение заявок

Форма пишет заявки в Cloudflare KV (ключ-значение). Чтобы это работало:

### 4.1 Создать namespace (один раз, если еще не сделано)

1. Cloudflare → **Workers & Pages → ak-games → Settings → Functions → Bindings → Add**
2. **Variable name:** `CONTACTS`
3. Нажмите **Create new namespace** → имя: `ak-games-contacts`
4. Сохраните. Nunjucks сам подтянет настройки при следующем деплое.

*Или вручную:* создайте namespace на странице KV и выберите его в привязках.

### 4.2 Проверить, что заявки хранятся

1. Cloudflare → **KV** (левое меню) → выберите namespace `ak-games-contacts`
2. Вкладка **Items** — будут ключи вида `contact:1787...:uuid`
3. Кликните по ключу — увидите JSON: `{ "name": "...", "email": "...", "message": "...", "at": "2026-..." }`

---

## 5. Кастомный домен `ak-games.com`

Чтобы сайт был по адресу `ak-games.com` (не `.pages.dev`):

1. **Workers & Pages → ak-games → Settings → Custom domains → Add custom domain**
2. Введите `ak-games.com`
3. Cloudflare создаст CNAME запись автоматически. Нажмите **Continue**.
4. Убедитесь, что домен `ak-games.com` добавлен в ваш Cloudflare account (DNS → Domains). Если нет — добавьте его как parked domain.

После этого сайт будет доступен по `https://ak-games.com`.

---

## 6. Тестирование контактной формы

### Через curl

```bash
curl -X POST https://ak-games.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","message":"hello"}'
```

Ответ: `{ "ok": true }`

### Через браузер (Playwright / ручное заполнение)

Откройте страницу, заполните форму, нажмите Send. Если всё хорошо — заявка появится в KV (см. пункт 4.2).

---

## 7. Типичные проблемы

| Проблема | Решение |
|---|---|
| Форма возвращает 502 или ошибка | Проверить, что KV binding `CONTACTS` привязан к проекту (dashboard → Functions → Bindings). |
| Сайт отдает старую версию | Деплой заново: `wrangler pages deploy .output/public --project-name=ak-games`. |
| Не работает кастомный домен | Убедитесь, что `ak-games.com` добавлен в Cloudflare как domain, а не просто alias. |
| RESEND_API_KEY ошибка | Smtp-key заблокирован для гэмблинга. Используйте KV-хранение заявок или провайдер вроде SMTP2GO. |
| `node:stream` error при деплое | Убедитесь, что `wrangler.jsonc` удален/не настроен (текущая схема использует только `.output/public`). |

---

## 8. Чек-лист перед пушем

- [ ] Изменения сделаны в исходных файлах
- [ ] `npx nuxt generate` прошел успешно
- [ ] Функции скопированы: `cp -r functions .output/public/functions/`
- [ ] `wrangler pages deploy .output/public --project-name=ak-games` — деплой прошел
- [ ] KV binding `CONTACTS` существует и привязан (dashboard check)
- [ ] Домен `ak-games.com` привязан (опционально)
- [ ] Тестовая заявка отправлена и видна в KV

---

**Ссылки:**
- Сайт (после деплоя): `https://ak-games.com`
- API формы: `https://ak-games.com/api/contact` (POST)
- Просмотр заявок: Cloudflare → KV → `ak-games-contacts` → Items
- Dashboard проекта: https://dash.cloudflare.com/fc761773a6e2c5edc5f994ce00d35033/workers/pages/ak-games