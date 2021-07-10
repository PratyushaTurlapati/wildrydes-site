const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Welcome to my World!'));
app.get('/', (req, res) => res.send('Hello Welcome to our project!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
