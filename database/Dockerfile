FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD admin@123
ENV MYSQL_DATABASE mydatabase
ENV MYSQL_USER root
ENV MYSQL_PASSWORD admin@123
COPY ./scripts/CreateTables.sql /docker-entrypoint-initdb.d
EXPOSE 3306