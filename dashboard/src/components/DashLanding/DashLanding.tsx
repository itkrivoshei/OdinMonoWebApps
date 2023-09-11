import React from 'react';
import './DashLanding.scss';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MessageIcon from '@material-ui/icons/Message';
import HistoryIcon from '@material-ui/icons/History';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LockIcon from '@material-ui/icons/Lock';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';
import StarIcon from '@material-ui/icons/Star';
import AssignmentIcon from '@material-ui/icons/Assignment';

const DashLanding = () => {
  return (
    <div className='dash-landing-container'>
      <Sidebar />
      <MainContent />
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <Logo />
      <Navigation />
      <Settings />
    </aside>
  );
};

const Logo = () => {
  return (
    <div className='logo'>
      <DashboardIcon />
      <h2>Dashboard</h2>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul>
        <MenuItem icon={<HomeIcon />} label='Home' />
        <MenuItem icon={<AccountCircleIcon />} label='Profile' />
        <MenuItem icon={<MessageIcon />} label='Messages' />
        <MenuItem icon={<HistoryIcon />} label='History' />
        <MenuItem icon={<AssignmentIcon />} label='Tasks' />
        <MenuItem icon={<GroupIcon />} label='Communities' />
      </ul>
    </nav>
  );
};

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  return (
    <li>
      {icon} {label}
    </li>
  );
};

const Settings = () => {
  return (
    <div className='settings'>
      <ul>
        <MenuItem icon={<SettingsIcon />} label='Settings' />
        <MenuItem icon={<HelpOutlineIcon />} label='Support' />
        <MenuItem icon={<LockIcon />} label='Privacy' />
      </ul>
    </div>
  );
};

const MainContent = () => {
  return (
    <main className='main'>
      <Header />
      <Content />
    </main>
  );
};

const Header = () => {
  return (
    <header className='header'>
      <TopBar />
      <LowerBar />
    </header>
  );
};

const TopBar = () => {
  return (
    <div className='top-bar'>
      <div className='search-bar'>
        <input id='search-input' type='text' />
        <SearchIcon />
      </div>
      <div className='notifications'>
        <NotificationsIcon />
      </div>
      <div className='user-info'>
        <img
          src='https://api.dicebear.com/6.x/notionists-neutral/svg?seed=Salem'
          alt='User Avatar'
          className='avatar-small'
        />
        <span className='nickname'>Username</span>
      </div>
    </div>
  );
};

const LowerBar = () => {
  return (
    <div className='lower-bar'>
      <div className='user'>
        <img
          src='https://api.dicebear.com/6.x/notionists-neutral/svg?seed=Salem'
          alt='User Avatar'
          className='avatar-large'
        />
        <div className='greeting'>
          <h4>Hi there!</h4>
          <span className='nickname'>Username</span>
        </div>
      </div>
      <div className='actions'>
        <AddIcon />
        <CloudUploadIcon />
        <ShareIcon />
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <section className='content'>
      <MainContentSection />
      <RightSidebar />
    </section>
  );
};

const MainContentSection = () => {
  return (
    <div className='main-content'>
      <h2>My Projects</h2>
      <div className='my-projects'>
        {/* This can be further optimized by using .map and an array of projects */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* ... other cards ... */}
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className='card'>
      <h3>Project Name</h3>
      <div className='card-actions'>
        <ShareIcon />
        <VisibilityIcon />
        <StarIcon />
      </div>
    </div>
  );
};

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Announcements />
      <Statistics />
    </aside>
  );
};

const Announcements = () => {
  return (
    <div className='announcements'>
      <h3>Announcements</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        commodo turpis, sed facilisis diam feugiat a. Pellentesque malesuada
        dictum purus.
      </p>
      <p>Lorem ipsum...</p>
    </div>
  );
};

const Statistics = () => {
  return (
    <div className='statistics'>
      <h3>Statistics</h3>
      <p>Lorem ipsum...</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada
        commodo turpis, sed facilisis diam feugiat a. Pellentesque malesuada
        dictum purus.
      </p>
    </div>
  );
};

export default DashLanding;
