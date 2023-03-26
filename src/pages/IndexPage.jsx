import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around gap-2">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto gap-2">
          <input type="email" placeholder={"your email"} />
          <input type="password" placeholder="password" />
          <button className="primary mt-2">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{" "}
            <Link to={"/register"} className="underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
