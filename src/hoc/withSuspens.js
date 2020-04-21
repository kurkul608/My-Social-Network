import React, { Suspense } from "react";

export let withOutSuspense = (Component) => {
  return () => {
    return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Component  />
      </Suspense>
    );
  };
};
