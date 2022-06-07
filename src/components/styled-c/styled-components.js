import styled from "styled-components";

const NaviBar = styled.nav `
position: fixed;
top: 0;
  display: flex;
  justify-content: space-between;
  background: black; 
  color: white;
  width: 100%; 
  padding: 2rem 0;
  `

  const UlNav = styled.ul `
  display: flex;`

  const Fitx = styled.div `
  margin-top : 5rem;
  `
  const Hom = styled.div `
  display:flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  margin-top : 5rem;
 
  `
  const Log = styled.div `
  margin-top : 5rem;
  `
  const Nau = styled.div `
  margin-top : 5rem;
  `
  const Regist = styled.div `
  margin-top : 5rem;
  `
  
  
  export {NaviBar, UlNav, Fitx, Hom, Log, Nau, Regist};

