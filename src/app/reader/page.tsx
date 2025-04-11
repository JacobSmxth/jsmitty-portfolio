'use client'; // Add use client directive

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import ReaderClient from '@/components/ReaderClient';

// Removed ReaderPageProps interface definition

// generateMetadata function removed - lives in metadata.ts

// New component to handle search params logic
function ReaderContent() {
  const searchParams = useSearchParams();
  const postId = searchParams.get('post');

  const initialPost: BlogPost | null = postId
    ? blogPosts.find(p => p.id === postId) || null
    : null;

  return <ReaderClient initialPost={initialPost} />;
}

// Page component now wraps ReaderContent in Suspense
// Removed ReaderPageProps type annotation
export default function ReaderPage() {
  return (
    <Suspense fallback={<div>Loading post...</div>}>
      <ReaderContent />
    </Suspense>
  );
} 