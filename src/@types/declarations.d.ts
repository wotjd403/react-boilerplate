declare module '*.scss' {
  const context: { [className: string]: string };
  export = context;
}
declare module '*.svg' {
  import React = require('react');

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module 'react-markup';
declare module '*.webp';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
