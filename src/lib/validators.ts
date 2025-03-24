
/**
 * Validates Ethereum wallet address format
 * 
 * @param address Ethereum wallet address to validate
 * @returns boolean indicating if the address is valid
 */
export const isValidEthereumAddress = (address: string): boolean => {
  if (!address) return false;
  
  // Check if it's a valid Ethereum address format (0x followed by 40 hex characters)
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

/**
 * Validates Ethereum transaction hash format
 * 
 * @param hash Ethereum transaction hash to validate
 * @returns boolean indicating if the hash is valid
 */
export const isValidTransactionHash = (hash: string): boolean => {
  if (!hash) return false;
  
  // Check if it's a valid transaction hash format (0x followed by 64 hex characters)
  return /^0x[a-fA-F0-9]{64}$/.test(hash);
};

/**
 * Formats an Ethereum address for display by shortening it
 * 
 * @param address Full Ethereum address
 * @returns Shortened address (e.g., 0x1234...5678)
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  
  const start = address.substring(0, 6);
  const end = address.substring(address.length - 4);
  
  return `${start}...${end}`;
};

/**
 * Formats an amount with the specified currency symbol
 * 
 * @param amount Amount to format
 * @param currency Currency symbol (default: ETH)
 * @param decimals Number of decimal places (default: 4)
 * @returns Formatted amount with currency symbol
 */
export const formatAmount = (
  amount: number,
  currency: string = 'ETH',
  decimals: number = 4
): string => {
  return `${amount.toFixed(decimals)} ${currency}`;
};
