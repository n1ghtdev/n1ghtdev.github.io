import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Socials from '../../components/Socials';
import Item from '../../components/Socials/Item';


const SocialsContainer = () => (
  <Socials>
    <Item href="#facebook" overlap><FontAwesomeIcon icon={['fab', 'facebook-f']} /></Item>
    <Item href="#telegram" overlap><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></Item>
  </Socials>
);

export default SocialsContainer;
