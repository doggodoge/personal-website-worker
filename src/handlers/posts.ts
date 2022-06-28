import { Env } from "..";

async function AllPosts(request: Request, env: Env) {
    const newKey = crypto.randomUUID().toString()
    env.posts.put()
}
