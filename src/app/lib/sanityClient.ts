import { createClient } from "next-sanity"




export const client = createClient({
    token: process.env.SANITY_ACCESS_TOKEN,
    apiVersion: "2023-08-31", 
    dataset: "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true

})