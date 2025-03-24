
import React, { useState } from 'react';
import { Settings } from 'lucide-react';

interface SettingsPanelProps {
  onSettingsChange: (settings: {
    maxHops: number;
    threshold: number;
    showSuspicious: boolean;
  }) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ onSettingsChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHops, setMaxHops] = useState(2);
  const [threshold, setThreshold] = useState(5);
  const [showSuspicious, setShowSuspicious] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSettingsChange({
      maxHops,
      threshold,
      showSuspicious,
    });
    setIsOpen(false);
  };
  
  return (
    <div className="relative animation-fade">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-secondary rounded-lg transition-colors hover:bg-secondary/70"
      >
        <Settings className="h-4 w-4" />
        <span className="text-sm font-medium">Configuration</span>
      </button>
      
      {isOpen && (
        <div className="absolute mt-2 right-0 w-64 bg-card rounded-lg shadow-lg p-4 z-10 border border-border animation-fade">
          <form onSubmit={handleSubmit}>
            <h3 className="font-medium text-sm mb-3">Graph Settings</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">
                  Max Trace Depth
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={maxHops}
                    onChange={(e) => setMaxHops(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">
                    {maxHops}
                  </span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  How many transaction hops to trace
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground mb-1 block">
                  Anomaly Threshold (ETH)
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={threshold}
                    onChange={(e) => setThreshold(parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="text-sm font-medium bg-secondary px-2 py-1 rounded">
                    {threshold}
                  </span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Minimum amount to flag as suspicious
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="showSuspicious"
                  checked={showSuspicious}
                  onChange={(e) => setShowSuspicious(e.target.checked)}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="showSuspicious" className="text-sm">
                  Highlight suspicious flows
                </label>
              </div>
            </div>
            
            <div className="flex justify-end mt-4 space-x-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-3 py-1 text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded"
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SettingsPanel;
