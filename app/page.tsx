import { WalletConnect } from "@/components/Wallet-connect";
import SampleIntregation from "@/components/sample";
import LetterGlitch from "@/components/LetterGlitch";

export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
        />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col">
        <div className="pt-4">
          <WalletConnect />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <SampleIntregation />
        </div>
      </div>
    </div>
  );
}
