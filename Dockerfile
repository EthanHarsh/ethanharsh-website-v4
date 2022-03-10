FROM node:alpine
COPY . /app
WORKDIR ./app
RUN chmod +x /install.sh
RUN /install.sh