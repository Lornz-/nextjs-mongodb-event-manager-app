# Event Manager Application

## Demo

[https://nextjs-mongodb-events-manager-app.vercel.app/events](https://nextjs-mongodb-events-manager-app.vercel.app/events)

## About the app

An event manager application with [Next.js](https://nextjs.org/), [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/docs/) and a minimalist UI based on [Styled Components 💅](https://styled-components.com/docs).

### Features

- MVC Architecture
- Full API Routes implementation and Serverless ready
- [Middleware pattern](https://www.patterns.dev/posts/mediator-pattern), compatible with Express ecosystem, powered by [next-connect](https://github.com/hoangvvo/next-connect#readme)
- Clean minimalist UI based on Styled Components

### Stack

**Client:** React 18, Next.js 13, Styled Components 6

**Server:** Next.js 13, Node 18, Mongoose 7

**Development:** Mongodb Memory Server, Jest, React Testing Library, MSW, ESLint, Prettier

## Configuration

### Step 1. Get the connection string of your MongoDB server

In the case of MongoDB Atlas, it should be a string like this:

```
mongodb+srv://<username>:<password>@my-project-abc123.mongodb.net/test?retryWrites=true&w=majority
```

For more details, follow this [MongoDB Guide](https://docs.mongodb.com/guides/server/drivers/) on how to connect to MongoDB.

### Step 2. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then set each variable on `.env.local`:

- `MONGODB_URI` should be the MongoDB connection string you got from step 1.

### Step 3. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! 🚀✨

## License

[MIT](https://choosealicense.com/licenses/mit/)
