import { z } from "zod";

const schema = z.object({
  // NB - do not add ID b/c client not providing
  name: z.string().min(3),
  price: z.number().min(1).max(100),
});

export default schema;
