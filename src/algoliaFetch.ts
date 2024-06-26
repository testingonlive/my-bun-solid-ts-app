import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const index = client.initIndex('instant_search');

type AlgoliaResponse = {
    name: string;
}

const algoliaFetch = (query: string) => {
    return index.search<AlgoliaResponse>(query)
}

export default algoliaFetch;