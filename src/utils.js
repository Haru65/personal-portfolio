export const getImageUrl = (path) => {
    return new URL(`./sec/assets/${path}`, import.meta.url).href;
  };