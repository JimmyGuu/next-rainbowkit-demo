"use client";

import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

export default function Home() {
  const modal = useConnectModal();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  return (
    <div className="w-screen h-screen">
      <div className="w-full flex justify-center pt-[100px]">
        {
          isConnected ? (
            <div className="flex flex-col items-center gap-[10px]">
              <p>{address}</p>
              <button
                type="button"
                onClick={() => disconnect()}
                className="px-[30px] h-[40px] border border-black bg-[#FFDC50] text-black text-[16px] rounded-[4px]"
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => modal?.openConnectModal?.()}
              className="px-[30px] h-[40px] border border-black bg-[#FFDC50] text-black text-[16px] rounded-[4px]"
            >
              Connect Wallet
            </button>
          )
        }
      </div>
    </div>
  );
}
