import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'Annual Day Celebration 2025',
    excerpt: 'Students showcased their talents through various cultural performances in our Annual Day celebration.',
    date: 'March 15, 2025',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/news-events/annual-day-2025'
  },
  {
    id: 2,
    title: 'Science Exhibition Showcases Student Innovation',
    excerpt: 'Our students demonstrated their scientific knowledge and creativity in the annual Science Exhibition.',
    date: 'February 22, 2025',
    image: 'https://images.pexels.com/photos/8617862/pexels-photo-8617862.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/news-events/science-exhibition-2025'
  },
  {
    id: 3,
    title: 'Sports Day Winners Announced',
    excerpt: 'Congratulations to all participants and winners of our Annual Sports Day competition held last week.',
    date: 'January 18, 2025',
    image: 'https://images.pexels.com/photos/8927023/pexels-photo-8927023.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/news-events/sports-day-2025'
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Events</h2>
            <div className="w-24 h-1 bg-accent mb-4"></div>
          </div>
          <Link to="/news-events" className="btn btn-outline mt-4 md:mt-0">
            View All News <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map(item => (
            <div key={item.id} className="card group h-full flex flex-col">
              <div className="overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{item.excerpt}</p>
                <Link 
                  to={item.link} 
                  className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;