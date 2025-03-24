
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Eye, Search, Shield, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-40 pb-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 animation-slide-right">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Blockchain Analytics Made <span className="text-primary">Simple</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  ETHER-EYE provides powerful tools for transaction tracing, anomaly detection, and blockchain analysis in an intuitive interface.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <Link to="/features">Explore Features</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/login">Try Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 animation-slide-left">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                    alt="ETHER-EYE Dashboard" 
                    className="w-full rounded-xl shadow-2xl border border-border"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features Section */}
        <section className="py-20 px-4 bg-secondary/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animation-fade">Key Features</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animation-fade">
                Discover the powerful tools that ETHER-EYE offers for blockchain analysis and monitoring.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="animation-fade" style={{ animationDelay: "100ms" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Search className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Transaction Tracing</h3>
                  <p className="text-muted-foreground">
                    Easily trace transactions across the blockchain with our powerful visualization tools.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animation-fade" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Anomaly Detection</h3>
                  <p className="text-muted-foreground">
                    Identify suspicious patterns and activities with advanced anomaly detection algorithms.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="animation-fade" style={{ animationDelay: "300ms" }}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Zap className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">Real-time Monitoring</h3>
                  <p className="text-muted-foreground">
                    Monitor transactions in real-time with instant alerts for suspicious activities.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link to="/features" className="flex items-center">
                  View All Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-primary text-primary-foreground rounded-xl p-12 shadow-xl relative overflow-hidden animation-fade">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-xl -ml-24 -mb-24"></div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
                  <p className="text-primary-foreground/80 text-lg max-w-xl">
                    Join ETHER-EYE today and discover the power of blockchain analytics for your research or business needs.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" asChild>
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white hover:bg-white/20" asChild>
                    <Link to="/login">Sign Up Now</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animation-fade">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground animation-fade">
                Find answers to common questions about ETHER-EYE and blockchain analytics.
              </p>
            </div>
            
            <div className="space-y-6 animation-fade">
              {[
                {
                  question: "What is ETHER-EYE?",
                  answer: "ETHER-EYE is a blockchain analytics platform that provides tools for transaction tracing, anomaly detection, and real-time monitoring of blockchain activities."
                },
                {
                  question: "How does transaction tracing work?",
                  answer: "Our platform allows you to enter a wallet address or transaction hash and visualize the flow of funds across multiple hops on the blockchain, helping you understand the source and destination of funds."
                },
                {
                  question: "What blockchains are supported?",
                  answer: "Currently, ETHER-EYE supports Ethereum, with plans to add support for other major blockchains such as Bitcoin, Solana, and more in the near future."
                },
                {
                  question: "Is my data secure?",
                  answer: "Yes, we take security seriously. All user data is encrypted, and we never store your private keys or sensitive information. All blockchain data analyzed is already public on the blockchain."
                },
                {
                  question: "How accurate is the anomaly detection?",
                  answer: "Our anomaly detection algorithms use machine learning and pattern recognition to identify suspicious activities with high accuracy. However, not all flagged transactions are necessarily malicious, which is why we provide context and visualization tools to help you make informed decisions."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
