import { Link, useLocation } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: 'Find Jobs', url: 'find-jobs' },
    { name: 'Find Talent', url: 'find-talent' },
    { name: 'Post Job', url: 'post-job/0' },
    { name: 'Posted Job', url: 'posted-job/0' },
    { name: 'Job History', url:'job-history'},
    { name: 'Sign Up', url:'signup'}
  ];

  const location = useLocation();

  return (
    <div className="flex bs-mx:!hidden gap-5 text-cloud-burst-50 h-full items-center">
      {links.map((link, index) => (
        <div
          className={`${
            location.pathname == '/' + link.url
              ? 'border-sangria-700 text-sangria-700'
              : 'border-transparent'
          } border-t-[3px] h-full flex items-center`}
        >
          <Link key={index} to={link.url}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  )
};

export default NavLinks;
