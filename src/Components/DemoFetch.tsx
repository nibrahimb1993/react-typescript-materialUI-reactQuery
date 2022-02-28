import { Button } from "@mui/material";
import { useQuery } from "react-query";
import { request, RequestType } from "../Helpers/axiosManager";

type R = {
  data: {
    page: Number;
    per_page: Number;
    total: Number;
    total_pages: Number;
    data: [
      {
        id: Number;
        email: String;
        first_name: String;
        last_name: String;
        avatar: String;
      }
    ];
    support: {
      url: String;
      text: String;
    };
  };
  status: Number;
  statusText: String;
  headers: {
    "cache-control": String;
    "content-type": String;
  };
  config: {
    transitional: {
      silentJSONParsing: Boolean;
      forcedJSONParsing: Boolean;
      clarifyTimeoutError: Boolean;
    };
  };
};
const Demo = () => {
  const requestPayload: RequestType = {
    method: "GET",
    path: ``,
    params: `page=2`,
  };
  const { data, refetch } = useQuery(
    "demoFetch",
    () => request<typeof requestPayload, R>(requestPayload),
    {
      onSuccess: ({ data }) => {
        console.log({ perpage: data.per_page });
      },
      onError: (err) => {
        console.log({ err });
      },
    }
  );
  console.log({ data });

  return (
    <Button
      onClick={() => {
        refetch();
      }}
    >
      fetch
    </Button>
  );
};
export default Demo;
