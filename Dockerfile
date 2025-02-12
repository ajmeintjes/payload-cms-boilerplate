FROM node:18.8-alpine as base

FROM base as builder

WORKDIR /home/node/app
COPY package*.json ./

# Make necessary secrets available during build
ARG PAYLOAD_SECRET
ENV PAYLOAD_SECRET=$PAYLOAD_SECRET
ARG DATABASE_URI
ENV DATABASE_URI=$DATABASE_URI

COPY . .
RUN yarn install
RUN yarn build

FROM base as runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js

WORKDIR /home/node/app
COPY package*.json  ./
COPY yarn.lock ./

RUN yarn install --production
COPY --from=builder /home/node/app/dist ./dist
COPY --from=builder /home/node/app/build ./build
COPY --from=builder /home/node/app/.next ./.next

EXPOSE 3000

# Use shell form of CMD to allow variable expansion and command chaining
CMD NODE_ENV=production PAYLOAD_CONFIG_PATH=dist/payload/payload.config.js node dist/server.js
