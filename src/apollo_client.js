import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://moral-glowworm-99.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret' : 'mNSJ7rSyW6Uk4bO1NN53JpJi38nb9exuqPxwJT44XJNBY6zcMgD5viiET4CpGD02'
    }
})

export default client;