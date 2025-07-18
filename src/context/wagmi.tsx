import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { monadTestnet } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;

const config = getDefaultConfig({
  appName: 'Next RainbowKit Demo',
  projectId,
  chains: [monadTestnet],
  ssr: false,
});

const queryClient = new QueryClient();

function WalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WalletProvider;
