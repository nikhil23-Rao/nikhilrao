import NextLink from "next/link";

const NavLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/aboutme",
    name: "About",
  },
  {
    href: "/projects",
    name: "Projects",
  },
  {
    href: "/timeline",
    name: "Timeline",
  },
];

export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            {NavLinks.map((link) => (
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
