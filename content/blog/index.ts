export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content?: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "new-grads-are-lazy",
    title: "How do you pull away from the average CS major?",
    description: "My take on the average CS major and new grad in the software engineering field.",
    date: "2024-12-20",
    tags: ["Career", "CS", "Job Market"],
    content: `I'm making this while I should be studying for finals, but I recently came across [this video](https://youtu.be/YcrfUzKJQms?si=YN2cR48KqzP0OH5g) on my YouTube feed. Initially, I felt bad for the guy, I think a lot of people are in that boat where they kinda neglect internships which happens. However, I then saw a new video of him talking about his resume and how he feels about coding outside of class. 

I don't understand why these people are in the field.

Genuinely, what are these people doing? I don't want to be mean, but if you 1. don't have internships and 2. don't care enough or like it enough to code OUTSIDE of classes then you should not be in this field. Not to be an asshole, but it's just the truth. I saw a follow-up video where he talks about making "cool stuff" (which is what you should be doing) but if it took you an external source to understand that, you will not be successful in this field.

I think this reflects the biggest problem in software engineering right now. The field is extremely oversaturated at the entry level, yes, but passionate people will always find work. However, 99% of people in this field are not passionate at all about what they want to do. Look at [this](https://www.reddit.com/r/cscareerquestions/comments/1pomyrb/brothers_i_am_tired/) reddit post on the front page of r/cscareerquestions today. The last line literally says, "I tried to work on projects 'for fun' but... I don't have the energy rn without being paid directly"

Do people not see the issue with this? Software engineering is a difficult field to break into, that's why it pays so much, but you cannot complain about not getting a job when you aren't doing your due diligence. Why do people think they're entitled to a job? You have to work for things that are highly sought after, you have to be willing to put in the work to get what you want.

Going back to this henny117 guy, he posted that video about building cool stuff a month ago. 8 days ago, he posted another video about how he has a hard time starting to build a project.

If you are an aspiring software engineer, take these people as inspiration what not to do. Enjoy what you do, build outside your classes, go to hackathons, build side projects, etc.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, count);
}

