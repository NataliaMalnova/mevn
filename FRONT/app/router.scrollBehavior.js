export default async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  }

  const findEl = async (hash, x) => {
    return (
      document.querySelector(hash) ||
      new Promise((resolve, reject) => {
        if (x > 50) {
          return resolve();
        }
        setTimeout(() => {
          resolve(findEl(hash, ++x || 1));
        }, 100);
      })
    );
  };

  if (to.hash) {
    let el = await findEl(to.hash);
    history.pushState('', document.title, window.location.pathname);
    if ('scrollBehavior' in document.documentElement.style) {
      return window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth',
      });
    } else {
      return window.scrollTo(0, el.offsetTop);
    }
  }
  setTimeout(() => {
    window.scrollTo(0, document.body.offsetTop);
  }, 10);
};
