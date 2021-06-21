const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const anaSilveira = Object.values(Object.values((Object.entries(order)[3])[1])[2])[0]
const rua = Object.values((Object.entries(order)[2])[1])[0]
const N = Object.values((Object.entries(order)[2])[1])[1]
const ap = Object.values((Object.entries(order)[2])[1])[2]
const rafaelAndrade = (Object.entries(order)[0])[1]
const tel = ((Object.entries(order)[1])[1])


const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  // console.log (`Olá ${anaSilveira}, entrega para: ${rafaelAndrade}, Telefone: ${tel}, R. ${rua}, Numero: ${N}, apartment: ${ap}`)
}


customerInfo(order);

const newOrder = {
  order: {
    pizza: {
      muzzarella: {
        amount: 1,
        price: 25,
      },
      calabresa: {
        amount:1,
        price:20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 50,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Luiz Silva',
      price: 50,
    }
  },
  payment: {
    total: 50,
  },

};

  Object.assign(order, newOrder)

console.log(order.order.pizza);

console.log(order);


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."

}

orderModifier(order);