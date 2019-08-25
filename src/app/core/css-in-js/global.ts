import jss from 'jss';
import jssPluginSyntaxExpand from 'jss-plugin-expand';
import jssPluginSyntaxNested from 'jss-plugin-nested';
import jssPluginSyntaxCamelCase from 'jss-plugin-camel-case';
import jssPluginSyntaxGlobal from 'jss-plugin-global';

import font from '../../../public/fonts/Peenu.ttf';

jss.use(
  jssPluginSyntaxExpand(),
  jssPluginSyntaxNested(),
  jssPluginSyntaxCamelCase(),
  jssPluginSyntaxGlobal(),
);

const styles: any = {
  '@global': {
    '@font-face': {
      fontFamily: 'Peenu',
      src: `url(${font})`,
    },
    body: {
      background: '#fafafa',
      margin: 0,
      padding: 0,
    },
    'body, input': {
      fontFamily: 'Peenu',
    },
    'body, ul': {
      padding: 0,
      margin: 0,
    },
    ul: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
      fontFamily: 'Peenu',
      color: '#333',
    },
  },
};

const sheet = jss.createStyleSheet(styles);
sheet.attach();
