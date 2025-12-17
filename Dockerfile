FROM node:20-alpine AS build

# Outils et pnpm
RUN apk add --no-cache git
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Cache efficace: lock + manifest
COPY package.json pnpm-lock.yaml ./

# Cache du store pnpm
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# Code source
COPY . .

# Build Vite
RUN pnpm run build