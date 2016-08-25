Relution SDK
Infos
- [Web Application Description Language (wadl)](https://www.w3.org/Submission/wadl/)

Dependencies
- [node >= 4.4](https://nodejs.org/en/)
- [typescript](http://www.typescriptlang.org/)
- [ionic-cli](http://ionicframework.com/docs/v2/getting-started/installation/)
- [relution-cli](https://github.com/relution-io/relution-cli)

1 Create Project:

```bash
> mkdir jsmeetup
> cd jsmeetup
> relution
> project
> create
```

2 Add new Swapi Connection


```bash
> relution
? Please Choose Your Option:  connection
? Please Choose Your connection Command:  new connection
? Please enter name or an sep path('ews/ews-exchange') SwapiApi
? Please enter a description: my star wars api 
? Select a Server default localhost
? Please choose a Connector:  HTTP(S)
? Please choose a Protocol:  REST
? Please enter Descriptor URL (URL to download WADL description from.) swapi.wadl
? Please enter Authentication (Authentication to use for HTTP access, leave unset for automatic choice, or choose one explicitly) Disable
? Please enter HTTP Response Limit (maximum length of HTTP response in bytes. The unset default is 33554432 bytes. Specifying a limit of 0 will result in no limit, which may cause the server to malfunction in the event of excessively large response dat
a!) 33554432
```
ok check out your connections folder there are three files generated 
- SwapiApi.gen.ts
- SwapiApi.ts
- SwapiApi.hjson

Ok now we are running into a Problem because Swapi api doesnt have a wadl file ....
so we have to change something manualy: 

open the `SwapiApi.hjson` and remove in properties the `descriptor_url` and add at the top 
```json
metadata: swapi.wadl.
```
and to the properties we have to add :
```json
http.protocol.cookie-policy: compatibility
http.useragent: was_du_willst
```
Now open your swapi.wadl and add the following:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<wadl:application xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:wadl="http://research.sun.com/wadl/2006/10" xsi:schemaLocation="http://research.sun.com/wadl/2006/10 wadl.xsd">
  <wadl:grammars>
    <xs:schema attributeFormDefault="unqualified" elementFormDefault="qualified" xmlns:xs="http://www.w3.org/2001/XMLSchema">
    </xs:schema>
   </wadl:grammars>

  <wadl:resources base="http://swapi.co/api">
    <wadl:resource path="people/{id}">
      <wadl:param name="id" type="xs:number" required="true" style="template" />
      <wadl:method name="GET">
        <wadl:request />
        <wadl:response status="">
          <wadl:representation mediaType="application/json" element="people" />
        </wadl:response>
      </wadl:method>
    </wadl:resource>
  </wadl:resources>
</wadl:application>

```

Ok cool now deploy it. If there is something wrong read again.

> <p style="color:red; font-size:20px">	Never Touch Files .gen. in filename it will be always auto generated.!!!</p>


3. add Connection Calls

Ok after deploy we can add some calls:
```bash
? Please Choose Your connection Command:  assign calls
? Please choose a Name: swapi
? Select a Server default localhost
? We found 1 call you can filter by Name  or press enter ? 
? Please choose youre calls: /people/{i
? Please enter a name for /people/{id}#GET getPeople
swapi are updated!
```

Ok and now deploy again after then we can add the metamodel to our Connection.

```bash
? Please Choose Your Option:  connection
? Please Choose Your connection Command:  add Metamodelcontainer
? Please choose a Name: swapi
? Select a Server default localhost
swapi are updated!
```
Ok Let us check our `Swapi.gen.ts`: 
```javascript
/**
* @file ./swapi.gen.ts
* Created by Relution CLI on 16.08.2016
* Copyright (c)
* 2016
* All rights reserved.
*/
import * as Q from 'q';
// Relution APIs
const connector = require('relution/connector.js');
/**
* @interface getPeople_output
*/
export interface getPeople_output {
  people?: string;
}

/**
* @interface getPeople_input
*/
export interface getPeople_input {
  id: string;
  rawBody?: any;
}

export class SwapiBaseConnection {
  constructor(public name = 'swapi') { }

  configureSession(properties) {
    return connector.configureSession(this.name, properties);
  }

  /**
* swapi['getPeople']
*
* /people/{id}#GET
*
* @params input 'Object' getPeople_input
* @return Promise getPeople_output
*/
  public getPeople(input: getPeople_input): Q.Promise<getPeople_output> {
    return connector.runCall(
      this.name,
      'getPeople',
      input
    );
  }
}

```
You see we have a input and a output_model Interface and the getPeople action. For testing we have to add a new Route on our Server. 
`swapi-route.ts`:
```javascript
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
```
Deploy again ... open your Postman and try it out: send a Get Request to 'YOUR_SERVER/api/v1/people/1'
Hurray we see a jsonbody, nice but not usefull let us change this.
Now open your swapi.wadl and add the following into the xs:schema part
```xml
<xs:element name="people">
    <xs:complexType>
      <xs:sequence>
        <xs:element name="starships" type="xs:string" maxOccurs="unbounded" />
        <xs:element name="height" type="xs:string" />
        <xs:element name="hair_color" type="xs:string" />
        <xs:element name="vehicles" type="xs:string" maxOccurs="unbounded" />
        <xs:element name="birth_year" type="xs:string" />
        <xs:element name="skin_color" type="xs:string" />
        <xs:element name="mass" type="xs:string" />
        <xs:element name="name" type="xs:string" />
        <xs:element name="films" type="xs:string" maxOccurs="unbounded" />
        <xs:element name="species" type="xs:string" maxOccurs="unbounded" />
        <xs:element name="eye_color" type="xs:string" />
        <xs:element name="gender" type="xs:string" />
        <xs:element name="url" type="xs:string" />
        <xs:element name="homeworld" type="xs:string" />
      </xs:sequence>
    </xs:complexType>
</xs:element>
```
and add to repesentation row the elmentname:
```xml
<wadl:resource path="people/{id}">
  <wadl:param name="id" type="xs:number" required="true" style="template" />
      <wadl:method name="GET">
        <wadl:request />
        <wadl:response status="">
          <wadl:representation mediaType="application/json" element="people" />
```
Ok Deploy again after then add metamodels again.
Now check your `Swapi.gen.ts` again and you will see a new Interface
```javascript
/**
* @interface People
*/
export interface People {
  starships?: string[];
  height?: string;
  hair_color?: string;
  vehicles?: string[];
  birth_year?: string;
  skin_color?: string;
  mass?: string;
  name?: string;
  films?: string[];
  species?: string[];
  eye_color?: string;
  gender?: string;
  url?: string;
  homeworld?: string;
}
```
Try out your Postman Get call again and you will see the representation.

### Client
Please make sure you have installed 
1. create
If you have installed the 'ionic-cli' then you can generate a client app with the following command:

```bash
> ionic start client --v2 --ts
```

Please install the Relution-SDK over npm with the following command
```bash
> relution-sample-auth/client: npm i -S https://github.com/relution-io/relution-sdk
```
Now open the file ``` client/app/app.ts ```, it looks like this:

```javascript
import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
```

First we have to import the Relution package with one line of code:
```javascript
import * as Relution from 'relution-sdk';
```
after then we have to 'init' the Relution-SDK so add following line of code in to your constructor from the 'MyApp' Component:
[read more](https://relution-io.github.io/relution-sdk/modules/core.html#init)
```javascript
Relution.init({
  serverUrl: '{{YOUR_SERVER_URL}}',
  application: '{{YOUR_APPLICATION_NAME}}'
})
.then((info) => {
  console.log('Relution is ready');
});
```
You have only to add the host from your Relution server on the server URL and the application name.

> If you don`t no where you get the application name this information is available in the 'relution.hjson' from your root folder

At the end, your 'app.ts' looks like this:
```javascript
@Component({
  template: '<ion-nav [root]="rootPage" relutiongray></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = LoginPage;

    // initialized the Relution SDK
    Relution.init({
      serverUrl: home,
      application: 'jsMeetupRelution'
    })
    .then((info) => {
      console.log('Relution is ready');
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);

```
and if the init is successfully the browser console print out 'Relution is ready'. 
If you need a Login example please read [here](https://github.com/relution-io/relution-sdk-sample-auth) more about it.


4. Fetch Data from Server

To fetch Data from the Relution Server you can use the [Relution.web.ajax](https://relution-io.github.io/relution-sdk/modules/web.html#ajax)
usage: 
```javascript
Relution.web.ajax({
  method: 'GET',
  url: `api/v1/swapi/people/${id}`
}).catch((e) => {
  console.error(e);
});
```

Ok let us add an Provider into the Client:

```javascript
import {People as iPeople} from '../../../../connections/SwapiApi.gen';
import {Injectable} from '@angular/core';
import * as Relution from 'relution-sdk';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import {NavController, AlertController} from 'ionic-angular';

@Injectable()
export class People {

  constructor(private alertCtrl: AlertController, private navCtrl: NavController) {}
  /**
   * @description  return a people by id
   * @return Observable<iPeople>
   */
  getPeople(id: number): Observable<iPeople> {
    return Observable.fromPromise(
      Relution.web.ajax({
        method: 'GET',
        url: `api/v1/swapi/people/${id}`
      }).catch((e) => {
        console.error(e);
      })
    );
  }

  onError(e) {
    const alert = this.alertCtrl.create({
      title: `${e.name} ${e.statusCode}`,
      subTitle: e.message,
      buttons: ['OK']
    });
    alert.present();
  }
}
```

to use the method a sample code: 
```javascript
import {People as PeoplePrv} from '../../providers/people/people';

this.peopleSrv.getPeople(1)
.subscribe(
  (resp) => {
    this.model = resp;
    console.log(`Hey ${this.model.name}`);
  }
);

```
