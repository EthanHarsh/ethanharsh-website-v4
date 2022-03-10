FROM node:alpine
COPY . /app
WORKDIR ./app
ADD install.sh
RUN chmod +x /install.sh
RUN /install.sh