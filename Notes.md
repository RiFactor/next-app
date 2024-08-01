## General

### Special files

page, layout, loading, not-found, error (can also create error files on diff routes for custom errors)
global-error.tsx // for global (root) layout errors - won't be captured in error.tsx file

page (display markup to user) OR route (handle HTTP request) file in a folder - not both.
'api' folder name - not required but good practise

### Markdown

bash / shell / js / ts / tsx

### Shortcuts

clg // console log
rafce // arrow fn
div.mb-3>input+label // short-hand

### Syntax

&apos; // '

```ts
<p>The requested page doesn't exist</p>
<p>The requested page doesn&apos;t exist</p>
```

### React Dev Tools

#### Components

search 'suspense'
click clock icon to show loading state

```ts
// streaming HTML content
<Suspense fallback={<p>Loading...</p>}>
// <Suspense fallback={<CustomLoadingDisplay/>}>
// can pass a component in
  <UsersTable sortOrder={sortOrder} />
</Suspense>
```

Global
layout.tsx

```ts
<Suspense fallback={<"Loading...">}>
  <main className="p-5">{children}</main>
</Suspense>
```

## Learning Notes

### Fundamentals - Static & Dynamic Rendering

Rendering: client / server
server: static (build) / dynamic (request)

If data is cached, react will cache it and not update on refresh // NB diff b'ween this and network request

###

[id] // param routes - arbitrary id name (order matters)
[[]] // filename - optional param

### Link - Navigation

1. Only downloads new content from target page - doesn't redownload shared sections e.g. navbar already downloaded
2. (Build mode) - Pre-fetches links in the viewport
3. Caches pages on the client (session only - redownloads on refresh)
