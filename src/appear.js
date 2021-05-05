export const appear = {
  methods: {
    appearAnimation() {
    // window:onload = function() {
      let els = document.querySelectorAll('.appear');
      const animation = function(entries) {
        entries.forEach(entry => {
          if(entry.isIntersecting) {
            entry.target.classList.add('inview')
          } else {
            entry.target.classList.remove('inview')
          }
        });
      }
      const options = {
        root: null,
        rootMargin: "-50px"
      }
      const io = new IntersectionObserver(animation, options);
      els.forEach(el => io.observe(el));
    },
    animation() {
      let move = document.querySelector('.appear');
      move.classList.toggle('inview');
    }
  },
  mounted() {
    this.appearAnimation()
  }
}