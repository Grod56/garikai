import { neon } from "@neondatabase/serverless";

const neonDB = neon(`${process.env.DATABASE_URL}`);

export default neonDB;
