import { toUnicode } from "punycode";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

interface props {
  saxeli: string;
  gvari: string;
  asaki: number;
}
const Section = styled.section`
  background-color: mediumslateblue;
  height: 100vh;
  width: 100vw;
  position: relative;
`;
const Container = styled.div`
  width: 500px;
  background-color: aquamarine;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 100px);
  margin-left: 50px;
  margin-right: 50px;
  padding: 8px;
  border-radius: 10px;
`;

const H1 = styled.h1``;

const Home = (props: props) => {
  const [todo, setTodo] = useState(["ku", "ატამი", "ვაშლი"]);

  function addToList(rame: string[] | undefined) {
    setTodo([...todo, "rame"]);
  }
  const ras = useRef<any>(null);

  function deleteTodo() {
    const clone = { ...todo };
    clone.pop();
    setTodo(clone);
  }

  return (
    <div>
      <Section id="home">
        <Container>
          <div>
            <Navbar />

            <H1>
              {props.saxeli} {props.gvari} {props.asaki} წლის
            </H1>
          </div>

          <div>
            <input
              id="myText"
              type="text"
              placeholder="Add Something"
              ref={ras}
            />

            <button
              onClick={() => {
                setTodo([...todo, ras.current.value]);
              }}
            >
              Add
            </button>
            <button style={{ margin: 10 }} onClick={deleteTodo}>
              delete
            </button>

            {todo.map((sax, index) => {
              return <h2>{sax}</h2>;
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Home;
