import NextLink from "next/link";

const NavLinks = [
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/resume",
    name: "Resume",
  },
  {
    href: "/experience",
    name: "Experience",
  },
  {
    href: "/goals",
    name: "Goals",
  },
  {
    href: "/about-me",
    name: "About Me",
  },
  {
    href: "/contact",
    name: "Contact",
  },
];

export const Navigation = () => {
  return (
    <nav
      className="text-primary mx-auto flex max-w-8xl items-center justify-between p-10"
      style={{ padding: 50 }}
    >
      <div>
        <a
          className="link link-underline link-underline-black text-black text-primary underlined focus:outline-none block whitespace-nowrap text-2xl font-medium transition"
          href="/"
        >
          <h1 style={{ fontSize: 32 }}>Nikhil Rao</h1>
        </a>
      </div>
      <ul className="hidden lg:flex pt-1">
        {NavLinks.map((link) => {
          return (
            <li className="px-5 py-2">
              <a
                style={{ fontSize: 20 }}
                className="link link-underline link-underline-black text-black underlined focus:outline-none block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current text-secondary"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center justify-center">
        <div className="block lg:hidden">
          <button
            aria-haspopup="true"
            aria-controls="menu--1"
            className="focus:border-primary hover:border-primary border-secondary text-primary focus:outline-none inline-flex h-14 w-14 items-center justify-center rounded-full border-2 p-1 transition"
            id="menu-button--menu"
            type="button"
            data-reach-menu-button=""
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="9"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
                transform-origin="0px 0px"
              ></rect>
              <rect
                x="6"
                y="15"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
                opacity="1"
              ></rect>
              <rect
                x="6"
                y="21"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
                transform-origin="0px 0px"
              ></rect>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
