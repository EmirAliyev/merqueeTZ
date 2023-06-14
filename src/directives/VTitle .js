export default {
   mounted(el, binding) {
      const options = {
        rootMargin: '0px',
        threshold: 0,
      }
      const callback = (entries, observer) => {
         if(entries[0].isIntersecting){
          el.classList.add('titleShow')
          el.classList.remove('titleHide')
          console.log(el)
         }
         if(!entries[0].isIntersecting){
          el.classList.add('titleHide')
          el.classList.remove('titleShow')
         }
      };
      const observer = new IntersectionObserver(callback, options);
      observer.observe(el);
  },
}