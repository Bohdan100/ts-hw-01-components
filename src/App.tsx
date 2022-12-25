import React from "react";
import "./App.css";

import { UserProfile } from "./components/User/UserProfile";
import { StatisticsList } from "./components/Statistics/StatisticsList";
import { FriendList } from "./components/Friends/FriendList";
import { TransactionsHistory } from "./components/Transactions/TransactionsHistory";

import UserData from "./data/user.json";
import data from "./data/data.json";
import friendsData from "./data/friends.json";
import transactionsData from "./data/transactions.json";

function App() {
  return (
    <>
      <UserProfile user={UserData} />
      <StatisticsList stats={data} />
      <FriendList friends={friendsData} />
      <TransactionsHistory
        transactions={transactionsData}
      />
    </>
  );
}

export default App;
