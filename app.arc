@app
begin-react-auth0-shell

@http
get /
get /callback
get /logout
get /todos
post /todos
post /todos/:id

# @aws
# profile default
# region us-west-1

@tables
  data
  scopeID *String
  dataID **String
  ttl TTL