import React from 'react';
import './DashLanding.scss';

const DashLanding = () => {
  return (
    <div className="container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Navigation />
      <Settings />
    </aside>
  );
}

const Logo = () => {
  return (
    <div className="logo">
      <i className="material-icons">dashboard</i>
      <h2>Dashboard</h2>
    </div>
  );
}

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <MenuItem icon="home" label="Home" />
        <MenuItem icon="account_circle" label="Profile" />
        <MenuItem icon="message" label="Messages" />
        <MenuItem icon="history" label="History" />
        <MenuItem icon="task" label="Tasks" />
        <MenuItem icon="group" label="Communities" />
      </ul>
    </nav>
  );
}

type MenuItemProps = {
  icon: string;
  label: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label }) => {
  return (
    <li><i className="material-icons">{icon}</i> {label}</li>
  );
}

const Settings = () => {
  return (
    <div className="settings">
      <ul>
        <MenuItem icon="settings" label="Settings" />
        <MenuItem icon="support" label="Support" />
        <MenuItem icon="privacy_tip" label="Privacy" />
      </ul>
    </div>
  );
}

const MainContent = () => {
  return (
    <main className="main">
      <Header />
      <Content />
    </main>
  );
}

const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <LowerBar />
    </header>
  );
}

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="search-bar">
        <input id="search-input" type="text" />
        <i className="material-icons">search</i>
      </div>
      <div className="notifications">
        <i className="material-icons">notifications</i>
      </div>
      <div className="user-info">
        <img
          src="https://api.dicebear.com/6.x/notionists-neutral/svg?seed=Salem"
          alt="User Avatar"
          className="avatar-small"
        />
        <span className="nickname">Username</span>
      </div>
    </div>
  );
}

const LowerBar = () => {
  return (
    <div className="lower-bar">
      {/* ... other elements in the lower-bar ... */}
    </div>
  );
}

const Content = () => {
  return (
    <section className="content">
      <MainContentSection />
      <RightSidebar />
    </section>
  );
}

const MainContentSection = () => {
  return (
    <div className="main-content">
      <h2>My Projects</h2>
      <div className="my-projects">
        {/* This can be further optimized by using .map and an array of projects */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        {/* ... other cards ... */}
      </div>
    </div>
  );
}

const ProjectCard = () => {
  return (
    <div className="card">
      <h3>Project Name</h3>
      <div className="card-actions">
        <i className="material-icons">share</i>
        <i className="material-icons">visibility</i>
        <i className="material-icons">star</i>
      </div>
    </div>
  );
}

const RightSidebar = () => {
  return (
    <aside className="right-sidebar">
      <Announcements />
      <Statistics />
    </aside>
  );
}

const Announcements = () => {
  return (
    <div className="announcements">
      <h3>Announcements</h3>
      <p>
        Lorem ipsum...
      </p>
      <p>
        Lorem ipsum...
      </p>
    </div>
  );
}

const Statistics = () => {
  return (
    <div className="statistics">
      <h3>Statistics</h3>
      <p>
        Lorem ipsum...
      </p>
      <p>
        Lorem ipsum...
      </p>
    </div>
  );
}

export default DashLanding;
