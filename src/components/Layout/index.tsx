import React, { PropsWithChildren, useEffect, useState } from "react"
import { NextRouter, useRouter } from "next/router"
import Image from "next/image"
import { NavItem } from "./types"
import { BurgerIcon } from "./BurgerIcon"
import { NavItems } from "./NavItems"
import { BurgerMenu } from "./BurgerMenu"

const NavLinks: NavItem[] = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
]

const Layout = ({ children }: PropsWithChildren) => {
  const router: NextRouter = useRouter()
  const burgerMenuRef = React.useRef<HTMLInputElement>(null)
  const burgerIconRef = React.useRef<HTMLInputElement>(null)
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

  const clickedBurgerItem = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    if (showBurgerMenu) {
      burgerMenuRef.current!.style.width = "0%"
      setShowBurgerMenu(false)
      router.push(to)
    }
  }

  function useOutsideAlerter(ref: React.RefObject<HTMLInputElement>) {
    useEffect(() => {
      function handleClickOutside(e: MouseEvent) {
        if (
          showBurgerMenu &&
          ref.current &&
          !ref.current.contains(e.target as HTMLElement) &&
          !burgerIconRef.current?.contains(e.target as HTMLElement)
        ) {
          ref.current!.style.width = "0%"
          setShowBurgerMenu(false)
        }
      }
      document.addEventListener("mousedown", handleClickOutside)
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      }
    })
  }
  useOutsideAlerter(burgerMenuRef)

  return (
    <>
      <div id="main">
        <header>
          <a onClick={() => router.push("/")}>Logo</a>
          <nav>
            <NavItems navItems={NavLinks} />
            <BurgerIcon ref={burgerIconRef} handleClick={clickedBurger} />
          </nav>
        </header>
        <main>{children}</main>
        <footer>test</footer>
      </div>
      <BurgerMenu ref={burgerMenuRef} navItems={NavLinks} handleClick={clickedBurgerItem} />
    </>
  )
}
Layout.displayName = "Layout"

export default Layout
