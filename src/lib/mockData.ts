
export interface Node {
  id: string;
  label: string;
  type: 'wallet' | 'contract' | 'exchange';
  balance?: number;
  suspicious?: boolean;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  value: number;
  timestamp: number;
  suspicious?: boolean;
}

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export interface Anomaly {
  id: string;
  type: 'high-value' | 'mixer-use' | 'unusual-pattern' | 'whale-movement';
  severity: 'low' | 'medium' | 'high';
  description: string;
  relatedNodeIds: string[];
  relatedEdgeIds: string[];
  timestamp: number;
}

// Sample wallet addresses
const wallets = [
  '0x28c6c06298d514db089934071355e5743bf21d60', // Main wallet
  '0x5aBfEC25f74Cd88437631a7731906932776356f9',
  '0x6B175474E89094C44Da98b954EedeAC495271d0F', // DAI contract
  '0xF977814e90dA44bFA03b6295A0616a897441aceC', // Binance hot wallet
  '0x8315177aB297bA92A06054cE80a67Ed4DBd7ed3a',
  '0x47ac0Fb4F2D84898e4D9E7b4DaB3C24507a6D503', // Binance cold wallet
  '0xdAC17F958D2ee523a2206206994597C13D831ec7', // USDT contract
];

// Generate mock graph data
export const generateMockGraph = (mainAddress: string = wallets[0]): Graph => {
  // Create nodes
  const nodes: Node[] = [
    {
      id: mainAddress,
      label: `Main Wallet (${formatAddress(mainAddress)})`,
      type: 'wallet',
      balance: 15.42,
      suspicious: false,
    },
    {
      id: wallets[1],
      label: `Wallet (${formatAddress(wallets[1])})`,
      type: 'wallet',
      balance: 3.21,
      suspicious: false,
    },
    {
      id: wallets[2],
      label: `DAI Contract (${formatAddress(wallets[2])})`,
      type: 'contract',
      suspicious: false,
    },
    {
      id: wallets[3],
      label: `Binance (${formatAddress(wallets[3])})`,
      type: 'exchange',
      balance: 120.5,
      suspicious: false,
    },
    {
      id: wallets[4],
      label: `Mixer (${formatAddress(wallets[4])})`,
      type: 'wallet',
      balance: 50.8,
      suspicious: true,
    },
    {
      id: wallets[5],
      label: `Binance Cold (${formatAddress(wallets[5])})`,
      type: 'exchange',
      balance: 5000.0,
      suspicious: false,
    },
    {
      id: wallets[6],
      label: `USDT (${formatAddress(wallets[6])})`,
      type: 'contract',
      suspicious: false,
    },
  ];

  // Create edges
  const edges: Edge[] = [
    {
      id: 'e1',
      source: mainAddress,
      target: wallets[1],
      value: 2.5,
      timestamp: Date.now() - 3600000 * 24,
      suspicious: false,
    },
    {
      id: 'e2',
      source: wallets[1],
      target: wallets[2],
      value: 1.5,
      timestamp: Date.now() - 3600000 * 23,
      suspicious: false,
    },
    {
      id: 'e3',
      source: mainAddress,
      target: wallets[3],
      value: 5.0,
      timestamp: Date.now() - 3600000 * 22,
      suspicious: false,
    },
    {
      id: 'e4',
      source: wallets[1],
      target: wallets[4],
      value: 12.0,
      timestamp: Date.now() - 3600000 * 12,
      suspicious: true,
    },
    {
      id: 'e5',
      source: wallets[4],
      target: wallets[5],
      value: 10.0,
      timestamp: Date.now() - 3600000 * 10,
      suspicious: true,
    },
    {
      id: 'e6',
      source: mainAddress,
      target: wallets[6],
      value: 1000.0,
      timestamp: Date.now() - 3600000 * 5,
      suspicious: false,
    },
  ];

  return { nodes, edges };
};

// Generate mock anomalies
export const generateMockAnomalies = (): Anomaly[] => {
  return [
    {
      id: 'a1',
      type: 'high-value',
      severity: 'medium',
      description: 'High-value transfer of 1000.0 ETH to USDT contract',
      relatedNodeIds: [wallets[0], wallets[6]],
      relatedEdgeIds: ['e6'],
      timestamp: Date.now() - 3600000 * 5,
    },
    {
      id: 'a2',
      type: 'mixer-use',
      severity: 'high',
      description: 'Funds transferred to known mixer service',
      relatedNodeIds: [wallets[1], wallets[4]],
      relatedEdgeIds: ['e4'],
      timestamp: Date.now() - 3600000 * 12,
    },
    {
      id: 'a3',
      type: 'unusual-pattern',
      severity: 'high',
      description: 'Suspicious flow through mixer to exchange cold wallet',
      relatedNodeIds: [wallets[4], wallets[5]],
      relatedEdgeIds: ['e5'],
      timestamp: Date.now() - 3600000 * 10,
    },
  ];
};

// Helper function to format address for display
function formatAddress(address: string): string {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
}
