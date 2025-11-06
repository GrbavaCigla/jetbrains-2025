import React from "react";

interface Props {
  children: React.ReactNode,
}

export default async function BaseSection({ children }: Props) {
  return (
    <section className="border-b-4">
      <div className="container mx-auto sm:border-x-4">
        <div className="py-12 px-4 space-y-12">
          {children}
        </div>
      </div>
    </section>
  )
}