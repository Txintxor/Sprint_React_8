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

const Fitx = styled.div`
  margin-top: 5rem;
`;
const Hom = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;
const Log = styled.div`
  margin-top: 5rem;
`;
const Nau = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 5rem;
`;
const Regist = styled.div`
  margin-top: 5rem;
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

const ShipContent = styled.a`
  border: solid #ffe91fdc 3px;
  border-radius: 5px;
  box-shadow: 3px 5px #ffe91fdc;
  min-width: 35rem;
  margin: 1rem 5rem;
  padding: 1rem;
  font-size: 1.5rem;
  animation: ${shrink} 0.25s linear;

  &:hover {
    animation: ${grow} 0.25s linear;
    font-size: 1.75rem;
  }
`;

export { NaviBar, UlNav, Fitx, Hom, Log, Nau, Regist, ShipContent };
