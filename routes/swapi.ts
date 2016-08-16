import {SwapiApiConnection} from '../connections/SwapiApi';


export function init(app) {
  const connection = new SwapiApiConnection();
  app.get('/api/v1/swapi/people/:id',
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    function serviceCall(req, res, next) {
      return connection.getPeople({
        id: req.params.id
      })
      .then(
        (result) => {
          return res.json(result);
        }
        , next).done();
    }
  );

  app.get('/api/v1/swapi/starships/:id',
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    function serviceCall(req, res, next) {
      return connection.getStarships({
        id: req.params.id
      })
      .then(
        (result) => {
          return res.json(result);
        }
        , next).done();
    }
  );
}
