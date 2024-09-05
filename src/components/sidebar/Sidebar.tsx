import React from 'react';
import styled from 'styled-components';
import SidebarMenu from './SidebarMenu';
import SidebarListItem from './SidebarListItem';
import { Settings } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

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
          <SidebarListItem icon={<HomeIcon />}>Home</SidebarListItem>
          <SidebarListItem icon={<CalendarMonthIcon />}>Search by Date</SidebarListItem>
          <SidebarListItem icon={<Settings />}>Settings</SidebarListItem>
        </SidebarMenu>
        {/* Add more SidebarMenu components as needed */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
