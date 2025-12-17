FROM node:20-alpine AS build
RUN apk add --no-cache git \
 && corepack enable \
 && corepack prepare pnpm@latest --activate

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:stable-alpine
RUN rm -f /etc/nginx/conf.d/default.conf
RUN printf "server { listen 80; server_name _; root /usr/share/nginx/html; location / { try_files \$uri \$uri/ /index.html; } location ~* \\.(?:js|css|png|jpg|jpeg|gif|svg|ico)$ { expires 30d; access_log off; try_files \$uri =404; } }\n" > /etc/nginx/conf.d/portal.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]