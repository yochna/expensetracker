import { useEffect, useState } from "react";
import { getFromStorage, saveToStorage } from "../utils/storage";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import ActionButtons from "./ActionButtons";
import SummaryCards from "./SummaryCards";
import ChartsSection from "./ChartsSection";
import RecentTransactions from "./RecentTransactions";
import BudgetCircle from "./BudgetCircle";
import AddTransactionModal from "./AddTransactionModal";

import "../pages/Dashboard.css";

const Dashboard = () => {
  const [transactions, setTransactions] = useState(() =>
    getFromStorage("transactions", [])
  );

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const[isSidebarOpen,setisSidebarOpen] = useState(false)

  useEffect(() => {
    saveToStorage("transactions", transactions);
  }, [transactions]);

  const filteredTransactions = transactions.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard">
      <Sidebar isOpen={isSidebarOpen}
      closeSidebar={()=> setisSidebarOpen(false)}/>

      <div className="dashboard-main">
        <Topbar onSearch={setSearchQuery} toggleSidebar={()=> setisSidebarOpen((prev)=> !prev)} />

        <ActionButtons
          onIncome={() => {
            setModalType("Income");
            setShowModal(true);
          }}
          onExpense={() => {
            setModalType("Expense");
            setShowModal(true);
          }}
        />

        <SummaryCards expenses={filteredTransactions} />

        {/* Charts + Budget */}
        <div className="dashboard-grid">
          <ChartsSection expenses={filteredTransactions} />
          <BudgetCircle expenses={filteredTransactions} />
        </div>

        {/* Recent Transactions */}
        <RecentTransactions
          expenses={filteredTransactions}
          onDelete={(id) =>
            setTransactions((prev) =>
              prev.filter((item) => item.id !== id)
            )
          }
        />
      </div>

   <AddTransactionModal
  isOpen={showModal}
  type={modalType}
  onClose={() => setShowModal(false)}
  onAdd={(newTx) =>
    setTransactions((prev) => [...prev, newTx])
  }
/>

    </div>
  );
};

export default Dashboard;
