import React from 'react';
import styled from 'styled-components';
import ShareButton from '../components/ShareButton';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const HeaderLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>BiblioTech</HeaderLogo>
      <ShareButton />
    </HeaderContainer>
  );
};

export default Header;


