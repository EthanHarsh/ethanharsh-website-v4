FROM node:alpine
COPY . /app
WORKDIR ./app
RUN bash ./install.sh