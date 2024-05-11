import { useParams } from "react-router-dom";

export const CustomPage = () => {
  // Following is how you can get the parameter from the URL
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-gray-100 screen center">
      <h1 className="text-2xl font-bold">Custom Page {id}</h1>
    </div>
  );
};
