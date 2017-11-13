import {expect} from 'chai';

describe('Our first test', () => {
it('shpuld pass', () => {
expect(true).to.equal(true);
})
});

describe ('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/ndex.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 =window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      window.close();

    });
  })
})
