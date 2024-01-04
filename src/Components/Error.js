import { useRouteError } from "react-router-dom";
const Error = () => {
  const errorInfo = useRouteError();
  console.log(errorInfo);
  return (
    <div>
      <h1>
        {errorInfo.status} {errorInfo.statusText}
      </h1>
      <h2>{errorInfo.data}</h2>
    </div>
  );
};

export default Error;
