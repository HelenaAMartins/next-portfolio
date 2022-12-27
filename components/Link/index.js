import NextLink from "next/link";

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} {...props}>
    <a>{children}</a>
  </NextLink>
);

export default Link;
