import { ClientConfig, createClient } from '@sanity/preview-kit/client';

export const clientConfig: ClientConfig = {
  projectId: 'djq50trl',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-03-23',
};

export const client = createClient(clientConfig);
