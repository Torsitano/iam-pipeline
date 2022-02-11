const { awscdk } = require('projen');
const { NodePackageManager } = require('projen/lib/javascript');
const project = new awscdk.AwsCdkTypeScriptApp({
    author: 'Shawn Torsitano',
    authorAddress: 'shawn.torsitano@gmail.com',
    cdkVersion: '2.12.0',
    defaultReleaseBranch: 'main',
    name: 'iam-pipeline',
    packageManager: NodePackageManager.NPM,
    eslint: false,
    prettier: true,
    prettierOptions: {
        settings: {
            useTabs: false,
            tabWidth: 4,
            printWidth: 120,
        },
    },

  deps: [
      'js-yaml',
      '@types/js-yaml'
  ],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.setScript('format', 'prettier -w "src/**/*.ts"');
project.synth();