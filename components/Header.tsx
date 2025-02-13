import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import Nav from "./Nav";


function Header() {
    return <header className="flex items-center justify-between p-8 ">
        <Logo />
        <SearchBar />
        <Nav/>
        
        <nav>
            
        </nav>
      
        
  </header>;
}

export default Header;



function Logo() {
    return (
        <Image src='/logo.svg' height={50} width={50} alt="logo" />
    )
}
