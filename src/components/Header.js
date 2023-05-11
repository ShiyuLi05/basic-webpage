import { Component } from 'react';
import Nav from './Nav';
import IconsH from './IconsH';

class Header extends Component {
  render() {
    const { title } = this.props;
    return (
        <header>
            <div className='container'>
              <nav>
                  <li className='title'>{title}</li>
                  <Nav /> 
                  <IconsH />
              </nav>
            </div>
        </header>
    )
  }
}

export default Header;