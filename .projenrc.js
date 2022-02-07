const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({
    author: 'Shawn Torsitano',
    authorAddress: 'shawn.torsitano@gmail.com',
    cdkVersion: '2.9.0',
    defaultReleaseBranch: 'main',
    name: 'iam-pipeline',
    eslint: false,
    prettier: true,
    prettierOptions: {
        settings: {
            useTabs: false,
            tabWidth: 4,
            printWidth: 120,
        },
    },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.setScript('format', 'prettier -w "src/**/*.ts"');
project.synth();