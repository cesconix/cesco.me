import { Inter, Space_Grotesk } from "next/font/google"
import { NavLinkType } from "@/types"
import { ResponsiveImageType } from "react-datocms/image"

import { DraftMode } from "@/components/common"

import Header from "./header"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

type CommonProps = {
  logo: ResponsiveImageType
  navLinks: NavLinkType[]
  cvFileUrl?: string
}

type LayoutProps = {
  children: React.ReactNode
  commonProps: CommonProps
  draftMode: boolean
}

function Layout(props: LayoutProps) {
  return (
    <div
      id="cesconix"
      className={`${spaceGrotesk.variable} ${inter.variable} relative overflow-y-scroll font-space`}
    >
      <Header
        logo={props.commonProps.logo}
        navLinks={props.commonProps.navLinks}
        cvFileUrl={props.commonProps.cvFileUrl}
      />
      {props.children}
      {props.draftMode && <DraftMode />}
    </div>
  )
}

export default Layout
