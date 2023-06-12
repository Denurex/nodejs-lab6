import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import tourRouter from './resources/tour/tour.router';
import scheduleRouter from './resources/schedule/schedule.router';
import priceRouter from './resources/price/price.router';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const _dirname = path.resolve()

app.set('view engine', 'ejs');
app.set('views', path.resolve(_dirname, 'src/static'));

app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.render(path.resolve(_dirname, 'src/static', 'main.ejs'));
    return;
  }
  next();
});

app.use('/tours', tourRouter);
app.use('/schedules', scheduleRouter);
app.use('/prices', priceRouter);

export default app;