import Image from "next/image";


function RedButton() {
  return <div className="px-[25px] py-[13px] rounded-[30px] bg-red1 flex items-center justify-between cursor-pointer">
    <Image src="/upload.png" height={20} width={20} alt="upload" />
    <span className="ml-2">Upload</span>
    </div>;
}

export default RedButton;
