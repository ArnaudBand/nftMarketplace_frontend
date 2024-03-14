import React from 'react'
import Link from "next/link";

const HelpCenter = () => {

  // HELP CENTER MENU
  const helpCenter = [
    {name: "About", link: "about"},
    {name: "Contact Us", link: "contact-us"},
    {name: "Sign Up", link: "sign-up"},
    {name: "Sign In", link: "sign-in"},
    {name: "Subscription", link: "subscription"},
  ]
  return (
    <div className="bg-black shadow-md absolute mt-8 w-48 rounded-lg">
      {helpCenter.map((el, i) => (
          <Link key={i + 1} href={{pathname: `${el.link}`}} className="block px-4 py-2 text-white/80 hover:bg-gray-200 hover:text-gray-500">
            {el.name}
          </Link>
      ))}
    </div>
  )
}

export default HelpCenter;