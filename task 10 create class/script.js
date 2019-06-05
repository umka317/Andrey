class Options {
    constructor( height, width, bg, color ){
      this.height = height + 'px',
      this.width = width + 'px',
      this.bg = bg,
      this.color = color;

    }

    createDiv() {
      let newDiv = document.createElement('div');
      let script = document.getElementsByTagName('script')[0];
// var parent = script.parentNode;
      document.body.insertBefore(newDiv, script);

          newDiv.style.cssText =`color: ${this.color}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; margin: auto;`;
          newDiv.textContent = 'it is my 11 task';
    }
}

let newOptions = new Options ( '100', '300', 'red', 'yellow' );
newOptions.createDiv();
