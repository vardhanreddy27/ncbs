import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Menu() {
  return (
    <div className="m-4 h-full flex justify-between items-center text-slate-900">
      <div>
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Vaksiddhi Public School logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <h2 id="title" className="font-bold logo text-[var(--brand-primary)]">Vaksiddhi</h2>
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
      <Link className="pl-6 pr-6 transition hover:text-[var(--brand-primary)]" href="#About">
About</Link>
        <Link className="pl-6 pr-6 transition hover:text-[var(--brand-primary)]" href="#features">
Features</Link>
        <a href="#" className="pl-6 pr-6 transition hover:text-[var(--brand-primary)]">Parent Portal</a>
        <Link className="pl-6 pr-6 transition hover:text-[var(--brand-primary)]" href="#contact">
         Contact
        </Link>
      </div>
      <div className="">
      <Link href="/signup">
  <button  className="text-sm font-bold py-2 px-4 rounded z-100 bg-[var(--brand-primary)] text-white">Sign Up</button>
  </Link>
  <Link href="/login">
  <button className="text-sm bg-[var(--brand-accent)] text-slate-900 font-bold py-2 ml-2 px-4 rounded">Login</button>
    </Link>  </div>
    </div>
  );
}

export default Menu;
