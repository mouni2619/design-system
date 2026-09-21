import { Steps } from "antd";
import { Check } from "lucide-react";

import "@components/Stepper/Stepper.css";

import { DEFAULT_STEPPER_CURRENT, DEFAULT_STEPPER_ORIENTATION, DEFAULT_STEPPER_SIZE, STEPPER_ICON_SIZES } from "@components/Stepper/constants";

/**
 * A run of steps, horizontal or vertical, with the current one picked out.
 *
 * `items` are `{ title, subtitle, icon }`: `subtitle` is the grey second line
 * under the title, `icon` what the circle shows instead of the step's number —
 * a lucide component, or a letter such as `"A"`. Steps before `current` are
 * done and show a check whatever they held; the rest are still to come.
 *
 * ```jsx
 * <Stepper
 *   current={1}
 *   orientation="vertical"
 *   items={[
 *     { title: "Account", subtitle: "Your details" },
 *     { title: "Payment", subtitle: "Card or bank" },
 *     { title: "Review", icon: "R" },
 *     { title: "Done", icon: PartyPopper },
 *   ]}
 * />
 * ```
 */
export function Stepper({
  items = [],
  current = DEFAULT_STEPPER_CURRENT,
  orientation = DEFAULT_STEPPER_ORIENTATION,
  size = DEFAULT_STEPPER_SIZE,
  className = "",
  ...rest
}) {
  // One step of the type scale per size — caption, body, h6 — for the circle,
  // the title and the subtitle. `.h6` is a heading class, so its bottom margin
  // is taken back off.
  let textClass = "body";
  if (size === "small") {
    textClass = "caption";
  } else if (size === "large") {
    textClass = "h6 mb-0";
  }
  const iconSize = STEPPER_ICON_SIZES[size] || STEPPER_ICON_SIZES[DEFAULT_STEPPER_SIZE];

  // AntD has no large: it is medium with the circle grown by Stepper.css.
  const sizeClass = size === "large" ? "stepper-large" : "";
  const antSize = size === "small" ? "small" : "medium";

  // A step still to come is an outlined grey circle with grey text; the
  // current step and the ones done are solid primary. Only the current title
  // is coloured, and only the rail leaving a finished step.
  const stepItems = items.map(function (item, index) {
    const isDone = index < current;
    const isCurrent = index === current;
    return {
      title: item.title,
      content: item.subtitle,
      classNames: {
        icon:
          isDone || isCurrent
            ? "bg-primary border border-primary text-white"
            : "bg-secondary-emp-2 border border-secondary-emp-5 text-secondary-emp-8",
        title: isCurrent ? "text-primary" : "text-secondary-emp-8",
        rail: isDone ? "border-primary" : "border-secondary-emp-5",
      },
    };
  });

  // What goes in the circle: a check once the step is done, else its own icon
  // or letter, else antd's number.
  function renderIcon(iconNode, { index, item, components: { Icon: StepIcon } }) {
    const { icon: IconComponent = null } = items[index];

    if (item.status === "finish") {
      return (
        <StepIcon>
          <Check size={iconSize} />
        </StepIcon>
      );
    }
    if (typeof IconComponent === "string") {
      return <StepIcon>{IconComponent}</StepIcon>;
    }
    if (IconComponent) {
      return (
        <StepIcon>
          <IconComponent size={iconSize} />
        </StepIcon>
      );
    }
    return iconNode;
  }

  return (
    <Steps
      className={`stepper ${sizeClass} ${className}`}
      items={stepItems}
      current={current}
      orientation={orientation}
      titlePlacement="vertical"
      size={antSize}
      iconRender={renderIcon}
      classNames={{
        // Circle and text 8px apart, in either orientation; subtitle 4px
        // under the title. The title is the medium weight, the rest regular.
        itemWrapper: "gap-2",
        itemIcon: `${textClass} fw-normal`,
        itemTitle: `${textClass} fw-medium`,
        itemContent: `${textClass} fw-normal text-secondary mt-1`,
      }}
      {...rest}
    />
  );
}

export default Stepper;
