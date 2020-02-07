#!/bin/sh

git pull
docker-compose up -d --build --force-recreate --no-deps carousel