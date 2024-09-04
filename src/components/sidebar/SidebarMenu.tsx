import styled from 'styled-components';

const SidebarMenuContainer = styled.div`
  margin-bottom: 10px;
`;

const SidebarTitle = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 5px;
`;

interface SidebarMenuProps {
  title: string;
  children: React.ReactNode;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ title, children }) => {
  return (
    <SidebarMenuContainer>
      <SidebarTitle>{title}</SidebarTitle>
      <SidebarList>{children}</SidebarList>
    </SidebarMenuContainer>
  );
};

export default SidebarMenu;
