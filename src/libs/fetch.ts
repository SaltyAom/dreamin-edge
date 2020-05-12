export default async (...args: string[]) => {
    if (typeof window === "undefined") return

    const fetch = await require("isomorphic-unfetch")

    let response = await fetch(args[0], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify({
            operationName: args[1],
            query: args[2],
            variables: []
        })
    })

    let data = await response.json()

    return data.data[args[1]]
}
