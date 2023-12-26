import { FC, ReactNode } from "react";
import styled from "styled-components";

const Box = styled.div`
  border: 6px solid white;
  border-radius: 4px;
  margin: 5% auto;
  width: 800px;
  height: 500px;
  box-shadow: inset 0px 0px 8px 12px #E4F5F5;
`;

interface Props {
  children?: ReactNode
};

const AppContainer: FC<Props> = ({children}) => {
  return (
  <Box>
    {children}
  </Box>
  )
};

export default AppContainer;
