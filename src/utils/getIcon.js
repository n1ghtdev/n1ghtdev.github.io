const importAll = (r) => {
  if (r) {
    const images = r.keys().reduce((obj, item) =>
      ({ ...obj, [item.replace('./', '')]: r(item) }), {});
    return images;
  }
  return null;
};

const req = importAll(
  require.context('svg-react-loader!../assets/svg/icons', true, /\.svg$/)
);

export default function getIcon(iconName) {
  if (iconName && typeof iconName === 'string') {
    const iconNameSvg = `${iconName}.svg`;
    return req[iconNameSvg];
  }
  return null;
}
