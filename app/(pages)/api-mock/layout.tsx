import type { Metadata } from 'next'
import Controls from "@/app/(pages)/api-mock/Controls";
import ControlsH from "@/app/(pages)/api-mock/ControlsH";

export const metadata: Metadata = {
  title: 'api-mock',
  description: 'Generated by create next app',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
  return (
      <>
          <p className={`font-bold text-center`}>API-MOCK TEST</p>
          <div className={`grid grid-cols-4 p-10 border-gray-400 border-2 h-svh`}>
              <Controls/>
              <div className={`col-span-3`}>
                  {children}
                  <ControlsH/>
              </div>
          </div>
      </>
  );
}
