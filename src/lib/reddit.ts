import { RedditPost, RedditApiResponse } from '@/types/reddit';

const REDDIT_API_URL = 'https://www.reddit.com';
const POSTS_PER_PAGE = 2;

export async function fetchRedditPosts(username: string, page: number = 1): Promise<{ posts: RedditPost[]; hasMore: boolean }> {
  try {
    const response = await fetch(`${REDDIT_API_URL}/user/${username}/submitted.json?limit=${POSTS_PER_PAGE * 2}&sort=top&t=all`);
    const data: RedditApiResponse = await response.json();
    
    if (!response.ok) {
      throw new Error('Failed to fetch Reddit posts');
    }

    const allPosts = data.data.children.map((post) => ({
      id: post.data.id,
      title: post.data.title,
      content: post.data.selftext,
      url: `https://reddit.com${post.data.permalink}`,
      subreddit: post.data.subreddit_name_prefixed,
      score: post.data.score,
      numComments: post.data.num_comments,
      created: new Date(post.data.created_utc * 1000),
      isSelfPost: post.data.is_self,
    }));

    // Sort posts by score in descending order
    const sortedPosts = allPosts.sort((a, b) => b.score - a.score);
    
    // Calculate pagination
    const startIndex = (page - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);
    
    return {
      posts: paginatedPosts,
      hasMore: endIndex < sortedPosts.length
    };
  } catch (error) {
    console.error('Error fetching Reddit posts:', error);
    return { posts: [], hasMore: false };
  }
} 