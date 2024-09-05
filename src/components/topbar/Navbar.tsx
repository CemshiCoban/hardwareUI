import React, { useState } from 'react';
import { Settings } from '@mui/icons-material';
import styled from 'styled-components';
import Modal from './Modal'; // Import the Modal component

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: '#fff';
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NavbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  background-color: white;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: maroon;
  cursor: pointer;
`;

const TopLeft = styled.div``;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 20px;
  color: '#555';
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Navbar: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const rndNmr = (): number => Math.floor(Math.random() * 7) + 1;

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <TopLeft>
          <Logo>Hardware Tracker</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer onClick={toggleModal}>
            <Settings />
          </IconContainer>
          <Avatar
            src={`https://randomuser.me/api/portraits/lego/${rndNmr()}.jpg`}
            alt="avatar"
          />
        </TopRight>
      </NavbarWrapper>

      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </NavbarContainer>
  );
};

export default Navbar;
