import React from "react";
import { connect } from "react-redux";
import { deleteExpense } from "../redux/actions/selectactions";
import "../wallet.css";

class ExpensesList extends React.Component {
  render() {
    const { addExpense, total, dispatch, button, name, income } = this.props;
    const text = `Lista de Despesas - ${name}`;
    return (
      <div className="list-background">
        <h1 className="sweet-titleadd tittle-list">
          <span data-text={text}>Lista de Despesas - {name}</span>
        </h1>
        {addExpense.map((e) => {
          return (
            <div className="item-list" key={e[0]}>
              <p key={e[0]}>
                Despesa: {`${e[0][0].toLocaleUpperCase() + e[0].substring(1)}`}
              </p>
              <div className="btns-div">
                <p>Valor: {e[1]} </p>
                <div className="sub-div">
                  <button
                    className="btn-list"
                    onClick={() => {
                      button(e);
                      dispatch(deleteExpense(e));
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-list"
                    onClick={() => {
                      return dispatch(deleteExpense(e));
                    }}
                  >
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="results">
          <p>Total de Despesas: {total.toFixed(2)}</p>
          <p>Meu Rendimento Mensal: {income.toFixed(2)}</p>
          <p className={(income - total).toFixed(2) < 0 ? 'red' : 'green'}>Valor Restante: {(income - total).toFixed(2)}</p>
          <button className="print" onClick={() => window.print()}>
            Gerar PDF
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  addExpense: store.addExpensereducer.expenses,
  total: store.addExpensereducer.total,
  name: store.loginreducer.name,
  income: store.loginreducer.income,
});

export default connect(mapStateToProps)(ExpensesList);
