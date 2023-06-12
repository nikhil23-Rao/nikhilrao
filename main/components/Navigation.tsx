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
            {NavLinks.map((link, idx) => (
              <li key={idx}>
                <NextLink href={link.href}>{link.name}</NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
