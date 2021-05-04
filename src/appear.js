export const appear = {
  methods: {
    window:onload = function() {
      let els = document.querySelectorAll('.appear');
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
        rootMargin: "-100px"
      }
      const io = new IntersectionObserver(animation, options);
      els.forEach(el => io.observe(el));
    },
    animation() {
      let move = document.querySelector('.appear');
      move.classList.toggle('inview');
    }
  }
}