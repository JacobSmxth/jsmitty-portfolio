export interface RedditPost {
  id: string;
  title: string;
  content: string;
  url: string;
  subreddit: string;
  score: number;
  numComments: number;
  created: Date;
  isSelfPost: boolean;
}

interface RedditApiPost {
  data: {
    id: string;
    title: string;
    selftext: string;
    permalink: string;
    subreddit_name_prefixed: string;
    score: number;
    num_comments: number;
    created_utc: number;
    is_self: boolean;
  };
}

export interface RedditApiResponse {
  data: {
    children: RedditApiPost[];
  };
} 