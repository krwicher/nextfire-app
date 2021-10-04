import Link from "next/link";
import toast from "react-hot-toast";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <button onClick={() => toast.success('hello toast!')}>
        Toast c
      </button>
      {/* <Loader show/>

      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeffd23'},
      }}>
        <a>Jeff's profile</a>
      </Link> */}
    </div>
  );
}
