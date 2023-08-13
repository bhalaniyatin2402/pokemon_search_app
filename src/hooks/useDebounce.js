function useDebounce(cb) {
  let timerId;

  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, 1000);
  };
}

export default useDebounce;
