export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: string;
  slug: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'modern-portfolio',
    slug: 'modern-portfolio',
    title: 'Building a Modern Portfolio with Next.js',
    date: '2025-03-15',
    excerpt: 'A deep dive into creating a modern portfolio website using Next.js, React, and Tailwind CSS.',
    content: `
# Building a Modern Portfolio with Next.js

In today's digital age, having a professional portfolio website is essential for showcasing your work and skills. This post explores how to build a modern portfolio using Next.js, React, and Tailwind CSS.

## Why Next.js?

Next.js provides several advantages for portfolio websites:
- Server-side rendering for better SEO
- Fast page loads with automatic code splitting
- Easy deployment with Vercel
- Built-in image optimization

## Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Fluid typography
   - Flexible layouts

2. **Performance Optimization**
   - Image optimization
   - Code splitting
   - Lazy loading

3. **Modern Styling**
   - Tailwind CSS for utility-first styling
   - Custom animations (like the ones we added!)
   - Dark mode support

## Implementation Example

Here's a snippet showing how to fetch data in a Next.js page component:

\`\`\`javascript
// pages/posts/[slug].js
import { getPostData, getAllPostSlugs } from '../../lib/posts';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false, // Show 404 if path doesn't exist
  };
}

export default function Post({ postData }) {
  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
\`\`\`

And styling with Tailwind:

\`\`\`css
/* styles/globals.css */
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", "sans-serif";
  --breakpoint-3xl: 1920px;
}

body {
  @apply bg-gray-900 text-gray-100 font-sans;
}
\`\`\`

Building a portfolio like this allows you to demonstrate real-world application development skills.
    `,
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Portfolio'],
    category: 'Web Development',
    readingTime: '5 min read'
  },
  {
    id: 'web-evolution',
    slug: 'web-evolution',
    title: 'The Evolution of Web Development',
    date: '2025-02-28',
    excerpt: 'Exploring the evolution of web development and future trends.',
    content: `
# The Evolution of Web Development

Web development has come a long way since the early days of static HTML pages. This post explores the journey of web development and looks ahead to future trends.

## The Early Days

- Static HTML pages
- Basic CSS styling
- Limited interactivity

## The JavaScript Revolution

- Dynamic content
- AJAX for asynchronous requests
- jQuery for DOM manipulation

## Modern Web Development

- Component-based architecture
- Single Page Applications (SPAs)
- Progressive Web Apps (PWAs)

## Future Trends

- WebAssembly
- AI integration
- Enhanced accessibility
- Improved performance

## Conclusion

The web continues to evolve, offering new possibilities for developers and users alike.
    `,
    tags: ['Web Development', 'History', 'Future Tech'],
    category: 'Web Development',
    readingTime: '5 min read'
  },
  {
    id: 'ai-enhanced-development',
    slug: 'ai-enhanced-development',
    title: 'AI-Enhanced Development: My Approach to Learning and Production',
    date: '2025-04-07',
    tags: ['Development', 'AI', 'Learning', 'Productivity'],
    category: 'Web Development',
    readingTime: '5 min read',
    excerpt: 'Exploring my approach to AI in development: learning without it, but leveraging it strategically in production work.',
    content: `# AI-Enhanced Development: My Approach to Learning and Production

This is my personal take on how I approach development in the age of AI.

## Learning Without AI

When I'm learning new technologies or concepts, I intentionally avoid using AI tools. This approach ensures I develop a deep, fundamental understanding of the technology. I believe in building a strong foundation through traditional learning methods:

- Reading official documentation
- Watching educational content (like [Fireship's excellent tutorials](https://www.youtube.com/@Fireship))
- Building small projects from scratch
- Debugging issues manually

This hands-on approach helps me develop critical thinking skills and a thorough understanding of how things work under the hood.

## Production with AI Enhancement

When it comes to actual development work, my philosophy shifts. I consider myself an AI-enhanced developer, leveraging the latest tools to:

- Accelerate development cycles
- Improve code quality
- Handle repetitive tasks efficiently
- Explore different implementation approaches

This isn't about "vibe coding" or blindly following AI suggestions. It's about strategically using AI to enhance my capabilities while maintaining full control over the development process.

## Skill Differentiation: Recruiter vs. Client Work

You might notice a difference between the technologies listed on my recruiter page versus my client page. This is intentional:

- **Recruiter Page**: Lists technologies I have deep, hands-on experience with
- **Client Page**: Includes technologies I can effectively work with using AI assistance

I never use AI to work with technologies I have zero understanding of. Instead, I:
1. Build a basic/intermediate foundation first
2. Use AI to enhance and expand my capabilities
3. Maintain the ability to read, understand, and modify AI-generated code
4. Always verify solutions against documentation and best practices

## The Learning Process

Even when using AI, I maintain a rigorous learning process:

- Constantly checking official documentation
- Watching educational content (like [Fireship](https://www.youtube.com/@Fireship) videos)
- Verifying AI suggestions against best practices
- Building small test projects to understand new concepts

This ensures that while AI helps me deliver more advanced solutions, I maintain full control and understanding of the codebase.

## The Balance

The key to my approach is understanding when and how to use AI:

1. **Learning Phase**: Pure, traditional learning to build strong fundamentals
2. **Development Phase**: AI-enhanced workflow to maximize efficiency and quality
3. **Review Phase**: Critical analysis of AI suggestions and outputs

This balanced approach allows me to:
- Maintain strong technical skills
- Stay competitive in the industry
- Deliver high-quality products efficiently
- Continuously improve my development process

## Looking Forward

As AI continues to evolve, I remain committed to:
- Keeping my core skills sharp through traditional learning
- Staying current with AI tools and their applications
- Using AI strategically to enhance my development workflow
- Delivering the best possible products to clients and users

The future of development isn't about choosing between AI and traditional methods - it's about finding the right balance between them to achieve optimal results.

*Jacob Smith - Web Developer & AI-Enhanced Engineer*
    `
  },
  {
    id: 'web-of-inspiration',
    title: 'The Web of Inspiration: What Spider-Man Teaches Us About Development',
    date: '2025-03-20',
    excerpt: 'How the lessons from our friendly neighborhood hero apply to modern web development.',
    content: `
# The Web of Inspiration: What Spider-Man Teaches Us About Development

Growing up, Spider-Man wasn't just a superhero to me - he was a symbol of growth, responsibility, and the constant pursuit of improvement. These themes, surprisingly, have profound parallels in the world of web development.

## The Journey Begins

Take Peter Parker's journey: a young enthusiast thrust into a world of incredible possibilities. Sound familiar? That's every developer starting their journey with that first "Hello World." Just as Peter had to learn to control his powers, we developers must master our tools and technologies.

## Evolution and Adaptation

The evolution of Spider-Man across different iterations mirrors our own industry's evolution:

- **The Classic Era (Tobey Maguire)**: Like the jQuery days - reliable, foundational, nostalgic
- **The Modern Take (Andrew Garfield)**: The React revolution - innovative but sometimes misunderstood
- **The New Generation**: Modern web frameworks and tools, bringing fresh perspectives while honoring the core principles

## Great Power, Great Responsibility

But perhaps the most relevant lesson comes from one of the most iconic Spider-Man quotes: "With great power comes great responsibility." In development terms, this translates to:

1. **Code Quality**
   - Writing maintainable code that others can understand
   - Building accessible applications that everyone can use

2. **Security & Ethics**
   - Creating secure systems that protect user data
   - Contributing to the developer community

## Balancing Act

Just as Spider-Man constantly adapts his web-slinging techniques, we must stay agile in our rapidly evolving tech landscape. And like Peter Parker balancing his personal life with his hero duties, we developers must find the right balance between:

- Learning new technologies
- Maintaining existing skills
- Meeting project deadlines
- Contributing to open source

## The Next Generation

The new "Spider-Man: Freshman Year" animated series perfectly captures this spirit of early growth and learning - reminiscent of every developer's journey through their first framework or language. It's a reminder that everyone starts somewhere, and growth is a continuous process.

## Conclusion

Whether you're team Tobey (nostalgic and reliable), team Andrew (innovative but sometimes misunderstood), or embracing the latest iterations, the lesson remains the same: keep learning, keep improving, and use your powers responsibly.

After all, in our own way, we developers are web-slingers too. 🕸️
    `,
    tags: ['Development', 'Learning', 'Personal Growth', 'Technology'],
    readingTime: '4 min read',
    slug: 'web-of-inspiration',
    category: 'Development'
  }
];

// Sort the array by date (most recent first)
blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); 