import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import Container from '../Container';
import useMediaRules from '../../helpers/getMedia';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Icon from '../Icon';
import {
  people,
  title,
  searchIcon,
  iconBottom,
  section,
  search,
} from './Hero.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-use';
import { routes } from '../../utils/routes';

const Hero = ({ openModal }) => {
  const { t } = useTranslation();
  const media = useMediaRules();
  const { pathname } = useLocation();

  return (
    <section className={section}>
      <Container>
        <h2 className={title}>{t('title')}</h2>

        {media !== 'mobile' && !pathname.includes(routes.FEEDBACK) && (
          <button className={search} onClick={openModal}>
            {t('input')}
            <MagnifyingGlassIcon className={searchIcon} />
          </button>
        )}

        <Icon className={people} iconId="hero-section" />
      </Container>

      <Icon className={iconBottom} iconId="hero-bottom" />
    </section>
  );
};
export default Hero;

Hero.propTypes = {
  openModal: PropTypes.func,
};
