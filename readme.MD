# containerized angular + node system

## dev mode

Angular 16 front-end in container on port 4200 (client/Dockerfile.dev)
Node 16 back-end in container on port 3000 (server/Dockerfile.dev>
nginx listening on 3050 and routing to both containers (nginx/Dockerfile.dev)

hot reloading working with both front and back.

## prod mode

Angular 16 front-end in container in nginx on port 4200 (client/Dockerfile)
Node 16 back-end in container on port 3000 (server/Dockerfile>
nginx listening on 3050 and routing to both containers (nginx/Dockerfile.dev)

## swapping

To change between dev and prod, change docker-compose for api and client from Dockerfile.dev to Dockerfile and back.

## Source

This was done by following the instructions in this video:
https://www.youtube.com/watch?v=6Tsi9iL86Cg
