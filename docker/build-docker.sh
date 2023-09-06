#!/usr/bin/env bash
TAG=$1

pwd
docker build -f app/Dockerfile . -t dienvm1/devops-capstone:$TAG
