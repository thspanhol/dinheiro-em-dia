import React from "react";
import { connect } from "react-redux";
import { addExpense } from "../redux/actions/selectactions";
import "../wallet.css";

class AddExpenses extends React.Component {
  render() {
    const {
      dispatch,
      expense,
      value,
      vexpense,
      vvalue,
      state,
      vbutton,
      rbutton,
    } = this.props;

    const handleKeyDownExpenses = (e) => {
      if (e.key === "Enter") {
        if (vvalue !== "" && !isNaN(vvalue) && vexpense !== "") {
          if (vbutton === "Adicionar") {
            dispatch(addExpense(state));
            expense("");
            value("");
          } else {
            dispatch(addExpense(state));
            expense("");
            value("");
            rbutton();
          }
        } else {
          alert(
            "Informe a descrição e o valor da despesa antes de adicionar a lista."
          );
        }
      }
    };

    return (
      <div className="add-background">
        <img
          className="img-wallet"
          src="https://raw.githubusercontent.com/thspanhol/dinheiro-em-dia/main/public/carteira-png.png"
          alt="walles-icon"
        />
        <h1 className="sweet-titleadd">
          <span data-text="Dinheiro">Dinheiro</span>
          <span data-text="em Dia">em Dia</span>
        </h1>
        <p className="questadd firstinadd">Despesa:</p>
        <input
          className="inputadd"
          onKeyDown={handleKeyDownExpenses}
          type="text"
          spellCheck="false"
          onChange={(e) => expense(e.target.value)}
          value={vexpense}
          placeholder="Ex: Aluguel"
        />
        <p className="questadd">Valor:</p>
        <input
          className="inputadd"
          onKeyDown={handleKeyDownExpenses}
          type="number"
          onChange={(e) => value(parseFloat(e.target.value))}
          value={vvalue}
          placeholder="Ex: 700,00"
        />
        <button
          className="btnadd"
          onClick={() => {
            if (vvalue !== "" && !isNaN(vvalue) && vexpense !== "") {
              if (vbutton === "Adicionar") {
                dispatch(addExpense(state));
                expense("");
                value("");
              } else {
                dispatch(addExpense(state));
                expense("");
                value("");
                rbutton();
              }
            } else {
              alert(
                "Informe a descrição e o valor da despesa antes de adicionar a lista."
              );
            }
          }}
        >
          {vbutton}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  addExpense: store.addExpensereducer.expenses,
  total: store.addExpensereducer.total,
});

export default connect(mapStateToProps)(AddExpenses);
