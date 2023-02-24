import React from "react"
import router from "next/router"
import { BurgerMenuProps } from "./types"

export const BurgerMenu = React.forwardRef<HTMLInputElement, BurgerMenuProps>(({ navItems }, ref) => (
  <div ref={ref} className="BurgerMenu">
    <div className="wrapper">
      {navItems.map((navItem) => (
        <a key={navItem.name} onClick={() => router.push(navItem.to)}>
          {navItem.name}
        </a>
      ))}
    </div>
  </div>
))
BurgerMenu.displayName = "BurgerMenu"
