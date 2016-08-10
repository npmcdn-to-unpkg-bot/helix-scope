import React, {Component} from 'react';
import NavLink from './NavLink';
import Button from './Button';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav className="c-header">
            <NavLink to="/"><img src="/images/Helixlogo01.png" className="icon-logo"/></NavLink>
            <ul className="main-menu">
              <li>
                <NavLink to="/global-scenarios" className="-green">Global Scenarios</NavLink>
              </li>
              <li>
                <NavLink to="/countries" className="-orange">Countries</NavLink>
              </li>
              <li>
                <NavLink to="/compare" className="-red">Compare</NavLink>
              </li>
              <li>
                <Button icon="share" style="none" size="small" onClick={() => this.props.setShareModal(true)}/>
              </li>
            </ul>
            <ul className="mobile-menu">
              <li>
                <Button icon="menu" style="none" size="small" onClick={() => this.props.setMenuModal(true)}/>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  setMenuModal: React.PropTypes.func,
  setShareModal: React.PropTypes.func
};

export default Header;
