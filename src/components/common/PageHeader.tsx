import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  breadcrumbs: {
    name: string;
    path: string;
  }[];
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  breadcrumbs, 
  backgroundImage = 'https://images.pexels.com/photos/8617426/pexels-photo-8617426.jpeg?auto=compress&cs=tinysrgb&w=1600'
}) => {
  return (
    <section 
      className="relative py-28 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-primary opacity-80"></div>
      
      <div className="container-custom relative z-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={index} className="inline-flex items-center">
                {index > 0 && <ChevronRight size={16} className="mx-1" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="ml-1 text-accent font-medium">{breadcrumb.name}</span>
                ) : (
                  <Link to={breadcrumb.path} className="hover:text-accent transition-colors">
                    {breadcrumb.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default PageHeader;