const resolveTsconfigPathsToAlias = require('./resolveTsPathsToAlias');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      // https://gist.github.com/nerdyman/2f97b24ab826623bff9202750013f99e
      alias: resolveTsconfigPathsToAlias({
        tsconfigPath: './tsconfig.json', // Using custom path
      }),
    },
  });
};
