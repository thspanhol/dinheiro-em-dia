import React from "react";
import AddExpenses from "./Componentes/AddExpenses";
import ExpensesList from "./Componentes/ExpensesList";
import { connect } from "react-redux";
import "./wallet.css";
import { Navigate } from "react-router-dom";

class Wallet extends React.Component {
  state = {
    expense: "",
    value: "",
    button: "Adicionar",
  };

  render() {
    const { name, income } = this.props;
    console.log(`${name} possui uma renda no valor de R$${income}`);

    const expense = (par) => this.setState({ expense: par });
    const value = (par) => this.setState({ value: par });
    const rbutton = () => this.setState({ button: "Adicionar" });
    const button = (e) => {
      this.setState({
        expense: e[0],
        value: e[1],
        button: "Atualizar",
      });
    };
    const vexpense = this.state.expense;
    const vvalue = this.state.value;
    const vbutton = this.state.button;
    const state = this.state;

    return (
      <div className="wallet-background">
        <AddExpenses
          expense={expense}
          value={value}
          vexpense={vexpense}
          vvalue={vvalue}
          state={state}
          button={button}
          vbutton={vbutton}
          rbutton={rbutton}
        />
        <ExpensesList button={button} vbutton={vbutton} />
        {name === "" && <Navigate to="/" />}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  name: store.loginreducer.name,
  income: store.loginreducer.income,
});

export default connect(mapStateToProps)(Wallet);
