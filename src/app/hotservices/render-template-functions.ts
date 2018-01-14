export class RenderFunctionSource {
    constructor(public name: string, public source: string) {}

    getFunction() {
	return eval(`hotend => { ${this.source} }`);
    }
}

export const basicRenderer  = new RenderFunctionSource(
    'default',
    `
console.log(1);
console.log(2);
`
);
