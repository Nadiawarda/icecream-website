import Image from 'next/image';
import Link from 'next/link';

const Navbar = ()=>{
  return (
    <div>
   <header>
      <div className="bg-cyan-300 mt-2 pt-2">

        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <Image src="/img/logo.png" alt="logo" width={100} height={50} className="hover:opacity-10" />
          <span className="ml-1 text-xl hover:underline  text-blue-700 font-bold italic">Nadia Ikram</span>

          <nav className="md:ml-auto flex flex-wrap items-center justify-center text-lg font-bold italic gap-4">
            <Link href="/" className="mr-3 text-blue-700 hover:underline ">Home</Link>
            <Link href="/components/About" className="mr-3 text-blue-700 hover:underline">About</Link>
            <Link href="/components/Flavour" className="mr-3 text-blue-700 hover:underline">Flavors</Link>
            <Link href="/components/Contact" className="mr-3 text-blue-700 hover:underline">Contact</Link>            
          </nav>

          <button className="inline-flex items-center bg-blue-400 text-white font-bold border-0 py-1 px-2 focus:outline-none hover:bg-blue-200 rounded text-base mt-2 md:mt-0">Sign Up
          </button>
        </div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;