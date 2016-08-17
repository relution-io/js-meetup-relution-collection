import {SwapiApiConnection} from '../connections/SwapiApi';
export function init(app: any) {
  const connection = new SwapiApiConnection();
  app.get('/api/v1/swapi/people/(:id?)',
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    function serviceCall(req: any, res: any, next: any) {
      const _connection = req.params.id ? connection.getPeople({id: req.params.id}) : connection.getPeoples();
      return _connection
      .then(
        (result: any) => {
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
    function serviceCall(req: any, res: any, next: any) {
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
