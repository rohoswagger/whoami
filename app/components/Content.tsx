"use client";

import Link from "next/link";

const Content: React.FC = () => {
  const informationDiet = [
    {
      category: "Daily Reads",
      items: [
        { name: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news and startup discussions" },
        { name: "Paul Graham Essays", url: "http://paulgraham.com/articles.html", description: "Startup wisdom and life advice" },
        { name: "First Round Review", url: "https://review.firstround.com", description: "Startup and leadership insights" },
      ]
    },
    {
      category: "Newsletters",
      items: [
        { name: "Morning Brew", url: "https://www.morningbrew.com", description: "Business news made simple" },
        { name: "The Hustle", url: "https://thehustle.co", description: "Business and tech trends" },
        { name: "Stratechery", url: "https://stratechery.com", description: "Tech strategy analysis" },
      ]
    },
    {
      category: "Podcasts",
      items: [
        { name: "The Tim Ferriss Show", url: "https://tim.blog/podcast", description: "World-class performers and their tactics" },
        { name: "How I Built This", url: "https://www.npr.org/podcasts/510313/how-i-built-this", description: "Stories behind great companies" },
        { name: "The Knowledge Project", url: "https://fs.blog/knowledge-project", description: "Decision making and mental models" },
      ]
    },
    {
      category: "Books (Currently Reading)",
      items: [
        { name: "Zero to One", url: "https://www.goodreads.com/book/show/18050143-zero-to-one", description: "Peter Thiel on startups and monopolies" },
        { name: "The Hard Thing About Hard Things", url: "https://www.goodreads.com/book/show/18176747-the-hard-thing-about-hard-things", description: "Ben Horowitz on building companies" },
        { name: "Atomic Habits", url: "https://www.goodreads.com/book/show/40121378-atomic-habits", description: "James Clear on habit formation" },
      ]
    },
    {
      category: "YouTube Channels",
      items: [
        { name: "Y Combinator", url: "https://www.youtube.com/@ycombinator", description: "Startup advice from the best accelerator" },
        { name: "Lex Fridman", url: "https://www.youtube.com/@lexfridman", description: "Deep conversations with brilliant minds" },
        { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown", description: "Math and science explained beautifully" },
      ]
    }
  ];

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          content
        </h1>
        
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          my information diet - what i read, watch, and listen to stay curious and informed
        </p>
        
        <div className="space-y-12">
          {informationDiet.map((section) => (
            <div key={section.category}>
              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                {section.category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all duration-200 group"
                  >
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {item.description}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            got recommendations? i'm always looking for new things to learn from
          </p>
          <a 
            href="mailto:rohoswagger@gmail.com" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            send them my way
          </a>
        </div>
        
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← back home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Content;