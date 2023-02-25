export type NavItem = {
  name: string
  to: string
}

export type NavItemsProps = {
  navItems: NavItem[]
}

export type BurgerProps = {
  handleClick?: React.MouseEventHandler<HTMLDivElement>
}

export type BurgerMenuProps = {
  navItems: NavItem[]
  handleClick: (to: string) => (e: React.MouseEvent) => void
} & React.HTMLProps<HTMLElement>