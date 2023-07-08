import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-10">
        <Link
          className="text-3xl hover:tracking-widest transition-all"
          href="/"
        >
          hafiedzmada
        </Link>
        <div className="flex justify-between gap-3">
          <Link href="/about" className="hover:tracking-wider transition-all">
            about
          </Link>
          <Link
            href="/projects"
            className="hover:tracking-wider transition-all"
          >
            projects
          </Link>
          <Link href="/contact" className="hover:tracking-wider transition-all">
            contact
          </Link>
        </div>
      </nav>
      <main className="flex items-center justify-between">
        <div className="w-1/2 flex flex-col gap-1">
          <h1 className="text-3xl tracking-wide">
            Hello👋I&apos;m
            <br />
            <span className="font-bold text-5xl">Hafiedz Mada Matsushita</span>
          </h1>
          <p className="text-4xl mb-3">Frontend Developer</p>
          <p className="text-xl">
            Experienced Frontend Developer specializing in React, dedicated to
            crafting visually appealing and user-friendly web applications.
          </p>
        </div>
        <div className="flex items-center justify-center w-1/2">
          <div className="border-[16px] border-b-[78px]">
            <Image
              alt="profile"
              src="/hafiedzmada.jpg"
              width={400}
              height={200}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
