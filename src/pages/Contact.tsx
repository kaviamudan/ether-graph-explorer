
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: 'Office Location',
      details: ['123 Blockchain Avenue', 'San Francisco, CA 94105', 'United States']
    },
    {
      icon: <Phone className="h-10 w-10 text-primary" />,
      title: 'Phone Numbers',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543']
    },
    {
      icon: <Mail className="h-10 w-10 text-primary" />,
      title: 'Email Addresses',
      details: ['info@ethereye.com', 'support@ethereye.com']
    },
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: 'Working Hours',
      details: ['Monday-Friday: 9 AM - 6 PM', 'Saturday: 10 AM - 2 PM', 'Sunday: Closed']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Contact form submitted');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animation-fade">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animation-fade">
                Have questions, feedback, or need support? We're here to help. Reach out to our team using any of the methods below.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
              <div className="animation-fade">
                <h2 className="text-3xl font-bold mb-10">Get In Touch</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactInfo.map((item, index) => (
                    <Card key={index} className="animation-fade" style={{ animationDelay: `${index * 100}ms` }}>
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                        <div className="text-muted-foreground">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="mb-1">{detail}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="animation-fade">
                <h2 className="text-3xl font-bold mb-10">Send Us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                          <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                          <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="How can we help you?"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                        <textarea 
                          id="message" 
                          rows={6}
                          className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                          placeholder="Your message here..."
                          required
                        ></textarea>
                      </div>
                      
                      <Button type="submit" className="w-full py-6 flex items-center justify-center gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="animation-fade">
              <h2 className="text-3xl font-bold mb-10 text-center">Find Us</h2>
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                {/* This would normally be an embedded Google Map */}
                <div className="w-full h-full bg-secondary flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-10 w-10 text-primary mx-auto mb-4" />
                    <p className="font-medium">123 Blockchain Avenue, San Francisco, CA 94105</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      This would be an interactive map in a production environment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
