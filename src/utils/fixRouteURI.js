const fixRouteURI = (title) => {
  if (!title) return undefined;
  return title
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/[ ]+/g, ' ')
    .replace(/ /g, '-')
    .toLowerCase();
};

export default fixRouteURI;
