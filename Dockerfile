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

# ---- Runtime stage ----
FROM nginx:1.27-alpine AS runtime

# Nettoyage conf par défaut
RUN rm -f /etc/nginx/conf.d/default.conf

# Conf Nginx SPA
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Assets statiques
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Healthcheck simple
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]