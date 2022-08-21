const { ApolloServer, gql} = require('apollo-server');

const books = [
    {
        title: 'Harry Potter',
        author: 'じぇけろ'
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    }
];

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => books
    }
};

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen().then(({ url }) => {
    console.log(`Server is listening at ${url}`);
});
