# Vertical navigation
[http://www.patternfly.org/pattern-library/navigation/vertical-navigation](http://www.patternfly.org/pattern-library/navigation/vertical-navigation)

## Top navigation bar
Use `<VNavbar>` as root comonent for vertical naviatin bar. It allows three chaild components: `<VNavbar.Brand>`, `<VNavbar.LeftPanel>` and `<VNavbar.RightPanel>`


### Props

Name|Type|Default|Description
---|---|---
test|v|v

```javascript
<VNavbar>
    <VNavbar.Brand>
        <img className="navbar-brand-icon" src="http://www.patternfly.org/assets/img/logo-alt.svg" alt=""/><img
        className="navbar-brand-name" src="http://www.patternfly.org/assets/img/brand-alt.svg"
        alt="PatternFly Enterprise Application"/>
    </VNavbar.Brand>
    <VNavbar.LeftPanel>
        <NavItem><a href="#" target="_blank"
                    className="nav-item-iconic nav-item-iconic-new-window"><span
            title="Launch" className="fa fa-external-link"></span></a></NavItem>
    </VNavbar.LeftPanel>
    <VNavbar.RightPanel>
        <NavInfoList id='id1' label='Notification' onClear={this.handleClear}>
            <NavInfoItem label='Modified Datasources ExampleDS' />
            <NavInfoItem label='Test Message' />
            <NavInfoItem label='Error: System Failure' />
        </NavInfoList>
        <NavDropDown name='Help' icon='pficon-help'>
            <NavDropDownItem label='Help' onSelect={this.handleTopMenu} payload={{command: 'help'}}/>
            <NavDropDownItem label='About' onSelect={this.handleTopMenu} payload={{command: 'about'}}/>
        </NavDropDown>
        <NavDropDown name='User' icon='pficon-user'>
            <NavDropDownItem label='Preferences' onSelect={this.handleTopMenu} payload={{command: 'preferences'}}/>
            <NavDropDownItem label='Logout' onSelect={this.handleTopMenu} payload={{command: 'logout'}}/>
        </NavDropDown>
    </VNavbar.RightPanel>
</VNavbar>
```

## Left side menu

```javascript
<Sidebar>
    <SidebarItem active={this.state.active == 'dashboard'} icon='fa-dashboard' label='Dashboard' onSelect={this.handleSideMenu} payload={{command: 'dashboard'}}/>
    <SidebarItem active={this.state.active == 'dolor'} icon='fa-shield' label='Dolor' onSelect={this.handleSideMenu} payload={{command: 'dolor'}}/>
    <SidebarItemList active={this.state.active == 'ipsum'} icon='fa-space-shuttle' label='Ipsum'>
        <SidebarListItem label='Intellegam' onSelect={this.handleSideMenu} payload={{command: 'ipsum', payload: 'Intellegam'}}/>
        <SidebarListItem label='Copiosae' onSelect={this.handleSideMenu} payload={{command: 'ipsum', payload: 'Copiosae'}}/>
        <SidebarListItem label='Patrioque' onSelect={this.handleSideMenu} payload={{command: 'ipsum', payload: 'Patrioque'}}/>
    </SidebarItemList>
    <SidebarItemList active={this.state.active == 'amet'} icon='fa-paper-plane' label='Amet'>
        <SidebarListItem label='A Intellegam' onSelect={this.handleSideMenu} payload={{command: 'amet', payload: 'A ahelp'}}/>
        <SidebarListItem label='A Copiosae' onSelect={this.handleSideMenu} payload={{command: 'amet', payload: 'A help'}}/>
        <SidebarListItem label='A Patrioque' onSelect={this.handleSideMenu} payload={{command: 'amet', payload: 'A help'}}/>

    </SidebarItemList>
    <SidebarItemList active={this.state.active == 'ipsum3'} icon='fa-space-shuttle' label='Ipsum3'>
        <SidebarListItem label='I Intellegam' onSelect={this.handleSideMenu} payload={{command: 'ipsum3', payload: 'I help'}}/>
        <SidebarListItem label='I Copiosae' onSelect={this.handleSideMenu} payload={{command: 'ipsum3', payload: 'I help'}}/>
        <SidebarListItem label='I Patrioque' onSelect={this.handleSideMenu} payload={{command: 'ipsum3', payload: 'I help'}}/>
    </SidebarItemList>
    <SidebarItem active={this.state.active == 'adipscing'} icon='fa-graduation-cap' label='Adipscing' onSelect={this.handleSideMenu} payload={{command: 'adipscing'}}/>
    <SidebarItem active={this.state.active == 'lorem'} icon='fa-gamepad' label='Lorem' onSelect={this.handleSideMenu} payload={{command: 'lorem'}}/>
</Sidebar>
```
