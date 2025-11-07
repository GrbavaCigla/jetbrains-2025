import React from "react";

interface Props {
  children: React.ReactNode,
}

export default async function BaseSection({ children }: Props) {
  return (
    <section className="border-b-(length:--border)">
      <div className="container mx-auto sm:border-x-(length:--border)">
        <div className="py-12 px-4 space-y-12">
          {children}
        </div>
      </div>
    </section>
  )
}