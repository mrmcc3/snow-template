#!/usr/bin/env bash
rm -rf public
mkdir -p public
cp index.html public/
mv sw.js* public/
cp -r out public/
cp -r web_modules public/
cp -r fonts public/

