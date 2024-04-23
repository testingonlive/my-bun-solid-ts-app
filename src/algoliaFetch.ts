import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

const client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
const helper = algoliasearchHelper(client, 'instant_search');

const algoliaFetch = (query: string) => {
    return helper.searchOnce({query})
}

export default algoliaFetch;