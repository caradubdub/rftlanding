import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';
import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';
import GithubIcon from '@static/icons/github.svg';
import LinkedInIcon from '@static/icons/linkedin.svg';

import ExternalLink from '@common/ExternalLink';

const NAV_ITEMS = ['About', 'Features', 'Team', 'FAQ'];

const SOCIAL = [
  {
    icon: GithubIcon,
    name: 'Star',
    link: 'https://github.com/oslabs-beta/react-fetch-tree',
  },
  {
    icon: LinkedInIcon,
    name: 'Follow',
    link: 'https://www.linkedin.com/company/react-fetch-tree/',
  },
];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
  };

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <StyledContainer>
        <SocialIcons>
          {SOCIAL.map(({ icon, link, name }) => (
            <ExternalLink
              style={{ textDecoration: 'none', color: 'black' }}
              key={link}
              href={link}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'nowrap',
                  alignItems: 'flex-end',
                  backgroundColor: '#7bc19c',
                  borderRadius: '20px',
                  padding: `7px ${name.length + 7}px 7px ${name.length}px`,
                  marginLeft: '0.75em',
                  ':hover': { backgroundColor: '#BCDBCA' },
                }}
              >
                <img src={icon} alt="link" />
                <p
                  style={{
                    textDecoration: 'none',
                    textAlign: 'center',
                    alignSelf: 'flex-end',
                    fontFamily: `${props => props.theme.font.secondary}`,
                    fontSize: '18px',
                    lineHeight: '25px',
                    margin: '-6px 0 0 0',
                    color: 'black',
                  }}
                >
                  {name}
                </p>
              </div>
            </ExternalLink>
          ))}
        </SocialIcons>
        <Scrollspy
          items={NAV_ITEMS.map(item => item.toLowerCase())}
          currentClassName="active"
          mobile={mobile}
          offset={-64}
        >
          {NAV_ITEMS.map(navItem => (
            <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
          ))}
        </Scrollspy>
      </StyledContainer>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>React Fetch Tree</Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}
const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

export default Navbar;
