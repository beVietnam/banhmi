FROM node:14
WORKDIR /app
COPY site/package.json ./
COPY site/yarn.lock ./
RUN yarn install
COPY site/ ./

ARG FRONTEND_ENVIRONMENT
RUN yarn run build

EXPOSE 80
CMD [ "yarn", "run", "start", "--", "-p", "80" ]
