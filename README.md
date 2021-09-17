# SelfServe

Create self service user interfaces over infrastructure automations.

## Development

### Locally

- Install the prerequisites

    go mod tidy
    yarn install

- Create the SQLite database
  
    go run main.go migrate

- Start the server in hot reload mode
  
    go run github.com/cosmtrek/air

- Start the frontend in another terminal

    yarn start

### Docker compose

- Start the containers

    docker compose build
    docker compose up

- Open the app

    open http://localhost:8080

### Schema changes

After modifying the Graphql schema or ent code run:

    go generate ./...

To regenerate the generated code.
