import jss from 'jss';
import jssPluginSyntaxExpand from 'jss-plugin-expand';
import jssPluginSyntaxNested from 'jss-plugin-nested';
import jssPluginSyntaxCamelCase from 'jss-plugin-camel-case';
import jssPluginSyntaxGlobal from 'jss-plugin-global';

jss.use(
  jssPluginSyntaxExpand(),
  jssPluginSyntaxNested(),
  jssPluginSyntaxCamelCase(),
  jssPluginSyntaxGlobal(),
);

const styles: any = {
  '@global': {
    body: {
      margin: 0,
      padding: 0,
    },
    ul: {
      listStyle: 'none',
    },
    a: {
      textDecoration: 'none',
    },
  },
};

const sheet = jss.createStyleSheet(styles);
sheet.attach();
