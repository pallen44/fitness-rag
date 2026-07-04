# @fitness-rag/db

Minimal local database package for the Fitness RAG app.

## Local database

Copy the example environment file:

```sh
cp .env.example .env
```

Start PostgreSQL locally:

```sh
docker compose up -d db
```

The database runs on `localhost:5432` by default and uses the `DATABASE_URL` shown in `.env.example`.

## pgvector

The Docker Compose service uses the `pgvector/pgvector:pg16` image, so the pgvector extension is available in the local database.

Enable it in a database or migration when vector tables are introduced:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
```

No product schema is defined in this packet. Future storage packets should add schema and migrations deliberately, close to the feature that needs them.
