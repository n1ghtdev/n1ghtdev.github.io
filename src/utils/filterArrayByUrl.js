const filterByUrl = (array, url) => {
  if (!url) return array;

  return array
    .filter(el =>
      el.tools.some(tool =>
        removeSymbols(tool.title) === url));
};

const removeSymbols = (text) => text.replace(/[^a-z]/g, '');

export default filterByUrl;
