interface Testimonial {
  id: number;
  text: string;
  author: string;
  position: string;
  gradient: string;
  contactGradient: string;
}

const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "I couldn't be happier with the website Jacob created for me! From start to finish, they delivered a flawless experience while listening to my vision, offering smart suggestions, and executing a design that's both stunning and highly functional. The site works perfectly & loads quickly. What really stood out was their professionalism, attention to detail, and willingness to go above and beyond. I'll recommend Jacob to anyone needing a reliable web development. ⭐⭐⭐⭐⭐",
      author: "Fr0st",
      position: "Kick Streamer",
      gradient: "from-red-500/10 via-red-600/10 to-transparent",
      contactGradient: "from-red-500/10 via-red-600/10 to-transparent"
    },
    {
      id: 2,
      text: "Jacob created an awesome website that really shows what my training is all about. The site looks great on phones and computers, and makes it super easy for my clients to check out my services and book sessions.",
      author: "Kayla Smith",
      position: "Athletic Trainer",
      gradient: "from-transparent via-red-600/10 to-red-500/10",
      contactGradient: "from-transparent via-red-600/10 to-red-500/10"
    },
  ];
  
  export default testimonials; 