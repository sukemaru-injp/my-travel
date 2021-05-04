export const appear = {
  methods: {
    window:onload = function() {
      let move = document.querySelector('.appear')
      const animation = function(entries) {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('inview')
          } else {
            console.log('out');
            entry.target.classList.remove('inview')
          }
        });
      }
      const options = {
        root: null,
        rootMargin: "-200px"
      }
      const io = new IntersectionObserver(animation, options);
      io.observe(move);
    }
    // animation() {
    //   let move = document.querySelector('.appear')
    //   move.classList.toggle('inview')
    // }
  }
}