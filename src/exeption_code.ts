export const ExceptionCode = {
  SUCCEEDED: {
    status: 200,
    code: 'SUCCEDDED',
    message: 'Operation reussi avec succes',
  },
  FAILLURE: {
    status: 400,
    code: 'FAILLURE',
    message: 'Echec lors du traitement de la requete',
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
  INSUFFISANT_BALANCE: {
    status: 404,
    code: 'INSUFFISANT_BALANCE',
    message: 'Solde de votre compte insuffisant',
  },
  NOT_FOUND: {
    status: 404,
    code: 'NOT_FOUND',
    message: "Nous ne parvenons a trouver l 'entité rechercher",
  },
};
