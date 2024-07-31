### Fundamentals - Static & Dynamic Rendering

Rendering: client / server
server: static (build) / dynamic (request)

If data is cached, react will cache it and not update on refresh // NB diff b'ween this and network request

###

[[]] // filename - optional param

### Link - Navigation

1. Only downloads new content from target page - doesn't redownload shared sections e.g. navbar already downloaded
2. (Build mode) - Pre-fetches links in the viewport
3. Caches pages on the client (session only - redownloads on refresh)
