import React from "react";

// [slug]
// [...slug] // any number of slug params e.g. /products/dairy/milk
// [...slug] // optional slugs e.g. 0 therefore only /products

interface Props {
  params: { slug: string[] };
}

const page = ({ params: { slug } }: Props) => {
  return <div>Product page {slug}</div>;
};

export default page;
