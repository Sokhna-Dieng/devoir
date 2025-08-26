# ---- Stage 1: Build Angular app ----
FROM node:18-alpine AS build
WORKDIR /app


# Copie des manifestes d’abord pour tirer profit du cache Docker
COPY package*.json ./
RUN npm ci


# Copie du reste du projet
COPY . .


# Build prod Angular (Angular 16)
RUN npx ng build --configuration production


# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine


# Copie de la conf Nginx
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf


# Copie des fichiers build Angular dans le dossier web Nginx
COPY --from=build /app/dist/m1iage /usr/share/nginx/html


# Santé basique
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://localhost/ || exit 1


EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]