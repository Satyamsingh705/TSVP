import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface QuoteData {
  content: string;
  author: string;
}

// Fallback quotes in case of any issues
const fallbackQuotes: QuoteData[] = [
  {
    content: "Education is not preparation for life; education is life itself.",
    author: "John Dewey"
  },
  {
    content: "The function of education is to teach one to think intensively and to think critically.",
    author: "Martin Luther King Jr."
  },
  {
    content: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    content: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  }
];

const PrincipalMessage: React.FC = () => {
  const [thought, setThought] = useState<QuoteData>(fallbackQuotes[0]);

  useEffect(() => {
    const getStoredQuote = () => {
      const storedQuote = localStorage.getItem('dailyQuote');
      if (storedQuote) {
        try {
          const { quote, timestamp } = JSON.parse(storedQuote);
          const lastUpdate = new Date(timestamp);
          const now = new Date();
          
          // Check if the stored quote is from today and before midnight
          if (lastUpdate.getDate() === now.getDate() && 
              lastUpdate.getMonth() === now.getMonth() && 
              lastUpdate.getFullYear() === now.getFullYear() &&
              now.getHours() >= 0) {
            return quote;
          }
        } catch (error) {
          console.error('Error parsing stored quote:', error);
        }
      }
      return null;
    };

    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
      return fallbackQuotes[randomIndex];
    };

    const updateQuote = () => {
      const storedQuote = getStoredQuote();
      if (storedQuote) {
        setThought({
          content: storedQuote.content,
          author: storedQuote.author
        });
      } else {
        const newQuote = getRandomQuote();
        setThought(newQuote);
        
        // Store the new quote
        localStorage.setItem('dailyQuote', JSON.stringify({
          quote: newQuote,
          timestamp: new Date().toISOString()
        }));
      }
    };

    // Initial quote update
    updateQuote();

    // Calculate time until next midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    // Set up timer for next midnight
    const midnightTimer = setTimeout(() => {
      updateQuote();
      // Set up daily interval after first midnight
      setInterval(updateQuote, 24 * 60 * 60 * 1000);
    }, timeUntilMidnight);

    // Cleanup timers
    return () => {
      clearTimeout(midnightTimer);
    };
  }, []);

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Principal's Message */}
          <div className="relative">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6">Principal's Message</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              
              <div className="flex items-start gap-6">
                <img 
                  src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Principal" 
                  className="w-32 h-32 rounded-lg object-cover shadow-md"
                />
                <div>
                  <p className="text-gray-700 mb-6">
                    Dear Parents and Students,
                  </p>
                  <p className="text-gray-700 mb-6">
                    Welcome to Takshasila Vidyapeeth, where we believe in nurturing not just academic excellence, but the overall development of our students. Our commitment is to provide a learning environment that encourages curiosity, creativity, and character building.
                  </p>
                  <p className="text-gray-700 mb-6">
                    In today's rapidly evolving world, we focus on preparing our students not just for examinations, but for life itself. Through our comprehensive curriculum and dedicated faculty, we strive to instill values that will help them become responsible citizens and future leaders.
                  </p>
                  <div className="text-right">
                    <p className="font-semibold text-primary">Mrs. Sunita Sharma</p>
                    <p className="text-sm text-gray-600">Principal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Thought of the Day */}
          <div className="flex items-center">
            <div className="bg-primary text-white p-8 rounded-lg relative overflow-hidden w-full">
              <div className="absolute -top-4 -left-4 opacity-10">
                <Quote size={120} />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6">Thought of the Day</h2>
                <div className="w-24 h-1 bg-accent mb-8"></div>
                
                <blockquote className="text-2xl font-heading mb-6">
                  "{thought.content}"
                </blockquote>
                <cite className="text-accent block text-right">- {thought.author}</cite>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;