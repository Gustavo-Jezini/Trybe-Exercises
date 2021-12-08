import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Testa interacao com os inputs', () => {
  it('Testa interacao com o input de Nome', () => {
    const string =  'TESTE';
    // Acessar o elemento
    const { getByTestId } = render(<App />);
    const inputName = getByTestId('input-nome');

    // Antes de interagir
    expect(inputName.value).toBe("");
    // Interagir com o Elemento
    fireEvent.change(inputName, { target : { value: string }});
    // fazer o teste
    expect(inputName.value).toBe(string);
  })

  it('Testando o input Email', () => {
    const emailTest = 'gustavo@gmail.com';
    //Acessar o email
    render(<App />);
    const email = screen.getByTestId('input-email');
    // Interagir
    fireEvent.change(email, { target : { value: emailTest }})
    // Fazer o teste
    expect(email).toHaveValue(emailTest);
  })
})
