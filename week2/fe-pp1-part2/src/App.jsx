import "./App.css";
import CreditCard from "./CreditCard";
import BoxColor from "./BoxColor";
import Greetings from "./Greetings";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="cards-row">
        <CreditCard
          type="Visa"
          number="0123456789018875"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010993"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016982"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <BoxColor r={255} g={125} b={0} />
      <BoxColor r={255} g={0} b={0} />
      <Greetings lang="fi">Ludwig</Greetings>
      <Greetings lang="fi">François</Greetings>
    </div>
  );
}

export default App;
