import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex justify-center pt-[100px]">
        <ConnectButton />
      </div>
    </div>
  );
}
