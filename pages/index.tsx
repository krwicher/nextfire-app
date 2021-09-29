
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeffd23'},
      }}>
        <a>Jeff's profile</a>
      </Link>
    </div>
  )
}
