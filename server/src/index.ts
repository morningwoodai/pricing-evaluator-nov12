import express, { type Request, type Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.send('<h1>Pricing Evaluator API</h1><p>Status: running ✅</p>');
});

app.get('/api/ping', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

type EvalInput = { monthlyPrice: number; cac: number; churn: number };
type EvalOutput = { ltv: number; ltvToCac: number; paybackMonths: number };

app.post('/api/evaluate', (req: Request, res: Response) => {
  const { monthlyPrice, cac, churn } = req.body as Partial<EvalInput>;

  // Basic validation
  if (
    typeof monthlyPrice !== 'number' || isNaN(monthlyPrice) || monthlyPrice <= 0 ||
    typeof cac !== 'number' || isNaN(cac) || cac <= 0 ||
    typeof churn !== 'number' || isNaN(churn) || churn <= 0 || churn >= 1
  ) {
    return res.status(400).json({ error: 'Invalid input. Expect { monthlyPrice>0, cac>0, 0<churn<1 }' });
  }

  // Simple model
  const ltv = monthlyPrice / churn;
  const ltvToCac = ltv / cac;
  const paybackMonths = cac / monthlyPrice;

  const result: EvalOutput = { ltv, ltvToCac, paybackMonths };
  res.json(result);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});
