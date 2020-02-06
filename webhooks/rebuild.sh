#!/bin/sh

cd ..
git pull
docker-compose up -d --build --force-recreate --no-deps carousel