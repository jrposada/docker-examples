On this example we are not using a pre created image from docker hub. Instead we are creating our custom image from source. This is defined through the `build` parameter. The only required filed is the context, which is the path to where the Dockerfile file is located.

In this case we want this container to be able to connect to an already created network (created by postgress-db container). To do so we just need to flag the network as `external` and use the same name used for its creation.

1. Run `docker compose up --build -d`