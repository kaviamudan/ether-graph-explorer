
import React, { useState } from 'react';
import Header from '@/components/Header';
import WalletInput from '@/components/WalletInput';
import TransactionGraph from '@/components/TransactionGraph';
import AnomalyPanel from '@/components/AnomalyPanel';
import SettingsPanel from '@/components/SettingsPanel';
import Footer from '@/components/Footer';
import { generateMockGraph, generateMockAnomalies, Graph, Anomaly } from '@/lib/mockData';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [graphData, setGraphData] = useState<Graph | null>(null);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [highlightedNodes, setHighlightedNodes] = useState<string[]>([]);
  const [highlightedEdges, setHighlightedEdges] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  
  // Handle wallet or transaction input submission
  const handleInputSubmit = (input: string, type: 'address' | 'tx') => {
    setLoading(true);
    
    // Simulate API call to backend
    setTimeout(() => {
      const mockGraph = generateMockGraph(input);
      const mockAnomalies = generateMockAnomalies();
      
      setGraphData(mockGraph);
      setAnomalies(mockAnomalies);
      setHighlightedNodes([]);
      setHighlightedEdges([]);
      
      setLoading(false);
      
      toast({
        title: "Analysis Complete",
        description: `${type === 'address' ? 'Wallet' : 'Transaction'} traced successfully`,
      });
    }, 1500);
  };
  
  // Handle settings change
  const handleSettingsChange = (settings: {
    maxHops: number;
    threshold: number;
    showSuspicious: boolean;
  }) => {
    toast({
      title: "Settings Updated",
      description: `Max hops: ${settings.maxHops}, Threshold: ${settings.threshold} ETH`,
    });
    
    // Here you would typically update the graph based on new settings
    // For the demo, we'll just show a toast
  };
  
  // Handle anomaly click to highlight related nodes/edges
  const handleAnomalyClick = (anomaly: Anomaly) => {
    setHighlightedNodes(anomaly.relatedNodeIds);
    setHighlightedEdges(anomaly.relatedEdgeIds);
    
    toast({
      title: "Anomaly Selected",
      description: anomaly.description,
      variant: "destructive",
    });
  };
  
  // Handle node click in graph
  const handleNodeClick = (nodeId: string) => {
    setHighlightedNodes([nodeId]);
    setHighlightedEdges([]);
  };
  
  // Handle edge click in graph
  const handleEdgeClick = (edgeId: string) => {
    setHighlightedNodes([]);
    setHighlightedEdges([edgeId]);
    
    // Find the edge to get source and target nodes
    if (graphData) {
      const edge = graphData.edges.find(e => e.id === edgeId);
      if (edge) {
        setHighlightedNodes([edge.source, edge.target]);
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-12">
        <section className="container max-w-5xl mx-auto px-4 mb-12">
          <WalletInput onSubmit={handleInputSubmit} />
        </section>
        
        {loading && (
          <div className="container max-w-5xl mx-auto px-4 flex justify-center my-24">
            <div className="text-center">
              <div className="inline-block w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mb-4"></div>
              <p className="text-muted-foreground">Analyzing blockchain data...</p>
            </div>
          </div>
        )}
        
        {!loading && graphData && (
          <>
            <section className="container max-w-5xl mx-auto px-4 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-medium">Transaction Graph</h2>
                <SettingsPanel onSettingsChange={handleSettingsChange} />
              </div>
              
              <TransactionGraph 
                data={graphData}
                highlightedNodes={highlightedNodes}
                highlightedEdges={highlightedEdges}
                onNodeClick={handleNodeClick}
                onEdgeClick={handleEdgeClick}
              />
            </section>
            
            <section className="container max-w-5xl mx-auto px-4">
              <AnomalyPanel 
                anomalies={anomalies}
                onAnomalyClick={handleAnomalyClick}
              />
            </section>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
