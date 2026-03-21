import Link from "next/link";

export default function signup() {
  return (
    <div className="flex flex-col">
      <h5 className="font-bold text-5xl tracking-tight text-center">Signup</h5>
      <p className="text-[14px] text-foregrounddark text-center mt-1.5">
        Signup to ChatX
      </p>
      <form className="relative h-100 w-100 bg-backgroundlight rounded-xl mt-1 p-4">
        <div className="flex flex-col gap-1 mt-4">
          <label>Username:</label>
          <input
            className="bg-background rounded-full focus:outline-none py-2 px-4"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <label>Email:</label>
          <input
            className="bg-background rounded-full focus:outline-none py-2 px-4"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <label>Password:</label>
          <input
            className="bg-background rounded-full focus:outline-none py-2 px-4"
            type="password"
          />
        </div>
        <div className="absolute bottom-2 flex flex-col items-center justify-center">
          <button className="px-40 rounded-full text-center bg-zinc-300 text-black font-bold hover:bg-zinc-400 py-3">
            Submit
          </button>
          <Link className="text-sm hover:underline" href="/login">
            Already have an account? Login here.
          </Link>
        </div>
      </form>
    </div>
  );
}
