const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('testando assincronissidade', done => {
  uppercase('maiusculo', (str) => {
    expect(str).toBe('MAIUSCULO');
    done();
  })
})


it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});