import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './Valid';

describe('Testes referentes ao email', () => { 
   it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando se o componente não aparece caso o campo email esteja vazio.', () => {
    render(<ValidEmail email="" />)
    const isValidText = screen.queryByTestId('id-is-email-valid');
    expect(isValidText).not.toBeInTheDocument();
  });
});

describe('Testes sobre a cor', () => {
  it('Testa se o email certo deixa verde', () => {
    // Acessar o conteudo
    const EMAIL_CORRETO = 'gustavo@gmail.com'
    const { getByTestId } = render(<ValidEmail email={EMAIL_CORRETO} />)
    const emailResult = getByTestId('id-is-email-valid')
    // Fazer o teste
    expect(emailResult).toHaveAttribute('class', 'green-text')
  })

  it('Testa se o email certo deixa vermelho', () => {
    // Acessar o conteudo
    const EMAIL_CORRETO = 'gustavogmailcom'
    const { getByTestId } = render(<ValidEmail email={EMAIL_CORRETO} />)
    const emailResult = getByTestId('id-is-email-valid')
    // Fazer o teste
    expect(emailResult).toHaveAttribute('class', 'red-text')
  })
})
