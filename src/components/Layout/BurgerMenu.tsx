import React, { forwardRef, useEffect } from "react"
import { BurgerMenuProps } from "./types"

export const BurgerMenu = React.forwardRef<HTMLInputElement, BurgerMenuProps>(
  ({ handleClick, navItems }, ref) => {
    return (
      <div ref={ref} className="BurgerMenu">
        <div className="BurgerContent">
          {navItems.map((navItem) => (
            <a key={navItem.name} onClick={(e) => handleClick(navItem.to)(e)}>
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
    )
  }
)
BurgerMenu.displayName = "BurgerMenu"
