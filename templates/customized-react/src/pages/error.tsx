import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="bg-gray-100 screen center flex-col">
      <h1 className="text-4xl font-bold">404 ERROR</h1>
      {error ? (
        <p className="text-lg font-bold">{(error as { message: string }).message}</p>
      ) : (
        <p className="text-lg font-bold">Page not found</p>
      )}
    </div>
  );
};
