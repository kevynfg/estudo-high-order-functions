function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({
        id: '0',
        name: 'Megamen',
        birth: new Date(),
      });
    }, 1000);
  });
}

function getAdress(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      adress: 'dos aleatórios',
      number: 0,
    });
  }, 2000);
}

function getPhone(userId, callback) {
  setTimeout(() => {
    return callback(null, {
      phone: '32278498',
      ddd: 13,
    });
  }, 2000);
}

//forma promise
// const newUser = getUser();
// newUser
//   .then((result) => {
//     console.log('resultado', result);
//   })
//   .catch((error) => {
//     console.log('Erro', error);
//   });

async function main() {}
try {
  const user = await getUser();
  const result = await Promise.all([getPhone(user.id), getAdress(user.id)]);
  const adress = result[1];
  const phone = result[0];
  console.log(`
  Nome: ${user.name},
  Telefone: ${phone.ddd}${phone.phone},
  Endereço: ${adress.adress}, ${adress.number}
  `);
} catch (error) {
  console.log('erro', error);
}

main();
