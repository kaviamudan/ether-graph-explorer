
import React, { useState } from 'react';
import { Eye, ExternalLink, Search, Tag } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Explorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([
    '0x28c6c06298d514db089934071355e5743bf21d60',
    '0x4e3a3754410177e6937ef1d0084000883f919978',
    '0x71c7656ec7ab88b098defb751b7401b5f6d8976f'
  ]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery && !searchHistory.includes(searchQuery)) {
      setSearchHistory([searchQuery, ...searchHistory].slice(0, 5));
    }
    // Implement search logic
  };
  
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="text-center mb-12 mt-8">
          <h1 className="flex items-center justify-center gap-3 text-3xl font-semibold mb-4">
            <Eye className="h-8 w-8 text-primary" />
            <span>ETHER-EYE Explorer</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore blockchain transactions, wallets, and smart contracts with detailed analytics and visualizations
          </p>
          
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-muted-foreground" />
              </div>
              <input
                type="text"
                placeholder="Search by address, transaction hash, block, or token..."
                className="w-full bg-card border border-border rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute inset-y-0 right-0 px-6 bg-primary text-primary-foreground rounded-r-xl font-medium"
              >
                Search
              </button>
            </div>
          </form>
          
          {searchHistory.length > 0 && (
            <div className="mt-4 text-center">
              <h3 className="text-sm text-muted-foreground mb-2">Recent searches:</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {searchHistory.map((term, index) => (
                  <button
                    key={index}
                    className="text-xs bg-secondary rounded-full px-3 py-1 hover:bg-secondary/80"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term.slice(0, 8)}...{term.slice(-6)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:neo-glow transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Tag className="h-5 w-5 text-primary" />
                Blockchain Explorer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Search for wallets, transactions, blocks, and contracts on the blockchain.
              </p>
              <Button variant="outline" className="w-full">
                Browse Blockchain
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:neo-glow transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Transaction Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Track and visualize the flow of funds across multiple transactions.
              </p>
              <Button variant="outline" className="w-full">
                Trace Transactions
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:neo-glow transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-primary" />
                Contract Interactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Analyze and visualize smart contract interactions and events.
              </p>
              <Button variant="outline" className="w-full">
                Explore Contracts
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader className="py-4 px-6 border-b border-border">
            <CardTitle className="text-lg">Latest Blockchain Activity</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="text-center py-16">
              <h3 className="text-lg font-medium mb-2">Start by searching an address</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Enter a wallet address, transaction hash, or block number in the search box above to explore blockchain data
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Explorer;
