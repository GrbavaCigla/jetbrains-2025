import React from 'react';

interface Props {
  children: React.ReactNode,
  bg?: string,
  fg?: string,
}

export default function Tag({ children, bg, fg }: Props) {
  return (
    <div style={{ backgroundColor: bg }} className="self-start whitespace-nowrap px-2 py-1 border-4">
      <span className="font-bold" style={{color: fg}}>
        {children}
      </span>
    </div>
  )
}
