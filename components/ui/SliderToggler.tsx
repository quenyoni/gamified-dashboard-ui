import Image from "next/image";

function SliderToggler() {
    return <div className="h-[60px] w-[60px] border border-[rgba(255, 255, 255, 0.1)] rounded-full backdrop-blur-[5px] ">
      <Image src="next.svg" height={40} width={40}  />
  </div>;
}

export default SliderToggler;
