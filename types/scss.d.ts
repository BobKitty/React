declare module '*.scss' {
    const stylesScss: { [key: string]: string };
    export = stylesScss;
}

declare module '*.css' {
    const styles: { [key: string]: string };
    export = styles;
}