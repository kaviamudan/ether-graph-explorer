
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      bio: 'Blockchain specialist with 5+ years experience in transaction analysis and visualization.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      social: {
        github: '#',
        linkedin: '#',
        email: 'alex@ethereye.com'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Data Scientist',
      bio: 'Expert in machine learning algorithms for anomaly detection in financial transactions.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      social: {
        github: '#',
        linkedin: '#',
        email: 'sarah@ethereye.com'
      }
    },
    {
      name: 'Marcus Williams',
      role: 'UI/UX Designer',
      bio: 'Creating intuitive interfaces for complex data visualization with a focus on user experience.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      social: {
        github: '#',
        linkedin: '#',
        email: 'marcus@ethereye.com'
      }
    },
    {
      name: 'Priya Patel',
      role: 'Backend Engineer',
      bio: 'Specializes in high-performance APIs and database optimization for blockchain data.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      social: {
        github: '#',
        linkedin: '#',
        email: 'priya@ethereye.com'
      }
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animation-fade">About ETHER-EYE</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animation-fade">
                We're on a mission to bring transparency and security to blockchain transactions through advanced analytics and visualization.
              </p>
            </div>
            
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="animation-slide-right">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-muted-foreground mb-4">
                    ETHER-EYE was founded in 2023 by a team of blockchain experts, data scientists, and security professionals who recognized the growing need for better tools to analyze and monitor blockchain transactions.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    With the increasing adoption of cryptocurrencies and blockchain technology, there was a clear gap in the market for user-friendly yet powerful analytical tools that could help users trace transactions and identify suspicious activities.
                  </p>
                  <p className="text-muted-foreground">
                    Today, ETHER-EYE serves individuals, businesses, and law enforcement agencies worldwide, providing them with the insights they need to navigate the complex world of blockchain transactions safely and effectively.
                  </p>
                </div>
                <div className="aspect-video bg-secondary rounded-lg overflow-hidden shadow-lg animation-slide-left">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="ETHER-EYE team working" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-10 text-center animation-fade">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className={`animation-fade overflow-hidden`} style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex space-x-4">
                      <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={`mailto:${member.social.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
