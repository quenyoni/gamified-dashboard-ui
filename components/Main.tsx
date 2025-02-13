import CardGroup from "@/components/ui/CardGroup";
import EmporiumBox from "@/components/ui/EmporiumBox";
import React from "react";
import Carousel from "./ui/Carousel";

function Main() {
    return <main className="container mx-auto p-8">
        <h1 className="text-4xl">Welcome Back, Madelen</h1>
        <EmporiumBox/>
        <CardGroup />
        <Carousel/>
      
        
  </main>;
}

export default Main;
