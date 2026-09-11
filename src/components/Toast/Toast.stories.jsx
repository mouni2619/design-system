import { Flex } from "antd";
import { useState } from "react";

import { Button } from "@components/Button/Button";
import { Toast } from "@components/Toast/Toast";
import { TOAST_STATUSES } from "@components/constants";

const CAPTION_CLASS = "caption text-secondary";

const TOAST_STATES = [
  { label: "title + description + X", description: "Toast description", showInfoIcon: false, closable: true },
  { label: "title + description + i + X", description: "Toast description", showInfoIcon: true, closable: true },
  { label: "title + description", description: "Toast description", showInfoIcon: false, closable: false },
  { label: "title + description + i", description: "Toast description", showInfoIcon: true, closable: false },
  { label: "title + X", description: null, showInfoIcon: false, closable: true },
  { label: "title", description: null, showInfoIcon: false, closable: false },
];

function ToastPlayground({ initialState = 0, initialStatus = "primary" }) {
  const [stateIndex, setStateIndex] = useState(initialState);
  const [status, setStatus] = useState(initialStatus);
  const [visible, setVisible] = useState(true);
  const state = TOAST_STATES[stateIndex];

  function selectState(index) {
    setStateIndex(index);
    setVisible(true);
  }

  function selectStatus(nextStatus) {
    setStatus(nextStatus);
    setVisible(true);
  }

  return (
    <Flex vertical gap="large">
      <Flex vertical gap="small">
        <small className={CAPTION_CLASS}>states</small>
        <Flex gap="small" wrap>
          {TOAST_STATES.map(function (item, index) {
            return (
              <Button
                key={item.label}
                size="small"
                type={index === stateIndex ? "primary" : "secondary"}
                variant={index === stateIndex ? "filled-dark" : "outlined"}
                onClick={function () {
                  selectState(index);
                }}
              >
                {item.label}
              </Button>
            );
          })}
        </Flex>
      </Flex>
      <Flex vertical gap="small">
        <small className={CAPTION_CLASS}>status</small>
        <Flex gap="small" wrap>
          {TOAST_STATUSES.map(function (item) {
            return (
              <Button
                key={item}
                size="small"
                type={item === status ? "primary" : "secondary"}
                variant={item === status ? "filled-dark" : "outlined"}
                onClick={function () {
                  selectStatus(item);
                }}
              >
                {item}
              </Button>
            );
          })}
        </Flex>
      </Flex>
      {!visible ? (
        <Button
          size="small"
          onClick={function () {
            setVisible(true);
          }}
        >
          Reopen toast
        </Button>
      ) : null}
      {visible ? (
        <Toast
          title="Toast title"
          description={state.description}
          status={status}
          showInfoIcon={state.showInfoIcon}
          closable={state.closable}
          onClose={function () {
            setVisible(false);
          }}
        />
      ) : null}
    </Flex>
  );
}

export default {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    title: "Toast title",
    description: "Toast description",
    status: "primary",
    showInfoIcon: false,
    closable: true,
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    status: { control: "inline-radio", options: TOAST_STATUSES },
    showInfoIcon: { control: "boolean" },
    closable: { control: "boolean" },
    onClose: { control: false },
  },
};

export const Default = {};

export const States = {
  render: function () {
    return <ToastPlayground />;
  },
};

export const Statuses = {
  render: function () {
    return <ToastPlayground initialState={1} />;
  },
};
