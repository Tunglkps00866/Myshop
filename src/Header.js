import React from 'react';
import { Navbar,Nav,MenuItem,NavItem,NavDropdown,FormGroup,FormControl,Button, Glyphicon} from 'react-bootstrap';
class Header extends React.Component{
    render(){
        return(
            <div className="Header">
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">NaviShop</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                    <NavDropdown eventKey={1} title="Products" id="basic-nav-dropdown">
                        <MenuItem eventKey={1.1} href="/san-pham">All Products</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={1.2} href="/laptop">Laptop</MenuItem>
                        <MenuItem eventKey={1.3} href="/chuot">Mouse</MenuItem>
                        <MenuItem eventKey={1.4} href="/tai-nghe">HeadPhone</MenuItem>
                        <MenuItem eventKey={1.5} href="/loa">Speaker</MenuItem>
                    </NavDropdown>
                    
                    <NavDropdown eventKey={3} title="Cart" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1} href="/gio-hang">MyCart</MenuItem>
                        <MenuItem eventKey={3.2} href="/thanh-toan">MyPayment</MenuItem>
                    </NavDropdown>
                    <NavItem eventKey={4} href="/gioi-thieu">
                        AboutUs
                    </NavItem>
                    <NavItem eventKey={5} href="/lien-he">
                        ContactUs
                    </NavItem>
                    </Nav>
                    <Navbar.Form pullRight>
                        <FormGroup>
                            <FormControl type="text" placeholder="Search" />
                        </FormGroup>{' '}
                        <Button type="submit"><Glyphicon glyph="search" /></Button>
                        </Navbar.Form>
                    <Nav pullRight>
                    <NavItem eventKey={6} href="/dang-nhap">
                        Sign in 
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </div>
        );
    }
}
export default Header;