import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { SiShopee } from "react-icons/si";
import { BsQrCode } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center text-center text-black font-semibold bg-green-200 mt-10 rounded-lg">
        <div className="container pt-4 flex justify-center gap-10">
          <div className="mb-2 flex justify-center gap-8">
            <div>
              <Link to="https://www.instagram.com/ccraftster/" target="_blank">
                <BsInstagram className="w-8 h-8" />
              </Link>
            </div>
            <div>
              <Link
                to="https://shopee.co.th/craftyhands.handmade"
                target="_blank"
              >
                <SiShopee className="w-8 h-8" />
              </Link>
            </div>
            <div>
              <Link to="https://line.me/R/ti/p/%40770etlkv" target="_blank">
                <BsQrCode className="w-8 h-8" />
              </Link>
            </div>
          </div>
          <div className="mb-2 flex justify-center gap-3">
            <div className=" w-10 h-10  ">
              <img
                src="\src\assets\Pics\Logo\Screenshot 2023-10-11 195428.png"
                className="rounded-full "
              />
            </div>
            <div className=" w-10 h-10  ">
              <img
                src="\src\assets\Pics\Logo\Screenshot 2023-10-11 195511.png"
                className="rounded-full "
              />
            </div>
            <div className=" w-10 h-10  ">
              <img
                src="\src\assets\Pics\Logo\Screenshot 2023-10-11 195543.png"
                className="rounded-full "
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
