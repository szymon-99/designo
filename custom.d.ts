declare module "*.svg" {
  const content: string
  // | React.FunctionComponent<React.SVGAttributes<SVGElement>>
  // | string
  export default content
}
declare module "*.png" {
  const value: string
  export default value
}
