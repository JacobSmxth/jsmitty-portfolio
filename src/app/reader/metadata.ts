import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';

// Moved generateMetadata function here
export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }): Promise<Metadata> {
  const postId = searchParams?.post as string | undefined;
  const post = postId ? blogPosts.find(p => p.id === postId) : null;

  if (!post) {
    return {
      title: 'Blog | Jacob Smith', 
      description: 'Thoughts and experiences from Jacob Smith.',
    };
  }

  return {
    title: `${post.title} | Jacob Smith Blog`,
    description: post.excerpt || 'A blog post by Jacob Smith.',
  };
} 