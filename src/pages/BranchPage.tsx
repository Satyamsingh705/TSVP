import React, { useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface BranchPageProps {
  branch: 'bakhri' | 'begusarai';
}

interface BranchInfo {
  name: string;
  title: string;
  address: string;
  phone: string;
  email: string;
  description: string;
  features: string[];
  facilities: string[];
  timings: {
    school: string;
    office: string;
  };
  headerImage: string;
  images: string[];
}

const branchData: Record<string, BranchInfo> = {
  bakhri: {
    name: 'Bakhri',
    title: 'Main Campus',
    address: 'Near Railway Station, Bakhri, Bihar - 851201',
    phone: '+91 00000 00000',
    email: 'bakhri@takshasilavidyapeeth.edu',
    description: 'Established in 2005, our main campus in Bakhri provides a conducive learning environment spread across 5 acres of land. With state-of-the-art facilities and experienced faculty, it has been a center of educational excellence in the region for over 15 years.',
    features: [
      'Sprawling 5-acre campus with modern infrastructure',
      'Comprehensive educational facilities from Classes 1 to 10',
      'Well-equipped science and computer laboratories',
      'Extensive library with over 10,000 books',
      'Separate playgrounds for various sports',
      'Dedicated transportation fleet serving surrounding areas'
    ],
    facilities: [
      'Smart classrooms',
      'Digital library',
      'Science labs',
      'Computer lab',
      'Sports facilities',
      'Cafeteria',
      'Activity rooms',
      'Auditorium',
      'Medical room'
    ],
    timings: {
      school: '8:00 AM - 3:00 PM (Monday to Saturday)',
      office: '8:00 AM - 4:30 PM (Monday to Saturday)'
    },
    headerImage: 'https://images.pexels.com/photos/8471826/pexels-photo-8471826.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/8471944/pexels-photo-8471944.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8471731/pexels-photo-8471731.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8472072/pexels-photo-8472072.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8471899/pexels-photo-8471899.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  },
  begusarai: {
    name: 'Begusarai',
    title: 'Begusarai Branch',
    address: 'College Road, Begusarai, Bihar - 851101',
    phone: '+91 00000 00000',
    email: 'begusarai@takshasilavidyapeeth.edu',
    description: 'Our Begusarai branch, established in 2015, caters to the educational needs of students in and around Begusarai town. The campus is known for its modern facilities, strong academic programs, and focus on holistic development.',
    features: [
      '3-acre campus with contemporary architecture',
      'Classes from 1 to 10 with modern teaching methodologies',
      'Advanced science and computer labs',
      'Library with extensive collection of books and digital resources',
      'Sports complex with multi-purpose courts',
      'Regular workshops and seminars for enhanced learning'
    ],
    facilities: [
      'Multimedia classrooms',
      'Reading room',
      'Science labs',
      'Computer center',
      'Sports ground',
      'Cafeteria',
      'Activity zone',
      'Multipurpose hall',
      'Infirmary'
    ],
    timings: {
      school: '8:00 AM - 3:00 PM (Monday to Saturday)',
      office: '8:00 AM - 4:30 PM (Monday to Saturday)'
    },
    headerImage: 'https://images.pexels.com/photos/8617746/pexels-photo-8617746.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/8617753/pexels-photo-8617753.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8617861/pexels-photo-8617861.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8617743/pexels-photo-8617743.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/8617742/pexels-photo-8617742.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ]
  }
};

const BranchPage: React.FC<BranchPageProps> = ({ branch }) => {
  const branchInfo = branchData[branch];
  
  useEffect(() => {
    document.title = `${branchInfo.name} Campus - Takshasila Vidyapeeth`;
  }, [branchInfo.name]);
  
  return (
    <>
      <PageHeader 
        title={branchInfo.title} 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Branches', path: '#' },
          { name: branchInfo.name, path: `/branches/${branch}` }
        ]}
        backgroundImage={branchInfo.headerImage}
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our {branchInfo.name} Campus</h2>
              <div className="w-24 h-1 bg-accent mb-8"></div>
              
              <p className="text-gray-700 mb-8">
                {branchInfo.description}
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <MapPin size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">{branchInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">{branchInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">{branchInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock size={20} className="text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">School Hours</h4>
                    <p className="text-gray-600">{branchInfo.timings.school}</p>
                    <h4 className="font-medium mt-2">Office Hours</h4>
                    <p className="text-gray-600">{branchInfo.timings.office}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {branchInfo.images.map((image, index) => (
                <img 
                  key={index}
                  src={image}
                  alt={`${branchInfo.name} Campus`}
                  className={`rounded-lg shadow-md object-cover ${
                    index % 3 === 0 ? 'col-span-2 h-64' : 'h-48'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Campus Features</h3>
              <ul className="space-y-3">
                {branchInfo.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-primary rounded-full p-1 mr-3 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Campus Facilities</h3>
              <div className="grid grid-cols-2 gap-4">
                {branchInfo.facilities.map((facility, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Location Map</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-600">Interactive map will be embedded here</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchPage;