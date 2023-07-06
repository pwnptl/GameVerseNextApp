import React from 'react';
import t from '../../translation'
import UrlConstants from '../components/URLConstants';

const Footer = () => {

  return (
    <footer className="footer has-background-primary">
      <div className="content has-text-centered">
        <p>
          <span className="has-text-light">{t('footer.footerRights')}</span>
          {t('footer.separator')}
          <a href={UrlConstants.privacyPolicy} className="has-text-light">
            {t('footer.privacyPolicy')}
          </a>
          {t('footer.separator')}
          <a href={UrlConstants.termsOfService} className="has-text-light">
            {t('footer.termsOfService')}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
