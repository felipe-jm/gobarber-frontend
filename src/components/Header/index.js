import React from 'react';
import { Link } from 'react-router-dom';

import Notification from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notification />

          <Profile>
            <div>
              <strong>Felipe Jung</strong>
              <Link to="/profile">My profile</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Felipe JUng"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}