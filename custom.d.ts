declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  // | string
  export default content
}
declare module "*.png" {
  const value: string
  export default value
}
