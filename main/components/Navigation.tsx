import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";

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
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  return (
    <>
      <header>
        <nav style={{ width: isPortrait ? "450px" : "" }}>
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
