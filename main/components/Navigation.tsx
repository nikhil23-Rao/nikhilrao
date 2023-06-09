import NextLink from "next/link";

const NavLinks = [
  {
    href: "/",
    name: "Home",
  },
  {
    href: "/about",
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
                <NextLink href={link.href}>
                  <a>{link.name}</a>
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
