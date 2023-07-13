'use client';

import defineConfig from '../../../../../sanity.config';
import { NextStudio } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={defineConfig} />;
}
