'use client'
import { useRef } from "react"
import { useEffect } from "react"

export function VlogPlayer({ vdoSrc, children }: { vdoSrc: string; children: React.ReactNode }) {
    const vdoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      vdoRef.current?.play();
    }, []);
  
    return (
      <div className="relative">
        <video className="inset-0 top-0 left-0 w-full filter brightness-50" src={vdoSrc} ref={vdoRef} loop muted />
        {children}
      </div>
    );
  }
