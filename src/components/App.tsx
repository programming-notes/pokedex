import * as React from 'react';
export interface App { compiler: string; framework: string }

export const App = (props: App) => <h1>Hello from { props.compiler } and { props.framework}!</h1>;