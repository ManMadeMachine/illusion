FROM node:alpine

# Default to production
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

COPY package*.json yarn.lock ./

RUN yarn install
ENV PATH /node_modules/.bin:$PATH

RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN pwd

CMD [ "yarn", "start" ]