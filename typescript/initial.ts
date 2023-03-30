// without tsconfig it will be a mess

async function hello(first: string, second: string) {
    return "Hello " + first + " and " + second;
}

hello("World", "Tim").then((response) => console.log(response));
