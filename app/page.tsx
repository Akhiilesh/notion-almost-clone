import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  return (
    <>
      <div className="flex items-center content-center w-full">
        <p className="flex justify-center align-middle items-center content-center   p-4 font-semibold bg-zinc-100 hover:bg-zinc-50 hover:cursor-pointer hover:text-indigo-600 hover:shadow-lg hover:ease-in-out text-2xl rounded-full m-5 hover:scale-105 transition duration-150 ease-in-out">
          Hello , Its Lotion Clone
        </p>
      </div>
      <main className="place-content-center	flex justify-around p-4 ">
        <Button variant={"default"} className="">
          Something
        </Button>
        <Button variant={"destructive"} className="">
          Something
        </Button>
        <Button variant={"ghost"} className="">
          Something
        </Button>
        <Button variant={"link"} className="">
          Something
        </Button>
        <Button variant={"outline"} className="">
          Something
        </Button>
        <Button variant={"secondary"} className="">
          Something
        </Button>
      </main>
    </>
  );
}
