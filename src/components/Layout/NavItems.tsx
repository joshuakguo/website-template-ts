import router from "next/router"
import { NavItemsProps } from "./types"

export const NavItems: React.FunctionComponent<NavItemsProps> = ({ navItems }) => (
  <>
    {navItems.map((navItem) => (
      <a key={navItem.name} onClick={() => router.push(navItem.to)}>
        {navItem.name}
      </a>
    ))}
  </>
)
