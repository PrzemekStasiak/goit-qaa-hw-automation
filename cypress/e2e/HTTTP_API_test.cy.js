// test is api return 200 kode
describe ('httpbin tests', () =>{
    it ('response code should be 200', () => {
        cy.request('https://httpbin.org').then(response =>{
            const status = response.status;
            assert.equal(200, status);
        })
    })
})

//test is api return difrent code than 200 on no existing page
describe ('httpbin tests enter non existing site', () =>{
    const request = {
        url:'https://httpbin.org/non-existing-url',
        failOnStatusCode: false
    };

    it ('response code should be 404', () => {
        cy.request(request).then(response =>{
            const status = response.status;
            assert.equal(404, status);
        })
    })
})
//test POST method
describe ('httpbin tests POST method', () =>{
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    };
    it ('response code should be 200', () => {
        cy.request(request).then(response =>{
            assert.equal(200, response.status);
        })
    })
})
//test get method on PST link response should be 405
describe ('httpbin tests GET method on POST url ', () =>{
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    };
    it ('response code should be 405', () => {
        cy.request(request).then(response =>{
            assert.equal(405, response.status);
        })
    })
})
// test POST sending bodyData response should be 200 and bodydata not equal to sended data
describe ('httpbin tests sending and recieving body', () =>{
    const bodyData = {
        bodyKey: "bodyValue"
    };

    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyData,
        failOnStatusCode: false
    };

    it ('complex post test', () => {
        cy.request(request).then(response =>{
            assert.equal(200, response.status);
            assert.notStrictEqual(bodyData, response.body.data);
        })
    })
})
// test API to send key value
describe('httpbin tests sending key', () => {
    const request = {
      url: 'https://httpbin.org/get',
      qs: {
        "key": "value"
      },
      failOnStatusCode: false
    };
  
    it('response code should be 200 and recievie sended key', () => {
      cy.request(request).then(response => {
        assert.equal("value", response.body.args.key);
      });
    });
  });
//Test GET method , is custome header is called back from server
  describe('httpbin tests is custom header is recieved from server', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        "customHeader": "customValue"
      },
      failOnStatusCode: false
    };
  
    it('test that header set correctly', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("customValue", response.requestHeaders.customHeader);
      });
    });
  });

  describe('httpbin tests is custom header user agent is recieved from server and set corectly', () => {
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'user-agent': 'My test user-agent'
      },
      failOnStatusCode: false
    };
  
    it('test that user-agent set correctly', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("My test user-agent", response.requestHeaders['user-agent']);
      })
    })
  })

  describe('httpbin coockie tests', () => {
  
    const request = {
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'Cookie': 'cookieName=cookieValue'
      },
      failOnStatusCode: false
    };
  
    it('test send cookie', () => {
      cy.request(request).then(response => {
        assert.equal(200, response.status);
        assert.equal("cookieName=cookieValue", response.requestHeaders['Cookie']);
      })
    })
  })

  describe('httpbin tests is random ID is hadlet properly with server 10 times', () => {

    it('test random ids check response status', () => {
      for(let i = 0; i < 10; i++) {
        const randomId = cy.getRandomInt(10000000);// function described in command.js
  
        const request = {
          url: 'https://httpbin.org/headers',
          id: randomId,
          
        }
  
        cy.request(request).then(response => {
          assert.isTrue(response.status == 200)
        })
      } 
    })
   
  })

  describe('httpbin tests is random id response duration is less than 500ms', () => {

    it('test random ids response time', () => {
      for(let i = 0; i < 10; i++) {
        const randomId = cy.getRandomInt(10000000);
  
        const request = {
          url: 'https://httpbin.org/headers',
          id: randomId,
          failOnStatusCode: false
        }
        
        cy.request(request).then(response => {
            assert.isTrue(response.duration <= 500)
        })
    } 
  })
})
   
  