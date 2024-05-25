import { cn } from "../../lib/utils"

function Skeleton(props) {
  var className = props.className;
  var otherProps = Object.assign({}, props);
  delete otherProps.className;

  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...otherProps}
    />
  )
}

export { Skeleton }
