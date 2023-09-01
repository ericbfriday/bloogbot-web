# Build Image

create a `.env` file with the following content for local development.
```bash
DATABASE_URL="sqlserver://localhost:1433;user=SA;password=Passw0rd!;encrypt=false;trustServerCertificate=true;loginTimeout=30;"
```

Note: If using SSMS, you can use the following connection info to point to the instance running in docker.
```
localhost\sql-server-db,1433
```

```bash
cd db-source

docker build -t mssql-bloog-bot .
```

Run the image
```bash
docker run -p 1433:1433 --name sql1 -d mssql-bloog-bot
```

Connect with `mssql` tools
```bash
docker exec -it sql1 /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P Passw0rd!
```

# Vercel deployment example

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fprisma%2Fdeployment-example-vercel&env=DATABASE_URL&envDescription=PostgreSQL%20connection%20string&envLink=https%3A%2F%2Fwww.prisma.io%2Fdocs%2Fconcepts%2Fdatabase-connectors%2Fpostgresql%23connection-url&project-name=prisma-vercel-deployment-example&repo-name=prisma-vercel-deployment-example)

[Deployment guide](https://www.prisma.io/docs/guides/deployment/deploying-to-vercel)