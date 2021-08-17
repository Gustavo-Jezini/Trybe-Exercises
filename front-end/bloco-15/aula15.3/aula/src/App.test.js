import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from './App';
import userEvent from '@testing-library/user-event';


describe('testes da aula0', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('Verifica se estamos na URL cert', () => {
    const { getByText, history } = renderWithRouter(<App />);
    userEvent.click(getByText(/Sobre/i));
    const pathName = history.location.pathname;
    expect(pathName).toBe('/about');
    const aboutALL = getByText(/Você está na página Sobre/);
    expect(aboutALL).toBeInTheDocument();
  })

  it('Verifica se URL nao existente leva a pagina de erro', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/URL-nao-existente');
    const NoMatch = getByText(/Página não encontrada/i);
    expect(NoMatch).toBeInTheDocument();
  })
})

