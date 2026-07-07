**Flash:** is a special area of the session used for storing messages . Messages are written to the flash and cleared after begind displayed once to the user.
Flash is typically used in combination with redirects , ensure that the message is available to the next page that is to be rendered.

Flash messages are stored in the session .

First setup session with cookie-parser and session middleware , then use flash.

**res.locals** : 

* Use this property to set variables accessible in templates rendered with res.render. The variables set on res.locals are available within a single request-response cycle, and will not be shared between requests.