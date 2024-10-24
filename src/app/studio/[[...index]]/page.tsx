'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity/nps-website/sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}