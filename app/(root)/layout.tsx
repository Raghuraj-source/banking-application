
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";

import Image from "next/image";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn: User = {
    firstName: 'Raghuraj',
    lastName: 'Developer',
    $id: '',
    email: '',
    userId: '',
    dwollaCustomerUrl: '',
    dwollaCustomerId: "",
    address1: "",
    city: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: ""
  };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src= "/icons/logo.svg" width={30} height={30} alt= "logo" />
          <div>
            <MobileNav user= {loggedIn }/>
          </div>

        </div>

        {children}
      </div>
      
    </main>
  );
}