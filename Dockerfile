FROM node:16 AS node

WORKDIR /usr/src

# deps
COPY package.json package-lock.json ./
RUN npm install

# build
ADD public public/
ADD src src/
RUN npm run build

FROM golang:1.17 AS golang

# os deps
RUN apt-get update
RUN apt-get install -y ca-certificates git

WORKDIR /usr/src

# golang deps
ADD go.mod go.sum ./
RUN go mod download

# build
ADD main.go .
ADD pkg/ pkg/
RUN go build -a -ldflags '-w -s -linkmode external -extldflags "-static"' -o ./selfserve ./main.go

FROM scratch

COPY --from=node /usr/src/dist /dist
COPY --from=golang /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=golang /usr/src/selfserve /

ENTRYPOINT ["/selfserve"]
