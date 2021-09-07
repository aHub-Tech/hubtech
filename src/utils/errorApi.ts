const errorApi = (e: any) => {
  const errorCode = e.response.status

  if (errorCode === 409) {
    return {
      errorMsg:
        'O e-mail já está cadastrado! Por favor, insira outro e-mail para se registrar ou faça login.'
    }
  } else if (errorCode >= 500) {
    return {
      errorMsg:
        'Desculpe, nossos serviços estão temporariamente indisponíveis. Por favor, tente de novo dentro de alguns instantes.'
    }
  } else if (errorCode >= 400) {
    return {
      errorMsg:
        'Credenciais inválidas! Por favor, insira os dados corretos e tente novamente.'
    }
  } else {
    return {
      errorMsg:
        'Desculpe, ocorreu uma falha e não foi possível prosseguir com a sua solicitação. Por favor, verifique a sua conexão com a internet e caso o erro persista, tente novamente mais tarde.'
    }
  }
}

export default errorApi
