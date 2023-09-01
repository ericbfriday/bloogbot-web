FROM mcr.microsoft.com/mssql/server:2017-latest

# Create a config directory
RUN mkdir -p /usr/config
WORKDIR /usr/config

# Bundle config source
COPY . /usr/config

# Grant permissions for to our scripts to be executable
RUN chmod +x /usr/config/entrypoint.sh
RUN chmod +x /usr/config/configure-db.sh

ENV ACCEPT_EULA Y
ENV SA_PASSWORD Passw0rd!

EXPOSE 1433
EXPOSE 1434

ENTRYPOINT ["./entrypoint.sh"]