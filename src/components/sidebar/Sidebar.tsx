import React from 'react';
import styled from 'styled-components';
import SidebarMenu from './SidebarMenu';
import SidebarListItem from './SidebarListItem';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251,251,255);
  position: sticky;
  top: 50px;
`;

const SidebarWrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarWrapper>

        <SidebarMenu title="Dashboard">
          <SidebarListItem icon={<NotificationsNone />}>Home</SidebarListItem>
          <SidebarListItem icon={<Language />}>Analytics</SidebarListItem>
          <SidebarListItem icon={<Settings />}>Sales</SidebarListItem>
        </SidebarMenu>

        <SidebarMenu title="Quick Menu">
          <SidebarListItem icon={<NotificationsNone />}>Users</SidebarListItem>
          <SidebarListItem icon={<Language />}>Products</SidebarListItem>
          <SidebarListItem icon={<Settings />}>Reports</SidebarListItem>
        </SidebarMenu>
        {/* Add more SidebarMenu components as needed */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
