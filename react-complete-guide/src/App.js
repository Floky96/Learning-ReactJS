import Items from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const addExpenseHandler = expenseData => {
    console.log('In App.js')
    console.log(expenseData)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Items />
    </div>
  );
}

export default App;
