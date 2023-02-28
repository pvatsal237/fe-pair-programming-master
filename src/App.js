import { useEffect, useState } from "react";
import "./App.css";
import Card from "./frontend/components/Card";
import axios from "axios";

function App() {

  // const [goalName, setGoalName] = 
  const [data, setData] = useState({
    financialGoals: null,
    bankAccounts: null
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      console.log("ok")
      try {
        const financialGoals = await axios('http://localhost:8080/financialGoals');
        const bankAccounts = await axios('http://localhost:8080/bankAccounts');
        console.log(financialGoals)
        setData(() => { return { financialGoals: financialGoals.data, bankAccounts: bankAccounts.data } });
        setLoading(false);

      } catch (error) {
        console.log(error.message)
        setError(error.message)
      }
    }
    fetchDetails();
    console.log(data)
  }, [data])

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data)
  return (
    <>{
      data?.financialGoals.map(goal => {
        const details = data.bankAccounts.filter((bank) => bank.id === goal.id)

        return <Card target={goal.goalTarget} goalProgress={goal.goalProgress} bankName={details[0]?.name} goalName ={goal.name} accountId={goal.accountId} />
      })
    }
    </>
  );

}

export default App