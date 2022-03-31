#!/usr/bin/env bash

set -e

sudo corepack enable

yarn --cwd typ-server install --production=false
yarn --cwd typ-client install --production=false
yarn --cwd isaac-four-souls install --production=false

yarn --cwd typ-server sequelize db:migrate
