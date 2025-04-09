import React from 'react';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import ReaderClient from '@/components/ReaderClient';

// Define an interface for the page props
interface ReaderPageProps {
  params?: { [key: string]: string | string[] | undefined }; // Include params even if unused
  searchParams?: { [key: string]: string | string[] | undefined };
}

// generateMetadata function removed - lives in metadata.ts

// Page component using the explicit interface
export default function ReaderPage({ searchParams }: ReaderPageProps) {
  const postId = searchParams?.post as string | undefined;
  
  const initialPost: BlogPost | null = postId 
    ? blogPosts.find(p => p.id === postId) || null 
    : null;

  return <ReaderClient initialPost={initialPost} />;
} 