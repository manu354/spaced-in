import enLang from './entries/en-US';

import {addLocaleData} from 'react-intl';

const AppLocale = {
  en: enLang,

};
addLocaleData(AppLocale.en.data);


export default AppLocale;
