import React from "react"
import { BurgerProps } from "./types"

export const BurgerIcon: React.FunctionComponent<BurgerProps> = ({ handleClick }) => {
  return (
    <div className="BurgerIcon" onClick={handleClick}>
      <div className="burger" />
      <div className="burger" />
      <div className="burger" />
    </div>
  )
}
