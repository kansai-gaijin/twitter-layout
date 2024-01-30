import Link from "next/link";

export default function LayoutHeader() {
  return (
    <header className="bg-black sticky top-0 left-0 w-full z-10 p-5">
      <div className="max-w-content mx-auto flex items-center gap-5">
        <div className="grow">
          <h1>
            <figure className="w-[250px] h-[40px] bg-white rounded"></figure>
          </h1>
        </div>
        <div className="hidden sm:block">
          <nav>
            <ul className="text-white flex gap-5">
              <li>
                <Link className="font-bold" href="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="/about">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link className="font-bold" href="/thing">
                  THING
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sm:hidden">
          <button className="h-[40px] w-[40px] rounded bg-red-600"></button>
        </div>
      </div>
    </header>
  );
}
