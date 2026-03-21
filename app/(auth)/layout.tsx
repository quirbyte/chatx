export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full bg-background text-foreground flex">
      <div className="w-[49.75%] h-full py-2 px-4">
        <div className="relative w-full h-full flex justify-center items-center">
          <h1 className="absolute top-2 left-3 tracking-tighter text-3xl font-extrabold">
            ChatX
          </h1>
          {children}
        </div>
      </div>
      <hr className="h-full border border-foreground/20" />
      <div className="w-[49.75%] h-full">
        <img className="object-cover w-full h-full" src="/wolf.jpg" alt="" />
      </div>
    </div>
  );
}