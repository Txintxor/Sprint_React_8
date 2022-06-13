import styled, { keyframes } from "styled-components";

const NaviBar = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: black;
  color: white;
  width: 100%;
  padding: 0.35rem 0;
`;

const UlNav = styled.ul`
  display: flex;
  align-items: center;
`;

const Hom = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const Log = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  margin-top: 5rem;
  padding: 2rem;
  border: solid #ffe91fdc 3px;
  border-radius: 5px;
  box-shadow: 3px 5px #ffe91fdc;
  color: white;
  background: rgba(0, 0, 0, 0.6);
`;

const Regist = styled.form`
display: flex;
flex-direction: column;
align-items: center;
min-width: fit-content;
margin-top: 5rem;
padding: 2rem;
border: solid #ffe91fdc 3px;
border-radius: 5px;
box-shadow: 3px 5px #ffe91fdc;
color: white;
background: rgba(0, 0, 0, 0.6);
`;

const Fitx = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  border: solid #ffe91fdc 3px;
  border-radius: 5px;
  box-shadow: 3px 5px #ffe91fdc;
  margin-top: 5rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
`;

const Nau = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 5rem;
  background: rgba(0, 0, 0, 0.6);
`;

const grow = keyframes`
  from {
    font-size: 1.5rem;
  }
  
  to {
    font-size: 1.75rem;
  }
  `;

const shrink = keyframes`
  from {
    font-size: 1.75rem;
  }
  
  to {
    font-size: 1.5rem;
  }
  `;

const ShipContent = styled.div`
  border: solid #ffe91fdc 3px;
  border-radius: 5px;
  box-shadow: 3px 5px #ffe91fdc;
  width: 35rem;
  height: fit-content;
  margin: 1rem 5rem;
  padding: 1rem;
  font-size: 1.5rem;
  animation: ${shrink} 0.25s linear;
  word-break: break-all;

  &:hover {
    animation: ${grow} 0.25s linear;
    font-size: 1.75rem;
  }
`;

const Button = styled.a`
  width: 60%;
  background: transparent;
  border: solid #ffe91fdc 3px;
  border-radius: 5px;
  box-shadow: 3px 3px #ffe91fdc;
  font-size: 1.75rem;
  margin-top: 2rem;
  text-align: center;
  color: white;
  cursor: pointer;
`;
const ButtonSubmit = styled.input`
  width: 60%;
  background: transparent;
  border: solid #ffe91fdc 3px;
  border-radius: 5px;
  box-shadow: 3px 3px #ffe91fdc;
  font-size: 1.75rem;
  margin-top: 2rem;
  text-align: center;
  color: white;
  cursor: pointer;
`;

export { Button, ButtonSubmit, NaviBar, UlNav, Fitx, Hom, Log, Nau, Regist, ShipContent };
