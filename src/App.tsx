import { createResource, createSignal, Show, For } from "solid-js";

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
          variant="destructive"
        >
          count is {count()}!!
        </Button>
        <Show when={!algoliaRes.loading} fallback={<span>loading...</span>}>
          <pre>
            {JSON.stringify(
              algoliaRes()?.hits.map((hit) => hit.name),
              null,
              2
            )}
          </pre>
        </Show>
      </div>

      <Show when={!algoliaRes.loading} fallback={<span>loading...</span>}>
        <Carousel
          opts={{
            align: "start",
          }}
          class="w-full max-w-sm"
        >
          <CarouselContent>
            <For each={algoliaRes()?.hits}>
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
            </For>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Show>
    </>
  );
}

export default App;
