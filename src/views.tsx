import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="color-scheme" content="light dark" />
      <title>Microblog</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css" />
    </head>
    <body>
      <main className="container">{props.children}</main>
    </body>
  </html>
)

export const SetupForm: FC = () => (
  <>
    <h1>Set up your microblog</h1>
    <form method="post" action="/setup">
      <fieldset>
        <label>
          Username{' '}
          <input type="text" name="username" required maxLength={50} pattern="^[a-z0-9_\-]+$" />
        </label>
      </fieldset>
      <input type="submit" value="Setup" />
    </form>
  </>
)
