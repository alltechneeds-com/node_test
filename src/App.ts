import * as express from 'express'

class UserData {
  firstName: String;
  lastName: String;
  clientId: String;
}

class App 
{
  public express

  constructor () 
  {
    this.express = express();
    this.mountRoutes()
  }

  private mountRoutes (): void 
  {
    const rules_fname = 8;
    const rules_lname = 10;
    
    const router = express.Router()
    
    router.post('/api/v1/parse', async (req, res, next) => 
    {
      var data = '';
      
      req.on('data', function(chunk) 
      {
        data += chunk;
      });

      req.on('end', function() 
      {
        var data_req = JSON.parse(data);

        const user = new UserData();
        user.firstName = data_req.data.substring(0, rules_fname);
        user.lastName = data_req.data.substring(rules_fname, rules_fname + rules_lname);
        user.clientId = data_req.data.substring(rules_fname + rules_lname);

        var json = "";
        
        if (res.statusCode === 200)
        {
          json += "{";
          json += "  'statusCode':'"+res.statusCode+"',";
          json += "  'data':";
          json += "  {";
          json += "    'firstName':'"+user.firstName+"',";
          json += "    'lastName':'"+user.lastName+"',";
          json += "    'clientId':'"+user.clientId+"'";
          json += "  }";
          json += "}";
        }
        else 
        {
          json += "{";
          json += "  'statusCode': '500',";
          json += "  'data':null";
          json += "}";
        }
      
        res.json(json);  

        next();
      });
    })

    router.post('/api/v2/parse', async (req, res, next) => 
    {
      var data = '';
      
      req.on('data', function(chunk) 
      {
        data += chunk;
      });

      req.on('end', function() 
      {
        var data_req = JSON.parse(data);

        const user = new UserData();
        user.firstName = data_req.data.substring(0, rules_fname).replace(new RegExp("[0-9]", "g"), "");
        user.lastName = data_req.data.substring(rules_fname, rules_fname + rules_lname).replace(new RegExp("[0-9]", "g"), "");
        user.clientId = data_req.data.substring(rules_fname + rules_lname, rules_fname + rules_lname + 3) + "-" + data_req.data.substring(rules_fname + rules_lname + 3);

        var json = "";
        
        if (res.statusCode === 200)
        {
          json += "{";
          json += "  'statusCode':'"+res.statusCode+"',";
          json += "  'data':";
          json += "  {";
          json += "    'firstName':'"+user.firstName+"',";
          json += "    'lastName':'"+user.lastName+"',";
          json += "    'clientId':'"+user.clientId+"'";
          json += "  }";
          json += "}";
        }
        else 
        {
          json += "{";
          json += "  'statusCode': '500',";
          json += "  'data':null";
          json += "}";
        }
      
        res.json(json);  

        next();
      });
    })

    this.express.use('/', router)
  }
}

export default new App().express