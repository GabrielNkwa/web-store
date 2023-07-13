import { visionTool } from '@sanity/vision';
import { StudioNavbar } from './src/components/StudioNavbar';
import { Config } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas/index';
import { msTheme } from './src/theme';

import { defineConfig } from 'sanity';

export default defineConfig({
  name: 'default',
  title: 'Web Store',
  basePath: '/studio',

  projectId: 'djq50trl',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  theme: msTheme,

  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
});

// export const config: Config = {
//   name: 'default',
//   title: 'Web Store',
//   basePath: '/studio',

//   projectId: 'djq50trl',
//   dataset: 'production',

//   plugins: [deskTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },

//   theme: msTheme,

//   studio: {
//     components: {
//       navbar: StudioNavbar,
//     },
//   },
// };
