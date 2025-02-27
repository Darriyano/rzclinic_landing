# --- Этап 1: Сборка приложения ---
FROM node:20 AS builder

# Рабочая директория
WORKDIR /app

# Копируем только package.json и yarn.lock, чтобы закэшировать установку зависимостей
COPY package.json yarn.lock ./

# Установка зависимостей
RUN yarn install --frozen-lockfile

# Копируем весь код
COPY . .

# Запускаем сборку (командой, прописанной в "scripts.build" package.json)
RUN yarn build

# --- Этап 2: Запуск (статическая раздача) ---
# Вместо Node.js используем nginx:stable-alpine — легковесный образ с Nginx
FROM nginx:stable-alpine as runner

# Копируем собранные статические файлы из предыдущего этапа в стандартную директорию Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Открываем 80-й порт (по умолчанию)
EXPOSE 80

# Стартуем Nginx, не завершая контейнер
CMD ["nginx", "-g", "daemon off;"]
