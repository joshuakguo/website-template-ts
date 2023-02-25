import React from "react"
import { BurgerProps } from "./types"

export const BurgerIcon = React.forwardRef<HTMLInputElement, BurgerProps>(({ handleClick }, ref) => {
  return (
    <div ref={ref} className="BurgerIcon" onClick={handleClick}>
      <div className="burger" />
      <div className="burger" />
    </div>
  )
})
BurgerIcon.displayName = "BurgerIcon"
