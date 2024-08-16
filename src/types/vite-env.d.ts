/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MOCKING_ENABLED: 'ENABLED' | 'DISABLED';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
