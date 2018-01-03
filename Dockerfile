FROM node:carbon-slim

# Setup environment
ENV NODE_ENV="production" \
    PORT=8080

RUN apt-get update && apt-get install -y --no-install-recommends git

USER node
WORKDIR /home/node

# Install packages
COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install --production --pure-lockfile

# Copy over app files
COPY . /home/node

# Build project
RUN ln -s /tmp/node_modules /home/node && \
    yarn build

CMD ["yarn", "server"]

EXPOSE $PORT
