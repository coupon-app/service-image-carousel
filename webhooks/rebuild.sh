#!/bin/sh

git pull
docker stop service-image-carousel_carousel_1
docker rm service-image-carousel_carousel_1
docker rmi service-image-carousel_carousel
docker-compose up -d --build --force-recreate --no-deps carousel