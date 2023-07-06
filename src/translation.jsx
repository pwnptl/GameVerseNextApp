import { useTranslation } from 'react-i18next';

const t = (key) => {
  const { t } = useTranslation();
  return t(key);
};

export default t;
