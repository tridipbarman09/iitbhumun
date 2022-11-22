import Image from 'next/image';
import Link from 'next/link';

export default function NavBar({ navbar }) {
  return (
    <div
      className={`fixed w-full z-30 font-medium text-white sm:py-2 ${
        navbar
          ? 'bg-[#F1F1F1] shadow-lg border-b 2xl:shadow-[#F1F1F1]/50 shadow-[#F1F1F1]/50 text-black'
          : ''
      }`}
    >
      <div className="hidden sm:flex flex-row items-center justify-between mx-16">
        <Image
          src="/images/active-nav-log.svg"
          width={50}
          height={50}
          alt="active-nav-logo"
        />
        <div className="justify-end hidden items-center sm:flex space-x-12 2xl:space-x-24 font-bold">
          <Link href="home">
            <button className=" h-[2.875rem] 2xl:text-xl hover:text-[#189BA5] duration-100">
              Home
            </button>
          </Link>
          <button className=" h-[2.875rem] 2xl:text-xl text-lg hover:text-[#189BA5] duration-100">
            Committees
          </button>
          <button className=" h-[2.875rem] 2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
            Secretariat
          </button>
          <button className=" h-[2.875rem] 2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
            Gallery
          </button>
          <button className=" h-[2.875rem] 2xl:text-xl  text-lg hover:text-[#189BA5] duration-100">
            FAQ
          </button>
          <Link href="/register">
            <button
              className={`px-12 2xl:px-12 h-10 rounded-md text-[1.125rem] font-semibold ${
                navbar ? 'bg-[#1A1E21] text-white' : 'text-black bg-[#F5CE3F]'
              }`}
            >
              Register
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex items-center justify-between px-2 py-2">
        <div>
          <Image
            src="/images/mobile-actinav.svg"
            width={52}
            height={20}
            alt="mobile-actinav"
          />
        </div>
        <div className="ml-12">
          <Image
            src="/images/mobile-activenav-logo.svg"
            width={52}
            height={54.45}
            alt="mobile-activenav-logo"
          />
        </div>
        <div>
          <Link href="register">
            <button className="py-2 px-[1.5rem] text-xs font-custom font-semibold text-white bg-[#189BA5] rounded-lg">
              <a>Register</a>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}