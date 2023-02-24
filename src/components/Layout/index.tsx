import React, { PropsWithChildren, useState } from "react"
import { NextRouter, useRouter } from "next/router"
import Image from "next/image"
import { NavItem } from "./types"
import { BurgerIcon } from "./BurgerIcon"
import { NavItems } from "./NavItems"
import { BurgerMenu } from "./BurgerMenu"
import pdpsi from "public/pdpsi.png"

const NavLinks: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
]

const Layout = ({ children }: PropsWithChildren) => {
  const router: NextRouter = useRouter()
  const burgerMenuRef = React.useRef<HTMLInputElement>(null)
  const [showBurgerMenu, setShowBurgerMenu] = useState(false)

  const clickedBurger: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()
    if (showBurgerMenu) {
      burgerMenuRef.current!.style.width = "0%"
      setShowBurgerMenu(false)
    } else {
      setShowBurgerMenu(true)
      burgerMenuRef.current!.style.width = "calc(100vw - 4.5rem)"
    }
  }

  return (
    <>
      <header>
        <Image src={pdpsi} alt={"Logo"} onClick={() => router.push("/")} />
        <nav>
          <NavItems navItems={NavLinks} />
          <BurgerIcon handleClick={clickedBurger} />
        </nav>
      </header>
      <main>{children}</main>
      <footer>test</footer>
      <BurgerMenu ref={burgerMenuRef} navItems={NavLinks} />
    </>
  )
}
Layout.displayName = "Layout"

export default Layout
