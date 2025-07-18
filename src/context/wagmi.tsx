import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { cookieStorage, createStorage, http, WagmiProvider } from 'wagmi';
import { monadTestnet } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string;
export const metadata = {
  name: "Next RainbowKit Demo",
  description: "For test",
  url: "https://next-rainbowkit-demo.vercel.app/",
  icons: ["@/app/favicon.ico"]
};

const config = getDefaultConfig({
  appName: metadata.name,
  appDescription: metadata.description,
  appUrl: metadata.url,
  appIcon: metadata.icons[0],
  storage: createStorage({
    storage: cookieStorage
  }),
  projectId,
  chains: [monadTestnet],
  ssr: false,
  transports: {
    [monadTestnet.id]: http("https://testnet-rpc.monad.xyz"),
  },
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
