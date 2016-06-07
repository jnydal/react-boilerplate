const WindowSizeMixin = {
  getInitialState() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };
  },

  handleResize(e) {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
};

module.exports = WindowSizeMixin;
