import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Socials from '../../components/Socials';


const SocialsContainer = () => (
  <Socials>
    <Socials.Item overlap>
      <Socials.Link href="#facebook"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Socials.Link>
    </Socials.Item>
    <Socials.Item overlap>
      <Socials.Link href="#facebook"><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></Socials.Link>
    </Socials.Item>
  </Socials>
);

export default SocialsContainer;
