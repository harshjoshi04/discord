// @types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_POSTGRES_USER: string;
    NEXT_PUBLIC_POSTGRES_PASSWORD: string;
    NEXT_PUBLIC_POSTGRES_DB: string;
  }
}
