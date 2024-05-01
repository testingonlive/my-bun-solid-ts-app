const cssPromise = import.meta.env.PROD
  ? import("./index.css?inline")
  : import("./index.css?url");

const { default: css } = await cssPromise;

function Css() {
  // import.meta.env.PROD isn't going to change, so we can safely ignore the eslint warning.
  // eslint-disable-next-line solid/components-return-once
  return import.meta.env.PROD ? (
    <style>{css}</style>
  ) : (
    <link rel="stylesheet" type="text/css" href={css} />
  );
}

export default Css;
