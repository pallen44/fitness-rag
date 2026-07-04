export type DatabaseClientConfig = {
  connectionString: string;
};

export type DatabaseClient = {
  connectionString: string;
};

const defaultLocalDatabaseUrl =
  "postgres://fitness_rag:fitness_rag@localhost:5432/fitness_rag";

export function getDatabaseUrl(env: NodeJS.ProcessEnv = process.env): string {
  return env.DATABASE_URL ?? defaultLocalDatabaseUrl;
}

export function createDatabaseClient(
  config: Partial<DatabaseClientConfig> = {},
): DatabaseClient {
  return {
    connectionString: config.connectionString ?? getDatabaseUrl(),
  };
}
