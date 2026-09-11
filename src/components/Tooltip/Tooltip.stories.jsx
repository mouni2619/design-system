import { Flex } from "antd";
import { Star } from "lucide-react";

import { Tooltip } from "@components/Tooltip/Tooltip";
import { DEFAULT_TOOLTIP_ICON_POSITION } from "@components/constants";

// The four placements the design specifies. antd accepts twelve and already
// defaults to "top", so this list is only here to drive the grid and the control.
const TOOLTIP_PLACEMENTS = ["top", "right", "bottom", "left"];

// Drives the iconPosition control. The component reads the two values as
// literals, so this list exists only for the story.
const TOOLTIP_ICON_POSITIONS = ["start", "end"];

const CAPTION_CLASS = "caption text-secondary";
const TARGET_CLASS = "caption text-secondary border rounded px-2 py-1";

// The design shows the link without an underline.
const LINK_CLASS = "text-decoration-none";

// A forced-open tooltip sits ~32px above or below its target, so each row needs
// clearance on both sides or neighbouring rows overlap.
const GRID_CLASS = "py-5 my-5";

// The four content states from the design, in spec order.
const CONTENT_STATES = [
  { label: "plain text", extra: {} },
  { label: "icon at start", extra: { icon: Star, iconPosition: "start" } },
  { label: "icon at end", extra: { icon: Star, iconPosition: "end" } },
  { label: "with link", extra: {}, linked: true },
];

// The link is ordinary markup inside the title, not a prop of its own.
function stateProps(state, placement) {
  if (state.linked) {
    return {
      title: (
        <>
          Tooltip on{" "}
          <a className={LINK_CLASS} href="#">
            {placement}
          </a>
        </>
      ),
    };
  }
  return { title: `Tooltip on ${placement}`, ...state.extra };
}

// Storybook prints the whole render() tree. Keep just the component, and undo
// the way it serialises an icon component and the story's own target wrapper.
function transformSource(code) {
  const start = code.indexOf("<Tooltip");
  const end = code.lastIndexOf("</Tooltip>");
  const snippet = start === -1 || end === -1 ? code : code.slice(start, end + "</Tooltip>".length);
  const lines = snippet
    .replace(/icon=\{\{[\s\S]*?\}\}/g, "icon={Star}")
    .replace(/<Target[^>]*label="([^"]*)"[^>]*\/>/g, "<span>$1</span>")
    .split("\n");
  const indent = lines[lines.length - 1].match(/^\s*/)[0];
  return lines
    .map(function (line) {
      return line.startsWith(indent) ? line.slice(indent.length) : line;
    })
    .join("\n");
}

// antd attaches its hover handlers and its positioning ref to this element, so
// everything it passes down has to reach the DOM node.
function Target({ label = "", className = "", ...rest }) {
  return (
    <span {...rest} className={`${TARGET_CLASS} ${className}`.trim()}>
      {label}
    </span>
  );
}

function StateRow({ state = null }) {
  return (
    <Flex align="center" justify="space-around" gap="large" wrap className={GRID_CLASS}>
      {TOOLTIP_PLACEMENTS.map(function (placement) {
        return (
          <Tooltip key={placement} placement={placement} open {...stateProps(state, placement)}>
            <Target label={placement} />
          </Tooltip>
        );
      })}
    </Flex>
  );
}

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    title: "Tooltip on top",
    icon: Star,
    iconPosition: DEFAULT_TOOLTIP_ICON_POSITION,
  },
  argTypes: {
    placement: { control: "select", options: TOOLTIP_PLACEMENTS },
    iconPosition: {
      control: "inline-radio",
      options: TOOLTIP_ICON_POSITIONS,
      description: "Which side of the label the icon sits on.",
    },
    icon: {
      control: false,
      table: { type: { summary: "LucideIcon (e.g. Star, Info, CircleHelp)" } },
    },
    title: {
      control: "text",
      description:
        "This control only takes plain text. For a link, pass JSX in code — see the WithLink story.",
    },
    open: {
      control: "boolean",
      description: "Leave unset for hover. Set to pin the tooltip open.",
    },
    children: {
      control: false,
      description: "The trigger. Must be, or forward its props onto, a DOM element.",
    },
  },
  parameters: {
    docs: { source: { transform: transformSource } },
  },
  render: function (args) {
    return (
      <Flex justify="center" className={GRID_CLASS}>
        <Tooltip {...args}>
          <Target label="Hover me" />
        </Tooltip>
      </Flex>
    );
  },
};

export const Default = {};

export const WithLink = {
  render: function () {
    return (
      <Flex justify="center" className={GRID_CLASS}>
        <Tooltip
          open
          title={
            <>
              Tooltip on{" "}
              <a className="text-decoration-none" href="#">
                top
              </a>
            </>
          }
        >
          <Target label="Hover me" />
        </Tooltip>
      </Flex>
    );
  },
};

/** The only story that is not pinned open — hover these to see the real thing. */
export const Interactive = {
  render: function () {
    return (
      <Flex align="center" justify="space-around" gap="large" className={GRID_CLASS}>
        {CONTENT_STATES.map(function (state) {
          return (
            <Tooltip key={state.label} {...stateProps(state, TOOLTIP_PLACEMENTS[0])}>
              <Target label={state.label} />
            </Tooltip>
          );
        })}
      </Flex>
    );
  },
};

export const AllStates = {
  render: function () {
    return (
      <Flex vertical gap="large">
        {CONTENT_STATES.map(function (state) {
          return (
            <Flex key={state.label} vertical gap="small">
              <small className={CAPTION_CLASS}>{state.label}</small>
              <StateRow state={state} />
            </Flex>
          );
        })}
      </Flex>
    );
  },
};
