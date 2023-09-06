import BlogFeature from '@/features/BlogFeatrue'
import LandingLayout from '@/layouts/LandingLayout'
import React from 'react'

export default function BlogPage() {
  return (
    <>
      <BlogFeature />
    </>
  )
}

BlogPage.layout = LandingLayout
