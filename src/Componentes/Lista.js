import React from "react";
import { connect } from "react-redux";
import { login } from "../redux/actions/selectactions";
import { Navigate } from "react-router-dom";
import "../login.css";

class Login extends React.Component {
  state = {
    name: "",
    income: "",
    redirect: false,
  };

  render() {
    const { dispatch } = this.props;

    const handleKeyDownLogin = (e) => {
      if (e.key === "Enter") {
        if (
          this.state.name !== "" &&
          this.state.income !== "" &&
          !isNaN(this.state.income)
        ) {
          dispatch(login(this.state));
          this.setState({ redirect: true });
        } else {
          alert(
            "Informe seu nome e sua renda para prosseguir. Esses dados ficaram armazenados apenas no seu navegador enquanto estiver no site, não serão compartilhados nem enviados para nenhum lugar."
          );
        }
      }
    };

    return (
      <div className="login-background">
        <h1 className="sweet-title">
          <span data-text="Dinheiro">Dinheiro</span>
          <span data-text="em Dia">em Dia</span>
        </h1>
        <div className="glass">
          <p className="quest firstin">Qual o seu nome?</p>
          <input
            className="input"
            onKeyDown={handleKeyDownLogin}
            type="text"
            spellCheck="false"
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
          <p className="quest">Qual o valor da sua renda mensal?</p>
          <input
            className="input"
            onKeyDown={handleKeyDownLogin}
            type="number"
            onChange={(e) =>
              this.setState({ income: parseFloat(e.target.value) })
            }
            value={this.state.income}
          />
          <button
            className="btn"
            onClick={() => {
              if (
                this.state.name !== "" &&
                this.state.income !== "" &&
                !isNaN(this.state.income)
              ) {
                dispatch(login(this.state));
                this.setState({ redirect: true });
              } else {
                alert(
                  "Informe seu nome e sua renda para prosseguir. Esses dados ficaram armazenados apenas no seu navegador enquanto estiver no site, não serão compartilhados nem enviados para nenhum lugar."
                );
              }
            }}
          >
            Entrar
          </button>
        </div>
        <img className="img-login" src="https://raw.githubusercontent.com/thspanhol/dinheiro-em-dia/main/public/carteira-png.png" alt="walles-icon" />
        {this.state.redirect && <Navigate to="/carteira" />}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  login: store.loginreducer,
});

export default connect(mapStateToProps)(Login);
