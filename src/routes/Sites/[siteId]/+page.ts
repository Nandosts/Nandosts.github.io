import { error } from "@sveltejs/kit";

type TSiteShowParams = {
  params: {
    siteId: string;
  };
};
export function load({ params }: TSiteShowParams) {
  if (params.siteId) {
    return {
      id: params.siteId,
    };
  }

  throw error(404, "Not found");
}

export const prerender = true;
