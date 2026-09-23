import { Alert as AntAlert } from "antd";
import {
  ALERT_ANT_TYPES,
  DEFAULT_ALERT_TYPE,
} from "@components/Alert/constants";
import "./Alert.scss";

export function Alert({
  type = DEFAULT_ALERT_TYPE,
  message,
  description = null,
  showIcon = false,
  closable = false,
  hasDescription = true,
  icon,
  className = "",
  ...rest
}) {
  const activeDescription = hasDescription ? description : null;
  const title = activeDescription ? (
    <span className="fw-semibold">{message}</span>
  ) : (
    message
  );

  return (
    <AntAlert
      type={ALERT_ANT_TYPES[type] || ALERT_ANT_TYPES[DEFAULT_ALERT_TYPE]}
      title={title}
      description={activeDescription}
      showIcon={showIcon}
      icon={icon}
      closable={closable}
      className={["ds-alert", `ds-alert--${type}`, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    />
  );
}

export default Alert;
