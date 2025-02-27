import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DesktopNav>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
        </DesktopNav>

        <Logo />

        <SubscribeWrapper>
          <Button>Subscribe</Button>
          <StyledLink href="#">Already a subscriber?</StyledLink>
        </SubscribeWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-between;
    margin-top: 16px;
    margin-bottom: 81px;
  }
`;

const DesktopNav = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`;

const SubscribeWrapper = styled.div`
  display: none;
  position: relative;

@media ${QUERIES.laptopAndUp} {
  display: revert;
  justify-self: end;
}
`;

const StyledLink = styled.a`
  margin-top: 8px;
  text-decoration: underline;
  font-weight: 400;
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-align: center;
  width: 100%;
  position: absolute;
`;

export default Header;
