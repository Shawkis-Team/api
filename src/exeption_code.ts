export const ExceptionCode = {
  LOGIN_SUCCESS: {
    code: 'SUCCEEDED',
    status: 200,
    message: 'Connexion etablie avec success',
  },
  LOGIN_FAILLURE: {
    code: 'FAILLURE',
    status: 401,
    message: 'Identifiant de connexion incorrect',
  },
  LOGOUT_SUCCESS: {
    code: 'SUCCEEDED',
    status: 200,

    message: 'DEconnexion reussi avec success',
  },
  SUCCEEDED: {
    code: 'SUCCEEDED',
    status: 200,
    message: 'Traitement reussi avec success',
  },
  POSITIVE_AMOUNT: {
    code: 'FAILLURE',
    status: 400,
    message: 'total amount doit etre > 0',
  },
  CARD_ALREADY_ENROLLED: {
    code: 'FAILURE',
    status: 400,
    message: 'La carte est déjà inscrite.',
  },
  EXCEL_FILE_NOT_FOUND: {
    code: 'EXCEL_FILE_NOT_FOUND',
    status: 404,
    message: 'excel file is required',
  },
  FAILLURE: {
    code: 'FAILLURE',
    status: 500,
    message: "Une Erreur c'est produite vieillez réessayer",
  },
  INSUFFISANT_BALANCE: {
    code: 'FAILLURE',
    status: 407,
    message: 'Solde insufficasant',
  },
  NOT_FOUND: {
    code: 'NOT_FOUND',
    status: 404,
    message: 'Entity not found',
  },
  DUPLICATE_ITEM: {
    code: 'DUPLICATE_ITEM',
    status: 404,
    message: 'Duplicate Item',
  },
  INVALID_CREDENTIAL: {
    status: 401,
    code: 'FAILLURE',
    message: 'Phone ou Codepin Invalide',
  },
  BAD_PROFILE: {
    status: 401,
    code: 'BAD_PROFILE',
    message: 'Vous avez pas le Bon profile pour se connecter',
  },
};
