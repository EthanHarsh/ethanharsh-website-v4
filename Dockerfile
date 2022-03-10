FROM node:alpine
COPY . /app
WORKDIR ./app
RUN cd client/
RUN npm install
RUN npm run build
RUN cd ..
RUN cp -r client/build/ server/
RUN cd server/
RUN npm install
CMD npm start