import React from 'react';
import styled from 'styled-components';

const SidebarListItemContainer = styled.li<{ active?: boolean }>`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  
&:hover {
    background-color: rgb(240,240,255);
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  font-size: 20px !important;
`;

interface SidebarListItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ icon, children }) => {
  return (
    <SidebarListItemContainer>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </SidebarListItemContainer>
  );
};

export default SidebarListItem;
