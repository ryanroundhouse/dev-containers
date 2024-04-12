# containerized angular + node system

## dev mode

Angular 16 front-end in container on port 4200 (client/Dockerfile.dev)
Node 16 back-end in container on port 3000 (server/Dockerfile.dev>
nginx listening on 3050 and routing to both containers (nginx/Dockerfile.dev)

hot reloading working with both front and back.

### Usage

From root folder, run the following command:

```
docker-compose up --build
```

## Prod Mode

Angular 16 front-end in container in nginx on port 4200 (client/Dockerfile)
Node 16 back-end in container on port 3000 (server/Dockerfile>
nginx listening on 3050 and routing to both containers (nginx/Dockerfile.dev)

### Usage

After following instructions in the swapping section, from root folder, run the following command:

```
docker-compose up --build
```

## swapping

To change between dev and prod, change docker-compose for api and client from Dockerfile.dev to Dockerfile and back.

## Front-end dev container

If you open the /client folder in vscode and have the 'remote containers' extension installed, you'll be prompted to 'Re-open folder in container'.
This will use the root-project docker-compose file with the exception of the client dockerimage being replaced by the dev container for the front-end located in the /client/.devcontainer folder.  This allows you to run the IDE with all pre-reqs and leverage the previously-built dockerimages (back-end and nginx)

## Source

This was done by following the instructions in this video:
https://www.youtube.com/watch?v=6Tsi9iL86Cg

Extended with the following devcontainer tutorial:
https://toptechtips.github.io/2023-05-17-docker-compose-multiple-dev-containers/
