import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useFlags = () => {
  const [_active, setActive] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const changer = (string) => {
    setActive(true);
    changeLanguage(string);
  };

  return { i18n, changeLanguage, changer };
};
