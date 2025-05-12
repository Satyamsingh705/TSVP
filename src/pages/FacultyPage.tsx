import React, { useEffect, useState } from 'react';
import PageHeader from '../components/common/PageHeader';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  qualifications: string;
  experience: string;
  image: string;
  bio: string;
}

const facultyMembers: FacultyMember[] = [
  {
    id: 1,
    name: 'Dr. Rajendra Prasad',
    designation: 'Director',
    department: 'Administration',
    qualifications: 'Ph.D. in Education, M.Ed.',
    experience: '25+ years',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Dr. Prasad has over 25 years of experience in the field of education. He has been instrumental in shaping the vision and growth of Takshasila Vidyapeeth since its inception. His focus on maintaining high academic standards while ensuring holistic development of students has been the cornerstone of the school\'s philosophy.'
  },
  {
    id: 2,
    name: 'Mrs. Sunita Sharma',
    designation: 'Principal (Bakhri Campus)',
    department: 'Administration',
    qualifications: 'M.A. English, B.Ed.',
    experience: '15+ years',
    image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Sharma has been with Takshasila Vidyapeeth for 15 years. With her Master\'s in English Literature and B.Ed., she has implemented innovative teaching methodologies and curricular reforms that have significantly enhanced the academic standards of the Bakhri campus.'
  },
  {
    id: 3,
    name: 'Mr. Vikram Singh',
    designation: 'Principal (Begusarai Campus)',
    department: 'Administration',
    qualifications: 'M.Sc. Mathematics, B.Ed.',
    experience: '18+ years',
    image: 'https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mr. Singh brings 18 years of educational leadership to our Begusarai campus. His expertise in mathematics and science education has helped develop our STEM programs, preparing students for future challenges in these fields. Under his leadership, the Begusarai campus has seen significant growth in both academic excellence and infrastructure development.'
  },
  {
    id: 4,
    name: 'Mrs. Priya Gupta',
    designation: 'Academic Coordinator',
    department: 'Administration',
    qualifications: 'M.A. Education, B.Ed.',
    experience: '12+ years',
    image: 'https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Gupta oversees curriculum development and academic affairs across both campuses. Her focus on integrating traditional learning with modern pedagogical approaches has resulted in a balanced and effective educational system that caters to the diverse needs of our students.'
  },
  {
    id: 5,
    name: 'Mr. Amit Kumar',
    designation: 'Head of Science Department',
    department: 'Science',
    qualifications: 'M.Sc. Physics, B.Ed.',
    experience: '10+ years',
    image: 'https://images.pexels.com/photos/8617681/pexels-photo-8617681.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mr. Kumar leads our Science Department with his deep knowledge of physics and passion for scientific inquiry. He has developed numerous hands-on experiments and practical demonstrations that make complex scientific concepts accessible and engaging for students of all levels.'
  },
  {
    id: 6,
    name: 'Mrs. Neha Sinha',
    designation: 'Head of Mathematics Department',
    department: 'Mathematics',
    qualifications: 'M.Sc. Mathematics, B.Ed.',
    experience: '8+ years',
    image: 'https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Sinha is known for her innovative methods of teaching mathematics that make the subject enjoyable and accessible to all students. Her approach focuses on building a strong foundation in mathematical concepts and developing problem-solving skills rather than rote learning.'
  },
  {
    id: 7,
    name: 'Mr. Rajesh Verma',
    designation: 'Head of English Department',
    department: 'Languages',
    qualifications: 'M.A. English Literature, B.Ed.',
    experience: '12+ years',
    image: 'https://images.pexels.com/photos/5212694/pexels-photo-5212694.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mr. Verma is passionate about literature and language arts. His teaching methodology focuses on developing strong communication skills, critical thinking, and appreciation for literature. He has been instrumental in organizing various literary events and competitions that enhance students\' language proficiency.'
  },
  {
    id: 8,
    name: 'Mrs. Anjali Mishra',
    designation: 'Head of Social Science Department',
    department: 'Social Science',
    qualifications: 'M.A. History, B.Ed.',
    experience: '9+ years',
    image: 'https://images.pexels.com/photos/5212434/pexels-photo-5212434.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Mishra brings history, geography, and civics to life through her interactive teaching methods. She incorporates field trips, model-making, role plays, and discussions into her lessons to make social science subjects engaging and relevant to students\' lives.'
  },
  {
    id: 9,
    name: 'Mr. Sanjay Jha',
    designation: 'Physical Education Instructor',
    department: 'Physical Education',
    qualifications: 'M.P.Ed., Diploma in Sports Coaching',
    experience: '7+ years',
    image: 'https://images.pexels.com/photos/5212651/pexels-photo-5212651.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mr. Jha oversees the physical education program and sports activities at our school. His expertise in various sports disciplines and commitment to promoting physical fitness has led to numerous achievements by our students in inter-school sports competitions.'
  },
  {
    id: 10,
    name: 'Mrs. Kavita Singh',
    designation: 'Computer Science Teacher',
    department: 'Computer Science',
    qualifications: 'MCA, B.Ed.',
    experience: '6+ years',
    image: 'https://images.pexels.com/photos/5212315/pexels-photo-5212315.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Singh keeps our computer science curriculum updated with the latest technologies and programming languages. She has developed practical projects that help students apply their knowledge of computer science to solve real-world problems and prepare for future technological challenges.'
  },
  {
    id: 11,
    name: 'Mr. Dinesh Kumar',
    designation: 'Music Teacher',
    department: 'Arts',
    qualifications: 'M.A. in Music, Sangeet Visharad',
    experience: '8+ years',
    image: 'https://images.pexels.com/photos/8617529/pexels-photo-8617529.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mr. Kumar is a talented musician who has trained our students in classical and contemporary music. Under his guidance, the school choir and music ensemble have performed at various cultural events and won accolades in inter-school competitions.'
  },
  {
    id: 12,
    name: 'Mrs. Shanti Devi',
    designation: 'Art Teacher',
    department: 'Arts',
    qualifications: 'M.F.A., B.Ed.',
    experience: '10+ years',
    image: 'https://images.pexels.com/photos/5212573/pexels-photo-5212573.jpeg?auto=compress&cs=tinysrgb&w=1600',
    bio: 'Mrs. Devi nurtures creativity and artistic expression in our students. Her holistic approach to art education encompasses various mediums and techniques, allowing students to discover and develop their unique artistic talents and perspectives.'
  }
];

const FacultyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Faculty - Takshasila Vidyapeeth';
  }, []);
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);
  
  const filteredFaculty = activeFilter === 'all' 
    ? facultyMembers 
    : facultyMembers.filter(faculty => faculty.department.toLowerCase() === activeFilter.toLowerCase());
  
  const departments = [
    { id: 'all', name: 'All' },
    { id: 'administration', name: 'Administration' },
    { id: 'science', name: 'Science' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'languages', name: 'Languages' },
    { id: 'social science', name: 'Social Science' },
    { id: 'physical education', name: 'Physical Education' },
    { id: 'computer science', name: 'Computer Science' },
    { id: 'arts', name: 'Arts' }
  ];
  
  const openModal = (faculty: FacultyMember) => {
    setSelectedFaculty(faculty);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setSelectedFaculty(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <PageHeader 
        title="Our Faculty" 
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Faculty', path: '/faculty' }
        ]}
        backgroundImage="https://images.pexels.com/photos/8617526/pexels-photo-8617526.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Faculty</h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Our dedicated and experienced faculty members are the backbone of our educational institution. They nurture students' academic growth and character development with their expertise and commitment.
            </p>
            
            <div className="flex flex-wrap justify-center mt-8 gap-2">
              {departments.map(department => (
                <button
                  key={department.id}
                  onClick={() => setActiveFilter(department.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    activeFilter === department.id 
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {department.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFaculty.map(faculty => (
              <div 
                key={faculty.id} 
                className="card overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg"
                onClick={() => openModal(faculty)}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{faculty.name}</h3>
                  <p className="text-primary mb-1">{faculty.designation}</p>
                  <p className="text-sm text-gray-600">{faculty.department}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Faculty Detail Modal */}
          {selectedFaculty && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <div 
                className="bg-white rounded-lg shadow-xl max-w-3xl w-full overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src={selectedFaculty.image} 
                      alt={selectedFaculty.name} 
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold">{selectedFaculty.name}</h3>
                        <p className="text-primary text-lg">{selectedFaculty.designation}</p>
                      </div>
                      <button 
                        className="text-gray-500 hover:text-gray-700"
                        onClick={closeModal}
                      >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600 text-sm">Department</p>
                        <p className="font-medium">{selectedFaculty.department}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Experience</p>
                        <p className="font-medium">{selectedFaculty.experience}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-600 text-sm">Qualifications</p>
                        <p className="font-medium">{selectedFaculty.qualifications}</p>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-medium mb-2">Bio</h4>
                      <p className="text-gray-700">{selectedFaculty.bio}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default FacultyPage;