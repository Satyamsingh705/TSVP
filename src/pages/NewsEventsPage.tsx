import React, { useEffect, useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Annual Day Celebration 2025',
    excerpt: 'Students showcased their talents through various cultural performances in our Annual Day celebration.',
    content: 'Our school celebrated its Annual Day with great enthusiasm and grandeur. Students from all classes participated in various cultural performances including classical dances, folk dances, music performances, and theatrical plays. The event was graced by distinguished guests who appreciated the talent and hard work of our students and teachers.',
    date: 'March 15, 2025',
    author: 'School Admin',
    category: 'Event',
    image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'annual-day-2025'
  },
  {
    id: 2,
    title: 'Science Exhibition Showcases Student Innovation',
    excerpt: 'Our students demonstrated their scientific knowledge and creativity in the annual Science Exhibition.',
    content: 'The annual Science Exhibition was a huge success with students presenting innovative projects across various scientific domains. From working models demonstrating renewable energy solutions to projects on environmental conservation, students displayed their deep understanding of scientific concepts and their practical applications.',
    date: 'February 22, 2025',
    author: 'Science Department',
    category: 'Academic',
    image: 'https://images.pexels.com/photos/8617862/pexels-photo-8617862.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'science-exhibition-2025'
  },
  {
    id: 3,
    title: 'Sports Day Winners Announced',
    excerpt: 'Congratulations to all participants and winners of our Annual Sports Day competition held last week.',
    content: 'The Annual Sports Day saw enthusiastic participation from students across all age groups. Various track and field events, team sports, and individual competitions were held, showcasing the athletic prowess of our students. The event concluded with a prize distribution ceremony where winners were awarded medals and certificates.',
    date: 'January 18, 2025',
    author: 'Sports Department',
    category: 'Sports',
    image: 'https://images.pexels.com/photos/8927023/pexels-photo-8927023.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'sports-day-2025'
  },
  {
    id: 4,
    title: 'Parent-Teacher Meeting Scheduled for Next Month',
    excerpt: 'The quarterly Parent-Teacher Meeting will be held on April 10, 2025, to discuss student progress and address concerns.',
    content: 'We cordially invite all parents to attend the quarterly Parent-Teacher Meeting scheduled for April 10, 2025. This is an important opportunity for parents to discuss their child\'s academic progress, behavior, and any concerns they may have with the teachers. The meeting will be held in respective classrooms from 9:00 AM to 1:00 PM.',
    date: 'March 25, 2025',
    author: 'School Admin',
    category: 'Announcement',
    image: 'https://images.pexels.com/photos/8617727/pexels-photo-8617727.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'ptm-april-2025'
  },
  {
    id: 5,
    title: 'Students Win National Level Quiz Competition',
    excerpt: 'Our school team secured first place in the National Level Knowledge Quest Quiz Competition held in Delhi.',
    content: 'We are proud to announce that our school quiz team comprising of Aditya Kumar, Priya Sharma, and Rahul Singh has won the National Level Knowledge Quest Quiz Competition held in Delhi last week. The team showcased exceptional knowledge across various subjects and beat 50 other schools from across the country to bring home the prestigious trophy.',
    date: 'March 5, 2025',
    author: 'School Admin',
    category: 'Achievement',
    image: 'https://images.pexels.com/photos/5212699/pexels-photo-5212699.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'quiz-competition-win-2025'
  },
  {
    id: 6,
    title: 'School to Introduce New Extracurricular Activities',
    excerpt: 'From the next academic session, new extracurricular activities including robotics, public speaking, and chess will be introduced.',
    content: 'In our ongoing effort to provide holistic education, we are pleased to announce the introduction of new extracurricular activities from the next academic session. The new activities include robotics, public speaking, chess, classical music, western dance, and photography. These activities are designed to foster creativity, critical thinking, and various skills that are essential for overall development.',
    date: 'March 1, 2025',
    author: 'School Admin',
    category: 'Announcement',
    image: 'https://images.pexels.com/photos/8471897/pexels-photo-8471897.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'new-extracurricular-activities-2025'
  },
  {
    id: 7,
    title: 'Career Counseling Workshop for Class 9 and 10 Students',
    excerpt: 'A career counseling workshop will be conducted to help students make informed decisions about their future academic and career paths.',
    content: 'A comprehensive career counseling workshop for students of Classes 9 and 10 will be conducted on April 5, 2025. The workshop aims to help students understand various career options, make informed decisions about their stream selection after Class 10, and plan their academic journey. Expert career counselors will be present to guide students and address their queries.',
    date: 'February 28, 2025',
    author: 'Counseling Department',
    category: 'Workshop',
    image: 'https://images.pexels.com/photos/7942538/pexels-photo-7942538.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'career-counseling-workshop-2025'
  },
  {
    id: 8,
    title: 'Independence Day Celebrations',
    excerpt: 'School celebrates Independence Day with flag hoisting, cultural performances, and patriotic activities.',
    content: 'Our school celebrated the 79th Independence Day with great patriotic fervor. The event began with the flag hoisting ceremony followed by the national anthem. Students presented a variety of cultural performances including patriotic songs, dances, and skits highlighting the sacrifices of our freedom fighters. The celebration concluded with the distribution of sweets and a pledge to contribute to the nation\'s development.',
    date: 'August 15, 2024',
    author: 'School Admin',
    category: 'Event',
    image: 'https://images.pexels.com/photos/8472333/pexels-photo-8472333.jpeg?auto=compress&cs=tinysrgb&w=1600',
    slug: 'independence-day-celebrations-2024'
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: 'Parent-Teacher Meeting',
    date: 'April 10, 2025',
    time: '9:00 AM - 1:00 PM',
    location: 'School Campus'
  },
  {
    id: 2,
    title: 'Career Counseling Workshop',
    date: 'April 5, 2025',
    time: '10:00 AM - 1:00 PM',
    location: 'School Auditorium'
  },
  {
    id: 3,
    title: 'Inter-School Debate Competition',
    date: 'April 15, 2025',
    time: '11:00 AM - 3:00 PM',
    location: 'School Auditorium'
  },
  {
    id: 4,
    title: 'Annual Art Exhibition',
    date: 'April 22, 2025',
    time: '10:00 AM - 4:00 PM',
    location: 'School Hall'
  }
];

const NewsEventsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'News & Events - Takshasila Vidyapeeth';
  }, []);
  
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(news => news.category.toLowerCase() === activeCategory.toLowerCase());
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'event', name: 'Events' },
    { id: 'academic', name: 'Academic' },
    { id: 'sports', name: 'Sports' },
    { id: 'announcement', name: 'Announcements' },
    { id: 'achievement', name: 'Achievements' },
    { id: 'workshop', name: 'Workshops' }
  ];
  
  return (
    <>
      <PageHeader 
        title="News & Events" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'News & Events', path: '/news-events' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Latest News & Updates</h2>
                <div className="w-24 h-1 bg-accent mb-8"></div>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2 rounded-md transition-colors ${
                        activeCategory === category.id 
                          ? 'bg-primary text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredNews.map(news => (
                  <div key={news.id} className="card group h-full flex flex-col">
                    <div className="overflow-hidden">
                      <img 
                        src={news.image} 
                        alt={news.title} 
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-1" />
                          <span>{news.date}</span>
                        </div>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                          {news.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{news.title}</h3>
                      <p className="text-gray-600 mb-4 flex-grow">{news.excerpt}</p>
                      <Link 
                        to={`/news-events/${news.slug}`} 
                        className="text-primary font-medium inline-flex items-center hover:text-primary-dark transition-colors mt-auto"
                      >
                        Read More <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/4">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                      <h4 className="font-medium">{event.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar size={14} className="mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-1">{event.time}</p>
                      <p className="text-gray-600 text-sm mt-1">{event.location}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">School Newsletter</h3>
                <p className="mb-4">Subscribe to our monthly newsletter to stay updated with school activities and announcements.</p>
                <form className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 rounded-md border-0 focus:ring-accent text-gray-800"
                  />
                  <button type="submit" className="w-full bg-accent text-primary font-medium py-2 rounded-md hover:bg-accent-dark transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEventsPage;