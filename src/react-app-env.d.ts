/// <reference types="react-scripts" />
declare global {
    interface Window {
        wx: any;
    }
}

declare namespace JSX {
    interface IntrinsicElements {
        'wx-open-launch-weapp': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            username: string;
            path: string;
        };
    }
}