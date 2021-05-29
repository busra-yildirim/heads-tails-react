import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count: 0,
      headCount : 0,
      tailCount : 0,
      randomNumber: 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    const rand = Math.floor(Math.random() * 2);
    this.setState({ randomNumber : rand});

    if(this.state.randomNumber===1){
      this.state.side="yazi";
      this.state.tailCount++;
    }else{
      this.state.side="tura";
      this.state.headCount++;
    }
    this.setState({ flipping: true,count: this.state.count+1});
    console.log(rand)
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };

  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} count={this.state.count} headCount={this.state.headCount} tailCount={this.state.tailCount} randomNumber={this.state.randomNumber} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.headCount} </strong> tura
          <strong> {this.state.tailCount} </strong>
           yazı geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
