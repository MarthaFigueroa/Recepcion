import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const SidebarPrueba = () => {
    return(
    <ProSidebar>
        <SidebarHeader>
            *
             *  You can add a header for the sidebar ex: logo
            
        </SidebarHeader>
        <SidebarContent>
            *
             *  You can add the content of the sidebar ex: menu, profile details, ...
            
        </SidebarContent>
        <SidebarFooter>
            *
             *  You can add a footer for the sidebar ex: copyright
            
        </SidebarFooter>
    {/* <Menu iconShape="square">
        <MenuItem>Dashboard</MenuItem>
        <SubMenu title="Components">
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
    </Menu> */}
    </ProSidebar>

    )
}
export default SidebarPrueba
