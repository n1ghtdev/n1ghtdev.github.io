import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Socials from '../../components/Socials';
import Item from '../../components/Socials/Item';


const SocialsContainer = () => (
  <Socials>
    <Item href="mailto://artyenick@gmail.com/"><FontAwesomeIcon icon={['fas', 'envelope-square']} /></Item>
    <Item href="https://github.com/Nickew" target="_blank"><FontAwesomeIcon icon={['fab', 'github-square']} /></Item>
    <Item href="#facebook"><FontAwesomeIcon icon={['fab', 'facebook']} /></Item>
    <Item href="https://t.me/n1ckew" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Item>
  </Socials>
);

export default SocialsContainer;
