import * as React from 'react';

type NavItemProps = {
  linkTo: string;
  label: string;
  white?: boolean;
};

const NavItem = (props: NavItemProps) => (
  <div className="nav-item text-center">
    <a className={props.white ? 'white' : ''} href={props.linkTo}>{props.label}</a>
  </div>
);

export default function Header() {
  return (
    <div className="header unselectable header-animated header-clear u-position-absolute py-2">
      <div className="header-brand">
        <div className="nav-item no-hover">
          <a href="#"><h6 className="title white">NRSRP HU</h6></a>
        </div>
      </div>
      <div className="header-nav" id="header-menu">
        <NavItem linkTo="#" label="test" white />
      </div>
    </div>
  );
}