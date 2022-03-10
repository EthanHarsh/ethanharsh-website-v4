#!/bin/bash
cd client/
npm install
npm run build
cd ..
cp -r client/build/ server/
cd server/
npm install