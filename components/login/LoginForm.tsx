"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DefaultCredentialForm() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.target as any).username.value;
    const password = (event.target as any).password.value;

    // Sign in with credentials
    await signIn("credentials", {
      redirect: false,
      username,
      password,
    }).then((response) => {
      if (response?.ok) {
        toast.success("Successfully signed in");
        // wait for 2 seconds
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else if (response?.error) {
        toast.error("Sign in error");
        console.error("Sign in error", response?.error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 mt-2">
        <label htmlFor="username" className=" text-sm font-light mb-2 ">
          Username
        </label>
        <input
          name="username"
          type="text"
          required
          className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="text-sm font-light mb-2">
          Password
        </label>
        <input
          name="password"
          type="password"
          required
          className="shadow appearance-none border rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-gray-300 hover:bg-[#FA8946] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Login
      </button>
    </form>
  );
}
