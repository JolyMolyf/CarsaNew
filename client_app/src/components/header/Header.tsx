import { Link, useLocation } from 'react-router-dom';
import './Header.scss'
import logo from '../../images/Common/carsa_logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/store';
import { setOpenedLink } from '../../redux/actions/AppActions';
import { useEffect } from 'react';

const Header = () => {

    const dispatch = useDispatch();
    const isAuthenticatedFromStore = false;
    const selectedLink = useSelector((appState:AppState) => appState.app.openedLink)
    const { pathname } = useLocation();
    
    const handleLinkChange = (link:string) => {
      dispatch(setOpenedLink(link));
    }

    useEffect(() => {
      console.log('PathName changed: ', pathname.replace('/', ''))
      dispatch(setOpenedLink(pathname.replace('/', '')))
    }, [pathname])

  return(
    <div className='homeheader'>
      <div onClick={() => {handleLinkChange('home')}} className={`homeheader-wrapper ${selectedLink === 'home'? 'selectedLink' : ''}`}>
        <Link to='/home'>Home</Link>
      </div>
      <div onClick={() => {handleLinkChange('offers')}} className={`homeheader-wrapper ${selectedLink === 'offers'? 'selectedLink' : ''}`}>
        <Link to='/offers'>Offers</Link>
      </div>
        { isAuthenticatedFromStore?  
          <div onClick={() => {handleLinkChange('dashboard')}} className={`homeheader-wrapper ${selectedLink === 'dashboard'? 'selectedLink' : ''}`}>
            <Link to='/dashboard'>Dashboard</Link>
          </div> : '' 
        }
      <div className={`homeheader-wrapper `}>
        <img src={logo}/> 
      </div>
      <div onClick={() => {handleLinkChange('about')}} className={`homeheader-wrapper ${selectedLink === 'about'? 'selectedLink' : ''}`}>
        <Link to='/about'>Contact</Link>
      </div>
      <div onClick={() => {handleLinkChange('login')}} className={`homeheader-wrapper ${selectedLink === 'login' || selectedLink === 'logout' ? 'selectedLink' : ''}`}>
          {isAuthenticatedFromStore?
                ''// ? <Link className='header-wrapper-link' onClick={handleLogout} to='/'>Log Out</Link>
                : <Link className='header-wrapper-link' to='/login'>Log in</Link>
            }
      </div>
    </div>
  )
}

export default Header;