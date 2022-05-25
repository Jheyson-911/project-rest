import { Pool } from "pg";
import { ssl } from "pg/lib/defaults";

export const pool = new Pool({
    user: "ndhbxcbiqwbmdb",
    host: "ec2-34-201-95-176.compute-1.amazonaws.com",
    database: "d51ab563fjah04",
    password: "4f30331c08886cb3e5adc23cacfe7c23016d643dd9d46b10fac1918f17173df1",
    port: 5432,
    ssl:{rejectUnauthorized:false}
});
