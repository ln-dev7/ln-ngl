import Image from "next/image";
import Link from "next/link";
import { ngl } from "@/ngl";

export default function Home() {
  return (
    <main className="">
      <section className="bg-white py-24 min-h-screen flex items-center overflow-hidden relative">
        <div
          className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-sky-400/5 right-0
  -translate-y-[40%] translate-x-[40%] top-0"
        >
          <div className="inset-[10%] rounded-full bg-gradient-to-l from-sky-400/20">
            <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-sky-400/30" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-12">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-bold text-gray-800  text-3xl">
              Réponses de LN aux questions anonymes
            </h1>
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-40">
              <Link
                className="w-full sm:w-fit bg-red-400 hover:bg-red-500 duration-300 rounded-lg px-8 py-2 flex items-center justify-center text-white"
                target="_blank"
                href="https://ngl.link/lndev"
              >
                Pose moi une question
              </Link>
              <Link
                className="w-full sm:w-fit bg-sky-400 hover:bg-sky-500 duration-300 rounded-lg px-8 py-2 flex items-center justify-center text-white"
                target="_blank"
                href="https://twitter.com/ln_dev7"
              >
                Follow me !
              </Link>
            </div>
          </div>
          <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ngl.map((ngl, index) => {
              return (
                <div
                  key={index}
                  className="h-fit p-5 md:p-6 space-y-6 rounded-lg bg-white  border border-gray-100  shadow-2xl shadow-gray-100/70 hover:border-sky-400"
                >
                  <p className="font-medium text-md text-gray-700 ">
                    “ {ngl.question} ”
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="border-2 border-red-200 rounded-full flex items-center justify-center">
                      <Image
                        src="/ln.jpg"
                        width={1900}
                        height={1200}
                        alt="Author avatar"
                        className="w-9 h-9 rounded-full flex object-cover"
                      />
                    </div>
                    <div className="space-y-1 flex-1 bg-slate-50 p-4 rounded-md">
                      <p className="text-gray-600 ">{ngl.response}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>{" "}
      </section>
    </main>
  );
}
