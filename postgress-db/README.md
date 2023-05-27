On this example we are running a docker container with two services: a PostgreSql DB and a pgAdmin portal which we can use to manually connect to the DB.

The way it works is by first defining a service for the DB instance where we set the username, password and main DB. By default PostgreSQL runs on port 5432 which is what we need to connect from other services inside the container. However, most likely we will also need to access it from the Docker host, or other containers. To allow this we need to expose the port to the host. This is done through the ports config. In the example we are mapping container port 5432 to Docker host port 5432. It may look redundant since the port is the same. But what we are achieving here is exposing the port to the Docker host. 

The second service is the pgAdmin portal instance. This service will run, by default, in port 80, but we will access it through port 5050 on our Docker host.

The last `networks` configuration aims to make the services available to other containers. By default dockers will run on different networks, which means they can not communicate between them. However it is possible to create a custom user network where different containers can run and communicate. Since we want all the services running on the docker compose to be accessible configuration is done to the `default` network. The name can be whatever the user wants to name it (will be used by other containers to identify the network) and `attachable` must be true in order for it to be publicly available.

The rest of variables defined on the `environment` nodes can can be are documented on the respective documentation page for the images: [postgres](https://hub.docker.com/_/postgres/) and [pgAdmin](https://www.pgadmin.org/docs/pgadmin4/latest/container_deployment.html)

1. Run `docker compose up -d`
2. Go to [pgAdmin portal](http://localhost:5050/)
3. Select Add New Server and fill data form as follow:
   1. General
      1. Name: TestDB (it)
   2. Connection
      1. Host name/address: db (same as service name on compose.yml)*
      2. Port: 5432 (same as compose.yml)
      3. Username: admin (same as compose.yml)
      4. Password: changeme (same as compose.yml)

* Basically each service will be visible inside the container with a hostname which matches that of the service name. Because pgAdmin and PostgreSQL services are running in the same container we can access db server from pgAdmin through the hostname `db`.