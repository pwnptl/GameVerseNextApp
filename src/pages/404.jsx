import t from '../translation'
import React from 'react';

const ErrorPage = () => {
  return (
    <section className="hero is-halfheight is-primary is-bold">
      <div className="hero-body">
        <div className="container is-half">
          <h1 className="title">{t("404")}</h1>
          <h2 className="subtitle">{t("page-not-found")}</h2>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
