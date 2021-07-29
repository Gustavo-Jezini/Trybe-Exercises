const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
  };
  
  const findUserById = (id) => {
    return new Promise((resolve, reject) => {
        if (users[id]) {
          return resolve(users[id]);
        };
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('testes', () => {
    it('Usuario é encontrado', () => {
      expect.assertions(1);
      return  getUserName(4).then((user) => expect(user).toBe('Mark'))
    })

    it('testando o erro', () => {
      expect.assertions(1);
      return getUserName(2).catch((user) => expect(user).toEqual({error: 'User with 2 not found.'}))
    })
  })