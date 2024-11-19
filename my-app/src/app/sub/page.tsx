"use client";

export default function Home() {
  return (
    <div
      className="grid w-screen h-screen place-items-center font-[family-name:var(--font-geist-sans)] bg-red-900 text-4xl"
      style={{
        viewTransitionName: "sub",
      }}
    >
      Second page
      <a href="/">to main</a>
    </div>
  );
}
