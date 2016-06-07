const ScrollPositionMixin = {
  getInitialState() {
    return { scrollPosition: window.scrollY };
  },

  handleScroll(e) {
    this.setState({
      scrollPosition: window.scrollY,
    });
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};

module.exports = ScrollPositionMixin;
