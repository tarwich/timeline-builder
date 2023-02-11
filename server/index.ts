import * as express from 'express';
import { createServer } from 'vite';
import { Config } from './config';

async function main() {
  const config = new Config();

  const app = express();

  // Make a vite server for development that will serve the client and reload
  // the browser on changes.
  const vite = await createServer({
    server: {
      middlewareMode: true,
    },
  });

  app.use(vite.middlewares);

  app.get('/hello', (req, res) => {
    res.send('Hello World');
  });

  app.listen(config.PORT, () => {
    console.log(
      `Server started on port ${config.PORT}: http://localhost:${config.PORT}`
    );
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
