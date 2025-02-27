FROM node:18 AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18 AS runner

WORKDIR /app

COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production --frozen-lockfile

COPY --from=builder /app/build /app/build

RUN yarn global add serve
EXPOSE 3000

CMD ["serve", "-s", "build"]
