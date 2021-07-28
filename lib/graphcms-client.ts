import { GraphQLClient, gql } from 'graphql-request';

const graphcmsUrl = process.env.NEXT_PUBLIC_GRAPHCMS_URL;

if(!graphcmsUrl){
    throw new Error('NEXT_PUBLIC_GRAPHCMS_URL is not defined');
}

export default new GraphQLClient(graphcmsUrl);

export {gql};