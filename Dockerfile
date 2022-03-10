FROM node:alpine
COPY . /app
WORKDIR ./app
RUN ./install.sh