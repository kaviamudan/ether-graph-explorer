
import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { isValidEthereumAddress, isValidTransactionHash } from '@/lib/validators';

interface WalletInputProps {
  onSubmit: (input: string, type: 'address' | 'tx') => void;
}

const WalletInput: React.FC<WalletInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError('');
    
    // Validate input
    if (!input.trim()) {
      setError('Please enter a wallet address or transaction hash');
      return;
    }
    
    const isAddress = isValidEthereumAddress(input.trim());
    const isHash = isValidTransactionHash(input.trim());
    
    if (!isAddress && !isHash) {
      setError('Invalid wallet address or transaction hash format');
      return;
    }
    
    // Simulate loading
    setIsLoading(true);
    
    // Call onSubmit callback with input and type
    setTimeout(() => {
      onSubmit(input.trim(), isAddress ? 'address' : 'tx');
      setIsLoading(false);
    }, 800);
  };
  
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="text-center mb-8 animation-slide-down">
        <h2 className="text-2xl font-semibold mb-2">Blockchain Explorer</h2>
        <p className="text-muted-foreground">
          Enter an Ethereum wallet address or transaction hash to explore
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="animation-slide-up">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-muted-foreground" />
          </div>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="0x28c6c06298d514db089934071355e5743bf21d60"
            className={`w-full pl-12 pr-32 py-4 rounded-lg bg-card border ${
              error ? 'border-destructive' : 'border-border'
            } focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all`}
          />
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <button
              type="submit"
              disabled={isLoading}
              className={`px-4 py-2 rounded-md flex items-center space-x-2 transition-all ${
                isLoading
                  ? 'bg-primary/50 cursor-not-allowed'
                  : 'bg-primary hover:bg-primary/90'
              } text-primary-foreground`}
            >
              <span>Trace</span>
              {isLoading ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ArrowRight className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
        
        {error && (
          <div className="mt-2 text-destructive text-sm animate-fade-in">
            {error}
          </div>
        )}
        
        <div className="mt-4 flex flex-wrap gap-2">
          <div className="text-xs bg-secondary rounded-full px-3 py-1 cursor-pointer hover:bg-secondary/70 transition-colors">
            Example: Wallet Address
          </div>
          <div className="text-xs bg-secondary rounded-full px-3 py-1 cursor-pointer hover:bg-secondary/70 transition-colors">
            Example: Transaction Hash
          </div>
        </div>
      </form>
    </div>
  );
};

export default WalletInput;
