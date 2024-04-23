import { createResource, createSignal } from "solid-js";

import { Button } from "~/components/ui/button";

import algoliaFetch from "./algoliaFetch";

type AppProps = {
  appName: string;
};

function App(props: AppProps) {
  const [count, setCount] = createSignal(0);
  const [algoliaRes] = createResource(() => props.appName, algoliaFetch);

  return (
    <>
      <h1>Vite + Solid</h1>
      <h2>{props.appName}</h2>
      <div class="card">
        <Button
          onClick={() => setCount((count) => count + 1)}
          variant="outline"
        >
          count is {count()}!!!
        </Button>
        {algoliaRes.loading ? (
          <span>loading...</span>
        ) : (
          <pre>
            {JSON.stringify(
              algoliaRes()?.content._rawResults[0].hits.map((hit) => hit.name),
              null,
              2
            )}
          </pre>
        )}
      </div>
    </>
  );
}

export default App;
