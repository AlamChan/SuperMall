export function debounce(func, delay) {
  /*
     * 事件监听相关的方法
       由于Img的加载监听过于频繁，所以我们需要对其进行防抖函数处理，
       这里运用了setTimeout的异步处理机制，如果下一次执行的比上一次快，那么就会将上一次的取消掉
     */
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
