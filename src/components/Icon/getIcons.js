const importAll = (r) => {
  if (r) {
    const images = r.keys().reduce((obj, item) =>
      ({ ...obj, [item.replace('./', '')]: r(item) }), {});
    return images;
  }
  return null;
};

export const icons = importAll(require.context('json-loader!../../assets/svg/icons', false, /\.svg$/));
