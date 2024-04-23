import { createResource, createSignal, Index } from "solid-js";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";

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

      {algoliaRes.loading ? (
        <span>loading...</span>
      ) : (
        <Carousel
          opts={{
            align: "start",
          }}
          class="w-full max-w-sm"
        >
          <CarouselContent>
            <Index each={algoliaRes()?.content._rawResults[0].hits}>
              {(hit) => (
                <CarouselItem class="md:basis-1/2 lg:basis-1/3">
                  <div class="p-1">
                    <Card>
                      <CardContent class="flex aspect-square items-center justify-center p-6">
                        <span class="text-3xl font-semibold">{hit.name}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              )}
            </Index>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )}
    </>
  );
}

export default App;
