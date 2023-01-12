import React, { useState, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 300px;
  width: 600px;
  background-color: blue;
  border-radius: 20px;
`;
const Left = styled.div``;

const Right = styled.div``;
const UseRef = () => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  const [tip, setTip] = useState<number>(0);

  const tipAmount = ((bill * tip) / people).toFixed(2);
  const showTip =
    tipAmount === "NAN" || tipAmount === "Infinity" ? "0.00" : tipAmount;

  const totalPerson = ((bill * (1 + tip)) / people).toFixed(2);
  const showPerson =
    totalPerson === "NAN" || totalPerson === "Infinity" ? "0.0" : totalPerson;
  return (
    <Section>
      <Container>
        <Left>
          <input
            type="number"
            value={bill}
            placeholder="BILL"
            onChange={(e) => {
              setBill(e.target.valueAsNumber);
            }}
          />
          {tip}
          <button
            onClick={(e) => {
              setTip(0.1);
            }}
          >
            10%
          </button>
          <input
            value={people}
            type="number"
            placeholder="number of people"
            onChange={(e) => {
              setPeople(e.target.valueAsNumber);
            }}
          />
        </Left>

        <Right>
          <div>
            tip amount / person
            {showTip}
          </div>

          <div> total / person {showPerson} </div>
        </Right>
      </Container>
    </Section>
  );
};

export default UseRef;
