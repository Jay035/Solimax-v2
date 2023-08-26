import Link from "next/link";

type Props = {};

export default function Navigation({}: Props) {
  return (
    <nav>
      <Link href="/launchpad/launchpadList">All launchpads</Link>
      <Link href="/launchpad/launchpadList/my-contributions">
        My contributions
      </Link>
      <Link href="/launchpad/launchpadList/favorites">Favorites</Link>
    </nav>
  );
}
