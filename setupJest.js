// https://github.com/akiran/react-slick/issues/742#issuecomment-557793922

if (typeof window !== "undefined") {
  window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
}
