import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Raghuraj", lastName: 'Developer', email: 'raghurajt85@gmail.com'};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1} // or any other non-empty expression
            totalCurrentBalance={1250.35}
          />
        </header>

         RECENT TRANSACTIONS
      </div>

      <RightSidebar  
       user={loggedIn}
       transactions={[]}
       banks={[{ currentBalance:124.56}, {currentBalance:524.55}]}

      />
    </section>
  );
};

export default Home;
