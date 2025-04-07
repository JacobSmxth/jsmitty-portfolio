export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: 'Web Development' | 'Design' | 'Tutorials' | 'Personal';
  readingTime: string;
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
   - Custom animations
   - Dark mode support

## Implementation

The portfolio includes:
- Project showcase
- Skills section
- Contact form
- Blog integration

## Conclusion

Building a portfolio with Next.js provides a solid foundation for showcasing your work while ensuring optimal performance and user experience.
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

Hi, I'm Jacob Smith, and this is my personal take on how I approach development in the age of AI.

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
  }
]; 