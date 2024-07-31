import React from "react";

// [slug]
// [...slug] // any number of slug params e.g. /products/grocery/bread/loaves
// [...slug] // optional slugs e.g. 0 therefore only /products

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string }; // /products?sortOrder=this
}

const page = ({ params: { slug }, searchParams: { sortOrder } }: Props) => {
  return (
    <div>
      <h1>Products</h1>
      Product page {slug} sortOrder {sortOrder}
    </div>
  );
};

export default page;
