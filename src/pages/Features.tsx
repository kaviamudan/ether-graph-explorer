
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Search, Shield, Zap, Bell, Settings } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: 'Transaction Tracing',
      description: 'Enter wallet addresses or transaction hashes to visualize transaction flows and follow the money trail across the blockchain.'
    },
    {
      icon: <Activity className="h-8 w-8 text-primary" />,
      title: 'Interactive Graph Visualization',
      description: 'Explore interactive transaction graphs with zoom, pan, and click-to-expand functionality to analyze transaction patterns.'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Real-time Streaming',
      description: 'Monitor transactions in real-time with live updates for tracked wallets, enabling immediate response to suspicious activities.'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Anomaly Detection',
      description: 'Automatically identify suspicious patterns such as high-value transfers or mixer usage with our advanced anomaly detection algorithms.'
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: 'Alerts System',
      description: 'Receive instant notifications about suspicious activities through customizable alerts via Discord, Telegram, or email.'
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: 'Customizable Settings',
      description: 'Configure tracing depth, alert thresholds, and other parameters to tailor the analysis to your specific requirements.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animation-fade">
                Powerful Blockchain Analysis Features
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto animation-fade">
                ETHER-EYE provides cutting-edge tools for blockchain analysis, transaction tracing, and anomaly detection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className={`animation-fade h-full transition-all duration-300 hover:shadow-lg hover:scale-105`} style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="mb-2">{feature.icon}</div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
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

export default Features;
